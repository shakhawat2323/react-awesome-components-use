import axios from "axios";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Phone = () => {
  const [phone, setPhone] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhone(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const Phonedata = data.data.data;
        const Fackdata = Phonedata.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });

        setPhone(Fackdata);
        setLoding(false);
      });
  }, []);

  return (
    <div>
      <div>
        {loding && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        )}
      </div>
      <h1 className="text-3xl">Phone : {phone.length}</h1>
      <BarChart width={1200} height={300} data={phone}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phone;
