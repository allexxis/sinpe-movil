const Button = (props) => (
   <button onClick={props.onClick} className="checkout-btn" type="button">
      {props.text}
   </button>
);
export default Button;
