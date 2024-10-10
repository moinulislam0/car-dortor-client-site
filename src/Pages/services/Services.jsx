import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const[services,setServices]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
  return (
    <div className="mt-4 mb-4">
      <div className="text-center">
        <h2 className="text-3xl text-orange-600">Services</h2>
        <h3 className="text-5xl ">Our services area </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
          provident, eveniet sunt <br /> vel non delectus eum rerum quia quae dolorem
          hic, ipsum dicta aut molestiae quam eligendi assumenda ipsa error.
        </p>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {
            services.map(services => <ServicesCard
                key={services._id}
                service={services}
            >
            </ServicesCard>)
         }
       </div>
    </div>
  );
};

export default Services;
