import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const RadarChartComponent = () => {
    const data = {
        labels: ["Shot", "Technique", "Physics", "Defense", "Pass", "Quality"],
        datasets: [
            {
                label: "# of Votes",
                data: [-21, 19, 3, 5, -5, 3],
                backgroundColor: ["rgba(0, 255, 132, 0.3)"],
                borderWidth: 1,
            },
            {
                label: "Difference",
                data: [5, 1, 20, 1, 2, 9],
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: "rgba(255, 99, 132, 0.7)",
                borderWidth: 5,
            },
        ],
    };
    return <Radar data={data} />;
};

/*

We can use only one color, multiple datasets, we can define borderswidth and color of it

https://react-chartjs-2.js.org/examples/radar-chart
*/
