import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './SelectGame.scss'

import Horse from './images/horse.png'
import Abort from  './images/Artboard.png'
import Ligmar from './images/Ligmar.png'
import { Button } from 'components/controls'

import actions from 'redux/actions'


@CSSModules(styles)
export default class SelectGame extends Component {

  handleNext = async () => {
    actions.loader.show(true)
    await actions.pravda.getCoins()
    await actions.pravda.getGameItems()
    await actions.pravda.getBalance()
    await actions.pravda.getTokenBalance()
    await actions.pravda.getItemsBalance()
    actions.loader.hide()
    this.props.handleNextStep()
  }

  render() {
    const { steps } = this.props

    return (
      <div styleName="row">
        <div styleName="game" >
          <img src={Horse} alt="" />
          <Button styleName="button"  white onClick={this.handleNext}>X-Game</Button>
        </div>
        <div styleName="game" >
          <img src={Abort} alt="" />
          <Button styleName="button" white onClick={this.handleNext}>Magic Fight</Button>
        </div>
        <div styleName="game" >
          <img src={Ligmar} alt="" />
          <Button styleName="button" white onClick={this.handleNext}>Ligmar</Button>
        </div>
      </div>
    )
  }
}
