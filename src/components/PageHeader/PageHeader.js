import { string } from 'prop-types'

const PageHeader = (props) => {
  const { title } = props

  return <h1>{title}</h1>
}

PageHeader.propTypes = {
  title: string.isRequired,
}

export default PageHeader
