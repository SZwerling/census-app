import fetchInfo from "./API/axios";
import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import AutoComplete from "./AutoComplete";

import LineChart from "./LineChart";
import { BarChart } from "./BarChart";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

Chart.register(CategoryScale);

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021];

function App() {
   const [loading, setLoading] = useState(false);
   const [location, setLocation] = useState("");
   const [chartData, setChartData] = useState({
      labels: null,
      datasets: [
         {
            label: "employed",
            data: null,
            backgroundColor: [
               "rgba(75,192,192,1)",
               "&quot;#ecf0f1",
               "#50AF95",
               "#f3ba2f",
               "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
         },
      ],
   });

   const runTenTimes = async (county = 169, state = 20) => {
      setLoading(true);

      let arrOfData = [];
      const responses = await Promise.all(
         years.map((year) => {
            return fetchInfo.get(
               `/${year}/cbp?get=YEAR,NAME,EMP&for=county:${county}&in=state:${state}`
            );
         })
      );

      responses.map((response) => {
         arrOfData.push({
            id: response.data[1][0],
            location: response.data[1][1],
            year: response.data[1][0],
            employed: response.data[1][2],
         });
      });

      setLocation(responses[0].data[1][1]);
      setChartData({
         labels: arrOfData.map((data) => data.year),
         datasets: [
            {
               label: "employed",
               data: arrOfData.map((data) => data.employed),
               backgroundColor: [
                  "rgba(75,192,192,1)",
                  "&quot;#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0",
               ],
               borderColor: "black",
               borderWidth: 2,
            },
         ],
      });
      setLoading(false);
   };

   return (
      <>
         <div className="container">
            <div className="row">
               {loading ? (
                  <div className="col placeholder-glow">
                     <h1>
                        <span class="placeholder col-6" aria-hidden="true"></span>
                     </h1>
                  </div>
               ) : (
                  <div className="col">
                     <h1>{location}</h1>
                  </div>
               )}
            </div>
            <div className="row">
               <AutoComplete runTenTimes={runTenTimes} />
            </div>
            <div className="row align-items-center">
               <div className="col-8">
                  <LineChart chartData={chartData} />
                  {/* <BarChart chartData={chartData} /> */}
               </div>
            </div>
         </div>
      </>
   );
}

export default App;

//https://api.census.gov/data/1987/cbp?get=EMP&for=county:075&in=state:06
