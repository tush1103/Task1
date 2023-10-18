import image from "../assets/Proefpakket_page-0003 2 (no bg).png";
const Discount=()=>{
    return(
        <div className="w-[70vw] h-[50vh] flex flex-col text-white">
            <h1 className="text-4xl ml-5 mb-[-20px] z-50 text-[#F8E4BE]">Offer</h1>
            <div className="flex bg-[#AD714A59] w-full h-3/4 justify-center gap-20">
                <div className="flex flex-col justify-center gap-4 items-center w-1/2">
                    <h1 className="text-2xl text-[#F8E4BE] self-start">Up To <span className="text-4xl"> 50% </span> OFF</h1>
                    <p className="leading-3xl">At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness. </p>
                    <button className="self-start border-[#DABB9E] border-2 p-0 rounded-2xl w-[125px] h-10 text-center gradient">Show Now</button>
                </div>
                <div>
                    <img src={image} alt="" className="h-full"/>
                </div>
            </div>
        </div>
    )
}

export default Discount