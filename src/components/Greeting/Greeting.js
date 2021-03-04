import { BUFFALO_ASCII, CONSOLE_GREETING } from '../../constants/constants'

const Greeting = () => {
  // eslint-disable-next-line no-console
  console.info(CONSOLE_GREETING, BUFFALO_ASCII)

  return null
}

export default Greeting