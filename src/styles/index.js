import {generateMedia} from 'styled-media-query'

export const customMedia = generateMedia({
  desktop: '78em',
  tablet: '60em',
  mobile: '46em',
})

export const desktop = (...args) => {
  return customMedia.greaterThan('desktop')(...args)
}

export const tablet = (...args) => {
  return customMedia.between('mobile', 'tablet')(...args)
}

export const mobile = (...args) => {
  return customMedia.lessThan('mobile')(...args)
}
