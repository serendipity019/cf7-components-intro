import {z} from 'zod';

const API_URL: string = import.meta.env.VITE_API_URL;
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID;

export const productSchema = z.object({
    id: z.coerce.number().int(),
    name: z.string().min(1, "Required"),
    slug: z.string().min(1, "Required")
    .regex(/^[a-zA-Z0-9-_]+$/, "Slug must use only Latin letters, numbers, - or _"),
    description: z.string().optional().or(z.literal("")),
    image: z.string().url("Must be a valid URL").optional(),
    price: z.coerce.number().nonnegative(),
    is_active: z.boolean(),
    is_favorite:z.boolean(),
    sort: z.coerce.number().int().min(0, "Must greater than 0"),
    category_id: z.coerce.number().min(1, "Category is Required")
});

export const productFormSchema = productSchema.omit({id: true});

export type ProductType = z.infer<typeof productSchema>; 

// export type Product = {
//     id: number,
//     name: string,
//     slug: string,
//     description?: string,
//     image?: string,
//     price: string,
//     is_active: boolean,
//     is_favorite:boolean,
//     sort: number,
//     category_id?: number
// } // We used zod eventually

export async function getProducts():Promise<ProductType[]> {
    const response = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`);
    if (!response.ok) throw new Error ("Failed to fetch products.")
    return await response.json();
}

export async function getProduct(id:number): Promise<ProductType> {
    const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product.");
    return await res.json();
}

export async function updateProduct(
    id:number,
    data: {
        name: string;
        slug: string;
        description?: string | undefined;
        image?: string | undefined;
        price: string;
        is_active: boolean;
        is_favorite: boolean;
        sort: number;
    }
): Promise<ProductType> {
    const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Failed to update product.");
    return await res.json();
}

export async function deleteProduct(id: number): Promise<void>{
    const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error("Failed to delete product.");
}