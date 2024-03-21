// import { LineChart, Line } from "recharts";
// import {
//   BarChart,
//   Bar,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { PieChart, Pie } from "recharts";
import {
    ComposedChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Area,
    Line
  } from "recharts";

const Chart = () => {
  const salaryData = [
    { profession: "Software Engineer", averageSalary: 100000, bonus: 10000 },
    { profession: "Data Scientist", averageSalary: 110000, bonus: 12000 },
    { profession: "Web Developer", averageSalary: 85000, bonus: 8000 },
    { profession: "UX/UI Designer", averageSalary: 90000, bonus: 9000 },
    { profession: "Project Manager", averageSalary: 95000, bonus: 9500 },
    { profession: "Product Manager", averageSalary: 105000, bonus: 10000 },
    { profession: "Business Analyst", averageSalary: 85000, bonus: 8000 },
    { profession: "Marketing Manager", averageSalary: 95000, bonus: 9500 },
    { profession: "Financial Analyst", averageSalary: 90000, bonus: 9000 },
    { profession: "HR Manager", averageSalary: 80000, bonus: 7500 },
    { profession: "Sales Manager", averageSalary: 100000, bonus: 10000 },
    { profession: "Accountant", averageSalary: 80000, bonus: 7500 },
    { profession: "Mechanical Engineer", averageSalary: 95000, bonus: 9000 },
    { profession: "Civil Engineer", averageSalary: 90000, bonus: 8500 },
    { profession: "Electrical Engineer", averageSalary: 92000, bonus: 8700 },
    { profession: "Chemical Engineer", averageSalary: 100000, bonus: 10000 },
    { profession: "Graphic Designer", averageSalary: 75000, bonus: 7000 },
    { profession: "Architect", averageSalary: 95000, bonus: 9000 },
    { profession: "Lawyer", averageSalary: 110000, bonus: 12000 },
    { profession: "Doctor", averageSalary: 150000, bonus: 15000 },
  ];

  const salaryData01 = [
    { profession: "Software Engineer", averageSalary: 105000, bonus: 12000 },
    { profession: "Data Scientist", averageSalary: 115000, bonus: 13000 },
    { profession: "Web Developer", averageSalary: 85000, bonus: 8000 },
    { profession: "UX/UI Designer", averageSalary: 95000, bonus: 10000 },
    { profession: "Project Manager", averageSalary: 100000, bonus: 11000 },
    { profession: "Product Manager", averageSalary: 110000, bonus: 12000 },
    { profession: "Business Analyst", averageSalary: 90000, bonus: 9000 },
    { profession: "Marketing Manager", averageSalary: 100000, bonus: 11000 },
    { profession: "Financial Analyst", averageSalary: 95000, bonus: 10000 },
    { profession: "HR Manager", averageSalary: 85000, bonus: 8000 },
    { profession: "Sales Manager", averageSalary: 105000, bonus: 12000 },
    { profession: "Accountant", averageSalary: 80000, bonus: 7500 },
    { profession: "Mechanical Engineer", averageSalary: 90000, bonus: 10000 },
    { profession: "Civil Engineer", averageSalary: 95000, bonus: 10500 },
    { profession: "Electrical Engineer", averageSalary: 92000, bonus: 9500 },
    { profession: "Chemical Engineer", averageSalary: 105000, bonus: 12000 },
    { profession: "Graphic Designer", averageSalary: 75000, bonus: 7000 },
    { profession: "Architect", averageSalary: 90000, bonus: 10000 },
    { profession: "Lawyer", averageSalary: 115000, bonus: 13000 },
    { profession: "Doctor", averageSalary: 155000, bonus: 18000 },
  ];

  return (
    <div>
      {/* <div>
        <LineChart width={500} height={400} data={salaryData}>
          <Line dataKey={"averageSalary"} stroke="red"></Line>
          <Line dataKey={"bonus"} stroke="green"></Line>
        </LineChart>
      </div> */}
      {/* <div>
        <BarChart width={730} height={250} data={salaryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="averageSalary" fill="#8884d8" />
          <Bar dataKey="bonus" fill="#82ca9d" />
        </BarChart>
      </div> */}
      {/* <div>
        <PieChart width={730} height={250}>
          <Pie
            data={salaryData}
            dataKey="averageSalary"
            nameKey="profession"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={salaryData01}
            dataKey="averageSalary"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div> */}
      <div>
        <ComposedChart width={730} height={250} data={salaryData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="profession" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="averageSalary" barSize={20} fill="#413ea0" />
          <Bar dataKey="bonus" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="averageSalary" stroke="#ff7300" />
          {/* <Line type="monotone" dataKey="bonus" stroke="#ff7300" /> */}
        </ComposedChart>
      </div>
    </div>
  );
};

export default Chart;
