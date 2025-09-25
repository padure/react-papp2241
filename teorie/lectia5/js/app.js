const URL_PRODUCTS = "http://localhost:3000/products";

const getDataFromURL = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const cardTemplate = (product) => {
    return `<div class="bg-white rounded-md shadow-lg p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
            <h2 class="text-xl font-semibold text-sky-800 mb-2">${product.nume}</h2>
            <p class="text-sky-600 mb-1"><span class="font-medium">Departament:</span> ${product.departament}</p>
            <p class="text-sky-900 font-bold text-lg">Pret: ${product.pret} Mdl</p>
        </div>`;
}

const main = async () => {
    const products = await getDataFromURL(URL_PRODUCTS);
    const productsElement = document.querySelector("#product-list");
    products.forEach( (product) => {
        productsElement.innerHTML += cardTemplate(product);
    } );
}

main();