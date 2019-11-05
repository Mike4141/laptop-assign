import React, { Component } from 'react';
import '../App.css';
//import FormItem from '../FormItem/FormItem';
//import Features from '../Features/Features';

class MainForm extends Component {
  render() {  
    const features = Object.keys(this.props.features)
      .map(key => {
        const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;

          return <li key={index}>
            <div className={featureClass}
              onClick={(e) => this.props.handleUpdateFeature(key, item)}>
              {item.name}
            </div>
          </li>
          });

          return <div className="" key={key}>
            <div className="">{key}</div>
              <ul className="">
                {options}
              </ul>
          </div>
        });

             

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          { features }
      </section>
    
    ); // end return
  } // end render
} //end MainForm Component

export default MainForm;  
