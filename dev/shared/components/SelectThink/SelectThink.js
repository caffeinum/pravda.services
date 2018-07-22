import React, { Component } from 'react'

import actions from 'redux/actions'
import { constants } from 'helpers'
import { connect } from 'redaction'

import { Button } from 'components/controls'
import CSSModules from 'react-css-modules'
import styles from './SelectThink.scss'

import Sword1 from './images/sword1.jpeg'
import Sword2 from './images/sword2.jpg'
import Sword4 from './images/sword4.jpg'
import Sword5 from './images/sword5.jpeg'


@connect(({ pravda: { id } }) => ({
  id,
}))
@CSSModules(styles)
export default class SelectThink extends Component {

  state = {
    games: null,
  }

  handleError = () => {
    const message = 'This items doest work please select other'

    actions.notifications.show(constants.notifications.Message, {
      message,
    })
  }

  handleNextStep = () => {
    const { next } = this.props
    next()
  }

  render() {
    let { id, steps } = this.props
    const images = [Sword1, Sword2, Sword4, Sword5]
    let img

    if (id !== undefined) {
      img = images[id % 4]
    }

    return (
      <div styleName="row">
        <div styleName="game" >
          <h1>
            X-{id}
          </h1>
          <Button white onClick={this.handleNextStep}> Sell Item</Button>
          <img src={img} alt="" />
        </div>
        <div styleName="game" onClick={this.handleError} >
          <h1>Empty</h1>
        </div>
        <div styleName="game" onClick={this.handleError} >
          <h1>Empty</h1>
        </div>
      </div>
    )
  }
}
