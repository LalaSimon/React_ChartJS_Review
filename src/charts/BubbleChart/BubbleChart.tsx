import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const BubbleChartComponent = () => {
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const data = {
        datasets: [
            {
                label: "A dataset",
                data: [
                    { x: 10, y: 2, r: 20 },
                    { x: 20, y: 30, r: 10 },
                    { x: 55, y: 20, r: 8 },
                    { x: 33, y: 10, r: 15 },
                ],
                backgroundColor: "rgba(255, 99, 132, 0.3)",
                borderWidth: 2,
                borderColor: "rgba(255, 99, 132, 1",
            },
            {
                label: "B dataset",
                data: [
                    { x: 31, y: 40, r: 10 },
                    { x: 10, y: 50, r: 20 },
                    { x: 33, y: 11, r: 10 },
                    { x: 12, y: 44, r: 20 },
                ],
                backgroundColor: "rgba(132, 255, 99, 0.3)",
                borderWidth: 2,
                borderColor: "rgba(132, 255, 99, 1)",
            },
        ],
    };

    return <Bubble options={options} data={data} />;
};

/* DESCRIPTION
Pretty much the same like Scatter, but we got third parameter in data object - R
https://react-chartjs-2.js.org/examples/bubble-chart
*/
