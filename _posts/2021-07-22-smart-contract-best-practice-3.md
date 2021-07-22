---
title: Smart contract best practice 3
date: 2021-07-15 17:20:30 +/-0700
categories: [Ethereum Blockchain, Smart contract best practices]
tags: [blockchain, smartcontract, learning, practice, ethereum]     # TAG names should always be lowercase
---

This blog provides a baseline knowledge of security considerations for Smart Contract developer in Ethereum Blockchain.

# A list known attacks 

The following is a list of known attacks which you should be aware of, and defend against when writing smart contracts.

## Reentrancy

### Reentrancy on a Single Function
The first version of this bug to be noticed involved functions that could be called repeatedly, before the first invocation of the function was finished. This may cause the different invocations of the function to interact in destructive ways.

```solidity
function withdrawBalance() public {
    uint amountToWithdraw = userBalances[msg.sender];
    (bool success, ) = msg.sender.call.value(amountToWithdraw)("");
    require(success);
    userBalances[msg.sender] = 0;
}
```

Since the user's balance is not set to 0 until the very end of the function, the second (and later) invocations will still succeed, and will withdraw the balance over and over again.

The best way to prevent this attack is to make sure you don't call an external function until you've done all the internal work you need to do:

```solidity
function withdrawBalance() public {
    uint amountToWithdraw = userBalances[msg.sender];
    userBalances[msg.sender] = 0;
    (bool success, ) = msg.sender.call.value(amountToWithdraw)("");
    require(success);
}
```
### Cross-function Reentrancy
An attacker may also be able to do a similar attack using two different functions that share the same state.

The same solutions will work, with the same caveats. Also note that in this example, both functions were part of the same contract. However, the same bug can occur across multiple contracts, if those contracts share state.

### Pitfalls in Reentrancy Solutions
Since reentrancy can occur across multiple functions, and even multiple contracts, any solution aimed at preventing reentrancy with a single function will not be sufficient.

**The best way to solve this, I have recommended finishing all internal work (ie. state changes) first, and only then calling the external function**

However, you need to not only avoid calling external functions too soon, but also avoid calling functions which call external functions

Another solution often suggested is <i>Mutex</i>. This allow contract "lock" some state so it can only be changed by the owner of lock.
```solidity
bool private lockLogic;

function withdraw(uint _amount) payable public returns (bool) {
    require(!lockLogic);
    lockLogic = true;

    (bool success, ) = msg.sender.call(_amount).("");

    if (success) {
        balance[msg.sender] -= amount;
    }
    
    lockLogic = false;
    return true;
}
```

<p style="font-size: 25px; font-weight: bold">Thank you for your reading and keep update with me</p>
