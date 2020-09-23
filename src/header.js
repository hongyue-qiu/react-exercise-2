import React from 'react';
// import avatar from './assets/avatar.jpg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <h1>
          Store
          <i className="fa fa-shopping-cart" />
          {/*<span className="count">{this.props.num}</span>*/}
        </h1>
      </header>
    );
  }
}
