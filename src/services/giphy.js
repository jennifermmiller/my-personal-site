import { GiphyFetch } from '@giphy/js-fetch-api'

// eslint-disable-next-line no-undef
const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY)

export const getRandom = (hide = true, tagName = 'oh no', ratingLevel = 'g') =>
  giphyFetch.random({
    hideAttribution: hide,
    tag: tagName,
    rating: ratingLevel,
  })
