import React, { Component } from 'react'
import { Breadcrumbs } from 'rebass'

class LetterBar extends Component {
  letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  render () {
    const searchLetters = this.letters.map(letter => ({ children: letter, href: `/browse/${letter}` }))
    const number = [{children: '#', href: '/browse/0'}]
    return <Breadcrumbs links={searchLetters.concat(number)} style={{'flexWrap': 'wrap'}} />
  }
}

export default LetterBar
