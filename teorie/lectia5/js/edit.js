const URL_PRODUCTS = "http://localhost:3000/products";

const getProductByID = async (productId) => {
    const response = await fetch(`${URL_PRODUCTS}/${productId}`);
    const data = await response.json();
    return data;
}

const updateProduct = async (product, id) => {
    const response = await fetch(`${URL_PRODUCTS}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    });
    return response.json();
}

const completeData = (product, editForm) => {
    editForm.nume.value = product.nume;
    editForm.departament.value = product.departament;
    editForm.pret.value = product.pret;
}

const main = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const editForm = document.querySelector("#edit-product");

    if (id) {
        const product = await getProductByID(id);
        completeData(product, editForm);
        editForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const newProduct = {
                "nume": e.target.nume.value,
                "departament": e.target.departament.value,
                "pret": e.target.pret.value
            }
            const response = await updateProduct(newProduct, id);
            if(response){
                window.location.href = "index.html";
            }
        });
    }
}

main();