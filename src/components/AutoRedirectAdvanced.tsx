import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AutoRedirectAdvanced = () => { 
    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(5);

    useEffect(() => {
        const intervalId: number = setInterval(() => {
            setSecondsLeft((prev: number)=> prev -1); 
        }, 1000); // Update seconds left every second

        const timer: number = setTimeout(() => {
            navigate("/examples");
        }
        , 5000); // Redirect after 5 seconds

        return () => {
            clearTimeout(timer); // Cleanup the timer on component unmount
            clearInterval(intervalId); // Cleanup the interval on component unmount
        }
    }, []);

    return ( 
        <>
            <h1 className="text-center text-2xl mb-4">Redirecting in {secondsLeft} second{secondsLeft !==1 && "s"} ... </h1>
        </>
    );
}

export default AutoRedirectAdvanced;