---
title: Smart contract best practice 2
date: 2021-07-15 17:20:30 +/-0700
categories: [Blockchain, Smart contract best practices]
tags: [blockchain, smartcontract, learning, practice]     # TAG names should always be lowercase
---

<p>This blog provides a baseline knowledge of security considerations for Smart Contract developer (both EOS platfom and Ethereum platform).</p>

# Recommendations for Smart Contract Security in coding
<p>This page demonstrates a number of design patterns which should generally be followed when writing smart contracts</p>

## External Calls or Inline Action

<p>Calls to untrusted contracts can introduce several unexpected risks or errors. External calls may execute malicious code in that contract or any other contract that it depends upon.</p>

<p>When interacting with external contracts, name your variables, methods, and contract interfaces in a way that makes it clear that interacting with them is potentially unsafe</p>

In Ethereum:
```solidity
UntrustedBank.withdraw(100); //untrusted external call
TrustedBank.withdraw(100); //trusted contract

function makeUntrustedWithdrawal(uint amount) {
    UntrustedBank.withdraw(amount);
}
```

Or in EOS:
```cpp
name untrustedBank = "untrust"_n; // untrusted inline action
name trustedBank = "eosio.token"_n;

ACTION tfuntrust (const name &to, const asset &quantity) {
    action(
        permission_level{get_self(), "active"_n},
        untrustedBank,
        "transfer"_n,
        make_tuple(get_self(), to, quantity, "untrusted bank transfer")
    ).send();
}
```

## Enforce invariants
<p>An assert guard triggers when an assertion fails, use assert to verify data all the time function execute.</p>
<p>An assert wil throw message when an assertion fails, an external service can handle it.</p>

<p>Code example:</p>
<p>Ethereum:</p>
```solidity
function deposit() public payable {
    balanceOf[msg.sender] += msg.value;
    totalSupply += msg.value;
    assert(this.balance >= totalSupply); // this trigger balance of token contract will larger than totalSupply
}
```
> In Ethereum, you can use both assert() and require(). Require(condition) is meant to be used for input validation, which should be done on any user input, and reverts if the condition is false. Assert() also reverts if the condition is false but should be used only for invariants: internal errors or to check if your contract has reached an invalid state. Following this paradigm allows formal analysis tools to verify that the invalid opcode can never be reached: meaning no invariants in the code are violated and that the code is formally verified.

<p>EOS:</p>
```cpp
ACTION transfer(const name &to, const asset &quantity) {
    check(quantity.is_valid(), "invalid quantity"); // this trigger quantity valid to transfer
}
```

## Authenticate sender of transaction


