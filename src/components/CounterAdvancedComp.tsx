import { useState } from 'react'; 
import CounterButton from './CounterButton';

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

const CounterAdvancedComp = () => {
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

    return (
        <>
            <div className="space-y-4 pt-12">
                    <h1 className="text-center font-bold">Count is {state.count}</h1>
                    <div className="text-center">
                        <CounterButton onClick={increaseCount} label="Increase" bgClass="bg-green-400 "  />
                        <CounterButton onClick={decreseCount} disabled={state.count === 0} label="Decrease" bgClass='bg-red-400' />
                    </div>
                    <div className="text-center">
                        <CounterButton onClick={resetCount} disabled={state.count === 0} bgClass="bg-cf-dark-red" label="Reset" />
                    </div>
            </div>
            <p className='text-center pt-8'>Last change: <strong>{state.lastAction || "-"}</strong> at <strong>{state.time || "-"}</strong></p>
        </>
    )
 }


export default CounterAdvancedComp;