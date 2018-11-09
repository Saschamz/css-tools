import React, { Component } from 'react'

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
        },
      ],
    };
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
                    onChange={someFunctionToChangeProperty}
                    type={setting.type}
                    min={setting.min}
                    max={setting.max} />
                  <span className="label-stat">0%</span>
                </div>
              ))}
            </div>

            <div className="card-showcase">
              <div className="card-showcase-box"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
