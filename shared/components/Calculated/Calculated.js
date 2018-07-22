import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './Calculated.scss'

import { Button } from 'components/controls'
import { FieldLabel, Input } from 'components/forms'

import actions from 'redux/actions'


@CSSModules(styles, { allowMultiple: true })
export default class Calculated extends Component {

  static propTypes = {
    amount: PropTypes.number,
  }

  static defaultProps = {
    amountProps: 1000,
  }

  state = {
    week: 7,
    amount: this.props.amount,
  }

  componentWillMount() {
    const { amountProps } = this.props

    this.setState({
      amount: amountProps,
    })
  }

  changeState = (value) => {
    this.setState({
      week: value,
    })
  }

  valueCreator = () => {
    let { amount, week } = this.state

    amount = this.rangeInput.value

    this.setState({
      amount,
    })
  }

  handleSellItem = () => {
    const { next } = this.props
    actions.pravda.initiatePawnTransaction()
    next()
  }


  render() {
    const { week, amount } = this.state
    const { amountProps, steps } = this.props
    const value = amount * week

    return (
      <div styleName="row" >
        <FieldLabel inRow>Amount: {amount}</FieldLabel>
        <input type="range" onChange={this.valueCreator} ref={input => this.rangeInput = input} value={amount} step={100} min={amountProps / 100} max={amountProps} />
        <p>Number of days: {week}</p>
        <div styleName={week === 7 ? 'checkbox checked' : 'checkbox'} onClick={() => this.changeState(7)}  > 7 Days</div>
        <br />
        <div styleName={week === 21 ? 'checkbox checked' : 'checkbox'} onClick={() => this.changeState(21)}  > 21 Days</div>
        <br />
        Total amount: {value}
        <Button styleName="button" white onClick={this.handleSellItem}>Send on contract</Button>
      </div>
    )
  }
}
