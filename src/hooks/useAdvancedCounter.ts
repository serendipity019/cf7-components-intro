import { useState } from 'react';

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

export const useAdvancedCounter = (initialValue: number = 0) => {
    const [state, setState] = useState<CounterState>({
            count: 0,
            lastAction: '',
            time: ''
        });

        const getCurrentTime = () =>  new Date().toLocaleTimeString(); 

     const increaseCount = () => { 
        setState({
            count: state.count + 1,
            lastAction: 'Increase',
            time: getCurrentTime()
        })
    }

    const decreseCount = () => {
        if (state.count > 0) {
            setState({
            count: state.count - 1,
            lastAction: 'Decrease',
            time: getCurrentTime()
        })
        }
    }

    const resetCount = () => {
        setState({
            count: 0,
            lastAction: 'Reset',
            time: getCurrentTime()
        })
    }

    return {
        count: state.count,
        lastAction: state.lastAction,
        time: state.time,        
        increaseCount,
        decreseCount,
        resetCount
    };
}