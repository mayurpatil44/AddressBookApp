let addressBookList;
window.addEventListener("DOMContentLoaded", (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHtml();
    localStorage.removeItem("editAddress");
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = "<tr><th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th></tr>"
    if (addressBookList.length == 0) return;
    let innerHtml = `${headerHtml}`
    for (const contact of addressBookList) {
        innerHtml = `${innerHtml}
    <tr>
    <td>${contact._name}</td>
    <td>${contact._address}</td>
    <td>${contact._city}</td>
    <td>${contact._state}</td>
    <td>${contact._zip}</td>
    <td>${contact._phoneNumber}</td>
    <td>
        <img id="${contact._name}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="${contact._name}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
 </tr>
    `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const remove = (node) => {
    let personData = addressBookList.find(data => data._name == node.id);
    if (!personData) return;
    const index = addressBookList.map(data => data._name).indexOf(personData._name);
    addressBookList.splice(index, 1);
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHtml();
}

const update = (node) => {
    let personData = addressBookList.find(data => data._name == node.id);
    if (!personData) return;
    localStorage.setItem("editAddress", JSON.stringify(personData));
    window.location.replace(site_properties.add_addressBook_page);
};