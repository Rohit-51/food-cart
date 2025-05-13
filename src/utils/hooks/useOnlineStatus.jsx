import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true);
            console.log("You are online!")
        });

        window.addEventListener('ofline', () => {
            setOnlineStatus(false);
            console.log("You are offline!")
        })
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;