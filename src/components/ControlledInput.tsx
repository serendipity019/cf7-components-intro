import { useEffect, useState } from 'react';

const ControlledInput = () => {
    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    useEffect(() => {
        document.title = `Hello, ${name || "World"}!`;
    }, []);

    return (
        <>
            <div className="text-center">
                <input type="text" value={name} onChange={handleChange} className="border rounded px-4 py-2" />
            </div>
        </>
    );
}

export default ControlledInput;