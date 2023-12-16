import CanvasJSReact from '@canvasjs/react-charts';

import { NotFound } from './NotFound.js'
import './stats.css';

export function Stats() {
    if(window.location.href.includes(`Fr0W7JpIHa0u5mRbCvJ0KDnP41J6qeZjdluvq2Exc3tDE6mRyl`)) {
        
            var CanvasJS = CanvasJSReact.CanvasJS;
            var CanvasJSChart = CanvasJSReact.CanvasJSChart;
            
            const options = {
                theme: "dark2",
                backgroundColor: "#07080a",
      			animationEnabled: true,
                width: 100,
				axisX: {
                  lineColor: "transparent",
                  tickColor: "transparent"
                },
				axisY: {
                  lineColor: "transparent",
                  gridColor: "rgba(255, 255, 255, .1)",
                  tickColor: "transparent"
                },
                data: [
                {
					type: "spline",
					lineColor: "#ff83e6",
                  	color: "#4bc716",
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
                <CanvasJSChart options = {options} />
            </div>
            </>
        )
    } else {
        return (<NotFound />);
    }
    
}

// //var CanvasJSReact = require('@canvasjs/react-charts');
 