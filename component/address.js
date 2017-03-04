import { Component } from 'react';
import AddressLine from './address-widget/address-line';
import StateDropDown from './address-widget/state-drop-down';
import CountryDropDown from './address-widget/country-drop-down';
import '../theme/app.scss';

export default class Address extends Component {
    constructor(props) {
        super(props);
        const country = props.countries.find((country) => props.defaultCountryCode === country.code);

        this.state = {
            dataStates: country.states,
            dataCountries: props.countries,
            countryCode: country.code,
            stateCode: props.stateCode,
            addressLine1: props.addressLine1,
            addressLine2: props.addressLine2,
            addressLine3: props.addressLine3,
            city: props.city,
        };
    }

    handleCountryChange(state) {
        const country = this.state.dataCountries.find((country) => state.value === country.code);

        if (!!country) {
            this.setState({
                dataStates: country.states,
                countryCode: country.code,
                stateCode: country.states[0].code
            });

            this.props.onChange(this.props.dataId, {name: 'countryCode', value: country.code});
        }
    }

    handleStateChange(state) {
        const countryState = this.state.dataStates.find((countryState) => state.value === countryState.code);

        if (!!countryState) {
            this.setState({
                stateCode: countryState.code
            });

            this.props.onChange(this.props.dataId, {name: 'stateCode', value: countryState.code});
        }
    }

    handleAddressLineChange(state) {
        this.setState({
            [state.name]: state.value
        });
        this.props.onChange(this.props.dataId, state);
    }

    render() {
        return (
            <section className="address-widget">
                <AddressLine data-id="addressLine1" onChange={(state) => this.handleAddressLineChange(state)} defaultValue={this.state.addressLine1} className="address-widget-address-line"  placeholder="Address line 1"/>
                <AddressLine data-id="addressLine2" onChange={(state) => this.handleAddressLineChange(state)} defaultValue={this.state.addressLine2} className="address-widget-address-line"  placeholder="Address line 2"/>
                <AddressLine data-id="addressLine3" onChange={(state) => this.handleAddressLineChange(state)} defaultValue={this.state.addressLine3} className="address-widget-address-line"  placeholder="Address line 3"/>
                <AddressLine data-id="city" onChange={(state) => this.handleAddressLineChange(state)} defaultValue={this.state.city} className="address-widget-city" id="address-widget-city" placeholder="city"/>
                <StateDropDown placeholder={'select a state'} data-id="stateCode" defaultValue={this.state.stateCode} className='address-widget-state' collection={this.state.dataStates} onChange={(state) => this.handleStateChange(state)}/>
                <CountryDropDown placeholder={'select a country'} data-id="countryCode" className='address-widget-country' defaultValue={this.state.countryCode} collection={this.state.dataCountries} onChange={(state) => this.handleCountryChange(state)}/>
            </section>
        );
    }
}

