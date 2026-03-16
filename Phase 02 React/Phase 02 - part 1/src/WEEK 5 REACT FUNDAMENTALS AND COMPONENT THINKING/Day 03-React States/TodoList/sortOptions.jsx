export default function SortOptions({sort,setSort}) {
    return (
        <select name="sort" id="sortOptions" value={sort} onChange={(e)=>{setSort(e.target.value)}}>
            <option value="Date">Date</option>
            <option value="Priority">Priority</option>
        </select>
    )
}