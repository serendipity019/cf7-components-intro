import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { deleteProduct, getProducts, type Product } from "@/api/products";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import {Pencil, Trash} from "lucide-react";



const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // this is for the loading symbol
    const [deleting, setDeleting] = useState<number | null>(null);

    const navigate = useNavigate();

    const handleDelete = async (id: number) => {
        if (!window.confirm("delete this product?")) {

        }
        await deleteProduct(id);
        setProducts((prev) => prev.filter((p) => p.id !== id));
        console.log("Product deleted successfuly");
    }

    useEffect(() => {
        document.title = "Product List"
    }, []);

    useEffect(() => {
        getProducts()
        .then((data) => setProducts(data))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="p-8 text-center">Loading...</div>

    


    return (
        <>
            <div className="p-8">
                <Table>
                    <TableCaption>A list of your products.</TableCaption>
                    <TableHeader className="bg-gray-50">
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {products.map((Product) => (
                    <TableRow key={Product.id}>
                        <TableCell className="font-medium">{Product.id}</TableCell>
                        <TableCell>{Product.name}</TableCell>
                        <TableCell>{Product.price} €</TableCell>
                        <TableCell className="text-right space-x-2">
                            <Button
                            variant="outline"
                            onClick ={() => navigate(`/products/${Product.id}`)} >
                                <Pencil/>
                            </Button>
                            <Button
                            variant="destructive"
                            onClick ={() => handleDelete(Product.id)} >
                                <Trash/>
                            </Button>
                        </TableCell>
                    </TableRow>
                        ))}
                    </TableBody>      
                </Table>
            </div>
        </>
    );
};

export default ProductList; 