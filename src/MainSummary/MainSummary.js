import React, { Component } from 'react';
import '../App.css';
import Total from '../Total/Total';
import SummaryList from '../SummaryList/SummaryList';


class MainSummary extends Component {
  render() {
      
    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        <SummaryList
          selected={this.props.selected}
        />
        <Total 
          selected={this.props.selected}
        />
      </section>
    );
  }
}

export default MainSummary;  
