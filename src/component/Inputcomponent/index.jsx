const InputComponent = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
        <label htmlFor={placeholder}>{placeholder}</label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
            console.log(e, 'event)')
            onChange(e.target.value)
        }}
      />
    </div>
  );
}

export default InputComponent;