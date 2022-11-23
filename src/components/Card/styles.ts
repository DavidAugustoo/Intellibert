import { styled } from '../../styles'

export const CardContainer = styled('div', {
  backgroundColor: '$gray100',
  padding: '3rem',
  maxWidth: '633px',
  margin: '0 auto',
  marginTop: '-160px',
  borderRadius: 5,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',

  boxShadow: '7px 16px 24px rgba(4, 5, 11, 0.02)',

  p: {
    color: 'black',
  },
})

export const FormArea = styled('form', {
  width: '100%',

  div: {
    display: 'flex',
    flexDirection: 'column',

    button: {
      margin: '0 auto',
      marginTop: '3.5rem',
    },
  },
})

export const InputArea = styled('div', {
  width: '100%',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    width: '100%',
    color: '$gray800',
    marginTop: '2rem',

    textarea: {
      borderRadius: 8,
      border: '2px solid #D7D9E0',
      backgroundColor: 'transparent',
      height: '5rem',
      resize: 'none',
      padding: '1rem',
      fontSize: '1rem',
    },

    input: {
      borderRadius: 8,
      border: '2px solid #D7D9E0',
      backgroundColor: 'transparent',
      padding: '1rem',
      fontSize: '1rem',
    },
  },
})

export const AnswerArea = styled('div', {
  margin: '0 auto',
  color: '$gray800',
  marginTop: '2.5rem',
})
