window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th></tr>"
    let innerHtml = `${headerHtml}`
    let addressBookList = createAddressBookJSON();
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
        <img id="${contact._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="${contact._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
 </tr>
    `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const createAddressBookJSON = () => {
    let addressBookListLocal = [{
            _name: "Mayur",
            _address: "Songir",
            _city: "Dhule",
            _state: "Maharashtra",
            _zip: "424002",
            _phoneNumber: "7620107982"

        },
        {
            _name: "Hemant",
            _address: "Songit",
            _city: "Nashik",
            _state: "Maharashtra",
            _zip: "424002",
            _phoneNumber: "8888451231"
        }
    ];
    return addressBookListLocal;
};