import CFLogo from "./CFLogo";

const Header = () => { 
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto flex justify-between items-center px-4"> 
                    <CFLogo/>
                    <a className="text-white hover:underline hover:underline-offset-4" href="/">Home</a>
                </div>
            </header>   
        </>
    );
}

export default Header;