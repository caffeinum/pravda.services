import React from 'react'

import { connect } from 'redaction'
import actions from 'redux/actions'
import { constants } from 'helpers'

import CSSModules from 'react-css-modules'
import styles from './User.scss'

import Sound from 'helpers/Sound/Sound.mp4'
// import Question from './controls/Question/Question'
import AddOfferButton from './AddOfferButton/AddOfferButton'
import UserAvatar from './UserAvatar/UserAvatar'
import UserTooltip from './UserTooltip/UserTooltip'

import MenuIcon from 'components/ui/MenuIcon/MenuIcon'
import NavMobile from '../NavMobile/NavMobile'


@connect({
  feeds: 'feeds.items',
})
@CSSModules(styles)
export default class User extends React.Component {

  state = {
    view: true,
    menuVisible: false,
  }

  handleChangeView = () => {
    this.setState({
      view: true,
    })
  }

  handleToggleTooltip = () => {
    this.setState({
      view: !this.state.view,
    })
  }

  soundClick = () => {
    let audio = new Audio()
    audio.src = Sound
    audio.autoplay = true
  }


  render() {
    const { view, menuVisible } = this.state
    const { feeds } = this.props

    return (
      <div styleName="user-cont">
        <MenuIcon onClick={() => this.setState({ menuVisible: !menuVisible })} />
        <NavMobile view={menuVisible} />
        <AddOfferButton />
        {/*<UserAvatar*/}
          {/*isToggle={this.handleToggleTooltip}*/}
          {/*feeds={feeds}*/}
          {/*mePeer={mePeer}*/}
          {/*soundClick={this.soundClick}*/}
          {/*changeView={this.handleChangeView}*/}
        {/*/>*/}
        {/*{*/}
          {/*view && <UserTooltip*/}
            {/*view={view}*/}
            {/*feeds={feeds}*/}
            {/*mePeer={mePeer}*/}
            {/*acceptRequest={this.acceptRequest}*/}
          {/*/>*/}
        {/*}*/}
      </div>
    )
  }
}
