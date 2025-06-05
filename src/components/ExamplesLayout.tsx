import { Outlet} from "react-router";
import Footer from "./Footer";
import HeaderResponsive from "./HeaderResponsive";
import ExamplesSection from "./ExamplesSection";

const ExamplesLayout = () => {
    return (
        <>
            <HeaderResponsive />
            <div className="container mx-auto min-h-[95vh] pt-24">
               <Outlet />
            </div>
            <ExamplesSection/>
            <Footer /> 
        </>
    );
}

export default ExamplesLayout;