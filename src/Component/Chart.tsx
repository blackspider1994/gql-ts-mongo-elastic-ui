import ReactApexChart from "react-apexcharts";
interface ChartProps {
  // Define the chart options
  options: {
    chart: {
      type: string;
    };
    xaxis: {
      categories: string[];
    };
  };
  // Define the series data
  series: {
    name: string;
    data: number[];
  }[];
}
const Chart = () => {
  const options = {
    chart: {
      type: "bar", // Type of chart (bar, line, pie, etc.)
    },
    xaxis: {
      categories: ["Category 1", "Category 2", "Category 3"], // X-axis labels
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [30, 40, 45], // Y-axis data
    },
  ];

  return (
    <>
      <div className="text-4xl text-blue-500 font-bold text-center">Graph</div>
      <div className="w-[400px] mx-auto">
        <ReactApexChart
          //@ts-ignore
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};

export default Chart;
