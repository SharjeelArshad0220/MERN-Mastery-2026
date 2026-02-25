export function FoodOrderCard({restaurantName, dish, price, deliveryTime, isAvailable}) {
    return (
        <>
        <h1>{restaurantName}</h1>
        <p>{dish} at <strong>{price}</strong></p>
        <p> 🕒 {deliveryTime} mins</p>
        {isAvailable && <button>Order Now 🍕</button>}
        {!isAvailable && <span className="bg-red-900">Currently unavailable</span>}
        </>
    )
}
export default FoodOrderCard