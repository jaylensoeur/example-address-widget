import React from 'react';
import {render} from 'react-dom';

import AddressCollection from './component/address-collection';
import AddressFactory from './component/model/address-factory';
import AddressCollectionController from './component/controller/address-collection-controller';

window.React = React;

// test data
const usaStates = [
    {name: 'Miami', code:'MI'},
    {name: 'Chicago', code:'CH'},
];

const australianStates = [
    {name: 'Victoria', code:'VIC'},
    {name: 'New South Wales', code:'NSW'},
    {name: 'Queensland', code:'QLD'}
];

const switzerlandStates = [
    {name: 'asd', code:'PI'},
    {name: 'fffasf', code:'KI'},
    {name: 'fasfaf', code:'ZH'}
]

const dataCountries = [
    {name: 'Australia', code: 'AU', states: australianStates},
    {name: 'United States of America', code: 'USA', states: usaStates},
    {name: 'Switzerland', code: 'CH', states: switzerlandStates}
];

const addressFactory = new AddressFactory();
const address = addressFactory.createInstance();
address.setAddressLine1('102 Addabb Drive');
address.setCity('Melbourne');
address.setStateCode('VIC');
address.setCountryCode('AU');
address.setPostCode('3175');
address.setId('default_address');

const addressCollectionController = new AddressCollectionController(addressFactory);
addressCollectionController.addAddress(address);

// you wont do this - but for testing purpose we'll use vanilla js
const submitButton = document.getElementById('address-submit');
submitButton.addEventListener('click', () => {
    alert("Here:" + JSON.stringify(addressCollectionController.getAddressCollection()));
    console.log(JSON.stringify(addressCollectionController.getAddressCollection()));
});

render(
    <AddressCollection controller={addressCollectionController} countries={dataCountries} defaultCountryCode="AU"/>,
    document.getElementById("react-container")
);