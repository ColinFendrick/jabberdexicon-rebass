import React, { Component } from 'react'
import { InlineForm } from 'rebass'
import { withRouter } from 'react-router-dom'

class SearchBar extends Component {
  state = {
    search: ''
  }

  _change = e => {
    this.setState({
      search: e.target.value
    }, () => {
      const path = this.state.search.length > 0 ? `/search/${this.state.search}` : '/'
      this.props.history.replace(path)
    })
  }

  render () {
    return <InlineForm
      style={{backgroundColor: '#fff', color: '#666'}}
      label='InlineForm'
      name='inline_form'
      onChange={this._change}
      value={this.state.search}
      onSubmit={this._change}
    />
  }
}

export default withRouter(SearchBar)
