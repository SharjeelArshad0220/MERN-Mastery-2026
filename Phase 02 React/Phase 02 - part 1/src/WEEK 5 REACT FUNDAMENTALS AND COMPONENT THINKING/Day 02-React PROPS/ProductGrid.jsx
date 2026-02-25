import ProductCard from "./ProductCard";
export function ProductGrid() {
    const products = [
    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        brand: "Sony",
        price: 24999,
        imageURL: "https://images.unsplash.com",
        rating: 4.8,
        inStock: true
    },
    {
        id: 2,
        name: "Mechanical Gaming Keyboard",
        brand: "Keychron",
        price: 8500,
        imageURL: "https://images.unsplash.com",
        rating: 4.5,
        inStock: true
    },
    {
        id: 3,
        name: "Smart Fitness Watch",
        brand: "Apple",
        price: 45000,
        imageURL: "https://images.unsplash.com",
        rating: 4.9,
        inStock: false
    },
    {
        id: 4,
        name: "Minimalist Leather Backpack",
        brand: "Bellroy",
        price: 12000,
        imageURL: "https://images.unsplash.com",
        rating: 4.2,
        inStock: true
    },
    {
        id: 5,
        name: "Portable Bluetooth Speaker",
        brand: "JBL",
        price: 5500,
        imageURL: "https://images.unsplash.com",
        rating: 4.0,
        inStock: true
    },
    {
        id: 6,
        name: "Professional Mirrorless Camera",
        brand: "Canon",
        price: 185000,
        imageURL: "https://images.unsplash.com",
        rating: 4.7,
        inStock: false
    }];
    return (
        <>
            <div className="p-10 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Shop</h1>
                <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
           {products.map(product => (<ProductCard {...product}/>))}
        </div> 
        </div> 
        </>
        )}
        export default ProductGrid