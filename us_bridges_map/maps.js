// create custom icon object
let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',

    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64]
});

// and another for the longest bridge
let longestBridgeIcon = L.icon({
    iconUrl: 'bridge-longest.png',

    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64]
});

let usCenterCoords = [39.8333, -98.5833];  // center of continental US
let zoomLevel = 4;

let map = L.map('world-map').setView(usCenterCoords, zoomLevel)

// attribution and add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

bridges = [
    {
        name: 'Verrazano-Narrows Bridge',
        loc: 'New York, NY',
        span: 1298.4,
        coords: [
            40.6066, -74.0447
        ]
    },
    {
        name: "Golden Gate Bridge",
        loc: 'San Francisco and Marin, CA',
        span: 1280.2,
        coords: [
            37.8199, -122.4783
        ]
    },
    {
        name: 'Mackinac Bridge',
        loc: 'Mackinaw and St Ignace, MI',
        span: 1158, 
        coords: [
            45.8174, -84.7278
        ]
    },
    {
        name: 'George Washington Bridge',
        loc: 'New York, NY and New Jersey, NJ',
        span: 1067,
        coords: [
            40.8517, -73.9527
        ]
    },
    {
        name: 'Tacoma Narrows Bridge',
        loc: 'Tacoma and Kitsap, WA',
        span: 853.44,
        coords: [
            47.2690, -122.5517
        ]
    }
];

let longest = bridges[0];
bridges.forEach((bridge) => {
    if (bridge['span'] > longest['span']) {
        longest = bridge;
    }
});

bridges.forEach((bridge) => {
    if (bridge !== longest) {
        L.marker(bridge['coords'], {icon: bridgeIcon})
            .bindPopup(`<b>${bridge['name']}</b><br>Location: ${bridge['loc']}<br>Span: ${bridge['span']} meters`)
            .addTo(map);
    } else {
        L.marker(bridge['coords'], {icon: longestBridgeIcon})
            .bindPopup(`<b>${bridge['name']}</b><br>Location: ${bridge['loc']}<br>Span: ${bridge['span']} meters`)
            .addTo(map);
    }
});
