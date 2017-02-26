export default class AddressCollectionWidgetController {
    constructor(addressFactory, defaultCountry = '', defaultState = '') {
        this._addressFactory = addressFactory;
        this._addressCollection = {};
    }

    updateAddress(id, addressState) {
        const address = this.findAddress(id);

        switch(addressState.name) {
            case 'addressLine1':
                address.setAddressLine1(addressState.value);
                break;
            case 'addressLine2':
                address.setAddressLine2(addressState.value);
                break;
            case 'addressLine3':
                address.setAddressLine3(addressState.value);
                break;
            case 'city':
                address.setCity(addressState.value);
                break;
            case 'countryCode':
                address.setCountryCode(addressState.value);
                break;
            case 'stateCode':
                address.setStateCode(addressState.value);
                break;
            default:
                break;
        }

        return this;
    }

    addAddress(address) {
        if (!!address) {
            this._addressCollection[address.getId()] = address;
        } else {
            const address = this._addressFactory.createInstance();
            address.setId((new Date()).getTime()); //use Object.id for now this is just an example
            this._addressCollection[address.getId()] = address;
        }

        return this
    }

    findAddress(id) {
        return this._addressCollection[id];
    }

    removeAddress(id) {
        delete this._addressCollection[id];
        return this
    }

    getAddressCollection() {
        return this._addressCollection;
    }
}