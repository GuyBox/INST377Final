Carbon Emission Google Maps

Like google maps but for carbon emission. Provides the estimated carbon emmisions when travelling between two points.
The website is not optimized for handheld devices and is only optimized for desktop/labtop browsers.

VERCEL DEPLOYMENT: https://inst-377-final-bja6.vercel.app/

# DEVELOPER MANUAL

## List of dependencies

    "dependencies": {
    "chart.js": "^4.5.1",
    "leaflet": "^1.9.4",
    "react": "^19.2.0",
    "react-chartjs-2": "^5.3.1",
    "react-dom": "^19.2.0",
    "react-leaflet": "^5.0.0",
    "react-router-dom": "^7.11.0",
    "vite": "^7.2.2",
    "@vitejs/plugin-react": "^5.1.0"

}

## Installation:

1.  npm install - Intall react, react dom, react router dom, chart.js, react, react-chartjs-2, Leaflet and react-leaflet, vite.
2.  Create a file called .env.example to hold a template for a file you then create called .env
3.  Add .env to .gitignore and then add api keys to .env
4.  Setup Supabase Database and connect public key and url to your .env file
5.  Enter the command rpm run dev

## API Endpoints

1.  OpenStreetMap Nominatim
    - Method: Get
      - Purpose Convert address to GPS Coordiantes
2.  OpenRouteService
    - Method: POST
      - Calculate route distance and duration
3.  CarbonSutra
    - Method: Post
      - Purpose Calculate carbon emissions
4.  Supabase
    - Method: GET
      - Save new calculations
    - Method: POST
      - Save new calculations

## Known Bugs and NEEDED improvements

- No error handling
- Mobile support
- Map markers are inconsistant
- RLS

## ROAD MAP

- Add route optimization
- Add more transportation modes

## File Structure

inst377FinalProject/
├── src/
│ ├── About.jsx  
│ ├── About.css  
│ ├── apiUtils.js  
│ ├── App.jsx  
│ ├── App.css  
│ ├── CarbonChart.jsx  
│ ├── CarbonFootprintMap.jsx
│ ├── CarbonFootprintMap.css
│ ├── ContactHelp.jsx  
│ ├── ContactHelp.css  
│ ├── Index.jsx  
│ ├── Index.css  
│ ├── RouteMap.jsx  
│ └── main.jsx  
├── public/  
├── .env  
├── .env.example  
├── .gitignore  
├── index.html  
├── package.json  
├── vercel.json  
└── vite.config.js

## Deploy to Vercel

- Root Directory: inst377FinalProject
- Build Command: npm run build
- Output Directory: dist
- add all environment variables frpm the .env file
- Deploy it
