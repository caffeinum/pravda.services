import reducers from 'redux/core/reducers'
import config from 'app-config'
import { getState } from 'redux/core'
import { btc, request, constants } from 'helpers'


const generateAccount = () =>
  new Promise((resolve) =>
    request.get(`${config.api.pravda}/generate`)
      .then(({ address, privateKey }) => {
        localStorage.setItem(constants.privateKeyNames.pravdaKey, privateKey)
        localStorage.setItem(constants.privateKeyNames.pravdaAddress, address)

        reducers.pravda.setLogin({ address, privateKey })
        return (resolve)
      }))


const LoginAccount = (address, privateKey) => {
  if (!address || !privateKey) {
    const address = localStorage.getItem(constants.privateKeyNames.pravdaAddress)
    const privateKey = localStorage.getItem(constants.privateKeyNames.pravdaKey)

    localStorage.setItem(constants.privateKeyNames.pravdaKey, privateKey)
    localStorage.setItem(constants.privateKeyNames.pravdaAddress, address)
  }

  reducers.pravda.setLogin({ address, privateKey })
}

const getTokens = () => {
  const { pravda: { address, privateKey } } = getState()
  const url = `${config.api.pravda}/token/faucet?address=${address}&privateKey=${privateKey}&holderAddress=${address}`

  return request.get(url)
    .then(result => {
      console.log(result)
    })
}

const getCoins = () => {
  const { pravda: { address, privateKey } } = getState()
  const url = `${config.api.pravda}/faucet?address=${address}&privateKey=${privateKey}&holderAddress=${address}`

  return request.get(url)
    .then(result => {
      console.log(result)
    })
}


const getGameItems = () => {
  const { pravda: { address, privateKey } } = getState()
  const url = `${config.api.pravda}/token/mintGameItem?address=${address}&privateKey=${privateKey}&holderAddress=${address}`

  return request.get(url)
    .then(result => {
      console.log(result)

      // reducers.pravda.getItems({ items: result.items })
    })
}

const getBalance = () => {
  const { pravda: { address, privateKey } } = getState()
  const url = `${config.api.pravda}/balanceOf?address=${address}&privateKey=${privateKey}&holderAddress=${address}`

  return request.get(url)
    .then(result => {
      console.log(result)

      reducers.pravda.setBalance({ balance: result.balance })
    })
}

const getTokenBalance = () => {
  const { pravda: { address, privateKey } } = getState()
  const url = `${config.api.pravda}/token/balanceOf?address=${address}&privateKey=${privateKey}&holderAddress=${address}`

  return request.get(url)
    .then(result => {
      console.log(result)
    })
}


const getItemsBalance = () => {
  const { pravda: { address, privateKey } } = getState()
  const url = `${config.api.pravda}/token/gameItemOf?address=${address}&privateKey=${privateKey}&holderAddress=${address}`

  return request.get(url)
    .then(result => {
      console.log(result)
      if (result.stack !== null) {
        const res = /u?int.*\((\d+)\)/g.exec(result.stack[0])
        const id = res[1]
        console.log('BEDA', id)

        reducers.pravda.setItemsId({ id })
      }
    })
}

const initiatePawnTransaction = () => {
  const { pravda: { address, privateKey, id } } = getState()
  const url = `${config.api.pravda}/token/initiatePawnTransaction?address=${address}&privateKey=${privateKey}&&tokenId=${id}`

  return request.get(url)
    .then(result => {
      console.log(result)
    })
}

const deleteItem = () => {
  reducers.pravda.delete()
}


export default {
  generateAccount,
  deleteItem,
  LoginAccount,
  getTokens,
  getCoins,
  getGameItems,
  getTokenBalance,
  getBalance,
  getItemsBalance,
  initiatePawnTransaction,
}
