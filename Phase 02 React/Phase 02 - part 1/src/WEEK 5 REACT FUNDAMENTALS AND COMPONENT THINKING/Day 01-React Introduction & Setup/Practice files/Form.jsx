import { useState } from "react";
export function Form() {
    const [user, setUser] = useState({ firstName: '', email: '' });
    return (
        <>
            <br />
            <label htmlFor="name">Enter your name: </label>
            <input
            className="w-1/2 px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                id="name"
                value={user.firstName}
                onChange={(event) => setUser(prevUser => ({ ...prevUser, firstName: event.target.value }))}
            />
            <br />
            <label htmlFor="email">Enter your email: </label>
            <input
            className="w-1/2 px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                id="email"
                value={user.email}
                onChange={(event) => setUser({ ...user, email: event.target.value })}
            />
            <br />
            {user.firstName && user.email && <p className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg ">Hello <strong>{user.firstName}</strong> your email <strong>{user.email}</strong> is saved😉🤞.</p>}
        </>
    )
}
export default Form