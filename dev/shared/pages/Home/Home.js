import React, { PureComponent, Fragment } from 'react'

import CSSModules from 'react-css-modules'
import styles from './Home.scss'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import SubTitle from 'components/PageHeadline/SubTitle/SubTitle'
import Wallet from '../Wallet/Wallet'


@CSSModules(styles)
export default class Home extends PureComponent {

  render() {
    return (
      <Fragment>
        <section>
          <PageHeadline>
            <SubTitle>
              Secured loans on game assets <br />
              On Blockchain
            </SubTitle>
          </PageHeadline>
          <h2>
            Fast, reliable, trustless, smart-contract based pawnshop for rare in-game items. Things remain with you.
          </h2>
        </section>
        <Wallet />
      </Fragment>
    )
  }
}
