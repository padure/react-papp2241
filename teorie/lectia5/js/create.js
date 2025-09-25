import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';

const URL_PRODUCTS = "http://localhost:3000/products";

const addProductsForm = document.querySelector('#add-products');

const createProduct = async (product) => {
    const response = await fetch(URL_PRODUCTS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    });
    return response.json();
}

addProductsForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const product = {
        id: uuidv4(),
        nume: e.target.nume.value,
        departament: e.target.departament.value,
        pret: parseFloat(e.target.pret.value)
    };
    const newProduct = await createProduct(product);
    
    window.location.href = "index.html";
});