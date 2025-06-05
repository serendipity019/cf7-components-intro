import { Link } from "react-router";
import CFLogo from "./CFLogo";

const Header = () => { 
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto flex justify-between items-center px-4"> 
                    <CFLogo/>
                    <nav className="flex gap-4">
                        {/* <a href="/" className="text-white hover:underline hover:underline-offset-4" >Home</a> // Using Link from react-router instead of anchor tag  */}
                    <Link to="/" className="text-white hover:underline hover:underline-offset-4">Home</Link>
                    <Link to="/examples/name-changer" className="text-white hover:underline hover:underline-offset-4">Name Changer</Link>
                    </nav>
                </div>
            </header>   
        </>
    );
}

export default Header;