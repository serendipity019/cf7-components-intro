import { useEffect } from "react";
import { useParams } from "react-router";

const UserPage = () => {
    const {userId} = useParams<{userId: string}>();

    useEffect(() => {
        document.title = `CF7 User id: ${userId}`;
    }, [userId]);
    return (
        <>
            <h1>user with id: {userId}</h1>
        </>
    );
}

export default UserPage;