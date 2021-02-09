import React from 'react'
import type { FC } from 'react'
import { Link } from '@reach/router'

export const HomePage: FC = () => {
  return (
    <Link to="/instore">
      Go to /instore in order to see the website content
    </Link>
  )
}

export default HomePage
