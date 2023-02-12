const TextInput = ({
  name,
  datacy,
  placeholder,
}: {
  name?: string;
  datacy?: string;
  placeholder?: string;
}) => {
  return (
    <input
      name={name}
      data-cy={datacy}
      placeholder={placeholder}
      type="text"
      className="m-1 outline outline-1 outline-silver"
    />
  );
};

export default TextInput;
