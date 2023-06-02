import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChartComponent = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "number of rain in Poland",
                data: [24, 30, 20, 50, 10],
                backgroundColor: [
                    "rgba(99, 132, 255, 0.2)",
                    "rgba(255, 50, 50, 0.2)",
                ],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(50, 200, 100, 1)"],
                borderWidth: 2,
            },
            {
                label: "number of snow in Poland",
                data: [33, 28, 88, 12, 33],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(50, 200, 100, 0.2)",
                ],
                borderColor: ["rgba(99, 132, 255, 1)", "rgba(255, 50, 50, 1)"],
                borderWidth: 2,
            },
        ],
    };
    return <Doughnut data={data} />;
};

/* description
Pretty much the same chart like PieChart
https://react-chartjs-2.js.org/examples/doughnut-chart
*/
