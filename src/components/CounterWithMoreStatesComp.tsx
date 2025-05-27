import { useState } from 'react'; 
import CounterButton from './CounterButton';

const CounterWithMoreStatesComp = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState('');
    const [time , setTime] = useState("");

    const getCurrentTime = () =>  new Date().toLocaleTimeString(); 

     const increaseCount = () => { 
        setCount(count + 1);
        setLastAction('Increase');
        setTime(getCurrentTime());
    }

    const decreseCount = () => {
        if (count > 0) {
            setCount(count - 1);
            setLastAction('Decrease');
            setTime(getCurrentTime());
        }
    }

    const resetCount = () => {
        setCount(0);
        setLastAction('Reset');
        setTime(getCurrentTime());
    }

    return (
        <>
            <div className="space-y-4 pt-12">
                    <h1 className="text-center font-bold">Count is {count}</h1>
                    <div className="text-center">
                        <CounterButton onClick={increaseCount} label="Increase" bgClass="bg-green-400 "  />
                        <CounterButton onClick={decreseCount} disabled={count === 0} label="Decrease" bgClass='bg-red-400' />
                    </div>
                    <div className="text-center">
                        <CounterButton onClick={resetCount} disabled={count === 0} bgClass="bg-cf-dark-red" label="Reset" />
                    </div>
            </div>
            <p className='text-center pt-8'>Last change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
        </>
    )
 }


export default CounterWithMoreStatesComp;