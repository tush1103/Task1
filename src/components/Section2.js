import mask from "../assets/Image-ourstory.png"
const Section2=()=>{
    return(
        <div className="flex flex-col h-[70vh] items-center justify-center">
            <h1 className="text-right text-4xl w-3/4 text-[#F8E4BE]">Our Story</h1>
            <div className="flex h-2/3 w-3/4 bg-[#AD714A59] rounded-3xl">
                <img src={mask} alt="" className=" h-[37rem] mt-[-55px]" />
                <div className="flex items-center">
                    <p className="text-white leading-loose">
                        Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section2;