import { Helmet } from 'react-helmet'

import { PAGE_TITLE } from '../../constants/constants'

const PageTitle = (props) => {
  const { tab } = props

  return (
    <Helmet>
      <title>{tab ? `${tab} - ${PAGE_TITLE}` : PAGE_TITLE}</title>
    </Helmet>
  )
}

export default PageTitle
