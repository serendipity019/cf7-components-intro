import { useEffect } from "react";


const ExamplesPage = () => {
    useEffect(() => {
    document.title = "CF7 Examples";
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold mt-12">Examples</h1>
        </>
    );
}

export default ExamplesPage;