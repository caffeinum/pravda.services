import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CSSModules from 'react-css-modules'
import styles from './SelectGame.scss'


@CSSModules(styles)
export default class SelectGame extends Component {

  state = {
    games: null,
  }

  render() {
    const games = ['1', '2', '3' ]

    return (
      <div styleName="row">
        {
          games.map((game, index) => (
            <Link to={game}>
              <div styleName="game" key={index} />
            </Link>
          ))
        }
      </div>
    )
  }
}
