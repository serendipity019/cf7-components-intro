import Footer from "./Footer";
import HeaderResponsive from "./HeaderResponsive";


interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return ( 
        <>
            <HeaderResponsive/> 
            <div className="container mx-auto min-h-[95vh] pt-24">
                {children}
            </div>
            <Footer/>
        </>
    )
}
export default Layout; 