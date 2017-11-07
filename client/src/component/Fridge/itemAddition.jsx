import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Input, Select } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import * as itemActions from '../../actions/itemActions.js';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class itemAddition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      type: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSelect(e, {value}) {
    this.setState({
      type: value,
    })
  }

  //form to input fridge items
  render() {
    const { itemActions, fridge } = this.props;
    let type = '';
    let username = localStorage.getItem('name');
    
    const handleSubmit = () => {
      const item = {};
      let name = document.getElementById('inputItm');
      item.name = name.value;
      let qty = document.getElementById('inputQty');
      item.quantity = qty.value;
      item.expiry = document.getElementById('expiry').value;
      item.type = this.state.type;
      item.user = username;
      itemActions.addItem(item, fridge.id);
      name.value = '';
      qty.value = '';
      type = '';
      console.log(item);
    }
    const options = [
      {
        key: 1, 
        text: "produce",
        value: "produce"
      },
      {
        key: 2, 
        text: "dairy",
        value: "dairy"
      },
      {
        key: 3, 
        text: "protein",
        value: "protein"
      },
      {
        key: 4, 
        text: "grains and starches",
        value: "grains"
      },
      {
        key: 5, 
        text: "frozen",
        value: "frozen"
      },
      {
        key: 6, 
        text: "miscellaneous",
        value: "misc"
      }
    ]; 
    console.log('moment is: ', moment());
    return (
      
      <form 
        onSubmit={() => {
          handleSubmit();
        }}
      >
          <input 
          className="form-control"
            placeholder='Type name here'
            id="inputItm"
          />
          <input className="form-control"
            width={2}
            type='number'
            id="inputQty"
            placeholder="select quantity"
          />
          <Form.Select 
            placeholder='Browse categories' 
            options={options} 
            id="inputType"
            onChange={this.handleSelect}
          />
          <Form.Select
            placeholder={moment()}
            id="expiry"
            control={DatePicker}
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          {/* <DatePicker 
            placeholderText={moment()}
            dateFormat="YYYY/MM/DD"
            id="expiry"
            selected={this.state.date}
            onChange={this.handleChange}
            /> */}
          <button className="btn btn-default">Go</button>
      </form>
    )
  }
};

const fridgeState = (store) => {
  return {
    fridge: store.fridge.fridge,
    items: store.items.items
  }
};

const fridgeDispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(itemAddition);