import { AnswerArea, CardContainer, FormArea, InputArea } from './styles'
import Image from 'next/image'

import Logo from '../../assets/logo.png'
import { Button } from '../Button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { localapi } from '../../service/axios'
import { MoonLoader } from 'react-spinners'

const searchFormSchema = z.object({
  context: z.string(),
  question: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

const placeholderContext =
  'The Beatles foi uma banda de rock britânica formada em 1960 na cidade de Liverpool. Formada por John Lennon, Paul McCartney, George Harrison e Ringo Starr, é considerada a banda mais influente de todos os tempos.'

const placeholderQuestion = 'Onde a banda foi formada?'

export function Card() {
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, watch } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const contextEmpty = watch('context')
  const questionEmpty = watch('question')

  const getAnswer = useCallback(async (context: string, question: string) => {
    try {
      setIsLoading(true)
      const response = await localapi.post('/api/searchAnswer', {
        context,
        question,
      })

      setAnswer(response.data.answer)
    } finally {
      setIsLoading(false)
    }
  }, [])

  async function handleSearchAnswer(data: SearchFormInput) {
    await getAnswer(data.context, data.question)
  }

  return (
    <CardContainer>
      <Image src={Logo} width={235} height={60} alt="" />

      <FormArea onSubmit={handleSubmit(handleSearchAnswer)}>
        <InputArea>
          <div>
            <label htmlFor="context">
              Texto:
              <textarea
                id="context"
                rows={10}
                cols={33}
                {...register('context')}
                placeholder={placeholderContext}
              ></textarea>
            </label>

            <label htmlFor="question">
              Pergunta:
              <input
                id="question"
                type="text"
                {...register('question')}
                placeholder={placeholderQuestion}
              />
            </label>
          </div>

          <AnswerArea>{answer}</AnswerArea>

          <Button disabled={!contextEmpty || !questionEmpty}>
            {isLoading ? <MoonLoader size={20} color="#FFF" /> : 'Enviar'}
          </Button>
        </InputArea>
      </FormArea>
    </CardContainer>
  )
}
