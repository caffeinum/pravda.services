import React, { Fragment } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import actions from 'redux/actions'
import { connect } from 'redaction'
import moment from 'moment'
import { constants } from 'helpers'

import CSSModules from 'react-css-modules'
import styles from './App.scss'
import 'scss/app.scss'

import Header from 'components/Header/Header'
import Loader from 'components/loaders/Loader/Loader'
import RequestLoader from 'components/loaders/RequestLoader/RequestLoader'
import ModalConductor from 'components/modal/ModalConductor/ModalConductor'
import WidthContainer from 'components/layout/WidthContainer/WidthContainer'
import NotificationConductor from 'components/notification/NotificationConductor/NotificationConductor'


moment.locale('en-gb')

@withRouter
@connect({
  ethAddress: 'user.ethData.address',
  btcAddress: 'user.btcData.address',
  // nimAddress: 'user.nimData.address',
  tokenAddress: 'user.tokensData.noxon.address',
  // eosAddress: 'user.eosData.address',
  isVisible: 'loader.isVisible',
})
@CSSModules(styles)
export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  state = {
    fetching: false,
  }

  componentWillMount() {
    // if (!localStorage.getItem(constants.localStorage.demoMoneyReceived)) {
    //   actions.modals.open(constants.modals.Approve, {})
    // }
    this.setState({
      fetching: true,
    })
  }

  componentDidMount() {
    actions.user.sign()
  }

  render() {
    const { fetching } = this.state
    const { children, ethAddress, btcAddress, tokenAddress /* eosAddress */ } = this.props
    const isFetching = !ethAddress || !btcAddress || !tokenAddress || !fetching


    if (isFetching) {
      return (
        <Loader />
      )
    }

    return (
      <Fragment>
        <Header />
        <WidthContainer styleName="main">
          {children}
        </WidthContainer>
        <RequestLoader />
        <ModalConductor />
        <NotificationConductor />
      </Fragment>
    )
  }
}
