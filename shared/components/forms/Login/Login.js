import React, { Component } from 'react'

import CSSModules from 'react-css-modules'
import styles from './Login.scss'

import { Button, ButtonInRow } from 'components/controls'
import { FieldLabel, Input } from 'components/forms'
import Link from 'sw-valuelink'


@CSSModules(styles)
export default class Login extends Component {

  state = {
    name: '',
    password: '',
    isSubmitted: false,
  }


  handleLogin = () => {
    const { name, password } = this.state

    if (!name || !password || password.length > 6) {
      this.setState({
        isSubmitted: true,
      })
      return
    }

    alert('asdasd')

  }

  render() {
    const { name, password, isSubmitted } = this.state
    const { reg } = this.props
    const linked = Link.all(this, 'name', 'password')

    if (isSubmitted) {
      linked.password.check((value) => value.length > 6, `Your password must be bigger 6 symbol `)
      linked.name.check((value) => value.length > 5, `Your name null `)
    }

    return (
      <div styleName="col">
        <FieldLabel inRow>Username</FieldLabel>
        <Input valueLink={linked.name} pattern="a-zA-Z" />
        {
          !linked.name.error && (
            <div styleName="note">Name big 6 symbol</div>
          )
        }
        <FieldLabel inRow>Password</FieldLabel >
        <Input valueLink={linked.password} pattern="0-9a-zA-Z" />
        {
          !linked.password.error && (
            <div styleName="note">Password big 6 symbol</div>
          )
        }
        <ButtonInRow>
          <Button styleName="button" green onClick={this.handleLogin}>Login on board</Button>
          { reg &&  <Button styleName="button" brand onClick={this.handleLogin}>Registration</Button> }
        </ButtonInRow>
      </div>
    )
  }
}
