import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    // no contract
    const [onlineSataus, setOnlineStatus] = useState(true);
    
    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });
        
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });
    })
    
    // reutrn boolean
    return onlineSataus;
}

export default useOnlineStatus;
