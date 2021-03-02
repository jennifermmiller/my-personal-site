const Emoji = props => {
    const { label, symbol } = props;

    return (
        <span
            role="img"
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
        >
            {symbol}
        </span>
    )
};

export default Emoji;