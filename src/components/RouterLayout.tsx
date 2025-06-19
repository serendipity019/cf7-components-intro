import { Outlet} from "react-router";
import Footer from "./Footer";
import HeaderResponsive from "./HeaderResponsive";
import { Toaster } from "./ui/sonner";

const RouterLayout = () => {
    return (
        <>
            <HeaderResponsive />
            <div className="container mx-auto min-h-[95vh] pt-24">
               <Outlet />
            </div>
            <Footer /> 
            {/* // This below is from shadcn UI */}
            <Toaster richColors/> 
        </>
    );
}

export default RouterLayout;