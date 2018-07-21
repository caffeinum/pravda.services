import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './Header.scss'

import WidthContainer from 'components/layout/WidthContainer/WidthContainer'
import Logo from 'components/Logo/Logo'
import Nav from './Nav/Nav'


@CSSModules(styles)
export default class Header extends Component {

  render() {
    return (
      <div styleName="header">
        <WidthContainer styleName="container">
          <div style={{ display: 'flex', alignItems: 'center', width: '1100px' }}>
            <span style={{ color: '#fff', fontWeight: 'bold'  }} >PRAVDA</span>
            <Nav />
          </div>
        </WidthContainer>
      </div>
    )
  }
}
