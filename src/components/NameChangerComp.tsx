import { useEffect, useState } from 'react';

const NameChangerComponent: React.FC = () => {
    const [name, setName] = useState<string>('');

    useEffect(() => {
        document.title = `Hello, ${name || "Stranger"}`;
    }, [name]);
    
    // Above is the preferred way to handle side effects in React using useEffect.
    // const setup = () => { 
    //     document.title = `Hello, ${name || "Stranger"}`;
    // }
    // useEffect(setup, [name]);

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