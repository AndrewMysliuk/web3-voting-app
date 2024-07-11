import Web3 from "web3"

// Get Accounts
export const getAccounts = async (web3: Web3) => {
  try {
    const accounts = await web3.eth.getAccounts()

    return accounts?.[0] ?? ""
  } catch (error: unknown) {
    throw error
  }
}

// Get Network ID
export const getNetworkId = async (web3: Web3) => {
  return String(await web3.eth.net.getId())
}
