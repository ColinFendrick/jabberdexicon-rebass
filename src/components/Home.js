import React from 'react'
import WordOfTheDay from './WordOfTheDay.js'
import { PageHeader } from 'rebass'

const Home = () => (
  <div className='Home'>
    <PageHeader
      heading='Jabberdexicon'
      description="A convenient resource for coder's terms"
      m={1} />
    <WordOfTheDay />
  </div>
)

export default Home
