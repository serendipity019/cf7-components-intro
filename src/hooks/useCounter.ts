import { useState } from 'react';

export const useCounter = (initialValue: number = 0) => {
    const [count, setCount] = useState(initialValue);
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

    return {
        count,
        lastAction,
        time,
        increaseCount,
        decreseCount,
        resetCount
    };
}