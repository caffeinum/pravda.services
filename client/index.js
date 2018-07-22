import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'routes'
import store, { history } from 'redux/store'

import Root from 'containers/Root/Root'
import Loader from 'components/loaders/Loader/Loader'


// ReactDOM.render(
//   <Loader />,
//   document.getElementById('root')
// )
//
// const ipfsRoom = window.document.getElementById('ipfsRoom')
//
// setInterval(ipfsRoom.onload = () => {
//
// }, 500)

ReactDOM.render(
  <Root history={history} store={store} routes={routes} />,
  document.getElementById('root')
)
