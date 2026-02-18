import {useState} from "react";
function BrokenComponent() {
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
 const numberWords = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
  "Twenty-One", "Twenty-Two", "Twenty-Three", "Twenty-Four", "Twenty-Five", "Twenty-Six", "Twenty-Seven", "Twenty-Eight", "Twenty-Nine", "Thirty",
  "Thirty-One", "Thirty-Two", "Thirty-Three", "Thirty-Four", "Thirty-Five", "Thirty-Six", "Thirty-Seven", "Thirty-Eight", "Thirty-Nine", "Forty",
  "Forty-One", "Forty-Two", "Forty-Three", "Forty-Four", "Forty-Five", "Forty-Six", "Forty-Seven", "Forty-Eight", "Forty-Nine", "Fifty",
  "Fifty-One", "Fifty-Two", "Fifty-Three", "Fifty-Four", "Fifty-Five", "Fifty-Six", "Fifty-Seven", "Fifty-Eight", "Fifty-Nine", "Sixty",
  "Sixty-One", "Sixty-Two", "Sixty-Three", "Sixty-Four", "Sixty-Five", "Sixty-Six", "Sixty-Seven", "Sixty-Eight", "Sixty-Nine", "Seventy",
  "Seventy-One", "Seventy-Two", "Seventy-Three", "Seventy-Four", "Seventy-Five", "Seventy-Six", "Seventy-Seven", "Seventy-Eight", "Seventy-Nine", "Eighty",
  "Eighty-One", "Eighty-Two", "Eighty-Three", "Eighty-Four", "Eighty-Five", "Eighty-Six", "Eighty-Seven", "Eighty-Eight", "Eighty-Nine", "Ninety",
  "Ninety-One", "Ninety-Two", "Ninety-Three", "Ninety-Four", "Ninety-Five", "Ninety-Six", "Ninety-Seven", "Ninety-Eight", "Ninety-Nine", "One Hundred"
];
export function Counter() {
    const initialCount=5//iska kya maqsad ha mere task main ?
    const [count, setCount] = useState(initialCount);
    let counterColor="";
    if (count === 0) {
        counterColor='gray'
    } else if(count>0 && count<6) {
        counterColor='green'
    }
    else if(count===100){
        counterColor='purple'
    }
    else{
        counterColor='red'
    }
    return (
        <div>
            <h1>Count App</h1>
            <p style={{ color:counterColor , fontSize: '48px', fontWeight: 'bold' }}>{numberWords[count]}:{count}</p>
            <button onClick={() => setCount(prev=>prev<100?prev+1:prev+0)} style={{margin:"15px"}}>Increment</button>
            <button onClick={() => setCount(prev=>prev<=95?prev+5:prev+0)} style={{margin:"15px"}}>+5</button>
            <button onClick={() => setCount(prev=>prev>0?prev-1:prev-0)} style={{margin:"15px"}}>Decrement</button>
            <button onClick={() => setCount(0)} style={{margin:"15px"}}>Reset</button>
        </div>
    );
}
export default BrokenComponent;