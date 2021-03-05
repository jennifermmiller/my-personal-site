import { string } from 'prop-types'

const Emoji = (props) => {
  const { label, symbol } = props

  return (
    <span aria-hidden={label ? 'false' : 'true'} aria-label={label || ''} role="img">
      {symbol}
    </span>
  )
}

Emoji.propTypes = {
  label: string,
  symbol: string.isRequired,
}

export default Emoji
