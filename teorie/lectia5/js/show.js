const URL_PRODUCTS = "http://localhost:3000/products";

const getProductByID = async (productId) => {
    const response = await fetch(`${URL_PRODUCTS}/${productId}`);
    const data = await response.json();
    return data;
}

const main = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const productInfo = document.querySelector("#product-info");

    if (id) {
        const product = await getProductByID(id);
        productInfo.innerHTML = `<h2 class="text-2xl font-bold text-sky-700 mb-2">${product.nume}</h2>
            <p class="text-sky-600 text-lg mb-4 font-medium">Departament: 
            <span class="font-semibold">${product.departament}</span></p>
            <div class="flex items-center mb-4">
                <span class="text-xl font-bold text-sky-800 mr-2">Preț:</span>
                <span class="text-xl text-sky-700">${product.pret} Lei</span>
            </div>
            <div class="w-full text-center mt-2">
                <span class="text-xs text-sky-400 bg-sky-100 px-2 py-1 rounded">ID: ${product.id}</span>
            </div>`;        
    }
}

main();