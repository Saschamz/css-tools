import React, { Component, createRef } from 'react';
import './BorderRadius.scss';

export default class BorderRadius extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: [
        {
          type: 'range',
          min: 0,
          max: 100,
          label: 'Radius',
          value: 50,
        },
      ],

    };

    this.box = createRef();
  }



  updateValueAll = (e) => {
    const newState = this.state;
    newState.settings[0].value = e.target.value;
    this.setState(newState);
    const box = this.box.current;
    box.style.borderRadius = `${e.target.value}px`;
  }

  render() {
    const { settings } = this.state;

    return (
      <div className="card-container">
        <div className="card">
          <h1 className="card-title">Border Radius</h1>
          <div className="card-content">
            <div className="settings">
              {settings.map(setting => (
                <div className="setting">
                  <span className="label">{setting.label}</span><br />
                  <input
                    onChange={this.updateValueAll}
                    type={setting.type}
                    min={setting.min}
                    max={setting.max}
                  />
                  <span className="label-stat">{setting.value}</span>
                </div>
              ))}
            </div>

            <div className="card-showcase">
              <div ref={this.box} className="card-showcase-box"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



