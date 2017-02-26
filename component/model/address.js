export default class Address {
    constructor() {
        this._addressLine1 = '';
        this._addressLine2 = '';
        this._addressLine3 = '';
        this._city = '';
        this._state = '';
        this._country = '';
        this._postCode = '';
        this._id = '';
    }

    setId(id) {
        this._id = id;
    }

    getId() {
        return this._id;
    }

    getAddressLine1() {
        return this._addressLine1;
    }

    setAddressLine1(value) {
        this._addressLine1 = value;
    }

    getAddressLine2() {
        return this._addressLine2;
    }

    setAddressLine2(value) {
        this._addressLine2 = value;
    }

    getAddressLine3() {
        return this._addressLine3;
    }

    setAddressLine3(value) {
        this._addressLine3 = value;
    }

    getCity() {
        return this._city;
    }

    setCity(value) {
        this._city = value;
    }

    getStateCode() {
        return this._state;
    }

    setStateCode(value) {
        this._state = value;
    }

    getCountryCode() {
        return this._country;
    }

    setCountryCode(value) {
        this._country = value;
    }

    getPostCode() {
        return this._postCode;
    }

    setPostCode(value) {
        this._postCode = value;
    }
}
