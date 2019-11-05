import React from 'react';


class FormItem extends React.Component {
  render(){
  return (
    <li key={this.props.index} className="feature__item">
      <div className={this.props.featureClass}
      onClick={this.props.handleUpdateFeature}
      >
        {this.props.item.name}
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.item.cost)}
      </div>
    </li>
  );
}
}

export default FormItem;