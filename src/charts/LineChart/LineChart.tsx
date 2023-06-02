import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const LineComponent = () => {
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Chart.js Line Chart",
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                type: "line" as const,
                label: "Dataset 1",
                borderColor: "red",
                backgroundColor: "rgba(255, 170, 190, 0.5",
                data: [4, 20, -10, 20, 10, 20, -20],
                fill: true,
            },
            {
                type: "line" as const,
                label: "Dataset 2",
                borderColor: "Blue",
                backgroundColor: "rgba(170, 190, 255, 0.5",
                data: [-4, -20, 10, -20, -10, -20, 20],
                fill: true,
            },
        ],
    };

    return <Line data={data} options={options}></Line>;
};

/* DESCRIPTION

labels - based on arrays,
options - object with properties to setup our chart, added as props in component
data - object when we plug our labels and add data in datasets array, added as props in component
fill - fill background of the chart, we can change color as backGroundColor property,
line - can be collored by borderColor
responsive - in css

https://react-chartjs-2.js.org/examples/line-chart
*/
