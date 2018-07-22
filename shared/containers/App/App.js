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
  isVisible: 'loader.isVisible',
})
@CSSModules(styles)
export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  state = {
    fetching: true,
  }

  componentWillMount() {
    if (!localStorage.getItem(constants.localStorage.demoMoneyReceived)) {
      actions.modals.open(constants.modals.Approve, {})
    }
    actions.pravda.LoginAccount()

    this.setState({
      fetching: false,
    })
  }

  render() {
    const { fetching } = this.state
    const { children } = this.props


    if (fetching) {
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
