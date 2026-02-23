import {useState} from "react";
function IdCard() {
    const studentName = "Noor";
    const marks = 95;
    return (
        <>
            <div className="student-card" >
                <h1>Student:<br />{studentName}</h1>
                <p>Marks: {marks}</p>
                <p style={{ color: "green" }}>Status: {marks >= 50 ? 'Pass' : 'Fail'}</p>
                <img src="student.jpg" />
                <br />
                <input type="text" />
            </div>
        </>
                );
}
export function ProductCard(){
    function addToCart() {
    alert("Product added to cart!");
}
return (<div className="product-card">
                <div style={
                    {                
                backgroundImage: "url('https://picsum.photos/200')", 
                height: "200px", 
                width: "200px", 
                backgroundSize: "cover",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center"
                    }
                }>
                </div>
                    <h2>Chicken Biryani</h2>
                    <p style={{ color: "red", fontWeight: "bold" }}>"Rs. 350"</p>
                    <input type="number" />
                        <button onClick={() => addToCart()}>Add to Cart</button>
            </div>);
}
 
export default IdCard;