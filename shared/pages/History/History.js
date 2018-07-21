import React, { Component } from 'react'
import { connect } from 'redaction'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import Button from 'components/controls/Button/Button'
import { Login } from 'components/forms'
import SelectGame from 'components/SelectGame/SelectGame'
import SelectThink from 'components/SelectThink/SelectThink'


export default class History extends Component {

  state = {
    step: 1,
    back: false,
    next: false,
  }

  handleNextStep = () => {
    let { step } = this.state
    step += 1
    this.setState({
      step,
    })
  }

  handleBackStep = () => {
    let { step } = this.state
    step -= 1
    this.setState({
      step,
    })
  }

  handleRegistration = () => {
    this.handleNextStep()
  }

  render() {
    const { step, back, next } = this.state

    return (
      <section>
        <PageHeadline subTitle="Steps" />
        { step }
        <Button gray onClick={this.handleNextStep}>Next step</Button>
        <Button gray onClick={this.handleBackStep}>Back step</Button>

        { step === 1 && (
          <Login reg />
        )}
        { step === 2 && (
          <SelectGame />
        )}
        { step === 3 && (
          <SelectThink />
        )}
        { step === 4 && (
          <div>
            Calculated and send
          </div>
        )}
      </section>
    )
  }
}
