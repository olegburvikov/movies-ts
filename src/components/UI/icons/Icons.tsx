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
