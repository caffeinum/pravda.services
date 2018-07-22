import React, { Component, Fragment } from 'react'

import { NavLink } from 'react-router-dom'
import { links } from 'helpers'

import CSSModules from 'react-css-modules'
import styles from './Nav.scss'


const nav = [
  { title: 'Home',    link: links.home      },
  { title: 'Wallet',   link: links.wallet   },
]


@CSSModules(styles)
export default class Nav extends Component {

  handleScrollTo = (scrollDuration) => {
    const scrollStep = -window.scrollY / (scrollDuration / 15)
    const scrollInterval = setInterval(() => {
      window.scrollY !== 0 ? window.scrollBy(0, scrollStep) : clearInterval(scrollInterval)
    }, 15)
  }

  render() {
    return (
      <div styleName="nav">
        <Fragment>
          {
            nav.map(({ title, link }) => (
              <NavLink
                onClick={() => this.handleScrollTo(500)}
                exact
                key={title}
                styleName="link"
                to={link}
                activeClassName={styles.active}
              >
                {title}
              </NavLink>
            ))
          }
          {
            <a styleName="link" target="_blank" rel="noreferrer noopener" href="https://docs.google.com/presentation/d/1sEI6Tmj4-uEN0x5FriXi4qmT67ibX0IedLuZ2iuegCE/edit#slide=id.p"> Whitepaper</a>
          }
          {
            <a styleName="link" target="_blank" rel="noreferrer noopener" href="https://github.com/caffeinum/pravda.contracts/blob/master/pawnshop.cs"> Contracts</a>
          }
        </Fragment>
      </div>
    )
  }
}
