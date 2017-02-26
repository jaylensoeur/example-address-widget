import Address from './address';

export default class AddressFactory {
    createInstance() {
        return new Address();
    }
}