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
            <div class="flex gap-2 mt-4">
                <a href="edit.html?id=${product.id}" class="bg-sky-300 hover:bg-sky-200 text-white px-2 py-1 rounded">Edit</a>
                <button data-id="${product.id}" class="delete-btn bg-sky-600 hover:bg-sky-400 text-white px-2 py-1 rounded">Delete</button>
            </div>
        </div>`;
}

const deleteProduct = async (id) => {
    const response = await fetch(`${URL_PRODUCTS}/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        console.error("Eroare la stergere!");
    }
}

const main = async () => {
    const products = await getDataFromURL(URL_PRODUCTS);
    const productsElement = document.querySelector("#product-list");
    products.forEach((product) => {
        productsElement.innerHTML += cardTemplate(product);
    });

    const deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            if (confirm("Esti sigur?")) {
                const id = e.target.getAttribute('data-id');
                await deleteProduct(id);
                main();
            }
        });
    });
}

main();