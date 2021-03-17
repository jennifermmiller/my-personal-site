import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Gif } from '@giphy/react-components'
import styled from 'styled-components'

import giphyLogo from '../../static/giphyLogo.gif'
import { mediaQuery, MOBILE } from '../../constants/breakpoints'
import { getRandom } from '../../services/giphy'

const PageContainer = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  ' > h1': {
    marginBottom: '1rem',
    textAlign: 'center',
  },
  ' > p': {
    margin: '0 0 2rem',
    maxWidth: '420px',
    textAlign: 'center',
  },
})

const ReturnContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.button,
  borderRadius: '0.25rem',
  lineHeight: '1.5rem',
  margin: '2rem',
  width: '100%',
  ' > a': {
    color: theme.buttonText,
    display: 'block',
    padding: '1rem 2rem',
    textAlign: 'center',
    textDecoration: 'none',
  },
  ' > a:hover': {
    backgroundColor: 'inherit',
    borderRadius: '0.25rem',
    color: theme.buttonText,
  },
  '&:hover': {
    background: theme.buttonHover,
    cursor: 'pointer',
  },
  [mediaQuery(`(min-width: ${MOBILE})`)]: {
    width: 'auto',
  },
}))

const PageNotFound = () => {
  const [gif, setGif] = useState(null)

  useEffect(() => {
    getRandom().then(({ data }) => setGif(data))
  }, [])

  return (
    <PageContainer>
      <h1 className="text-xxl">Oh no!</h1>
      <p className="h3">The page you are looking for does not exist!</p>
      <div>
        {gif && <Gif borderRadius={0} gif={gif} width={200} />}
        <img alt="Powered by Giphy" src={giphyLogo} />
      </div>
      <ReturnContainer>
        <Link to="/">Return to home page</Link>
      </ReturnContainer>
    </PageContainer>
  )
}

export default PageNotFound
