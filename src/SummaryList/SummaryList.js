import React from 'react';
import SummaryItem from '../SummaryItem/SummaryItem';

class SummaryList extends React.Component {
  render(){
    const summary = Object.keys(this.props.selected)
          .map(
            key => <div className="summary__option" key={key}>
            <SummaryItem
              id={key}
              selected={this.props.selected}
            />
        </div>);
  return (
    <section className="summary_item">
    {summary}
    </section>
    );
}
}

export default SummaryList;