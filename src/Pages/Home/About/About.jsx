import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { useState } from "react";
import { useEffect } from "react";
const About = () => {

const [services , setServices] =useState([]);

useEffect( ()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
},[])





  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg absolute right-5 top-1/2 shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="font-bold text-orange-400">About Us!</h3>
          <p className="space-y-7 w-3/4 text-4xl">We are qualified & of experience in this field</p>
          <p className=" mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className=" mt-4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-primary mt-2 bg-orange-500 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
