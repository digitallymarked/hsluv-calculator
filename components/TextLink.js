import Color from 'color'
import { useState } from 'react'

export default function TextLink({ children, color }) {
  const [isHover, setIsHover] = useState(false)

  const underlineNormal = Color(color).alpha(0.4)
  const underlineHover = Color(color)

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <a
      href='#'
      style={{
        color: color,
        textDecoration: 'underline',
        textDecorationColor: isHover ? underlineHover : underlineNormal,
        transition: 'all 150ms ease-out',
        display: 'inline-flex',
        alignItems: 'center',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          transition: 'all 150ms ease-out',
          transform: isHover ? 'translateX(4px)' : '',
        }}
      >
        <path
          d='M13.7045 4.28377C13.3111 3.89615 12.678 3.90084 12.2904 4.29424C11.9027 4.68765 11.9074 5.3208 12.3008 5.70842L17.6712 10.9998H4C3.44771 10.9998 3 11.4475 3 11.9998C3 12.5521 3.44772 12.9998 4 12.9998H17.6646L12.3008 18.2847C11.9074 18.6723 11.9027 19.3055 12.2904 19.6989C12.678 20.0923 13.3111 20.097 13.7045 19.7094L20.6287 12.887C21.1256 12.3974 21.1256 11.5958 20.6287 11.1062L13.7045 4.28377Z'
          fill={color}
        />
      </svg>
    </a>
  )
}
