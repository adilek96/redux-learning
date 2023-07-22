import React, { Component } from "react";
import { connect } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { deleteGoodInCart } from "../redux/actions";
import { amountChange } from "../redux/actions";
import "../styles.css";

class CartItem extends Component {
  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">
          <b>{price}.00$</b>
        </p>

        <input
          type="number"
          onChange={(e) => this.props.amountChange(e.target.value, id)}
          value={this.props.amount}
        />

        <button onClick={() => this.props.deleteOnClick(id)}>
          <IoIosCloseCircleOutline />
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    inputValue: state.inputValue,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteOnClick: (id) => dispatch(deleteGoodInCart(id)),
  amountChange: (amount, id) => dispatch(amountChange(amount, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
