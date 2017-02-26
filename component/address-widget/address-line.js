import {Component} from 'react';

export default class AddressLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
            name: props['data-id']
        }
    }

    handleChange(e) {
        if (this.state.value !== e.target.value) {
            this.setState({value: e.target.value});
            if (!!this.props.onChange) {
                this.props.onChange({name: this.state.name, value: e.target.value});
            }
        }
    }

    render() {
        return <input onChange={this.handleChange.bind(this)} name={this.props.id} id={this.props.id} className={this.props.className} type="text" defaultValue={this.state.value} placeholder={this.props.placeholder} />
    }
}
