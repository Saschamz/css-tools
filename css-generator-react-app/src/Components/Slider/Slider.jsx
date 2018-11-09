import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    const { update } = this.props;

    this.setState({ value });
    update(value);
  }

  render() {
    return (
      <div className="setting">
        <span className="label">{this.props.label}</span><br />
        <input
          className="range-slider"
          type="range"
          min="0"
          max="100"
          value={this.state.value}
          onChange={this.handleChange}
        >
        </input>
        <input
          onChange={this.handleChange}
          type="number"
          placeholder={this.state.value} />
      </div>
    )
  };
}

export default Slider;
