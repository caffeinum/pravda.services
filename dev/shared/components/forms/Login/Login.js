import React, { Component, Fragment } from 'react'

import CSSModules from 'react-css-modules'
import styles from './Login.scss'

import actions from 'redux/actions'
import { connect } from 'redaction'

import { Button, ButtonInRow } from 'components/controls'
import { FieldLabel, Input } from 'components/forms'
import Link from 'sw-valuelink'


@connect(({ pravda: { address, privateKey  } }) => ({
  address,
  privateKey,
}))
@CSSModules(styles)
export default class Login extends Component {

  state = {
    name: '',
    password: '',
    isSubmitted: false,
    view: true,
  }

  componentWillMount() {
    const { address, privateKey } = this.props

    if (address && privateKey) {
      this.setState({
        view: false,
      })
    }
  }

  handleLogin = () => {
    const { view } = this.state
    const { next } = this.props

    if (!view) {
      next()
    }

  }

  handleGenerateAccount = () => {
    actions.pravda.generateAccount()

    this.setState({
      view: false,
    })
  }

  render() {
    const { name, password, isSubmitted, view } = this.state
    const { steps } = this.props
    const linked = Link.all(this, 'name', 'password')

    if (isSubmitted) {
      linked.password.check((value) => value !== '', `Your password null`)
      linked.name.check((value) => value !== '', `Your name null`)
    }

    return (
      <div styleName="col">
        <Button styleName="button" white disabled={!view} onClick={this.handleGenerateAccount}>Generate account</Button>
        <Button styleName="button" green disabled={view} onClick={this.handleLogin}>Next</Button>
      </div>
    )
  }
}
