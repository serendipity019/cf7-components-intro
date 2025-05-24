import { useState } from 'react';
import CounterButton from './CounterButton';

const Counter= () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => { 
        setCount(count + 1);
    }

    const decreseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <div className="space-y-4 pt-12">
                    <h1 className="text-center font-bold">Count is {count}</h1>
                    <div className="text-center">
                        {/* <button onClick={increaseCount} className="btn bg-green-400 text-white py-2 px-4">Increase</button>
                        <button onClick={decreseCount}
                        disabled={count === 0}
                        className="btn disabled:bg-gray-600 bg-red-400 text-white py-2 px-4">Decrease</button> */}
                        <CounterButton onClick={increaseCount} label="Increase" bgClass="bg-green-400 "  />
                        <CounterButton onClick={decreseCount} disabled={count === 0} label="Decrease" bgClass='bg-red-400' />
                    </div>
                    <div className="text-center">
                        {/* <button onClick={resetCount}
                        disabled={count === 0}
                        className="btn bg-black disabled:bg-gray-600 text-white py-2 px-4 hover">Reset</button> */}
                        <CounterButton onClick={resetCount} disabled={count === 0} bgClass="bg-cf-dark-red" label="Reset" />
                    </div>
            </div>
        </>
     );
 }

export default Counter;