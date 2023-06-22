let statesArr = [
   { state: "ALABAMA", code: "01" },
   { state: "ALASKA", code: "02" },
   { state: "ARIZONA", code: "04" },
   { state: "ARKANSAS", code: "05" },
   { state: "CALIFORNIA", code: "06" },
   { state: "COLORADO", code: "08" },
   { state: "CONNECTICUT", code: "09" },
   { state: "DELAWARE", code: "10" },
   { state: "DISTRICT OF COLUMBIA", code: "11" },
   { state: "FLORIDA", code: "12" },
   { state: "GEORGIA", code: "13" },
   { state: "HAWAII", code: "15" },
   { state: "IDAHO", code: "16" },
   { state: "ILLINOIS", code: "17" },
   { state: "INDIANA", code: "18" },
   { state: "IOWA", code: "19" },
   { state: "KANSAS", code: "20" },
   { state: "KENTUCKY", code: "21" },
   { state: "LOUISIANA", code: "22" },
   { state: "MAINE", code: "23" },
   { state: "MARYLAND", code: "24" },
   { state: "MASSACHUSETTS", code: "25" },
   { state: "MICHIGAN", code: "26" },
   { state: "MINNESOTA", code: "27" },
   { state: "MISSISSIPPI", code: "28" },
   { state: "MISSOURI", code: "29" },
   { state: "MONTANA", code: "30" },
   { state: "NEBRASKA", code: "31" },
   { state: "NEVADA", code: "32" },
   { state: "NEW HAMPSHIRE", code: "33" },
   { state: "NEW JERSEY", code: "34" },
   { state: "NEW MEXICO", code: "35" },
   { state: "NEW YORK", code: "36" },
   { state: "NORTH CAROLINA", code: "37" },
   { state: "NORTH DAKOTA", code: "38" },
   { state: "OHIO", code: "39" },
   { state: "OKLAHOMA", code: "40" },
   { state: "OREGON ", code: "41" },
   { state: "PENNSYLVANIA", code: "42" },
   { state: "RHODE ISLAND", code: "44" },
   { state: "SOUTH CAROLINA", code: "45" },
   { state: "SOUTH DAKOTA", code: "46" },
   { state: "TENNESSEE", code: "47" },
   { state: "TEXAS", code: "48" },
   { state: "UTAH", code: "49" },
   { state: "VERMONT", code: "50" },
   { state: "VIRGINIA", code: "51" },
   { state: "WASHINGTON", code: "53" },
   { state: "WEST VIRGINIA", code: "54" },
   { state: "WISCONSIN", code: "55" },
   { state: "WYOMING", code: "56" },
];

//let withoutSpace = raw.replace(/\s/g, '')

// let statesArr = []
// let code = ""
// let state = ""
// let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// for (let i = 0; i < raw.length; i++) {
//     if (numbers.includes(raw[i])) {
//         code = code + raw[i]
//     } else {
//         state = state + raw[i]
//         if (numbers.includes(raw[i + 1]) || i+1 === raw.length) {
//            statesArr.push({ state: state.trim(), code })
//             code = ""
//             state = ""
//         }
//     }
// }

export default statesArr;
