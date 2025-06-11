import { useEffect } from "react";
import { useNavigate } from "react-router";

const AutoRedirect = () => { 
    const navigate = useNavigate();

    useEffect(() => {
        const timer: number = setTimeout(() => {
            navigate("/examples");
        }
        , 5000); // Redirect after 5 seconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return ( 
        <>
            <h1 className="text-center text-2xl mb-4">Redirecting in 5 seconds</h1>
        </>
    );
}

export default AutoRedirect;