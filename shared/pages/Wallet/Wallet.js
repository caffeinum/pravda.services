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


  render() {
    const titles = ['Save & Secured', 'Instant Exchange', 'One Click Application', 'Payment Gateway']

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
          <div>
            {
              titles.map((title, index) => (
                <div styleName="block" key={index}>
                  <img src={Icon} alt="" />
                  {title}
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
}
