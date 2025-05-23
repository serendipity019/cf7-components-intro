import { useState } from 'react';

const FunctionalComponentWithState = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => { 
        setCount(count + 1);
    }

    const decreseCount = () => {
        setCount(count - 1);
    }
    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <div className="space-y-4 pt-12">
                    <h1 className="text-center font-bold">Count is {count}</h1>
                    <div className="text-center">
                        <button onClick={increaseCount} className="btn bg-green-400 text-white py-2 px-4">Increase</button>
                        <button onClick={decreseCount} className="btn bg-red-400 text-white py-2 px-4">Decrease</button>
                    </div>
                    <div className="text-center">
                        <button onClick={resetCount} className="btn bg-black text-white py-2 px-4">Reset</button>
                    </div>
            </div>
        </>
     );
 }

export default FunctionalComponentWithState;