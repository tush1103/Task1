import { MdDeliveryDining } from "react-icons/md";
import coffeeBeans from "../assets/Coffees.png"
import card from "../assets/Cup1.png"
import Services from "./Services";
// import Caraousel from "./Caraousel";
// import Section2 from "./Section2";
import Discount from "./Discount";
import Reservetable from "./Reservetable";
import Caraousel from "./Caraousel";
const Home = () => {
    return (
        <div className="flex flex-col justify-between items-center w-full h-full home gap-16">
            <div className="content w-full h-[100vh] flex ">

                <div className="flex flex-col justify-end gap-4 items-center w-1/2 h-full text-[#DABB9E] ">

                    <h1 className="h-[15%] w-2/3 text-6xl text-left text-[#3F2F2A] textBorder font-[cursive] ml-12">ELZA COFFEE</h1>

                    <p className="w-1/2 text-left text-lg">Today's good mood is sponsored by coffee
                        search for your coffee now</p>

                    <div className="w-1/2 mt-8 mb-8 flex justify-start gap-16">

                        <button className="border-[#DABB9E] border-2 p-0 rounded-2xl w-[125px] h-[100%] text-center gradient">Shop Now</button>

                        <button className="border-[#DABB9E] border-2 p-0 rounded-2xl w-[125px] h-[100%] text-center gradient">Catalog</button>

                    </div>
                    <div className="w-[350px] h-1/4 flex justify-center items-end self-end">

                        <div className="flex card h-full w-11/12 card justify-center">

                            <img src={card} alt="" className="w-[48%]"/>

                            <div className="h-full w-full flex flex-col justify-center gap-8 items-start">

                                <p className="text-xl  w-10/12 text-transparent bg-clip-text bg-gradient-to-r from-[#eeae73] to-[#eadbce] font-bold">But First Coffee</p>

                                <div className="border-[#F8E4BE] border text-center rounded-xl w-1/2 h-6 flex justify-center items-center gap-1 text-[#F8E4BE]">

                                    <p className="text-xs ">Hurry Up</p>

                                    <MdDeliveryDining />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex ">

                    <img src={coffeeBeans} alt="" className="absolute h-[90%] right-2 top-14" />

                </div>
            </div>
            <Caraousel/>
            <Services/>
            <Discount/>
            <Reservetable/>
        </div>
    )
}

export default Home;