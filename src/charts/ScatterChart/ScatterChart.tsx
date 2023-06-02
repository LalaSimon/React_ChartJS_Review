import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const ScatterChartComponent = () => {
    const option = {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: { beginAtZero: true },
        },
    };
    const data = {
        datasets: [
            {
                label: "A dataset",
                data: [
                    { x: 10, y: 2 },
                    { x: 20, y: 30 },
                    { x: 55, y: 20 },
                    { x: 33, y: 10 },
                ],
                backgroundColor: "rgba(255, 99, 132, 0.3)",
                borderWidth: 2,
                borderColor: "rgba(255, 99, 132, 1",
            },
            {
                label: "B dataset",
                data: [
                    { x: 31, y: 40 },
                    { x: 10, y: 50 },
                    { x: 33, y: 11 },
                    { x: 12, y: 44 },
                ],
                backgroundColor: "rgba(132, 255, 99, 0.3)",
                borderWidth: 2,
                borderColor: "rgba(132, 255, 99, 1)",
            },
        ],
    };
    return <Scatter data={data} options={option} />;
};

/* Description:

Pretty cool chart, every object can has his own color, data is array of objects with x and y properties, pretty simple

https://react-chartjs-2.js.org/examples/scatter-chart
*/
