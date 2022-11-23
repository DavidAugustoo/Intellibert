import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  disabled: boolean
  children: ReactNode
}

export function Button({ children, disabled }: ButtonProps) {
  return <ButtonContainer disabled={disabled}>{children}</ButtonContainer>
}
