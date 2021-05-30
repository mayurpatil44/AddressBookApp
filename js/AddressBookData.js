class AddressBookData {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}/;
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Name is Incorrect";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let sentence = address.split(" ");
        const addressRegex = /^([A-Za-z0-9/,-]{3,}[ ]?)+$/;
        for (const word of sentence) {
            if (!addressRegex.test(word))
                throw "Address is Incorrect";
        }
        this._address = address;
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex = /^((\+){1}91){1}[1-9]{1}[0-9]{9}$/;
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "MobileNo is Incorrect";
    }

    toString() {
        return "Id: " + this.id + "\nName: " + this.name + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone Number: " + this.phoneNumber;
    }
}