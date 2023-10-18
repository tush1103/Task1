import image from "../assets/Reserve Img.png"
const Reservetable=()=>{
    return(
        <div className="w-[100vw] h-[70vh] flex text-white justify-center gap-8 items-center border-2 border-red-400 bg-[#AD714A59]">
            <img src={image} alt="" className="h-4/5 w-1/4 border-2 border-green-400"/>
            <div className="border-2 border-green-400 w-1/2">
                <form className="">
                    <input type="date" placeholder="Date"/>
                </form>
            </div>
        </div>
    )
}
export default Reservetable;