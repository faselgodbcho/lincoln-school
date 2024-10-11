const Input = ({
  type = "text",
  id = "",
  placeholder = "",
  name = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <input
      className="block w-full rounded focus:outline-none px-7 focus:px-[27px] py-2 focus:py-[7px] border-[1.5px] focus:border-2 border-primary border-opacity-80"
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
