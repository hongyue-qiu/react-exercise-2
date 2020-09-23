import React, { Component } from 'react';
import Phone from './body.js';
// import avatar from './assets/product_image_placeholder.png';

class AllPhone extends Component {
  // state = {
  //     iPhone:[
  //         { id: 1,value: 'iPhone11',price:'￥ 5999'},
  //         { id: 2,value: 'iPhoneXS',price:'￥ 5399'},
  //         { id: 1,value: 'iPhoneSE',price:'￥ 3599'},
  //     ],
  //     HUAWEI:[
  //         { id: 1,value: 'HUAWEI P40 Pro+',price:'￥ 7999'},
  //         { id: 2,value: 'HUAWEI Mate 30',price:'￥ 5000'},
  //         { id: 3,value: 'HUAWEI P40 Pro+',price:'￥ 4000'},
  //     ],
  // };
  state = {
    phones: [],
    num: 0,
  };

  async componentDidMount() {
    console.log('+++++++');
    const result = await fetch('http://localhost:3000/products');
    const data = await result.json();
    console.log(data);
    console.log(this.state.num);
    this.setState({
      phones: data,
    });
  }

  handleIncrement = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  render() {
    return (
      <div className="allPhone">
        {this.state.phones.map((phone, index) => (
          <div key={index} className="phone">
            {/*<h2>{phone.category}</h2>*/}
            <Phone
              handleIncrement={() => this.handleIncrement()}
              phone={phone}
            />
            {/*<span>{this.state.num}</span>*/}
          </div>
        ))}
        <span className="count">{this.state.num}</span>
      </div>
    );
  }
}
export default AllPhone;
