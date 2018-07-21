import { request, constants } from 'helpers'
import { getState } from 'redux/core'
import web3 from 'helpers/web3'
import reducers from 'redux/core/reducers'
import config from 'app-config'
import referral from './referral'


const login = (privateKey) => {
  let data

  if (privateKey) {
    data = web3.eth.accounts.privateKeyToAccount(privateKey)
  }
  else {
    console.info('Created account Ethereum ...')
    data = web3.eth.accounts.create()
    localStorage.setItem(constants.privateKeyNames.eth, data.privateKey)
  }

  web3.eth.accounts.wallet.add(data.privateKey)

  reducers.user.setAuthData({ name: 'ethData', data })

  window.getEthAddress = () => data.address

  referral.newReferral(data.address);

  console.info('Logged in with Ethereum', data)

  return data.privateKey
}

const getBalance = () => {
  const { user: { ethData: { address } } } = getState()
  const url = `${config.api.etherscan}?module=account&action=balance&address=${address}&tag=latest&apikey=${config.apiKeys.etherscan}`

  return request.get(url)
    .then(({ result }) => {
      const amount = Number(web3.utils.fromWei(result))
      reducers.user.setBalance({ name: 'ethData', amount })
      return result
    })
    .catch(() => {
      console.log('app:showError', 'Ethereum service isn\'t available, try later')
    })
}

const fetchBalance = (address) => {
  const url = `${config.api.etherscan}?module=account&action=balance&address=${address}&tag=latest&apikey=${config.apiKeys.etherscan}`
  return request.get(url)
    .then(({ result }) => Number(web3.utils.fromWei(result)))
}


// const fetchBalance = (address) =>
//   web3.eth.getBalance(address)
//     .then((wei) => Number(web3.utils.fromWei(wei)))

// export const getGas = () => {
//   web3.eth.getGasPrice().then((res) => {
//     gas = web3.utils.fromWei(res)
//   })
// }

const getTransaction = () =>
  new Promise((resolve) => {
    const { user: { ethData: { address } } } = getState()

    const url = `${config.api.etherscan}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${config.apiKeys.etherscan}`
    let transactions

    request.get(url)
      .then((res) => {
        console.log(res)
        if (res.status) {
          transactions = res.result
            .filter((item) => item.value > 0).map((item) => ({
              type: 'eth',
              confirmations: item.confirmations > 0 ? 'Confirmed' : 'Unconfirmed',
              hash: item.hash,
              status: item.blockHash != null ? 1 : 0,
              value: web3.utils.fromWei(item.value),
              address: item.to,
              date: item.timeStamp * 1000,
              direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out',
            }))
          resolve(transactions)
        }
        else {
          console.error('res:status ETH false', res)
        }
      })
  })

const send = (from, to, amount) =>
  new Promise((resolve, reject) => {
    const { user: { ethData: { privateKey } } } = getState()

    const params = {
      to: String(to).trim(),
      gasPrice: '20000000000',
      gas: '21000',
      value: web3.utils.toWei(String(amount)),
    }

    web3.eth.accounts.signTransaction(params, privateKey)
      .then(result => web3.eth.sendSignedTransaction(result.rawTransaction))
      .then(receipt => {
        resolve(receipt)
      })
  })


export default {
  login,
  getBalance,
  getTransaction,
  send,
  fetchBalance,
}
