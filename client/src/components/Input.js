const Input = (props) => (
   <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
         <input
            onChange={(e) => props.onChange(e.target.value)}
            type={props.type}
            name={props.name}
         />
         <img src={props.imgSrc} />
      </div>
   </div>
);
export default Input;
