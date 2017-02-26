import DropDown from '../drop-down/drop-down';

export default class CountryDropDown extends DropDown {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        super.handleChange(e);
        if (this.state.value !== e.target.value) {
            const state = {
                name: this.props['data-id'],
                value: e.target.value
            };
            this.setState(state);
            this.props.onChange(state);
        }
    }
}
