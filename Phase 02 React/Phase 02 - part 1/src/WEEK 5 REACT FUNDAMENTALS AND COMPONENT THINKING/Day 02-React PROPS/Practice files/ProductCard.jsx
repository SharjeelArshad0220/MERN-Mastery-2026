// ============================================
// FILE: ProductCard.jsx
// PURPOSE: Reusable card component for products
// ============================================
export function ProductCard({ name, price, rating, inStock }) {
// Destructure 4 props from parent
// Helper: Convert number to star string
// If rating=4, creates "
const stars = '⭐'.repeat(rating);
return (
<div className="product-card">
{/* Product name */}
<h3>{name}</h3>
{/* Price formatted with commas for Pakistani Rupees */}
<p className="price">Rs. {price.toLocaleString()}</p>
{/* Rating using our stars helper */}
<p className="rating">{stars} ({rating}/5)</p>
{/* Conditional: Different UI for stock status */}
{inStock 
? <button className="btn-add">Add to Cart</button>
: <button className="btn-disabled" disabled>Out of Stock</button>
}
</div>
);
}
