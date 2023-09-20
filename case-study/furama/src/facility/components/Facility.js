import { useEffect, useState } from "react"
import { getAll } from "../service/FacilityService"
import { Link } from "react-router-dom"

function Facility () {
  const [facility, setFacility] = useState([])
  const getFacility = async () => {
    const res = await getAll()
    setFacility(res)
  }
  useEffect(() => {
    getFacility();
  },[])
    return(
        <>
        {/* ================ Explore section start ================= */}
<section className="section-margin section-margin--small">
  
  <div className="container">
    <div className="section-intro text-center pb-80px">
      
      <div className="section-intro__style">
        <img src="https://themewagon.github.io/seapalace/img/home/bed-icon.png" alt />
      </div>
      <h2>Explore Our Rooms</h2>
    </div>
    
    <div className="row pb-4 flex-wrap">
    {
    facility.map((f) => (
      <div className="col-md-6 col-xl-4 mb-5">
        <div className="card card-explore">
          <div className="card-explore__img">
            <img className="card-img" src={f.img} alt />
          </div>
          <div className="card-body">
            <h3  className="card-explore__price">${f.rentalCost} <sub>/ Per Night</sub></h3>
            <h4 className="card-explore__title"><a href="#">{setFacility.serviceName}</a></h4>
            <p>{f.rentalType}----Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed </p>
            <Link className="card-explore__link" to="#">Book Now <i className="ti-arrow-right" /></Link>
          </div>
        </div>
      </div>
      ))}
    </div>

  </div>
  
</section>
{/* ================ Explore section end ================= */}

        
        </>
    )
}
export default Facility