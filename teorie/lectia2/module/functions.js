const displayAllusers = (users) => {
    let response = `<div class="container">`;
    users.forEach(user => response += display(user));
    response += `</div>`;
    return response;
}
const display = (template) => {
    return `<div>Utilizatorul este: ${template}</div>`;
}

export {
    displayAllusers,
}