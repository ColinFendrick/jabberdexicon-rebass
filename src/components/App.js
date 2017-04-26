import React, { Component } from 'react'
import NewEntry from './NewEntry'
import Home from './Home'
import Word from './Word'
import LetterBar from './LetterBar'
import BrowseLetter from './BrowseLetter'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'
import theme from './theme'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Toolbar,
  NavItem,
  InlineForm,
  Space,
  Footer,
  Text,
  Button,
  Overlay } from 'rebass'

class App extends Component {
  state = {
    modal: false
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: theme
    }
  }

  _toggle = () => {
    this.setState({
      modal: !(this.state.modal)
    })
  }

  render () {
    return <Router>
      <div className='App'>
        <Toolbar>
          <NavItem is={Link} to='/'>
          The Jabberdexicon
          </NavItem>
          <Space auto />
          <SearchBar />
        </Toolbar>
        <LetterBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/entry/:slug' component={Word} />
          <Route path='/browse/:letter' component={BrowseLetter} />
          <Route path='/search/:search' component={SearchResults} />
        </Switch>
        <Footer>
          <Text>Built with love at The Iron Yard</Text>
          <Space auto />
          <Button
            onClick={this._toggle}
            backgroundColor='primary'
            color='#fff'
            pill>
          Add new Entry
        </Button>
        </Footer>
        <Overlay open={this.state.modal}>
          <NewEntry onDismiss={this._toggle} />
        </Overlay>
      </div>
    </Router>
  }
}

export default App
