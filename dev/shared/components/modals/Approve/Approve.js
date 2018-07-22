import React from 'react'
import PropTypes from 'prop-types'

import cssModules from 'react-css-modules'
import styles from './Approve.scss'

import { Modal } from 'components/modal'
import { Button } from 'components/controls'
import { FieldLabel, Input } from 'components/forms'
import { constants } from 'helpers'

import actions from 'redux/actions'


@cssModules(styles, { allowMultiple: true })
export default class Offer extends React.Component {

  static propTypes = {
    name: PropTypes.string,
  }

  handleOpen = () => {
    actions.loader.show(true)

    setTimeout(() => {
      actions.loader.hide()
      localStorage.setItem(constants.localStorage.demoMoneyReceived, true)
      actions.modals.close(constants.modals.Approve, {})
    }, 1500)

  }

  handleClose = () => {
    const message = 'This services doest work please select other'

    actions.notifications.show(constants.notifications.Message, {
      message,
    })
  }

  render() {
    const { name } = this.props

    return (
      <Modal name={name} title="pravda.services" disableClose>
        <div styleName="content">
          <div styleName="services" onClick={this.handleOpen}>PAWNSHOP</div>
          <div styleName="services disabled" onClick={this.handleClose}>GUILD MANAGEMENT (coming soon) </div>
        </div>
      </Modal>
    )
  }
}
