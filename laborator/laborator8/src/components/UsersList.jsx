import React, { useEffect, useState } from 'react';
import User from "./User";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <section className="max-w-6xl mx-auto mt-10 p-4">
            <header className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Lista Utilizatori</h2>
                <p className="text-sm text-gray-500">Total: {users.length}</p>
            </header>

            <div className="bg-emerald-50 rounded-lg p-4 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-stretch">
                    {users.map( user => (
                        <User 
                            key={user.id}
                            {...user} 
                        />
                    ) )}
                </div>
            </div>
        </section>
    );
}

export default UsersList;
