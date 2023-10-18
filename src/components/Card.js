const Card=(props)=>{
    return(
        <div className="bg-[#54372A] flex flex-col justify-evenly items-center h-1/2 w-[10%] rounded-3xl">
            <div className="text-6xl">{props.icon}</div>
            <p className="text-xs">{props.serviceName}</p>
        </div>
    )
}
export default Card;