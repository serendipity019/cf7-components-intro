import { useEffect, useState } from "react";
import {z} from "zod";

const formSchema = z.object({
    name: z.string().min(3, "Name is required").trim(),
    email: z.string().trim().nonempty("Email is required.")
    .email("Email is invalid"),
    message: z.string().min(5, "Message must be at least 5 characters long").trim()
});

type FormValues = z.infer<typeof formSchema>;

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


const MultiFieldFormWithZodValidation = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
    const [errors, setErrors] = useState<FormErrors | null>(null);

    const validateForm = ()=> {
    const result = formSchema.safeParse(values);
    //{success: true, data: validatedData} 
    //{success: false, error: errors}

    if (!result.success) {
        const newErrors: FormErrors = {};
        result.error.issues.forEach((issue) => {
            const fieldName = issue.path[0] as keyof FormValues;
            newErrors[fieldName] = issue.message;
        });
        setErrors(newErrors);
        return false;    
    }

    setErrors({});
    return true;    
    };

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
        setErrors({});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid: boolean = validateForm(); 
        if (isValid) {
            setSubmittedData(values);
            setValues(initialValues);
        }
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
                    <input type="text"
                 className="px-4 py-2 rounded border "
                 name = "email"
                 value={values.email}
                 placeholder="email"
                 onChange={handleChange}
                 autoComplete= "off"
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

export default MultiFieldFormWithZodValidation;