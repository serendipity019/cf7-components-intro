import { useEffect} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(3, "Name is required").trim(),
    email: z.string().trim().nonempty("Email is required.")
    .email("Email is invalid"),
    message: z.string().min(5, "Message must be at least 5 characters long").trim()
});

type FormValues = z.infer<typeof formSchema>;

// type FormErrors = {
//     name?: string;
//     email?: string;
//     message?: string;
// }; // All These don't needing cause the useForm Hook

const initialValues: FormValues = {
    name: "",
    email: "",
    message: ""
};


const MultiFieldFormWithReactHook = () => {
    // const [values, setValues] = useState<FormValues>(initialValues);
    // const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
    // const [errors, setErrors] = useState<FormErrors | null>(null);

    // const validateForm = ()=> {
    // const result = formSchema.safeParse(values);
    // //{success: true, data: validatedData} 
    // //{success: false, error: errors}

    // if (!result.success) {
    //     const newErrors: FormErrors = {};
    //     result.error.issues.forEach((issue) => {
    //         const fieldName = issue.path[0] as keyof FormValues;
    //         newErrors[fieldName] = issue.message;
    //     });
    //     setErrors(newErrors);
    //     return false;    
    // }

    // setErrors({});
    // return true;    
    // };  
    // All the above code is replaced by useForm hook

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues
    });



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

    // const handleClear = () => {
    //     setValues(initialValues); 
    //     setSubmittedData(null); // Clear submitted data
    //     setErrors({});
    // }; // We use onClear below instead of this, cause useForm.

    const onClear = () => {
        reset(); // This is from the hook: useForm 
    }

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const isValid: boolean = validateForm(); 
    //     if (isValid) {
    //         setSubmittedData(values);
    //         setValues(initialValues);
    //     }
    // };

    const onSubmit = (data: FormValues) => {
        console.log(data); // This is optional to exist
        reset(); // This is from the hook: useForm 
    }; // This is is the most simple submit cause the useForm hook.  

    useEffect(() => {
        document.title = "Multi Field Form";
    }, []);

    return (
        <>
            <form className=" text-center mt-8 space-y-4 flex flex-col max-w-md mx-auto"
                onSubmit = {handleSubmit(onSubmit)}>

                <div>
                    <input 
                    {...register("name")} // name = "name"
                    className="px-4 py-2 rounded border "
                    placeholder="name"
                    autoComplete= "off"
                    // type="text" // We use useForm hook
                    // name = "name" // We use useForm hook
                    //  value={values.name} // We use useForm hook                
                    //  onChange={handleChange} // We use useForm hook
                  />

                    {errors?.name && <p className="text-cf-dark-red text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <input 
                     {...register("email")}
                     placeholder="email"
                     className="px-4 py-2 rounded border "
                    // name = "email" // We use useForm hook
                    // value={values.email} // We use useForm hook
                    // type="text" // We use useForm hook
                    // onChange={handleChange} // We use useForm hook
                    
                  /> 

                  {errors?.email && <p className="text-cf-dark-red text-sm">{errors.email.message}</p>} 
                   {/* We add in errors above .message after email to be compatible with useForm Hook*/}
                </div> 
                
                <div>
                    <textarea 
                    {...register("message")}
                    className="px-4 py-2 rounded border " 
                    placeholder="type your message"
                    // name="message" // We use useForm hook
                    // value={values.message} // We use useForm hook
                    // onChange={handleChange} // We use useForm hook
                ></textarea>

                    {errors?.message && <p className="text-cf-dark-red text-sm">{errors.message.message}</p>}
                </div>

                <div className="flex space-x-4 justify-center">
                    <button className="bg-cf-dark-red text-white px-4 py-2 rounded"
                        type="submit"
                    >Submit</button>
                    <button className="bg-gray-200 text-cf-gray-700 px-4 py-2 rounded"
                        onClick={onClear}
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

export default MultiFieldFormWithReactHook;