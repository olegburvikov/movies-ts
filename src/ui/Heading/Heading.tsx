import React from 'react'
import styles from './Heading.module.scss'
import cn from 'classnames'

interface IHeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  fontFamily?: 'regular' | 'accent' | 'primary'
}

const Heading: React.FC<IHeadingProps> = ({
  children,
  variant = 'h2',
  fontFamily = 'regular',
}) => {
  const Tag = variant
  return (
    <Tag className={cn(styles[variant], styles[fontFamily])}>{children}</Tag>
  )
}

export default Heading
