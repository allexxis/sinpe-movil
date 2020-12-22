const Item = (props) => (
   <div className="item-container">
      <div className="item-image">
         <img src={props.img} alt="item" />
         <div className="item-details">
            <h3 className="item-name"> {props.name} </h3>
            <h2 className="item-price"> {props.price} </h2>
         </div>
      </div>
   </div>
);
export default Item;
