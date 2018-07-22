import React, { Component, Fragment } from 'react'

import CSSModules from 'react-css-modules'
import styles from './Steps.scss'


@CSSModules(styles, { allowMultiple: true })
export default class Steps extends Component {

  state = {
    step: 1,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.steps > this.state.step) {
      this.setState({
        step: nextProps.steps,
      })
    }
  }

  render() {
    const { step } = this.state
    const titles = ['1', '2', '3', '4']

    return (
      <div styleName="row">
        {
          titles.map((st, index) => (
            <Fragment key={st}>
              <span styleName={step > st ? 'step complete' : 'step'} >{step > st ? null : st }</span>
              { index > 2 ? null : <span styleName={step > st ? 'road solid' : 'road'} /> }
            </Fragment>
          ))
        }
      </div>
    )
  }
}
