export function ProductCard({name, price, imageURL, rating, inStock, brand}) {
    return (
        <div className="group relative max-w-[280px] overflow-hidden rounded-2xl m-2 bg-white p-3 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            {/* Image Container with subtle background */}
            <div className="relative mb-4 h-52 w-full overflow-hidden rounded-xl bg-gray-50">
                <img 
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" 
                    src={imageURL} 
                    alt={name} 
                />
                {/* Brand Tag overlay */}
                <span className="absolute top-2 left-2 rounded-lg bg-white/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-600 backdrop-blur-md">
                    {brand}
                </span>
            </div>

            <div className="px-1">
                {/* Product Name */}
                <h2 className="mb-1 truncate text-lg font-bold text-gray-800" title={name}>
                    {name}
                </h2>
                
                {/* Rating & Stock Row */}
                <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-1.5 py-0.5">
                        <span className="text-sm font-bold text-yellow-700">{rating}</span>
                        <span className="text-xs text-yellow-500">★</span>
                    </div>
                    <span className={`text-[11px] font-bold uppercase ${inStock ? "text-green-600" : "text-red-500"}`}>
                        {inStock ? "● In Stock" : "Out of Stock"}
                    </span>
                </div>

                {/* Price and Action Row */}
                <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                    <div>
                        <p className="text-xs text-gray-400">Price</p>
                        <p className="text-xl font-black text-gray-900">Rs. {price}</p>
                    </div>
                    <button className="rounded-full bg-blue-600 p-2 text-white shadow-md transition-colors hover:bg-blue-700">
                        <svg xmlns="http://www.w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Refined-Cart-Icon" />
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ProductCard