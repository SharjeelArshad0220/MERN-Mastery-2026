export function  CityBadge({city,province,population}) {
    return (
<>
<h1>Hey there <strong>Welcome in</strong> {city}</h1>
<p>This city is located in {province} and have a total population of {population.toLocaleString()}</p>
</>
    );
}
export default CityBadge