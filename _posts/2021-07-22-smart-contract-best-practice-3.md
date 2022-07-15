---
title: Smart contract best practice 3
date: 2021-07-25 10:20:30 +/-0700
categories: [Blockchain, Smart contract]
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

## DoS with revert
Consider a simple auction contract:
```solidity
contract Auction {
    address currentLeader;
    uint highestBid;

    function bid() payable {
        require(msg.value > highestBid);

        require(currentLeader.send(highestBid)); // Refund the old leader, if it fails then revert
        currentLeader = msg.sender;
        highestBid = msg.value;
    }
}
```

if attacker bids using a smart contract which has a fallback function that reverts any payment, the attacker can win any auction. When it tries to refund the old leader, it reverts if the refund fails. This means that a malicious bidder can become the leader while making sure that any refunds to their address will <i>always</i> fail.

Solutions here, we should set up a pull payment system instead, using two function for <i>bid</i> and <i>withdraw</i> money.

Another example, when smart contract may iterate through an array to pay users. The issue is that if one call fails, you are reverting the whole payout system, meaning the loop will never complete
```solidity
address[] private refundAddresses;
mapping (address => uint) public refunds;

// bad
function refundAll() public {
    for (uint x; x < refundAddresses; x++) {
        require(refundAddresses[x].send(refunds[refundAddresses[x]]));
    }
}
```
## DoS with Block gas limit
Each block has an upper bound on the amount of gas that can be spent, and thus the amount computation that can be done. This is the Block Gas Limit. If the gas spent exceeds this limit, the transaction will fail.
### Gas Limit DoS on a Contract via Unbounded Operations
You may have noticed another problem with the previous example: by paying out to everyone at once, you risk running into the block gas limit.

If you absolutely must loop over an array of unknown size, then you should plan for it to potentially take multiple blocks, and therefore require multiple transactions. You will need to keep track of how far you've gone, and be able to resume from that point, as in the following example:
```solidity
struct Payee {
    address addr;
    uint256 value;
}
Payee[] payees;
uint256 nextPayeeIndex;

function payOut() public {
    uint256 i = nextPayeeIndex;
    while (i < payees.length && msg.gas > 200000) {
        payees[i].addr.send(payees[i].value);
        i++;
    }
    nextPayeeIndex = i;
}
```
You will need to make sure that nothing bad will happen if other transactions are processed while waiting for the next iteration of the `payOut()` function. So only use this pattern if absolutely necessary.
### Gas Limit DoS on the Network via Block Stuffing
Even if your contract does not contain an unbounded loop, an attacker can prevent other transactions from being included in the blockchain for several blocks by placing computationally intensive transactions with a high enough gas price.

To do this, the attacker can issue several transactions which will consume the entire gas limit, with a high enough gas price to be included as soon as the next block is mined. No gas price can guarantee inclusion in the block, but the higher the price is, the higher is the chance.

A **Block Stuffing** attack can be used on any contract requiring an action within a certain time period. However, as with any attack, it is only profitable when the expected reward exceeds its cost. Cost of this attack is directly proportional to the number of blocks which need to be stuffed. If a large payout can be obtained by preventing actions from other participants, your contract will likely be targeted by such an attack.

## Insufficient gas griefing
This attack may be possible on a contract which accepts generic data and uses it to make a call another contract (a 'sub-call') via the low level `address.call()` function, as is often the case with multisignature and transaction relayer contracts.

Take the following example of a simplified `Relayer` contract which continues execution regardless of the outcome of the subcall:
```solidity
contract Relayer {
    mapping (bytes => bool) executed;

    function relay(bytes _data) public {
        // replay protection; do not call the same transaction twice
        require(executed[_data] == 0, "Duplicate call");
        executed[_data] = true;
        innerContract.call(bytes4(keccak256("execute(bytes)")), _data);
    }
}
```
This contract allows transaction relaying. Someone who wants to make a transaction but can't execute it by himself (e.g. due to the lack of ether to pay for gas) can sign data that he wants to pass and transfer the data with his signature over any medium. A third party "forwarder" can then submit this transaction to the network on behalf of the user.

If given just the right amount of gas, the `Relayer` would complete execution recording the `_data` argument in the `executed` mapping, but the subcall would fail because it received insufficient gas to complete execution.

One way to address this is to implement logic requiring forwarders to provide enough gas to finish the subcall. If the miner tried to conduct the attack in this scenario, the require statement would fail and the inner call would revert. A user can specify a minimum gasLimit along with the other data (in this example, typically the `_gasLimit` value would be verified by a signature, but that is ommitted for simplicity in this case).

```solidity
contract Executor {
    function execute(bytes _data, uint _gasLimit) {
        require(gasleft() >= _gasLimit);
        ...
    }
}
```

## Forcibly Sending Ether to a Contract
It is possible to forcibly send Ether to a contract without triggering its fallback function. This is an important consideration when placing important logic in the fallback function or making calculations based on a contract's balance. Take the following example:
```solidity
contract Vulnerable {
    function () payable {
        revert();
    }

    function somethingBad() {
        require(this.balance > 0);
        // Do something bad
    }
}
```
Contract logic seems to disallow payments to the contract and therefore disallow "something bad" from happening. However, a few methods exist for forcibly sending ether to the contract and therefore making its balance greater than zero.

The `selfdestruct` contract method allows a user to specify a beneficiary to send any excess ether. `selfdestruct` does not trigger a contract's fallback function.

<p style="font-size: 25px; font-weight: bold">Thank you for your reading and keep update with me</p>

