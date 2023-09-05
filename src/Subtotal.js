import React from 'react';
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket },dispatch] = useStateValue();
    let total_cost=0;
    for (let i=0;i<basket.length;i++){
         total_cost+=basket[i].price;
    }
  return (
    <div className='subtotal'>
         <CurrencyFormat
        renderText={(value) => ( 
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal