import Sidebar from "./Sidebar"
import { FaBookmark } from "react-icons/fa6";
  import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="container flex items-center justify-between bg-black text-white py-4">
        <div className="w-[70%] flex items-center justify-between gap-8">
            <h2 className="text-2xl font-semibold">COMICS<span className="text-primary">.</span></h2>
            <ul className="hidden md:flex w-full items-center justify-evenly text-lg">
                <li className="hover:text-red-500 cursor-pointer text-gray-200 transition-all duration-300 ease-in-out">Home</li>
                <li className="hover:text-red-500 cursor-pointer text-gray-200 transition-all duration-300 ease-in-out">About</li>
                <li className="hover:text-red-500 cursor-pointer text-gray-200 transition-all duration-300 ease-in-out">Comics</li>
                <li className="hover:text-red-500 cursor-pointer text-gray-200 transition-all duration-300 ease-in-out">Blog</li>
                <li className="hover:text-red-500 cursor-pointer text-gray-200 transition-all duration-300 ease-in-out">Contact</li>
            </ul>
        </div>
        <div className="w-[30%] flex items-center md:justify-center justify-end text-black gap-8">
            <div className="hidden md:flex items-center justify-between gap-2 bg-white rounded-full pl-4">
                <Link to='/wishlist'><FaBookmark className="text-lg cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out"/></Link>
                <Link to='/cart'><IoCart className="text-2xl cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out"/></Link>
                <button className="text-lg py-2 px-4 rounded-full bg-gray-300 hover:text-white hover:bg-primary transition-all duration-300 ease-in-out">Free Comics</button>
            </div>
            <Sidebar />
        </div>
    </div>
  )
}

export default Navbar