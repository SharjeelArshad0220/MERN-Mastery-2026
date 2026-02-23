
export function ReviewCard({ customerName, city, reviewText, stars, verified }) {
// TODO 1: Create a variable 'starEmojis' that repeats '
const starEmojis ="⭐".repeat(stars) ;
return (
<div className="review-card">
{/* TODO 2: Display the customerName in an <h4> tag */}
<h4>{customerName}</h4>
{/* TODO 3: Display city in a <p> tag with text "From: {city}" */}
<p>From " {city}</p>
{/* TODO 4: Display starEmojis in a paragraph */}
<p>{starEmojis}</p>
{/* TODO 5: Show reviewText inside quotes */}
<p>"{reviewText}"</p>
{/* TODO 6: Only show "
✅
 Verified Purchase" if verified is true */}
{verified && <span>✅Verified Purchase</span>}
</div>
);
}
