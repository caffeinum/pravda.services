import React, { Component } from 'react'
import { constants } from 'helpers'

import actions from 'redux/actions'

import CSSModules from 'react-css-modules'
import styles from './Wallet.scss'
import Icon from './images/search.svg'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import SubTitle from 'components/PageHeadline/SubTitle/SubTitle'
import Button from 'components/controls/Button/Button'


@CSSModules(styles)
export default class Wallet extends Component {

  state = {
    view: 'off',
  }

  render() {

    return (
      <section>
        <PageHeadline>
          <SubTitle>Security</SubTitle>
        </PageHeadline>
        <div styleName="row">
          <div>
            <p>Why PRAVDA. Services</p>
            <p>Smarter, Better, Faster <br />
              Stronger Than Others </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
              Ab ad, alias dicta, eaque eligendi fugiat maxime <br/>
              mollitia nemo non nostrum praesentium quos tempora vitae, voluptate.</p>
            <Button styleName="button" brand>Login on board</Button>
          </div>
          <div styleName="col">
            <div styleName="block">
              <img src={Icon} alt="" />
              Save & Secured
            </div>
            <div styleName="block">
              <img src={Icon} alt="" />
              Instant Exchange
            </div>
            <div styleName="block">
              <img src={Icon} alt="" />
              Internal & External Integration
            </div>
            <div styleName="block">
              <img src={Icon} alt="" />
              One Click Application
            </div>
            <div styleName="block">
              <img src={Icon} alt="" />
              Payment Gateway
            </div>
          </div>
        </div>
      </section>
    )
  }
}
