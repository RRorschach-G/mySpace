import React from 'react';

class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultValue: this.props.defaultValue || null,
            step: this.props.step || 1
        }

        if (this.props.value !== void (0)) {
            this.handleChange = (e) => { this.props.onChange(e.target.value) }
            this.handleSub = () => { this.props.onChange(this.props.value - this.state.step) }
            this.handledAdd = () => { this.props.onChange(this.props.value + this.state.step) }

        } else if (this.state.defaultValue !== void (0)) {
            this.handleChange = (e) => { this.setState({ defaultValue: e.target.value }) }
            this.handleSub = () => { this.setState({ defaultValue: this.state.defaultValue - this.state.step }) }
            this.handledAdd = () => { this.setState({ defaultValue: this.state.defaultValue + this.state.step }) }
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.value || this.state.defaultValue} ref={input => this.InputNumber = input} onChange={this.handleChange} />
                <input type="button" value="-" onClick={this.handleSub} /><input type="button" value="+" onClick={this.handledAdd} />
            </div>
        )
    }
}

export default InputNumber