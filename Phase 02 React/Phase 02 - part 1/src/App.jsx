import './firstTail.css'
import {ProductCard} from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/Practice files/ProductCard.jsx";
import {ReviewCard} from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/Practice files/review Card.jsx";
import {Badge} from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/Practice files/City badge.jsx";
// ============================================
// FILE: App.jsx  
// PURPOSE: Parent that uses ProductCard
// ============================================
export function App() {
return (
<div className="product-grid ">
<h1>🛍Lahore Electronics</h1>
<ProductCard 
name="Samsung 55\4K TV"
price={95000}
rating={4}
inStock={true}
/>
<ProductCard 
name="JBL Bluetooth Speaker"
price={12500}
rating={5}
inStock={true}
/>
<ReviewCard 
customerName="Ahmed Raza"
city="Lahore"
reviewText="Bohat acha product hai! Highly recommend."
stars={4}
verified={true}
/>
</div>
);
}
export default App