import { Outlet} from "react-router";
import Footer from "./Footer";
import HeaderResponsive from "./HeaderResponsive";

const RouterLayout = () => {
    return (
        <>
            <HeaderResponsive />
            <div className="container mx-auto min-h-[95vh] pt-24">
               <Outlet />
            </div>
            <Footer /> 
        </>
    );
}

export default RouterLayout;