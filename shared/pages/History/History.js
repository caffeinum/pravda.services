import React, { Component } from 'react'
import { connect } from 'redaction'

import CSSModules from 'react-css-modules'
import styles from './History.scss'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import SubTitle from 'components/PageHeadline/SubTitle/SubTitle'

import { Button } from 'components/controls'
import actions from 'redux/actions'

import Steps from 'components/Steps/Steps'
import { Login } from 'components/forms'
import SelectGame from 'components/SelectGame/SelectGame'
import SelectThink from 'components/SelectThink/SelectThink'
import Calculated from 'components/Calculated/Calculated'


@connect(({ pravda: { address, privateKey, balance  } }) => ({
  address,
  privateKey,
  balance,
}))
@CSSModules(styles)
export default class History extends Component {

  state = {
    step: 1,
  }

  handleNextStep = () => {
    const { step } = this.state
    const newStep = step + 1

    this.setState({
      step: newStep,
    })
  }

  handleBackStep = () => {
    const { step } = this.state
    const newStap = step - 1

    if (newStap > 0) {
      this.setState({
        step: newStap,
      })
    }
  }


  render() {
    const { address, privateKey, balance } = this.props
    const { step } = this.state

    return (
      <section>
        <PageHeadline>
          <SubTitle>
            Steps
          </SubTitle>
          <Steps steps={step} />
          <div styleName="row">
            <Button green onClick={this.handleBackStep}>Back</Button>
            <div>
              <p styleName="text">Address: {address}</p>
              <p styleName="text">PrivateKey: {privateKey}</p>
              <p styleName="text">Balance: {balance}</p>
            </div>
          </div>
        </PageHeadline>
        {
          step === 1 ? (
            <Login nextStep={this.handleNextStep} />
          ) : (
            step === 2 ? (
              <SelectGame nextStep={this.handleNextStep} />
            ) : step === 3 ? (
              <SelectThink nextStep={this.handleNextStep} />
            ) : step === 4 ? (
              <Calculated nextStep={this.handleNextStep} />
            ) : (
              <h1>Thank you. Your coins have been sent.</h1>
            )
          )
        }
      </section>
    )
  }
}
