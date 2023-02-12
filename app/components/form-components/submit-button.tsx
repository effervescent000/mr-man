const SubmitButton = ({
  name,
  value,
  datacy,
  children,
}: {
  name?: string;
  value?: string;
  datacy?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="submit"
      name={name}
      value={value}
      data-cy={datacy}
      className="bg-silver p-0.5 text-plum outline outline-1 outline-lilac"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
