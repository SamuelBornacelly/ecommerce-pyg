export const CartDropdown = ({ cart, setCart }) => {
  const handleRemove = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id].amount === 1) {
        delete newCart[id];
      } else {
        newCart[id].amount -= 1;
      }
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleAdd = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[id].amount += 1;
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const cartItems = Object.values(cart);

  return (
    <div className="cart__modal">
      <section className="cart">
        <header className="cart__header">
          <img
            className="cart_header_close"
            src="./img/close-cart.svg"
            alt="Cerrar"
          />
          <h1 className="cart__header_h1">Tus productos</h1>
        </header>
        <main className="cart__main">
          {cartItems.map((item) => (
            <div key={item.id} className="cart__product_container">
              <div className="cart__product">
                <img
                  className="cart__product_img"
                  src={item.image}
                  alt={item.title}
                />
                <div className="cart__product_title">
                  <small className="cart__product_small">Título</small>
                  <h3 className="cart__product_h3">{item.title}</h3>
                </div>
                <div className="cart__product_price">
                  <small className="cart__product_small">Precio</small>
                  <p className="cart__product_p">${item.price}</p>
                </div>
                <div className="cart__product_subtotal">
                  <small className="cart__product_small">Subtotal</small>
                  <p className="cart__product_p">${item.price * item.amount}</p>
                </div>
              </div>
              <div className="cart__product_amount">
                <button onClick={() => handleRemove(item.id)}>-</button>
                <span>{item.amount}</span>
                <button onClick={() => handleAdd(item.id)}>+</button>
              </div>
            </div>
          ))}
        </main>
        <footer className="cart__footer">
          <button className="cart__footer_button_delete">Vaciar</button>
          <button className="cart__footer_button_buy">Comprar</button>
        </footer>
      </section>
    </div>
  );
};
