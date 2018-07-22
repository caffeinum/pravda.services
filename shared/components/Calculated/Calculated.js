import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './Calculated.scss'

import { Button } from 'components/controls'
import { FieldLabel, Input } from 'components/forms'


@CSSModules(styles, { allowMultiple: true })
export default class Calculated extends Component {

  static propTypes = {
    amount: PropTypes.number,
  }

  static defaultProps = {
    amountProps: 12,
  }

  state = {
    month: 12,
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
      month: value,
    })
  }

  valueCreator = () => {
    let { amount } = this.state

    amount = this.rangeInput.value

    this.setState({
      amount,
    })
  }


  render() {
    const { month, amount } = this.state
    const { amountProps } = this.props
    const value = amount * month

    return (
      <div styleName="row" >
        <FieldLabel inRow>Amount: {amount}</FieldLabel>
        <input type="range" onChange={this.valueCreator} ref={input => this.rangeInput = input} step={1} min="1" max={amountProps} />
        <p>Number of months: {month}</p>
        <div styleName={month === 12 ? 'checkbox checked' : 'checkbox'} onClick={() => this.changeState(12)}  > 12 Month</div>
        <br />
        <div styleName={month === 24 ? 'checkbox checked' : 'checkbox'} onClick={() => this.changeState(24)}  > 24 Month</div>
        <br />
        Total amount: {value}
        <Button styleName="button" white onClick={this.handleLogin}>Send on contract</Button>
      </div>
    )
  }
}
