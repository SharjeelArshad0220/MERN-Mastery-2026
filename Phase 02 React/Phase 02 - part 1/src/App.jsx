import './firstTail.css'
import ProductGrid from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/ProductGrid.jsx";
// ============================================
// FILE: App.jsx  
// PURPOSE: Parent that uses ProductCard
// ============================================
export function App() {
return (
<div className="product-grid ">
    {/* <ProductCard
        name='Samsung 55 "4K TV"'
        price={95000}
        imageURL='https://m.media-amazon.com/images/I/91s+qjvXoL._SL1500_.jpg' 
        rating={4}
        inStock={true}
        brand="Samsung"
    />
    <ProductCard
        name="Apple iPhone 14 Pro"
        price={120000}
        imageURL='https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg' 
        rating={4.5}
        inStock={false}
        brand="Apple"
    />
    <ProductCard
        name="Sony WH-1000XM4 Headphones"
        price={25000}
        imageURL='https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg' 
        rating={4.7}
        inStock={true}
        brand="Sony"
    />   */}
    <ProductGrid />

</div>
);
}
export default App