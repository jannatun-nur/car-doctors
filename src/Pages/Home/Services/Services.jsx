import ServiceCard from "./ServiceCard";
import { useState } from "react";
import { useEffect } from "react";

const Services = () => {
    const [services , setServices] =useState([]);

useEffect( ()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
},[])




  return (
    <div>
      <div>
        <h4 className="text-xl text-center text-white">Services</h4>
        <h2 className="text-xl text-center text-orange-500">
          Our services area
        </h2>
        <p className="text-center ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

        <div className="grid grid-cols-3 gap-4">
            {
                services.map(service => <ServiceCard 
                    key={service._id} service={service}>
                         </ServiceCard>)
                   

            
            }
        </div>

    </div>
  );
};

export default Services;
