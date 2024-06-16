
export default function Service() {
  const BulletCircle = ({ size = 20, color = 'black' }) => (
    <svg height={size} width={size} viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill={color} />
    </svg>
  );
  
  const services = [
    "Ambul banana cultivation at Rajanganaya which has been cultivated under Agri-Demonstration Park programme implemented throughout the island by Agriculture Sector Modernization Project (ASMP) of the Ministry of Agriculture has now become very successful. Minister of Agriculture, Wildlife and Forest ",
    "Ambul banana cultivation at Rajanganaya which has been cultivated under Agri-Demonstration Park programme implemented throughout the island by Agriculture Sector Modernization Project (ASMP) of the Ministry of Agriculture has now become very successful. Minister of Agriculture, Wildlife and Forest ",
    "Ambul banana cultivation at Rajanganaya which has been cultivated under Agri-Demonstration Park programme implemented throughout the island by Agriculture Sector Modernization Project (ASMP) of the Ministry of Agriculture has now become very successful. Minister of Agriculture, Wildlife and Forest ",
    "Ambul banana cultivation at Rajanganaya which has been cultivated under Agri-Demonstration Park programme implemented throughout the island by Agriculture Sector Modernization Project (ASMP) of the Ministry of Agriculture has now become very successful. Minister of Agriculture, Wildlife and Forest ",
  ];
  return (
    <>
      <div id="service" className="serviceContainer ">
        
          <h5 className="sectionTitle">Service</h5>

          <p>
            Ambul banana cultivation at Rajanganaya which has been cultivated
            under Agri-Demonstration Park programme implemented throughout the
            island by Agriculture Sector Modernization Project (ASMP) of the
            Ministry of Agriculture has now become very successful. Minister of
            Agriculture, Wildlife and Forest
          </p>
          <div className="serviceList">
          {services.map((service) => {
            return <li><BulletCircle  size={40} color="black" />
                {service}</li>;
          })}
          </div>
        
      </div>
    </>
  );
}
