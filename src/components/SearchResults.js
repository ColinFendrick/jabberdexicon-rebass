import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem } from 'rebass'

const SearchResults = () => (
  <NavItem is={Link} to='/entry/1-yoda-conditions'>
    Yoda CONDITIONS
  </NavItem>
)

export default SearchResults
