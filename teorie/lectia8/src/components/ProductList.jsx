import { useEffect, useState } from 'react';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(() => setProducts([]))
            .finally(() => setLoading(false));
    }, [])

    return (
        <section className="max-w-6xl mx-auto p-4">
            <header className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-800">Produse</h2>
                <span className="text-sm text-slate-500">{loading ? 'Se încarcă...' : `${products.length} rezultate`}</span>
            </header>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="animate-pulse rounded-lg bg-white/60 p-4 border">
                            <div className="h-40 bg-slate-200 rounded mb-3" />
                            <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
                            <div className="h-3 bg-slate-200 rounded w-1/2" />
                        </div>
                    ))}
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {products.map(product => (
                        <Product 
                            key={product.id} 
                            {...product}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ProductList;
