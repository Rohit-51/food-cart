import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button 
          onClick={() => {
            this.setState(
              {
                count : this.state.count +1
              }
            )
          }}
        >increase</button>
      </div>
    )
  }
}

export default About;