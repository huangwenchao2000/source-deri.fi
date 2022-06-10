// this file is generated by script, don't modify it !!!
import { ContractBase } from '../../../shared/contract/contract_base.js'
import { deleteIndexedKey } from '../../../shared/utils/web3.js'
import { vBEP20Abi } from '../abi/vBEP20Abi.js'

export class VBEP20 extends ContractBase {
  // init
  constructor(chainId, contractAddress, opts = {}) {
    super(chainId, contractAddress, vBEP20Abi)
    // for pool use
    this.initialBlock = opts.initialBlock || ""
  }

  // query
  async accrualBlockNumber() {
    const res = await this._call('accrualBlockNumber', [])
    return deleteIndexedKey(res)
  }
  async admin() {
    const res = await this._call('admin', [])
    return deleteIndexedKey(res)
  }
  async allowance(owner, spender) {
    const res = await this._call('allowance', [owner, spender])
    return deleteIndexedKey(res)
  }
  async balanceOf(owner) {
    const res = await this._call('balanceOf', [owner])
    return deleteIndexedKey(res)
  }
  async borrowBalanceStored(account) {
    const res = await this._call('borrowBalanceStored', [account])
    return deleteIndexedKey(res)
  }
  async borrowIndex() {
    const res = await this._call('borrowIndex', [])
    return deleteIndexedKey(res)
  }
  async borrowRatePerBlock() {
    const res = await this._call('borrowRatePerBlock', [])
    return deleteIndexedKey(res)
  }
  async comptroller() {
    const res = await this._call('comptroller', [])
    return deleteIndexedKey(res)
  }
  async decimals() {
    const res = await this._call('decimals', [])
    return deleteIndexedKey(res)
  }
  async exchangeRateStored() {
    const res = await this._call('exchangeRateStored', [])
    return deleteIndexedKey(res)
  }
  async getAccountSnapshot(account) {
    const res = await this._call('getAccountSnapshot', [account])
    return deleteIndexedKey(res)
  }
  async getCash() {
    const res = await this._call('getCash', [])
    return deleteIndexedKey(res)
  }
  async interestRateModel() {
    const res = await this._call('interestRateModel', [])
    return deleteIndexedKey(res)
  }
  async isVToken() {
    const res = await this._call('isVToken', [])
    return deleteIndexedKey(res)
  }
  async name() {
    const res = await this._call('name', [])
    return deleteIndexedKey(res)
  }
  async pendingAdmin() {
    const res = await this._call('pendingAdmin', [])
    return deleteIndexedKey(res)
  }
  async reserveFactorMantissa() {
    const res = await this._call('reserveFactorMantissa', [])
    return deleteIndexedKey(res)
  }
  async supplyRatePerBlock() {
    const res = await this._call('supplyRatePerBlock', [])
    return deleteIndexedKey(res)
  }
  async symbol() {
    const res = await this._call('symbol', [])
    return deleteIndexedKey(res)
  }
  async totalBorrows() {
    const res = await this._call('totalBorrows', [])
    return deleteIndexedKey(res)
  }
  async totalReserves() {
    const res = await this._call('totalReserves', [])
    return deleteIndexedKey(res)
  }
  async totalSupply() {
    const res = await this._call('totalSupply', [])
    return deleteIndexedKey(res)
  }
  async underlying() {
    const res = await this._call('underlying', [])
    return deleteIndexedKey(res)
  }

  // tx
  // async _acceptAdmin(accountAddress) {
  //   return await this._transact('_acceptAdmin', [], accountAddress)
  // }
  // async _addReserves(accountAddress, addAmount) {
  //   return await this._transact('_addReserves', [addAmount], accountAddress)
  // }
  // async _reduceReserves(accountAddress, reduceAmount) {
  //   return await this._transact('_reduceReserves', [reduceAmount], accountAddress)
  // }
  // async _setComptroller(accountAddress, newComptroller) {
  //   return await this._transact('_setComptroller', [newComptroller], accountAddress)
  // }
  // async _setInterestRateModel(accountAddress, newInterestRateModel) {
  //   return await this._transact('_setInterestRateModel', [newInterestRateModel], accountAddress)
  // }
  // async _setPendingAdmin(accountAddress, newPendingAdmin) {
  //   return await this._transact('_setPendingAdmin', [newPendingAdmin], accountAddress)
  // }
  // async _setReserveFactor(accountAddress, newReserveFactorMantissa) {
  //   return await this._transact('_setReserveFactor', [newReserveFactorMantissa], accountAddress)
  // }
  // async accrueInterest(accountAddress) {
  //   return await this._transact('accrueInterest', [], accountAddress)
  // }
  // async approve(accountAddress, spender, amount) {
  //   return await this._transact('approve', [spender, amount], accountAddress)
  // }
  // async balanceOfUnderlying(accountAddress, owner) {
  //   return await this._transact('balanceOfUnderlying', [owner], accountAddress)
  // }
  // async borrow(accountAddress, borrowAmount) {
  //   return await this._transact('borrow', [borrowAmount], accountAddress)
  // }
  // async borrowBalanceCurrent(accountAddress, account) {
  //   return await this._transact('borrowBalanceCurrent', [account], accountAddress)
  // }
  // async exchangeRateCurrent(accountAddress) {
  //   return await this._transact('exchangeRateCurrent', [], accountAddress)
  // }
  // async initialize(accountAddress, underlying_, comptroller_, interestRateModel_, initialExchangeRateMantissa_, name_, symbol_, decimals_) {
  //   return await this._transact('initialize', [underlying_, comptroller_, interestRateModel_, initialExchangeRateMantissa_, name_, symbol_, decimals_], accountAddress)
  // }
  // async initialize(accountAddress, comptroller_, interestRateModel_, initialExchangeRateMantissa_, name_, symbol_, decimals_) {
  //   return await this._transact('initialize', [comptroller_, interestRateModel_, initialExchangeRateMantissa_, name_, symbol_, decimals_], accountAddress)
  // }
  // async liquidateBorrow(accountAddress, borrower, repayAmount, vTokenCollateral) {
  //   return await this._transact('liquidateBorrow', [borrower, repayAmount, vTokenCollateral], accountAddress)
  // }
  // async mint(accountAddress, mintAmount) {
  //   return await this._transact('mint', [mintAmount], accountAddress)
  // }
  // async mintBehalf(accountAddress, receiver, mintAmount) {
  //   return await this._transact('mintBehalf', [receiver, mintAmount], accountAddress)
  // }
  // async redeem(accountAddress, redeemTokens) {
  //   return await this._transact('redeem', [redeemTokens], accountAddress)
  // }
  // async redeemUnderlying(accountAddress, redeemAmount) {
  //   return await this._transact('redeemUnderlying', [redeemAmount], accountAddress)
  // }
  // async repayBorrow(accountAddress, repayAmount) {
  //   return await this._transact('repayBorrow', [repayAmount], accountAddress)
  // }
  // async repayBorrowBehalf(accountAddress, borrower, repayAmount) {
  //   return await this._transact('repayBorrowBehalf', [borrower, repayAmount], accountAddress)
  // }
  // async seize(accountAddress, liquidator, borrower, seizeTokens) {
  //   return await this._transact('seize', [liquidator, borrower, seizeTokens], accountAddress)
  // }
  // async totalBorrowsCurrent(accountAddress) {
  //   return await this._transact('totalBorrowsCurrent', [], accountAddress)
  // }
  // async transfer(accountAddress, dst, amount) {
  //   return await this._transact('transfer', [dst, amount], accountAddress)
  // }
  // async transferFrom(accountAddress, src, dst, amount) {
  //   return await this._transact('transferFrom', [src, dst, amount], accountAddress)
  // }

}