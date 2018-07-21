import React, { PureComponent } from 'react'

import CSSModules from 'react-css-modules'
import styles from './Home.scss'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import SubTitle from 'components/PageHeadline/SubTitle/SubTitle'
import { Login } from 'components/forms'


@CSSModules(styles)
export default class Home extends PureComponent {

  render() {
    return (
      <section>
        <PageHeadline>
          <SubTitle>
            Fast loan against collateral in Moscow. Things remain with you
          </SubTitle>
        </PageHeadline>
        <div styleName="row">
          <div styleName="width">
            <h2>
              Fast loan against collateral in Moscow.  Things remain with you
              Fast loan against collateral in Moscow.  Things remain with you
              Fast loan against collateral in Moscow.  Things remain with you
              Fast loan against collateral in Moscow.  Things remain with you
            </h2>
          </div>
          <Login />
        </div>
      </section>
    )
  }
}
