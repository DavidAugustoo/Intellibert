import { Poppins } from '@next/font/google'
import { globalCss } from '.'

const poppins = Poppins({
  weight: ['100', '300'],
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  html: {
    fontFamily: poppins.style.fontFamily,
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray300',
    color: '$gray300',
  },

  'body, input, textarea, button': {
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },
})
