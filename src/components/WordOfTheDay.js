import React from 'react'
import {Link} from 'react-router-dom'
import { Block, Heading, Text, NavItem } from 'rebass'

const WordOfTheDay = () => (
  <div className='WordOfTheDay'>
    <Block
      borderTop
      borderLeft
      px={3}
      color='primary'>
      <Heading
        level={3}
        alt
        children='Word of the Day'
        color='secondary' />
      <Heading
        level={3}
        size={1}>
        <NavItem is={Link} to='/entry/1-yoda-conditions' style={{fontSize: '30px'}}>Yoda Conditions</NavItem>
      </Heading>
      <Text>
        Using if (constant == variable) instead of if (variable == constant), like if (4 == foo). Because it's like saying "if blue is the sky" or "if tall is the man".
      </Text>
    </Block>
  </div>
)

export default WordOfTheDay
