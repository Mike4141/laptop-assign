import React, { Component } from 'react';


class Features extends Component {
  
  render() {
    return (
      <div className="feature" key={this.props.id}>
        <div className="feature__name">{this.props.id}</div>
        <ul className="feature__list">
          { this.props.options }
        </ul>
      </div>
    );
  }
}

export default Features;