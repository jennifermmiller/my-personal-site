import { useEffect, useState } from 'react'

// Simplified rip off from lodash
const throttle = (callback, limit) => {
  let waiting = false
  return () => {
    if (!waiting) {
      // eslint-disable-next-line no-undef
      callback.apply(this, arguments)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, limit)
    }
  }
}

function useDocumentScrollThrottled(callback) {
  const [, setScrollPosition] = useState(0)
  let previousScrollTop = 0

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition
      return currentScrollTop
    })

    callback({ previousScrollTop, currentScrollTop })
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250)

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled)

    return () => window.removeEventListener('scroll', handleDocumentScrollThrottled)
  }, [handleDocumentScrollThrottled])
}

export default useDocumentScrollThrottled
