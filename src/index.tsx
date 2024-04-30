import { FC } from 'react'
import ReactDOM from 'react-dom/client'

interface FunnyInputProps {
  defaultValue?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FunnyInput: FC<FunnyInputProps> = ({ defaultValue, onChange }) => {
  return (
    <input
      style={{
        width: '10rem',
        height: '3rem',
        position: 'relative',
      }}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
}

interface RendererProps extends FunnyInputProps {
  parentElementId: string
}

const Renderer = ({ parentElementId, ...config }: RendererProps) => {
  const parentElement: HTMLElement | null = document.getElementById(parentElementId)
  if (parentElement) {
    ReactDOM.createRoot(parentElement).render(<FunnyInput {...config} />)
  }
}

export default Renderer