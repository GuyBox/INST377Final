import React from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CarbonChart({carbonData}) {
    var data = {
        labels: ["Kilograms", "Pounds", "Metric Tons"],
        datasets: [
            {
                label: "Carbon Emissions",
                data: [carbonData.carbonKg, carbonData.carbonLbs, carbonData.carbonMt * 1000],
                backgroundColor: "#1e491a"
            }
        ]
    };

    var options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Carbon Emissions Breakdown"
            }
        }
    };

    return <Bar data = {data} options = {options} />;
}

export default CarbonChart;