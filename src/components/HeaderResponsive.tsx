import { Link } from "react-router";
import { useState } from "react";
import {Menu, X} from "lucide-react";
import CFLogo from "./CFLogo";

const HeaderResponsive = () => { 

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto flex justify-between items-center px-4"> 
                    <CFLogo/>

                    <button 
                        className="text-white md:hidden" 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? < X size={36} /> : <Menu size={36} />}  
                    </button>

                    <nav 
                    // className="flex gap-4"
                    className={`${menuOpen ? "block" : "hidden"} md:flex gap-4 bg-cf-dark-red text-white transition-all duration-300 ease-in-out absolute top-24 left-0 w-full p-4 md:p-0 md:static md:w-auto`}
                    >
                        {/* <a href="/" className="text-white hover:underline hover:underline-offset-4" >Home</a> // Using Link from react-router instead of anchor tag  */}
                    <Link to="/" className="block md-inline hover:underline hover:underline-offset-4"
                    onClick={() => setMenuOpen(false)} >Home</Link>
                    <Link to="/examples/name-changer" className="block md-inline hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>Name Changer</Link>
                    </nav>
                </div>
            </header>   
        </>
    );
}

export default HeaderResponsive;