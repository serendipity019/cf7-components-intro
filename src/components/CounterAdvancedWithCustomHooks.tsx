import { useAdvancedCounter } from "../hooks/useAdvancedCounter";
import CounterButton  from "./CounterButton";

const CounterWithCustomHooks = () => {
    // Custom hook to manage counter state
    const {count, lastAction, time, increaseCount, decreseCount, resetCount} = useAdvancedCounter();
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

export default CounterWithCustomHooks;