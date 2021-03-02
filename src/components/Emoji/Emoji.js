const Emoji = (props) => {
  const { label, symbol } = props;

  return (
    <span
      aria-hidden={label ? "false" : "true"}
      aria-label={label ? label : ""}
      role="img"
    >
      {symbol}
    </span>
  );
};

export default Emoji;
