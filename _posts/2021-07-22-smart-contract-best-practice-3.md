---
title: Smart contract best practice 3
date: 2021-07-22 10:20:30 +/-0700
categories: [Ethereum Blockchain, Smart contract best practices]
tags: [blockchain, smartcontract, learning, practice, ethereum]     # TAG names should always be lowercase
---

This blog provides a baseline knowledge of security considerations for Smart Contract developer in Ethereum Blockchain.

# A list of Known Attacks 

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

## Front-run Attack
By defining a taxonomy and differentiating each group from another, I can make it easier to discuss the problem and find solutions for each group.

I define the following categories of front-running attacks:
1. Displacement
2. Insertion
3. Suppression

### Displacement
In the first type of attack, <i>a displacement attack</i>. It is not important for User function call to run after Adversary runs user function

This attack is commonly performed by increasing the `gasPrice` higher than network average, often by a multiplier of 10 or more.

### Insertion
For this type of attack, it is important to the adversary that the original function call runs after user transaction

The attacker can insert transactions before or after logic of user's smart contract execute

### Suppression
In this type of attack, after attacker runs his function, he tries to delay user from running function. 

This was the case on-chain hacks, the attacker sent multiple transactions with high `gasPrice` and `gasLimit` to custom smart contracts that assert (or use other means) to consume all the gas and fill up the block's `gasLimit`

## Integer Overflow and Underflow
Consider a simple token transfer:
```solidity
mapping (address => uint256) public balanceOf;

// INSECURE
function transfer(address _to, uint256 _value) {
    require(balanceOf[msg.sender] >= _value);
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;
}

// SECURE
function transfer(address _to, uint256 _value) {
    /* Check if sender has balance and for overflows */
    require(balanceOf[msg.sender] >= _value && balanceOf[_to] + _value >= balanceOf[_to]);

    /* Add and subtract new balances */
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;
}
```
If a balance reaches the maximum uint value `(2^256)` it will circle back to zero which checks for the condition. This may or may not be relevant, depending on the implementation. Think about whether or not the uint value has an opportunity to approach such a large number. Think about how the uint variable changes state, and who has authority to make such changes. If any user can call functions which update the uint value, it's more vulnerable to attack. If only an admin has access to change the variable's state, you might be safe. If a user can increment by only 1 at a time, you are probably also safe because there is no feasible way to reach this limit.

The same is true for underflow. If a uint is made to be less than zero, it will cause an underflow and get set to its maximum value.

