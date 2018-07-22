import React, { Component } from 'react'
import { connect } from 'redaction'

import CSSModules from 'react-css-modules'
import styles from './History.scss'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import SubTitle from 'components/PageHeadline/SubTitle/SubTitle'

import Steps from 'components/Steps/Steps'
import { Login } from 'components/forms'
import SelectGame from 'components/SelectGame/SelectGame'
import SelectThink from 'components/SelectThink/SelectThink'
import Calculated from 'components/Calculated/Calculated'


@CSSModules(styles)
export default class History extends Component {

  state = {
    step: 1,
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

  render() {
    const { step } = this.state

    return (
      <section>
        <PageHeadline>
          <SubTitle>
            Steps
          </SubTitle>
          <Steps steps={step} />
        </PageHeadline>
        { step === 1 && <Login reg next={this.handleNextStep} /> }
        { step === 2 && <SelectGame next={this.handleNextStep} /> }
        { step === 3 && <SelectThink next={this.handleNextStep} /> }
        { step === 4 && <Calculated /> }
      </section>
    )
  }
}
