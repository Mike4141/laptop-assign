import React from 'react';


class SummaryItem extends React.Component {
  render(){
    
    return(
      <div>
        <div className="summary__option__label">{this.props.id}  </div>
        <div className="summary__option__value">{this.props.selected[this.props.id].name}</div>
        <div className="summary__option__cost">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(this.props.selected[this.props.id].cost) }
        </div>
      </div>
    );
  }
}
  
  export default SummaryItem;