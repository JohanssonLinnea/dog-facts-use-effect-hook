import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const dogFactData = async () => {
    
    await fetch("https://dogapi.dog/api/v2/facts")
       .then((response) => response.json())
       .then((data) => {
         setData(data.data);
         setLoading(false);
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
       });
   
 };
 useEffect(()=>{
   dogFactData()

 },[])

  return (
    <div className="App">
      <DogFact fact={data} loading={loading} />
    </div>
  );
};
