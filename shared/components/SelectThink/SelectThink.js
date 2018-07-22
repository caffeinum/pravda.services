import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CSSModules from 'react-css-modules'
import styles from './SelectThink.scss'


@CSSModules(styles)
export default class SelectThink extends Component {

  state = {
    games: null,
  }

  render() {
    const { next } = this.props
    const think = ['1', '2', '3' ]

    return (
      <div styleName="row">
        {
          think.map((game, index) => (
            <div styleName="game" key={index} onClick={next} />
          ))
        }
      </div>
    )
  }
}
