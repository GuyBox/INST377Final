var carbonSutraKey = import.meta.env.VITE_CARBON_SUTRA_API_KEY;
var openRouteServiceKey = import.meta.env.VITE_OPENROUTE_SERVICE_API_KEY;
var supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
var supabaseKey = import.meta.env.VITE_SUPABASE_KEY;



async function geocodeAddress(address) {
    var encodedAddress = encodeURIComponent(address);
    var url = "https://nominatim.openstreetmap.org/search?q=" + encodedAddress + "&format=json&limit=1";
    
    var response = await fetch(url, {
        method: "GET",
        headers: {
            "User-Agent": "CarbonFootprintTracker/1.0"
        }
    });
    
    var data = await response.json();
    
    return {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
        displayName: data[0].display_name
    };
}



async function calculateRoute(startCoords, endCoords, transportMode) {
    if (transportMode === undefined) {
        transportMode = "driving-car";
    }
    
    var url = "https://api.openrouteservice.org/v2/directions/" + transportMode;
    
    var requestBody = {
        coordinates: [
            [startCoords.longitude, startCoords.latitude],
            [endCoords.longitude, endCoords.latitude]
        ]
    };
    
    var response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": openRouteServiceKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    });
    
    var data = await response.json();
    var route = data.routes[0];
    var distanceKm = (route.summary.distance / 1000).toFixed(2);
    var durationMin = (route.summary.duration / 60).toFixed(0);
    
    return {
        distance: distanceKm,
        duration: durationMin,
        geometry: route.geometry,
        summary: route.summary
    };
}



async function calculateCarbonFootprint(distanceKm, transportMode) {
    if (transportMode === "cycling-regular" || transportMode === "foot-walking") {
        return {
            carbonKg: "0.00",
            carbonLbs: "0.00",
            carbonMt: "0.0000"
        };
    }
    
    var vehicleType = "Car-Type-LowerMedium";
    var url = "https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_type";
    
    var requestBody = new URLSearchParams({
        vehicle_type: vehicleType,
        fuel_type: "petrol",
        distance_value: distanceKm,
        distance_unit: "km",
        include_wtt: "N"
    });
    
    var response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-rapidapi-host": "carbonsutra1.p.rapidapi.com",
            "x-rapidapi-key": carbonSutraKey
        },
        body: requestBody.toString()
    });
    
    var responseData = await response.json();
    var data = responseData.data;
    
    return {
        carbonKg: data.co2e_kg.toFixed(2),
        carbonLbs: data.co2e_lb.toFixed(2),
        carbonMt: data.co2e_mt.toFixed(4)
    };
}



async function getCarbonHistory(userId) {
    if (userId === undefined) {
        userId = null;
    }
    
    var url = supabaseUrl + "/rest/v1/carbon_calculations";
    
    if (userId) {
        url += "?user_id=eq." + userId;
        url += "&order=created_at.desc&limit=10";
    } else {
        url += "?order=created_at.desc&limit=10";
    }
    
    var response = await fetch(url, {
        method: "GET",
        headers: {
            "apikey": supabaseKey,
            "Authorization": "Bearer " + supabaseKey,
            "Content-Type": "application/json"
        }
    });
    
    var data = await response.json();
    return data;
}



async function saveCarbonCalculation(calculationData) {
    var url = supabaseUrl + "/rest/v1/carbon_calculations";
    
    var requestBody = {
        start_address: calculationData.startAddress,
        end_address: calculationData.endAddress,
        distance_km: calculationData.distanceKm,
        transport_mode: calculationData.transportMode,
        carbon_kg: calculationData.carbonKg,
        carbon_lbs: calculationData.carbonLbs,
        created_at: new Date().toISOString()
    };
    
    var response = await fetch(url, {
        method: "POST",
        headers: {
            "apikey": supabaseKey,
            "Authorization": "Bearer " + supabaseKey,
            "Content-Type": "application/json",
            "Prefer": "return=representation"
        },
        body: JSON.stringify(requestBody)
    });
    
    var data = await response.json();
    return data;
}



async function getCompleteTripData(startAddress, endAddress, transportMode) {
    if (transportMode === undefined) {
        transportMode = "driving-car";
    }
    
    var startCoords = await geocodeAddress(startAddress);
    var endCoords = await geocodeAddress(endAddress);
    var routeData = await calculateRoute(startCoords, endCoords, transportMode);
    var carbonData = await calculateCarbonFootprint(routeData.distance, transportMode);
    
    await saveCarbonCalculation({
        startAddress: startAddress,
        endAddress: endAddress,
        distanceKm: routeData.distance,
        transportMode: transportMode,
        carbonKg: carbonData.carbonKg,
        carbonLbs: carbonData.carbonLbs
    });
    
    return {
        startLocation: {
            address: startAddress,
            coords: startCoords
        },
        endLocation: {
            address: endAddress,
            coords: endCoords
        },
        route: routeData,
        carbon: carbonData
    };
}

export { geocodeAddress, calculateRoute, calculateCarbonFootprint, getCarbonHistory, saveCarbonCalculation, getCompleteTripData };