// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prev => ({speed: prev.speed + 10}))
    }
  }

  applyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prev => ({speed: prev.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="description">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" onClick={this.onAccelerate} type="button">
            Accelerate
          </button>
          <button className="button2" onClick={this.applyBreak} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
