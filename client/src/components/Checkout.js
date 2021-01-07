import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { validateTransaction } from '../services';

const Checkout = () => {
   const [name, setName] = useState('');
   const [id, setId] = useState('');

   const pay = async (e) => {
      e.preventDefault();
      validateTransaction(id, name);
   };
   return (
      <div className="checkout">
         <div className="checkout-container">
            <h3 className="heading-3">Carrito de compra</h3>
            <Input
               onChange={setName}
               label="Nombre"
               type="text"
               name="name"
               value={name}
            />
            <Input
               onChange={setId}
               label="Número de transacción"
               type="number"
               name="card_number"
               value={id}
            />

            <Button onClick={pay} text="Validar Transacción" />
         </div>
      </div>
   );
};
export default Checkout;
