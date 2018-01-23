const assert = require('assert');
const Bank = require('../bank');
const Account = require('../account');

describe('Bank', function(){

  let bank;
  let account;

  beforeEach(function(){
    bank = new Bank();
    account = new Account('Fraser', 100, 'savings');
  })

  it('account is empty', function(){
    assert.strictEqual(bank.accounts.length, 0);
  })

  it('can add account', function(){
    bank.addAccount(account);
    assert.strictEqual(bank.accounts.length, 1)
  })

})
