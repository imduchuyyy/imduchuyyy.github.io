---
title: "[Talk] Account Abstraction in multi-chain world?"
date: 2023-07-22 10:17:30 +/-0700
---

"Account Abstraction" is a proposal to increase flexibility in management and behavior of account in blockchain-one that’s increasingly the subject of many discussions in the crypto community. However, do we already have Account Abstraction?.

---

## Problem of Account Abstraction in multi-chain world?
Account Abstraction refers to separating the control of an account from its associated private key. This allow an account to be controlled by a smart contract rather than simply a private key. This powerful concept enables developers to build complex wallet application.

However, account abstraction wallet, by ERC-4337 design, unique smart contract instances deployed on individual chains. While users can create account abstraction wallets on different chains, it leak to the problem for wallet protocol that how to manage the key for several smart contract exit on multiple blockchain.

> How to manage validation rules for several smart contract on multi-chain but still keep easy approach way for user?

## Reading state on one chain and execute on other chain
When I making the research to solve the problem above I found the solution form [Safe team's proposal for Safe wallet](https://forum.safe.global/t/how-can-a-safe-hold-asset-on-multiple-chains/2242)

That is: The wallets live on chain B, C, D... but the validation rules on chain A, when user make update the validation rules on chain A, other chain will synchronously reads chain A by using Merkle proof, or in the future this could be batched with some KZG or using zk-SNARK or other scheme

![Current solution for account abstraction in multi-chain](/images/aa-multichain-cs.png)

I don't think this is an good idea -> individual blockchain will not happy if the asset of their users can be control by other-chain. Every chain should have the same right to manage validation rule for their user

## Real world synchronously
In the future, I hope to see a protocol can create a multi-chain prove system, when user can create a proofs for update validation rule in off-chain, and sync the rule to any blockchain they use.

![Multi-chain prove system](/images/aa-multi-chain-sol.png)

## Conclusion
- <b>For me</b>, AA is NOT coming
- There is many issues when we apply ERC-4337 to multi-chain landscape
- I hope to see multi-chain proofs for user to manage the wallet validation rules
