import './firstTail.css'
import {ProductCard} from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/Practice files/ProductCard.jsx";
import {ReviewCard} from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/Practice files/review Card.jsx";
import Badge from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/Practice files/City badge.jsx";
import OrderCard from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/Practice files/FoodOrderCard.jsx";
import StudentCard from "./WEEK 5 REACT FUNDAMENTALS AND COMPONENT THINKING/Day 02-React PROPS/Practice files/Student Card.jsx";
// ============================================
// FILE: App.jsx  
// PURPOSE: Parent that uses ProductCard
// ============================================
export function MainComponent() {
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

<Badge
city='Lahore'
province='Punjab'
population={13000000}
/>
<OrderCard
 restaurantName='Noor apa Biryani wali' dish='biryani' price={1002} deliveryTime="28-45" isAvailable={true}
/>
<OrderCard
 restaurantName='maja siri paye' dish='Bong paye' price={2200} deliveryTime="10-25" isAvailable={true}
/>
<OrderCard
 restaurantName='Phajja lassi wala' dish='Lassi' price={450} deliveryTime="10-15" isAvailable={false}
/>
<div id="Studentcards">
<StudentCard
studentName="Sharjeel"
rollNo="Adpcs-2026"
marks ={70}
subject="Math"
/>
<StudentCard
studentName="Sharjeel"
rollNo="Adpcs-2026"
marks ={50}
subject="D-Marketing"
/>
<StudentCard
studentName="Sharjeel"
rollNo="Adpcs-2026"
marks ={80}
subject="Ide"
/>
</div>
</div>
);
}
export default MainComponent