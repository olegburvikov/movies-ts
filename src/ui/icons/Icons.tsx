import React from 'react'

export const HeartIcon: React.FC<{ fill?: string }> = ({ fill = 'none' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="28"
      fill={fill}
      viewBox="0 0 57 48"
    >
      <path
        stroke="red"
        strokeWidth="5"
        d="M53.516 9.738c-9-20.5-25 1.5-25 1.5s-16-22-25-1.5 25 36.5 25 36.5 34-16 25-36.5z"
      />
    </svg>
  )
}

interface ISvgProps {
  size?: number
  fill?: string
}

export const Search: React.FC<ISvgProps> = ({
  size = 20,
  fill = '#B9B9B9',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4301 18.1408L15.6521 14.3627C16.8814 12.8335 17.631 10.9145 17.631 8.81552C17.631 3.95799 13.6731 0 8.81552 0C3.95799 0 0 3.95799 0 8.81552C0 13.6731 3.95799 17.631 8.81552 17.631C10.9145 17.631 12.8635 16.8814 14.3627 15.6521L18.1408 19.4301C18.3207 19.61 18.5606 19.7 18.7705 19.7C18.9804 19.7 19.2202 19.61 19.4002 19.4301C19.79 19.0403 19.79 18.4706 19.4301 18.1408ZM1.82907 8.81552C1.82907 4.94749 4.97747 1.79909 8.84551 1.79909C12.7135 1.79909 15.8619 4.94749 15.8619 8.81552C15.8619 12.6836 12.6836 15.802 8.84551 15.802C5.00746 15.802 1.82907 12.6536 1.82907 8.81552Z"
        fill={fill}
      />
    </svg>
  )
}
