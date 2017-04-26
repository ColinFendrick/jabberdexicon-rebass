import React, { Component } from 'react'
import { InlineForm } from 'rebass'

class SearchBar extends Component {
  _change = input => {
    console.log(input)
  }

  render () {
    return <InlineForm
      style={{backgroundColor: '#fff', color: '#666'}}
      buttonLabel='Go'
      label='InlineForm'
      name='inline_form'
      onChange={this._change(this.value)}
      onSubmit={e => { e.preventDefault() }}
    />
  }
}

export default SearchBar
