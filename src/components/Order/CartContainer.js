import React from 'react'
import CartItem from '../CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/features/cartSlice'

const CartContainer = () => {
  const dispatch = useDispatch();
    const {cartItems,total,amount} = useSelector((store)=> store.cart)

   if (amount < 1){

 return (
      <section className="container px-5 py-24 mx-auto">
        <header>
          <h2>Cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

   
  return (
    <section className="cart"> 
    <header>
        <h2>Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    
    </section>
  )
}

export default CartContainer