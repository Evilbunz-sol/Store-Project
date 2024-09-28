import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"

export const CartItemsList = () => {
    const cartItems = useSelector((state) => state.cartState.cartItems)

  return (
    <div>
        {cartItems.map((item) => {
            return <CartItem key={item.cartID} cartItem={item} />
        })}
    </div>
  )
}