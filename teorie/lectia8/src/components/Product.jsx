import React from 'react';

const Product = ({
    id, title, price, description, category, image
}) => {
    // small helper to truncate description
    const short = (text, n = 100) => text?.length > n ? text.slice(0, n) + '…' : text;

    return (
        <article className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col">
            <div className="relative h-44 bg-slate-50 flex items-center justify-center">
                <img src={image} alt={title} className="max-h-40 object-contain" />
                <span className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded text-lime-800 bg-lime-200/80">{category}</span>
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-600 mb-3 flex-1">{short(description, 120)}</p>

                <div className="mt-3 flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-slate-900">${price}</span>
                        <span className="text-xs text-slate-500">incl. VAT</span>
                    </div>

                    <button aria-label={`Adaugă ${title} în coș`} className="inline-flex items-center gap-2 rounded-md bg-lime-600 hover:bg-lime-700 focus:bg-lime-700 text-white px-3 py-2 text-sm font-medium shadow-sm transition">
                        Adaugă
                    </button>
                </div>
            </div>
        </article>
    );
}

export default Product;
