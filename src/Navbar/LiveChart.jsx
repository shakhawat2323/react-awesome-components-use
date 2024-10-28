import { LineChart, Line, XAxis, YAxis } from "recharts";

const LiveChart = () => {
  const datass = [
    { id: 1, name: "Arjun", math: 78, science: 82, english: 75 },
    { id: 2, name: "Brinda", math: 85, science: 88, english: 80 },
    { id: 3, name: "Chitra", math: 92, science: 91, english: 89 },
    { id: 4, name: "Deepak", math: 76, science: 79, english: 72 },
    { id: 5, name: "Ekta", math: 88, science: 84, english: 87 },
    { id: 6, name: "Farhan", math: 95, science: 94, english: 90 },
    { id: 7, name: "Gauri", math: 80, science: 78, english: 85 },
    { id: 8, name: "Hari", math: 90, science: 86, english: 88 },
    { id: 9, name: "Isha", math: 84, science: 83, english: 81 },
    { id: 10, name: "Jay", math: 91, science: 89, english: 92 },
  ];

  return (
    <div className="bg-black text-white">
      <LineChart width={800} height={500} data={datass}>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="science" stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default LiveChart;
