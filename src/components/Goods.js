import React, { Component } from "react";
import "../styles.css";

import { connect } from "react-redux";

import GoodsItem from "./GoodsItem";

class Goods extends Component {
  // state = {
  //   goods: [],
  // };

  // componentDidMount() {
  //   const state = store.getState();
  //   this.setState({ goods: state.goods });
  // }

  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        <ul className="goods__list">
          {this.props.goods.map((item) => (
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};

export default connect(mapStateToProps)(Goods);
