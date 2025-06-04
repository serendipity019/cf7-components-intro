import { useState, useEffect } from 'react';

const OnlineStatus = () => { 

    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    useEffect(() => {
        const handler = () => {
            setIsOnline(navigator.onLine);
        }

        const pollingId: number = setInterval(handler, 5000);

        window.addEventListener('online', handler);
        window.addEventListener('offline', handler);

        // Cleanup function to remove the event listeners
        return () => {
            clearInterval(pollingId);
            window.removeEventListener('online', handler);
            window.removeEventListener('offline', handler);
        }
    }, []);

    return ( 
        <>
            <div className={`text-white text-center rounded mt-1 mx-4 p-4 ${isOnline ? 'bg-green-500' : 'bg-cf-dark-red'}`}>
                {isOnline ? "You are online!" : "You are offline!"}
            </div>
        </>
    )
}

export default OnlineStatus;