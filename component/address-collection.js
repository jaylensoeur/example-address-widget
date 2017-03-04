import { Component } from 'react';
import Address from './address';
import AddressModel from './model/address';

const LABELS = {
    CONTROLLER: 'add another address',
    REMOVE: '-',
    ADD: '+',
};

export default class AddressCollection extends Component {
    constructor(props) {
        super(props);
        this.controller = props.controller;
        this.state = {
            addressCollection: this.controller.getAddressCollection() || {}
        };
    }

    /**
     * update the view state
     * @private
     */
    _updateCollectionState() {
        this.setState({
            addressCollection: this.controller.getAddressCollection()
        });
    }

    /**
     * @param {AddressModel} address
     * @private
     */
    addAddress(address) {
        this.controller.addAddress(address);
        this._updateCollectionState();
    }

    removeAddress(address) {
        this.controller.removeAddress(address.getId());
        this._updateCollectionState();
    }

    onChange(id, addressState) {
        this.controller.updateAddress(id, addressState);
        this._updateCollectionState();
    }

    _buildAddressSection(address) {
        const defaultCountryCode = address.getCountryCode() || this.props.defaultCountryCode;
        const defaultStateCode = address.getStateCode() || '';

        return (
            <section key={address.getId()}>
                <button onClick={() => this.removeAddress(address)}>{LABELS.REMOVE}</button>
                <Address dataId={address.getId()}
                         addressLine1={address.getAddressLine1()}
                         addressLine2={address.getAddressLine2()}
                         addressLine3={address.getAddressLine3()}
                         city={address.getCity()}
                         stateCode={defaultStateCode}
                         countries={this.props.countries}
                         defaultCountryCode={defaultCountryCode}
                         onChange={this.onChange.bind(this)}
                />
            </section>
        );
    }

    _getAddressSection() {
        const addressCollection = [];
        const addressC = this.controller.getAddressCollection();

        for (const i in addressC) {
            if (!!i) {
                addressCollection.push(this._buildAddressSection(addressC[i]));
            }
        }

        return addressCollection;
    }

    render() {
        return (
            <div>
                {LABELS.CONTROLLER} <button onClick={() => this.addAddress()}>{LABELS.ADD}</button>
                <br />
                <span>{this._getAddressSection()}</span>
            </div>
        );
    }
}