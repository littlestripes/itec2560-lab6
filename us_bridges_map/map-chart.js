// data to be used
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

let canvas  = document.querySelector('#bridge-span-chart');
let context = canvas.getContext('2d');

let bridgeNames = [];
let bridgeSpans = [];
bridges.forEach((bridge) => {
    // populate each array
    bridgeNames.push(bridge['name']);
    bridgeSpans.push(bridge['span']);
});

chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: bridgeNames,
        datasets: [{
            label: 'Span (in meters)',
            data: bridgeSpans
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
