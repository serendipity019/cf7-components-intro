import { useState } from 'react';

const todoForm = () => { 
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
    }
    
    return (
        <>
         <form className="flex gap-4 mb-4" onSubmit={handleSubmit} >
            <input type="text" className="flex-1 border p-2 rounded "
             placeholder="New task..."
             value={text}
             onChange={handleChange} />
            <button type="submit" className="bg-cf-dark-grey text-white px-4 py-2 rounded">Add</button>
        </form>
        </>
    ) 
} 

export default todoForm;