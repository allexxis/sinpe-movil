import React from 'react';
import './App.css';
import { Item, Checkout } from './components';
const App = () => {
   return (
      <div className="app-container">
         <div className="row">
            <div className="col">
               <Item
                  name="Iphone"
                  price="₡100000"
                  img="https://images-na.ssl-images-amazon.com/images/I/51m095zShrL._AC_SX466_.jpg"
               />
            </div>
            <div className="col no-gutters">
               <Checkout />
            </div>
         </div>
      </div>
   );
};

export default App;
