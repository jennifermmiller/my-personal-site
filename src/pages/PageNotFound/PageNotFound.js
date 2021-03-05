// import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { GiphyFetch } from '@giphy/js-fetch-api'
// import { Gif } from '@giphy/react-components'
// import { useAsync } from 'react-async-hook'
import styled from 'styled-components'

// import giphyLogo from '../../assets/giphyLogo.gif'
import { mediaQuery, MOBILE } from '../../constants/breakpoints'

const PageContainer = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  ' > h1': {
    fontSize: '4rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  ' > p': {
    fontSize: '2rem',
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

// TODO:
// const giphyFetch = new GiphyFetch('')

const PageNotFound = () => {
  // const [gif, setGif] = useState(null)

  // useAsync(async () => {
  //   const { data } = await giphyFetch.random({
  //     hideAttribution: true,
  //     tag: 'oh no',
  //     rating: 'g',
  //   })
  //   setGif(data)
  // }, [])

  return (
    <PageContainer>
      <h1>Oh no!</h1>
      <p>The page you are looking for does not exist!</p>
      <div>
        {/* {gif && <Gif borderRadius={0} gif={gif} width={200} />} */}
        {/* <img alt="Powered by Giphy" src={giphyLogo} /> */}
      </div>
      <ReturnContainer>
        <Link to="/">Return to home page</Link>
      </ReturnContainer>
    </PageContainer>
  )
}

export default PageNotFound
