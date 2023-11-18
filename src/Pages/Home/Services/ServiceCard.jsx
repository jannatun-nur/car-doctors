

const ServiceCard = ({ service }) => {

    const {service_id, img , title , price} =service;
    return (
        <div>
           <div className="card bg-grey-400 border-white shadow-xl mt-6">
  <figure><img src={img} className="h-[300px]" alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{title}</h2>
    <p className="text-white">{price}</p>
  
  </div>
</div> 
        </div>
    );
};

export default ServiceCard;