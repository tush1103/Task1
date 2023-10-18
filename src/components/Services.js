import {MdCoffeeMaker} from "react-icons/md";
import {DiCoffeescript} from "react-icons/di";
import {CiCoffeeCup} from "react-icons/ci";
import {GiCoffeeBeans} from "react-icons/gi";
import {GiCroissant} from "react-icons/gi";
import Card from "./Card";
const Services=()=>{
    const services=[{
        icon:<MdCoffeeMaker/>,
        serviceName: "Equipment"
    },
    {
        icon:<DiCoffeescript/>,
        serviceName:"Type of Coffee"
    },
    {
        icon:<CiCoffeeCup/>,
        serviceName:"Take A Way"
    },
    {
        icon:<GiCoffeeBeans/>,
        serviceName:"Beans Variant"
    },
    {
        icon:<GiCroissant/>,
        serviceName:"Pastry"
    }
    ]
    return(
        <div className="flex flex-col w-[75vw] h-[50vh] text-white">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#f6c770] to-[#f6e6d0] font-bold text-5xl text-center">Services</h1>
            <div className="flex flex-wrap items-center justify-center gap-16 h-full text-[#F8E4BE]">
                {services.map((service) =>{
                    return(
                        <Card icon={service.icon} serviceName={service.serviceName}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Services;