import fetchInfo from "./API/axios";
import { useState } from "react";
import AutoComplete from "./AutoComplete";
import LChart from "./LineChart";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021];

function App() {
   //state to update to use recharts
   const [loading, setLoading] = useState(false);
   const [location, setLocation] = useState("");
   const [empData, setEmpData] = useState([
      { name: 2015 },
      { name: 2016 },
      { name: 2017 },
      { name: 2018 },
      { name: 2019 },
      { name: 2020 },
      { name: 2021 },
   ]);
   const [locData, setLocData] = useState([]);

   const runTenTimes = async (county = 169, state = 20) => {
      //and then update arr of obj's to use recharts
      setLoading(true);

      const responses = await Promise.all(
         years.map((year) => {
            return fetchInfo.get(
               `/${year}/cbp?get=YEAR,NAME,EMP&for=county:${county}&in=state:${state}`
            );
         })
      );

      setLocData((locData) => [
         ...locData,
         responses[0]?.data[1][1].replace(/[, ]+/g, ""),
      ]);
      setLocation(responses[0]?.data[1][1])
      //response.data[1][1] is name response.data[1][1[2]]  is employment number
      let update = [];
      for (let i = 0; i < empData.length; i++) {
         let site = responses[i].data[1][1].replace(/[, ]+/g, "");
         update.push(empData[i]);
         update[i][site] = responses[i].data[1][2];
         setEmpData(update);
      }
   

      setLoading(false);
   };



   return (
      <>
         <div className="container">
            <div className="row">
               {loading ? (
                  <div className="col placeholder-glow">
                     <h1>
                        <span
                           className="placeholder col-6"
                           aria-hidden="true"
                        ></span>
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
            <div className="row">
               <div className="col">
                  <LChart data={empData} location={locData} />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;

//https://api.census.gov/data/1987/cbp?get=EMP&for=county:075&in=state:06
