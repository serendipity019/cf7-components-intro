import { useParams } from "react-router";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/api/products";

const Product = () => {
    const {productId} = useParams();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {errors, isSubmitting},
        reset
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            slug: "",
            description: "",
            image: "",
            price: 0,
            is_active: false,
            is_favorite: false,
            sort: 0,
            category_id: 1 //Deafault the number 1
        }
    });

    return (
        <>
        
        </>
    );
};

export default Product;