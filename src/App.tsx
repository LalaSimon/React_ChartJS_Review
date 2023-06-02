import { BarComponent } from "./charts/BarChart/BarChart";
import { BubbleChartComponent } from "./charts/BubbleChart/BubbleChart";
import { DoughnutChartComponent } from "./charts/DoughnutChart/DoughnutChart";
import { LineComponent } from "./charts/LineChart/LineChart";
import { PieChartComponent } from "./charts/PieChart/PieChart";
import { PolarAreaChartComponent } from "./charts/PolarAreaChart/PolarAreaChart";
import { RadarChartComponent } from "./charts/RadarChart/RadarChart";
import { ScatterChartComponent } from "./charts/ScatterChart/ScatterChart";

export const App = () => {
    return (
        <div className="wrapper flex flex-col gap-20 mt-20">
            <div className="flex flex-col justify-center items-center w-96">
                <h2 className="text-center text-4xl mb-5">Line chart</h2>
                <LineComponent />
            </div>
            <div className="flex flex-col justify-center items-center w-96">
                <h2 className="text-center text-4xl mb-5">Bar chart</h2>
                <BarComponent />
            </div>
            <div className="flex flex-col justify-center items-center w-96">
                <h2 className="text-center text-4xl mb-5">Pie chart</h2>
                <PieChartComponent />
            </div>
            <div className="flex flex-col justify-center items-center w-96">
                <h2 className="text-center text-4xl mb-5">Doughnut chart</h2>
                <DoughnutChartComponent />
            </div>
            <div className="flex flex-col justify-center items-center w-96">
                <h2 className="text-center text-4xl mb-5">Polar Area chart</h2>
                <PolarAreaChartComponent />
            </div>
            <div className="flex flex-col justify-center items-center w-96">
                <h2 className="text-center text-4xl mb-5">Radar chart</h2>
                <RadarChartComponent />
            </div>
            <div className="flex flex-col justify-center items-center w-96">
                <h2 className="text-center text-4xl mb-5">Radar chart</h2>
                <ScatterChartComponent />
            </div>
            <div className="flex flex-col justify-center items-center w-96">
                <h2 className="text-center text-4xl mb-5">Bubble chart</h2>
                <BubbleChartComponent />
            </div>
        </div>
    );
};
