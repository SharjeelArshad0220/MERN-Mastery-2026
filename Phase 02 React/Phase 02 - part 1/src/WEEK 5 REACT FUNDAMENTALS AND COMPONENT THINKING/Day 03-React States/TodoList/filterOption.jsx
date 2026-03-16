export default function FilterOptions({filter, setFilter }) {
    return (
        <select name="filterTask" id="filterTask" className="filterOptions" value={filter} onChange={(e) => { setFilter(e.target.value) }}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Remaining">Remaining</option>
        </select>
    )
}