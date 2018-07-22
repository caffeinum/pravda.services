export const initialState = {
  address: '',
  privateKey: '',
  id: '',
  balance: 0,
}

export const setLogin = (state, { address, privateKey }) => ({
  address,
  privateKey,
})

export const setItemsId = (state, { id }) => ({
  ...state,
  id,
})

export const setBalance = (state, { balance }) => ({
  ...state,
  balance,
})

export const deleteItems = (state) => ({})

