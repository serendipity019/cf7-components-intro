import { useEffect, useState } from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
};

const initialValues: FormValues = {
    name: "",
    email: "",
    message: ""
};

const validateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.name.trim()) {
        errors.name = "Name is required";
    }

    if (!values.email.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
        errors.email = "Email is invalid";
    }

    if (values.message.trim().length < 5) {
        errors.message = "Message must be at least 5 characters long";
    }
    return errors;
};

const MultiFieldFormWithValidation = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
    const [errors, setErrors] = useState<FormErrors | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: undefined
        }));
    };

    const handleClear = () => {
        setValues(initialValues); 
        setSubmittedData(null); // Clear submitted data
        setErrors(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors: FormErrors = validateForm(values); 
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmittedData(null);
            return;
        }

        setSubmittedData(values);
        console.log(values);
        setValues(initialValues);
        setErrors(null);
    };

    useEffect(() => {
        document.title = "Multi Field Form";
    }, []);

    return (
        <>
            <form className=" text-center mt-8 space-y-4 flex flex-col max-w-md mx-auto"
                onSubmit = {handleSubmit}>

                <div>
                    <input type="text"
                 className="px-4 py-2 rounded border "
                 name = "name"
                 value={values.name}
                 placeholder="name"
                 onChange={handleChange}
                  />

                    {errors?.name && <p className="text-cf-dark-red text-sm">{errors.name}</p>}
                </div>

                <div>
                    <input type="email"
                 className="px-4 py-2 rounded border "
                 name = "email"
                 value={values.email}
                 placeholder="email"
                 onChange={handleChange}
                  /> 

                  {errors?.email && <p className="text-cf-dark-red text-sm">{errors.email}</p>}
                </div> 
                
                <div>
                    <textarea name="message" className="px-4 py-2 rounded border " 
                    placeholder="type your message"
                    value={values.message}
                    onChange={handleChange}
                ></textarea>

                    {errors?.message && <p className="text-cf-dark-red text-sm">{errors.message}</p>}
                </div>

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

export default MultiFieldFormWithValidation;