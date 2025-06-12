import { useEffect, useRef } from 'react';

const UncontrolledInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(e.target.value);
    // };

    const handleClick = () => {
        alert(`Value: ${inputRef.current?.value}`);
    }

    useEffect(() => {
        document.title = "uncontrolled input example";
    }, []);

    return (
        <>
            <div className="text-center mt-8 space-x-4">
                <input type="text"
                //  value={name}
                 ref={inputRef}
                //  onChange={handleChange}
                 className="border rounded px-4 py-2" 
                />
                <button className="bg-cf-dark-red text-white px-4 py-2 rounded" onClick={handleClick}>
                    Show Value
                </button>
            </div>
        </>
    );
}

export default UncontrolledInput;