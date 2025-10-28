import React from 'react';

const User = ({ username, email, password }) => {
    const displayName = username || 'Utilizator';
    const initials = (displayName.match(/\b\w/g) || []).slice(0,2).join('').toUpperCase() || 'U';

    return (
        <article className="w-64 bg-white rounded-lg shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 p-4 flex flex-col" aria-label={`Utilizator ${displayName}`}>
            <div className="flex items-center gap-3">
                <div className="flex-none h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold text-lg">{initials}</div>
                <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">{displayName}</h3>
                    {email && <p className="text-xs text-gray-500 truncate">{email}</p>}
                </div>
            </div>

            <div className="mt-3 text-sm text-gray-700">
                <div>
                    <span className="font-medium text-gray-800">Email: </span>
                    {email ? (
                        <a className="text-emerald-600 hover:underline" href={`mailto:${email}`}>{email}</a>
                    ) : (
                        <span className="text-gray-400">—</span>
                    )}
                </div>

                <div className="mt-1">
                    <span className="font-medium text-gray-800">Parola: </span>
                    <span className="text-gray-600">{password ? '•'.repeat(Math.min(password.length, 8)) : '—'}</span>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <button type="button" className="ml-auto inline-flex items-center px-3 py-1.5 bg-emerald-600 text-white text-sm rounded-md hover:bg-emerald-700 focus:outline-none">Vezi</button>
                <a href={email ? `mailto:${email}` : '#'} className="inline-flex items-center px-3 py-1.5 bg-white border border-emerald-200 text-emerald-700 text-sm rounded-md hover:bg-emerald-50">Contact</a>
            </div>
        </article>
    );
}

export default User;
