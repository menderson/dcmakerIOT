/*--------------  coin_sales1 start ------------*/
if ($('#coin_sales1').length) {
    var ctx = document.getElementById("coin_sales1").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["10:10h", "10:20h", "10:30h", "10:40h", "10:50h", "11:00h", "11:10h"],
            datasets: [{
                label: "Temp.",
                backgroundColor: "rgba(255, 0, 0, 0.1)",
                borderColor: '	#FF0000',
                data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
/*--------------  coin_sales1 End ------------*/

/*--------------  coin_sales2 start ------------*/
if ($('#coin_sales2').length) {
    var ctx = document.getElementById("coin_sales2").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["10:10h", "10:20h", "10:30h", "10:40h", "10:50h", "11:00h", "11:10h"],
            datasets: [{
                label: "Umid.Ar",
                backgroundColor: "rgba(135, 206, 250, 0.1)",
                borderColor: '#87CEFA',
                data: [18, 41, 86, 49, 20, 65, 64, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
/*--------------  coin_sales2 End ------------*/

/*--------------  coin_sales3 start ------------*/
if ($('#coin_sales3').length) {
    var ctx = document.getElementById("coin_sales3").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["10:10h", "10:20h", "10:30h", "10:40h", "10:50h", "11:00h", "11:10h"],
            datasets: [{
                label: "Umid. Solo",
                backgroundColor: "rgba(160, 82, 45, 0.1)",
                borderColor: '#A0522D',
                fill: true,
                data: [18, 41, 50, 49, 20, 65, 50, 86, 20, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
/*--------------  coin_sales3 End ------------*/

if ($('#coin_sales4').length) {
    var ctx = document.getElementById("coin_sales4").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["10:10h", "10:20h", "10:30h", "10:40h", "10:50h", "11:00h", "11:10h"],
            datasets: [{
                label: "Chuva",
                backgroundColor: "rgba(247, 163, 58, 0.1)",
                borderColor: '#fd9d24',
                fill: true,
                data: [0, 0, 0, 90, 0, 0, 0,0,0],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 40
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 40,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
/*--------------  coin_sales3 End ------------*/

if ($('#coin_sales5').length) {
    var ctx = document.getElementById("coin_sales5").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["10:10h", "10:20h", "10:30h", "10:40h", "10:50h", "11:00h", "11:10h"],
            datasets: [{
                label: "Lumin.",
                backgroundColor: "rgba(255, 215, 0, 0.1)",
                borderColor: '#FFD700',
                fill: true,
                data: [18, 41, 50, 49, 20, 65, 50, 86, 20, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
/*--------------  coin_sales3 End ------------*/

/*--------------  overview-chart start ------------*/
if ($('#verview-shart').length) {
    var myConfig = {
        "type": "line",

        "scale-x": { //X-Axis
            "labels": ["04h", "06h", "08h", "10h", "12h", "14h", "16h", "18h", "20h", "22h","00h", "02h"],
            "label": {
                "font-size": 14,
                "offset-x": 0,
            },
            "item": { //Scale Items (scale values or labels)
                "font-size": 10,
            },
            "guide": { //Guides
                "visible": false,
                "line-style": "solid", //"solid", "dotted", "dashed", "dashdot"
                "alpha": 1
            }
        },
        "plot": { "aspect": "spline" },
        "series": [{
                "values": [20, 21, 22, 23, 24, 25, 24, 23, 22, 21, 20, 18],
                "line-color": "#FF0000",
                /* "dotted" | "dashed" */
                "line-width": 5 /* in pixels */ ,
                "marker": { /* Marker object */
                    "background-color": "#FF0000",
                    /* hexadecimal or RGB value */
                    "size": 5,
                    /* in pixels */
                    "border-color": "#FF0000",
                    /* hexadecimal or RBG value */
                }
            },
            {
                "values": [10, 15, 30, 60, 80, 50, 40, 55, 40, 67, 52, 40],
                "line-color": "#87CEFA",
                /* "dotted" | "dashed" */
                "line-width": 5 /* in pixels */ ,
                "marker": { /* Marker object */
                    "background-color": "#87CEFA",
                    /* hexadecimal or RGB value */
                    "size": 5,
                    /* in pixels */
                    "border-color": "#87CEFA",
                    /* hexadecimal or RBG value */
                }
            },
            {
                "values": [30, 27, 20, 16, 70, 65, 60, 53, 47, 40, 30, 25],
                "line-color": "#A0522D",
                /* "dotted" | "dashed" */
                "line-width": 5 /* in pixels */ ,
                "marker": { /* Marker object */
                    "background-color": "#A0522D",
                    /* hexadecimal or RGB value */
                    "size": 5,
                    /* in pixels */
                    "border-color": "#A0522D",
                    /* hexadecimal or RBG value */
                }
            },
            {
                "values": [100, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0],
                "line-color": "#801B3D",
                /* "dotted" | "dashed" */
                "line-width": 5 /* in pixels */ ,
                "marker": { /* Marker object */
                    "background-color": "#801B3D",
                    /* hexadecimal or RGB value */
                    "size": 5,
                    /* in pixels */
                    "border-color": "#801B3D",
                    /* hexadecimal or RBG value */
                }
            },
            {
                "values": [30, 35, 40, 50, 60, 70, 60, 50, 40, 30, 20, 18],
                "line-color": "#FFD700",
                /* "dotted" | "dashed" */
                "line-width": 5 /* in pixels */ ,
                "marker": { /* Marker object */
                    "background-color": "#FFD700",
                    /* hexadecimal or RGB value */
                    "size": 5,
                    /* in pixels */
                    "border-color": "#FFD700",
                    /* hexadecimal or RBG value */
                }
            }
        ]
    };

    zingchart.render({
        id: 'verview-shart',
        data: myConfig,
        height: "100%",
        width: "100%"
    });
}

/*--------------  overview-chart END ------------*/