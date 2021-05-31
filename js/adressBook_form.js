let addressBookJSONObject = {};
let isUpdate = false;

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameOutput = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            nameOutput.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).name = name.value;;
            nameOutput.textContent = "";
        } catch (e) {
            nameOutput.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressOutput = document.querySelector('.address-error');
    addressOutput.textContent = address.value;
    address.addEventListener('input', function() {
        if (address.value.length == 0) {
            addressOutput.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).address = address.value;;
            addressOutput.textContent = "";
        } catch (e) {
            addressOutput.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phoneNo');
    const phoneOutput = document.querySelector('.phoneNo-error');
    phoneOutput.textContent = phoneNumber.value;
    phoneNumber.addEventListener('input', function() {
        if (phoneNumber.value.length == 0) {
            phoneOutput.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).phoneNumber = phoneNumber.value;;
            phoneOutput.textContent = "";
        } catch (e) {
            phoneOutput.textContent = e;
        }
    });
    checkForUpdate();
});

const saveForm = () => {
    try {
        let addressBook = createAddressBook();
        createAndUpdateStorage(addressBook);
        resetForm();
        window.location.replace(site_properties.home_page);
    } catch (e) {
        return
    }
}

const createAddressBook = () => {
    let addressBook = new AddressBookData();
    try {
        addressBook.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    try {
        addressBook.address = getInputValueById('#address');
    } catch (e) {
        setTextValue('.address-error', e);
        throw e;
    }
    addressBook.city = document.getElementById("City").value;
    addressBook.state = document.getElementById("State").value;
    addressBook.zip = getInputValueById('#Zip');
    try {
        addressBook.phoneNumber = getInputValueById('#phoneNo');
    } catch (e) {
        setTextValue('.phoneNo-output', e);
        throw e;
    }
    alert(addressBook.toString());
    return addressBook;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

function createAndUpdateStorage(addressBook) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBook);
    } else {
        addressBookList = [addressBook];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const resetForm = () => {
    setValue('#name', "");
    setValue('#address', "");
    setValue('#city', '');
    setSelectedIndex('#state', );
    setSelectedIndex('#zip', );
    setValue('#phoneNo', "");
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;
};

const getaddressBookJSONObject = () => {
    addressBookJSONObject._name = getInputValueById('#name');
    addressBookJSONObject._address = getInputValueById('#address');
    addressBookJSONObject._city = getInputValueById('#city');
    addressBookJSONObject._state = getInputValueById('#state');
    addressBookJSONObject._zip = getInputValueById('#zip');
    addressBookJSONObject._phoneNumber = getInputValueById('#phoneNo');
    alert("Added Json Object : " + addressBookJSONObject._name);
};

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem("editAddress");
    isUpdate = addressBookJson ? true : false;
    if (!isUpdate) return;
    addressBookJSONObject = JSON.parse(addressBookJson);
    setForm();
};

const setForm = () => {
    setValue("#name", addressBookJSONObject._name);
    setValue("#address", addressBookJSONObject._address);
    setValue("#City", addressBookJSONObject._city);
    setValue("#State", addressBookJSONObject._state);
    setValue("#Zip", addressBookJSONObject._zip);
    setValue("#phoneNo", addressBookJSONObject._phoneNumber);
};