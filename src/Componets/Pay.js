import React, { useState } from 'react';
import "./Pay.css";

function Pay(){
  const [ Method , setMethod ] = useState("{Select Method}"); 
  function Cod(){
    setMethod("Pay With Cash On Delivery")
  }
  function Card(){
    setMethod("Pay With Credit Card")
  }
  function BTC(){
    setMethod("Pay With Bitcoin")
  } 
    return (
      <div id="main">
         <div className='payment'>
            <h2 id='ma'>Make Your Payment </h2>
            <div id="another">
             <h4>(BTC, Card, Cash On Delivery)</h4>
              <h4>Select Payment Method</h4>
              <div id='btn'>
              <input type="radio" onClick={Cod} value="Cod" name="PAY"/>
              <label for="html">Cash On Delivery</label><br/>
              <input type="radio" onClick={Card} value="Card" name="PAY"/>
              <label for="html">Card</label><br/>
              <input type="radio" onClick={BTC} value="BTC" name="PAY"/>
              <label for="html">Bitcoin</label><br/>
              </div>
              <div id='dy'>
               <p>{Method}</p>
              </div>
            </div>
         </div>
      </div>
    );
  }


export default Pay;