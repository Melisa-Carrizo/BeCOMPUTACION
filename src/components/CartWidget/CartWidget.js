import CartImg from "./assets/cart-fill.svg"
const CartWidget = ()=> {
    return (
        <div>
            <img src={CartImg} alt="cart-icon"/>
            0
        </div>
    )
}

export default CartWidget