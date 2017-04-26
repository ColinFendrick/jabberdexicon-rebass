import React from 'react'
import { Section, NavItem } from 'rebass'
import { Link } from 'react-router-dom'

const BrowseLetter = () => (
  <Section>
    <NavItem is={Link} to='/entry/1-yoda-conditions'>
      Yoda Conditions
    </NavItem>
  </Section>
)

export default BrowseLetter
