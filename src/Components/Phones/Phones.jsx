import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  // console.log(phones);
  useEffect(() => {
    // fetch('./fakeData.json')
    // .then(res => res.json())
    // .then(data => console.log(data))
    axios.get("./fakeData.json").then((data) => {
      const phoneData = data.data;
      const phoneWithFakeData = phoneData.map((phone) => {
        const obj = {
          name: phone.brand,
          price: phone.price,
        };
        return obj;
      });
      // console.log(phoneWithFakeData);
      setPhones(phoneWithFakeData);
    });
  }, []);
  // console.log(phones);
  return (
    <div>
      <h1 className="text-5xl">Phones: {phones.length}</h1>
      <BarChart width={600} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
