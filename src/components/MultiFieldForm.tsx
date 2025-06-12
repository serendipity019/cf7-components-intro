import { useEffect, useState } from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

const initialValues: FormValues = {
    name: "",
    email: "",
    message: ""
};

const MultiFieldForm = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleClear = () => {
        setValues(initialValues); 
        setSubmittedData(null); // Clear submitted data
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedData(values);
        console.log(values);
        setValues(initialValues);
    };

    useEffect(() => {
        document.title = "Multi Field Form";
    }, []);

    return (
        <>
            <form className=" text-center mt-8 space-y-4 flex flex-col max-w-md mx-auto"
                onSubmit = {handleSubmit}>
                <input type="text"
                 className="px-4 py-2 rounded border "
                 name = "name"
                 value={values.name}
                 placeholder="name"
                 required
                 onChange={handleChange}
                  />

                <input type="email"
                 className="px-4 py-2 rounded border "
                 name = "email"
                 value={values.email}
                 placeholder="email"
                 required
                 onChange={handleChange}
                  />  
                <textarea name="message" className="px-4 py-2 rounded border " 
                    placeholder="type your message"
                    required
                    value={values.message}
                    onChange={handleChange}
                ></textarea>
                <div className="flex space-x-4 justify-center">
                    <button className="bg-cf-dark-red text-white px-4 py-2 rounded"
                        type="submit"
                    >Submit</button>
                    <button className="bg-gray-200 text-cf-gray-700 px-4 py-2 rounded"
                        onClick={handleClear}
                    >Clear</button>
                </div>
            </form>

           { submittedData && (
             <div className="text-center mt-8 space-y-4 max-w-md mx-auto border">
                <h2 className="font-semibold">Submitted Data</h2>
                <p><strong>Name:</strong> {submittedData.name}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>Message:</strong> {submittedData.message}</p>
            </div>
            )}
        </>
    );
};

export default MultiFieldForm;