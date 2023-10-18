import logo from "../assets/logo.png";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
const Navbar=()=>{
    return(
        <nav className="absolute flex w-full justify-between text-white z-50 top-0">
            <div className="ml-10">
                <img src={logo} alt=""/>
            </div>
            <div className="mr-3 flex items-center w-2/5 justify-between">
                <div className="flex w-1/5 justify-end text-sm gap-4">
                    <BsFillPersonFill/>
                    <AiOutlineShoppingCart/>
                </div>
                <ul className="flex w-3/4 justify-between text-sm font-thin font-serif">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;