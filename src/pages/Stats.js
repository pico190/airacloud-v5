import CanvasJSReact from '@canvasjs/react-charts';

import { NotFound } from './NotFound.js'
import './stats.css';

export function Stats() {
    if(window.location.href.includes(`Fr0W7JpIHa0u5mRbCvJ0KDnP41J6qeZjdluvq2Exc3tDE6mRyl`)) {

                var CanvasJS = CanvasJSReact.CanvasJS;
                var CanvasJSChart = CanvasJSReact.CanvasJSChart;
                
                var chartWidth = window.innerWidth * 0.4;
                var chartHeight = Math.floor(chartWidth / 1.3);

                const options = {
                    theme: "dark2",
                    backgroundColor: "#07080a",
                    animationEnabled: true,
                    width: chartWidth,
                    height: chartHeight,
                    axisX: {
                      lineColor: "transparent",
                      tickColor: "transparent",
                      interval: 1.3,
                      labelFontColor: "rgba(255, 255, 255, .3)",
                      labelFontFamily: "'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif",
                      crosshair: {
                          enabled: true,
                            labelBackgroundColor: "black",
                                    labelFontColor: "rgba(255, 255, 255, .3)",
                                    labelFontFamily: "'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif",
                      }
                    },
                    axisY: {
                      lineColor: "transparent",
                      gridColor: "rgba(255, 255, 255, .1)",
                      tickColor: "transparent",
                      interval: 2,
                      labelFontColor: "rgba(255, 255, 255, .3)",
                      labelFontFamily: "'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif"
                    },
                    toolTip: {
                        enabled: true,       
                        animationEnabled: true,
                        borderColor: "#ff83e6",
                        backgroundColor: "#07080a",
                        
                        fontFamily: "'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif",
                        cornerRadius: 4
                    },
                    data: [
                    {
                        type: "spline",
                        lineColor: "#ff83e6",
                          lineThickness: 5,
                          color: "#ff83e6",
                        markerSize: 5,
                        xValueFormatString: "YYYY",
                        yValueFormatString: "#",
                        dataPoints: [
                            { x: new Date(2017, 0), y: 7.6},
                            { x: new Date(2016, 0), y: 7.3},
                            { x: new Date(2015, 0), y: 6.4},
                            { x: new Date(2014, 0), y: 5.3},
                            { x: new Date(2013, 0), y: 4.5},
                            { x: new Date(2012, 0), y: 3.8},
                            { x: new Date(2011, 0), y: 3.2}
                        ]
                    }
                    ]
                }
            
                return (
                    <>
                    <div className="stats">
                        <h1>Gráfico de visitas</h1>
                        <br /><br />
                        <div className="chart1">
                            <div style={{width: "80vw"}}>
                                <CanvasJSChart options = {options} />    
                            </div>
                            <div style={{width: "100%"}}>
                                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/6EiEuUU8TcAWsMBOMOIHe6?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                            </div>
        
                        </div>
                    </div>
                    </>
                )
            
    } else {
        return (<NotFound />);
    }
    
}

// //var CanvasJSReact = require('@canvasjs/react-charts');
 