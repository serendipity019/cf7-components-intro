import { useEffect, useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.title = "Focus Input Example";
    }, []);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return ( 
        <>
            <div className="text-center space-x-4 mt-4">
                <input type="text" ref={inputRef} className="border px-4 py-2" />
                <button className=" bg-cf-dark-grey text-blue-400 px-4 py-2 rounded"
                onClick={handleClick}>
                    Focus Input</button>
            </div>
        </>
    );
}

export default FocusInput;