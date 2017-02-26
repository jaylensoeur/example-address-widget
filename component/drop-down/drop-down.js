import {Component} from 'react';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        }
    }

    buildOptionsList(collection = []) {
        let optionCollection = [];
        optionCollection.push(<option key='' value=''>{this.props.placeholder}</option>)
        for (const item of collection) {
            optionCollection.push(
                <option key={item.code} value={item.code}>{item.name}</option>
            );
        }
        return optionCollection;
    }

    handleChange(e) {
        if (this.state.value !== e.target.value) {
            const state = {
                value: e.target.value
            };
            this.setState(state);
        }
    }

    render() {
        const options = this.buildOptionsList(this.props.collection);
        const value = this.props.collection.find((item) => item.code === this.props.defaultValue);
        let select = (<select className={this.props.className} onChange={this.handleChange.bind(this)}> {options}</select>);
        if (!!value) {
            select = (<select defaultValue={this.state.value} className={this.props.className} onChange={this.handleChange.bind(this)}>{options}</select>);
        }
        return(select);
    }
}