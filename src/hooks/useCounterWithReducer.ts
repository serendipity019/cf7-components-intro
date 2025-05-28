import { useReducer} from 'react';

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

type  Action = 
    | { type: 'INCREASE' }
    | { type: 'DECREASE' }
    | { type: 'RESET' };  

const initialState: CounterState = {
    count: 0,
    lastAction: '',
    time: ''
};

 const getCurrentTime = () =>  new Date().toLocaleTimeString(); 
    
function counterReducer(state: CounterState, action: Action): CounterState { 
    switch (action.type) {
        case 'INCREASE':
            return {
                count: state.count + 1,
                lastAction: 'Increase',
                time: getCurrentTime()
            };
        case 'DECREASE':
            if (state.count > 0) {
                return {
                    count: state.count - 1,
                    lastAction: 'Decrease',
                    time: getCurrentTime()
                };
            }
            return state; // No change if count is already 0
        case 'RESET':
            return {
                count: initialState.count,
                lastAction: 'Reset',
                time: getCurrentTime()
            };
        default:
            return state;
    }
}    

const useCounterWithReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const increaseCount = () => {
        dispatch({ type: 'INCREASE' });
    };
    const decreseCount = () => {
        dispatch({ type: 'DECREASE' });
    }
    const resetCount = () => {
        dispatch({ type: 'RESET' });
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

export { useCounterWithReducer };
