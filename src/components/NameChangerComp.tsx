import { useState } from 'react';

const NameChangerComponent: React.FC = () => {
    const [name, setName] = useState<string>('');
    
    const handleChangeName = ( e :React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    
return (
    <>
        <h1 className="text-center text-xl pt-4">Hello, {name || "Stranger"}</h1>
        <div className="text-center">
            <input type="text" value={name} onChange={handleChangeName} className="border px-4 py-2 " />
        </div>
    </>
)
}

export default NameChangerComponent;