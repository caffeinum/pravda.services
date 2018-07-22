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
              Things remain with you <br />
              Fast loan against collateral in Moscow.
            </SubTitle>
          </PageHeadline>
          <h2>
            Fast loan against collateral in Moscow.  Things remain with you
            Fast loan against collateral in Moscow.  Things remain with you
            Fast loan against collateral in Moscow.  Things remain with you
            Fast loan against collateral in Moscow.  Things remain with you
          </h2>
        </section>
        <Wallet />
      </Fragment>
    )
  }
}
