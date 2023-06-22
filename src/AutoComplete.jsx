import React, { useState } from "react";
import countiesArr from "./assets/counties";
import statesArr from "./assets/states"





function AutoComplete({ runTenTimes }) {
   const [county, setCounty] = useState("");
   

   const handleClick = (el) => {
      const stateCode = el.code.slice(0, 2);
      const countyCode = el.code.slice(2, 5);
      setCounty("");
      runTenTimes(countyCode, stateCode);
   };

   
   

   let renderedFilteredCounties = "";
   

   if (county.length > 3) {
      const filteredCounties = countiesArr.filter((el) =>
      el.county.startsWith(county.toUpperCase())
      );
      renderedFilteredCounties = filteredCounties.map((el) => {
         const corrState = statesArr.filter((st) =>
            el.code.startsWith(st.code)
         )[0];

         return (
            <li
               className="dropdown-item"
               onClick={() => handleClick(el)}
               key={el.code}
            >
               {el.county}, {corrState?.state}
            </li>
         );
      });
   }

   return (
      <>
         <div className="col-6">
            <div className="dropdown">
               <input
                  className="dropdown-toggle"
                  id="countyInput"
                  onChange={(e) => setCounty(e.target.value)}
                  value={county}
                  type="text"
                  aria-label="county-name-input"
                  placeholder="county"
                  autoComplete="off"
               />
               <ul
                  aria-labelledby="countyInput"
                  className={`dropdown-menu ${county.length > 3 ? "show" : ""}`}
               >
                  {renderedFilteredCounties}
               </ul>
            </div>
         </div>
      </>
   );
}

export default AutoComplete;


