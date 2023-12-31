import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../../components/footer/Footer";

const ServicePage = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        AOS.init(
            {
                duration: 2000
            }
        );
    }, [])

    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(serviceData => setService(serviceData))
    }, [])

    return (
        <>
            <div className="my-16 max-w-6xl mx-auto px-8 lg:px-0">
                {/* head area */}
                <div className=" text-center mb-16"  >
                    <h2 className=" text-4xl font-poppins font-bold text-[#042754]">Service</h2>
                    <p className=" text-lg font-poppins font-semibold text-[#042754]">Best learn skill service provide here</p>
                </div>
                {/* card area */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        service.map(singleData => <>
                            <div data-aos="fade-up" className="card card-compact bg-[#042754] text-white ">
                                <figure><img src={singleData.image} className=" h-52 w-full p-4" alt="not found" /></figure>
                                <div className="card-body">
                                    <h2 className=" text-xl font-semibold font-poppins">{singleData.name}</h2>
                                    <h2 className="text-lg font-semibold font-poppins">{singleData.price}$</h2>
                                    <p className=" text-base font-semibold font-poppins">{singleData.short_description.slice(0,110)}</p>
                                    <div className="card-actions justify-center py-2">
                                    <Link to={`/serviceDetail/${singleData.id}`} className=" bg-[#dfac04f4] text-lg px-4 py-2 rounded-lg font-medium ">Details</Link>
                                    </div>
                                </div>
                            </div>
                        
                        </>)
                    }
                </div>
            </div>
            
            {/* footer section here */}
            <Footer/>
        </>
    );
};

export default ServicePage;
