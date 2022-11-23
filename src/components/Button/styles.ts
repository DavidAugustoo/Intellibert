import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  maxWidth: '424px',
  width: '100%',
  backgroundColor: '$red600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '48px',
  border: 'none',
  borderRadius: '8px',
  color: 'white',
  fontSize: '1rem',
  transition: 'all 0.3s ease-out',

  '&:hover': {
    opacity: '0.8',
  },

  '&:disabled': {
    backgroundColor: '#B8B8B8',
    cursor: 'not-allowed',
  },
})
