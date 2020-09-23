import React from 'react';
import avatar from './assets/product_image_placeholder.png';
import PropTypes from 'prop-types';

export default class Phone extends React.Component {
  // state = {
  //     // iPhone:[
  //     //     { id: 1,value: 'iPhone11',price:'￥ 5999'},
  //     //     { id: 2,value: 'iPhoneXS',price:'￥ 5399'},
  //     //     { id: 1,value: 'iPhoneSE',price:'￥ 3599'},
  //     // ],
  //     // HUAWEI:[
  //     //     { id: 1,value: 'HUAWEI P40 Pro+',price:'￥ 7999'},
  //     //     { id: 2,value: 'HUAWEI Mate 30',price:'￥ 5000'},
  //     //     { id: 3,value: 'HUAWEI P40 Pro+',price:'￥ 4000'},
  //     // ],
  //     price: this.props.phone,
  // };
  constructor(props) {
    super(props);
  }

  // handleIncrement = () => {
  //     console.log('this.props.num')
  //     this.setState({num: this.props.num + 1});
  // }

  render() {
    return (
      <div className="phone">
        <h2>{this.props.phone.category}</h2>
        <h3>{this.props.phone.name}</h3>
        <img src={avatar} alt="avatar" />
        <p>
          {this.props.phone.price}
          <button onClick={this.props.handleIncrement}>add to cart</button>
        </p>
        {/*<span className="count">{this.props.num}</span>*/}
      </div>
    );
  }
}
Phone.propTypes = {
  phone: PropTypes.object.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};
