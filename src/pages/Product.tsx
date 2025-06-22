import { useNavigate, useParams } from "react-router";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getProduct, productFormSchema, updateProduct } from "@/api/products";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {type ProductType } from "@/api/products";
import { useEffect } from "react";
import { toast } from "sonner";

type ProductModeProps = {
    mode?: "create" | "edit";
}

const Product = ({mode}: ProductModeProps) => {
    const {productId} = useParams();
    const navigate = useNavigate;
    const isEdit: boolean = mode === "edit" || (!productId && mode === "create");

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {errors, isSubmitting},
        reset
    } = useForm({
        resolver: zodResolver(productFormSchema),
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

    const onSubmit = async (data: Omit<ProductType, "id">) => {
        try {
            if(productId){
                await updateProduct(Number(productId), data);
                toast.success("Product updated successfully");
            }

            navigate("/products");
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Something went wrong"
            )
        }
    }

    useEffect(() => {
        if (productId) {
            getProduct(Number(productId))
              .then((data) => {
                //setValue("name", data.name ?? "");
                const values = {
                    name: data.name ?? "",
                    slug: data.slug ?? "",
                    description: data.description ?? "",
                    image: data.image ?? "",
                    price: data.price ?? 0,
                    sort: data.sort ?? 0,
                    is_active: data.is_active ?? false,
                    is_favorite: data.is_favorite ?? false,
                    category_id: 1
                }
                reset(values);
              }).catch((err) => {
                console.log(err);
              })
        }
    }, [productId, reset]);

    return (
        <>
            <form className="max-w-xl mx-auto mt-12 p-8 border rounded-lg space-y-6" 
            onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-xl font-bold">
                    {isEdit ? "Edit Product" : "Create New Product"}
                    </h1>
                <div>
                    <Label htmlFor="name" className="mb-1">Name</Label> 
                    {/* //The htmlFor = "fieldName" connected with the id="fieldName" below in Input element */}
                    <Input id="name" {...register("name")}/>
                    {errors.name && (
                        <div className="text-cf-dark-red texy-sm">{errors.name.message}</div>
                    )}
                </div>

                <div>
                    <Label htmlFor="slug" className="mb-1">Slug</Label>
                    <Input id="slug" {...register("slug")}/>
                    {errors.slug && (
                        <div className="text-cf-dark-red texy-sm">{errors.slug.message}</div>
                    )}
                </div>

                <div>
                    <Label htmlFor="description" className="mb-1">Description</Label>
                    <Textarea id="description" {...register("description")}/>
                    {errors.description && (
                        <div className="text-cf-dark-red texy-sm">{errors.description.message}</div>
                    )}
                </div>

                <div>
                    <Label htmlFor="image" className="mb-1">Image</Label>
                    <Input id="image" {...register("image")}/>
                    {errors.image && (
                        <div className="text-cf-dark-red texy-sm">{errors.image.message}</div>
                    )}
                </div>

                <div>
                    <Label htmlFor="price" className="mb-1">Price</Label>
                    <Input id="price" {...register("price")}/>
                    {errors.price && (
                        <div className="text-cf-dark-red texy-sm">{errors.price.message}</div>
                    )}
                </div>

                <div>
                    <Label htmlFor="sort" className="mb-1">Sort</Label>
                    <Input id="sort" {...register("sort")}/>
                    {errors.sort && (
                        <div className="text-cf-dark-red texy-sm">{errors.sort.message}</div>
                    )}
                </div>

                <div className="flex items-center space-x-2">
                    <Label htmlFor="is_active" className="mb-1">Active</Label>
                    <Switch id="is_active"
                    checked={watch("is_active")}
                    onCheckedChange={(v) => setValue("is_active", v)}
                        />
                </div>
                <div className="flex items-center space-x-2">
                    <Label htmlFor="is_favorite" className="mb-1">Favorite</Label>
                    <Switch id="is_favorite"
                    checked={watch("is_favorite")}
                    onCheckedChange={(v) => setValue("is_favorite", v)}/>
                </div>     
                
                <Button variant={"default"} type="submit"
                    disabled={isSubmitting}
                >{ isSubmitting ? "Submitting..." : "Submit"}</Button>   
                
            </form>
        </>
    );
};

export default Product;