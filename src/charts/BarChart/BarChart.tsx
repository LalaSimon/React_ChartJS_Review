import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataset,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarComponent = () => {
    const options = {
        plugins: {
            title: {
                display: true,
                text: "charty barowe",
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
        tooltips: {
            backgroundColor: "rgba(255, 0, 0, 0.8)",
        },
    };

    const labels = [
        " ",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        " ",
    ];

    const data = {
        labels,
        datasets: [
            {
                type: "bar",
                label: "Data 1",
                data: [, 44, 20, 22, 10, 40, 91],
                backgroundColor: "rgba(255, 0, 0, 0.6",
                borderColor: "green",
                borderWidth: 1,
                stack: "Stack 0",
            },
            {
                type: "bar",
                label: "Data 2",
                data: [, 10, 60, 44, 15, 14, 50],
                backgroundColor: "rgba(49, 255, 100, 0.6",
                borderColor: "black",
                borderWidth: 1,
                stack: "Stack 0",
            },
            {
                type: "bar",
                label: "Data 2",
                data: [, 33, 22, 99, 32, 70, 55],
                backgroundColor: "rgba(200, 91, 22, 0.6)",
                borderColor: "black",
                borderWidth: 1,
                stack: "Stack 0",
            },
            {
                type: "bar",
                label: "Data 2",
                data: [, 21, -20, 30, 11, 40, 12],
                backgroundColor: "rgba(44, 124, 99, 0.6)",
                borderColor: "black",
                borderWidth: 1,
                stack: "Stack 1",
            },
        ] as ChartDataset<"bar", number[]>[],
    };

    return <Bar options={options} data={data} />;
};

/* DESCRIPTION

labels - based on arrays,
options - object with properties to setup our chart, added as props in component
data - object when we plug our labels and add data in datasets array, added as props in component,
bar - can be collored by borderColor and background color,
stack - we can define on which stack each bar should be placed
responsive - in css
https://react-chartjs-2.js.org/examples/stacked-bar-chart
*/
