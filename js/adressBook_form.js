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
});