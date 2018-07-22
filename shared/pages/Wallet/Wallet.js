import React, { Component } from 'react'
import { constants } from 'helpers'

import { Link } from 'react-router-dom'
import actions from 'redux/actions'

import CSSModules from 'react-css-modules'
import styles from './Wallet.scss'
import Clicked from './images/clicker.svg'
import Chain from './images/blockchain.svg'
import Card from './images/credit-card.svg'
import Security from './images/security.svg'
import Search from './images/search.svg'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import SubTitle from 'components/PageHeadline/SubTitle/SubTitle'
import Button from 'components/controls/Button/Button'


@CSSModules(styles)
export default class Wallet extends Component {

  render() {
    const titles = [
      {
        title: 'Save & Secured',
        icon: Security,
      },
      {
        title: 'Accept Crypto',
        icon: Card,
      },
      {
        title: 'Blockchain Powered',
        icon: Chain,
      },
      {
        title: 'High Transparency',
        icon: Search,
      },
      {
        title: 'Intuitive UI',
        icon: Clicked,
      },
    ]

    return (
      <section>
        <PageHeadline>
          <SubTitle>Deep integration with Expload technologies.</SubTitle>
        </PageHeadline>
        <div styleName="row">
          <div styleName="col">
            <div styleName="title">3 steps to work with us:</div>
            <p styleName="text">
              Deploy our contracts <br />
              Tokenize your assets <br />
              Get commission on each transaction </p>
            <Link to="/history">
              <Button styleName="button" green >Go to the Wallet</Button>
            </Link>
          </div>
          <div>
            {
              titles.map((title, index) => (
                <div styleName="block" key={index}>
                  <img src={title.icon} alt="" />
                  {title.title}
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
}
