import { FC, ReactHTML } from 'react'
import './Title.css'

interface TitleProps {
  text: string
  titleAs?: keyof ReactHTML
}

const Title: FC<TitleProps> = ({ text, titleAs }) => {
  const TitleAs = titleAs ? titleAs : 'h1';
  return (
    <TitleAs className='title'>{text}</TitleAs>
  )
}

export default Title;
