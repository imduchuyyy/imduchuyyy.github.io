---
title: "[Research] Account Abstraction in multi-chain world?"
date: 2023-07-22 10:17:30 +/-0700
---

"Account Abstraction" is a proposal to increase flexibility in management and behavior of account in blockchain-one that’s increasingly the subject of many discussions in the crypto community. However, do we already have Account Abstraction?.

---

## Problem of Account Abstraction in multi-chain world?
Account Abstraction refers to separating the control of an account from its associated private key. This allow an account to be controlled by a smart contract rather than simply a private key. This powerful concept enables developers to build complex wallet application.

However, account abstraction wallet, by ERC-4337 design, unique smart contract instances deployed on individual chains. While users can create account abstraction wallets on different chains, it leak to the problem for wallet protocol that how to manage the key for several smart contract exit on multiple blockchain.

> How to manage authorize logic for several smart contract on multi-chain but still keep easy approach way for user?

## Currently solution: Reading state on one chain and execute on other chain
When I making the research to solve the problem above I found some solution.
1. [Safe team's proposal](https://forum.safe.global/t/how-can-a-safe-hold-asset-on-multiple-chains/2242)
2. [Polkadot's talk](https://forum.polkadot.network/t/multichain-friendly-account-abstraction/1298)

Both of these solutions are that: The wallets live on chain B, C, D... but the validation rules on chain A, when user make update the validation rules on chain A, other chain will synchronously reads chain A by using Merkle proof, or in the future this could be batched with some KZG or using zk-SNARK or other scheme


## Account Abstraction and ERC-4337?
Account Abstraction is good, but do we already have it now?.  The concept of Account Abstraction was formed after a short period after the existence of Ethereum. There are many proposals to make this happen, while other EIPs required some protocol changes in the consensus layer. [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) aims to provide account abstraction without any consensus layer changes

#### How Does ERC-4337 Work?

It introduces protocol-level support for account contracts that pay for gas and start transactions and creates a new transaction type (Useroperation). UserOperations (aka "UserOps") are signed
and sent to a private mempool where for "bundlers" to execute. Bundled transactions are passed to a global entry point contract which validates transactions by calling "validateUserOp" on wallet contracts. After validating and paying for transactions,
wallets proceed to execute instructions specified by a UserOp.

<img src="http://wp.hacken.io/wp-content/uploads/2023/05/image-10.png">

> ERC-4377 is an account abstraction proposal which completely avoids consensus-layer protocol changes, instead relying on higher-layer infrastructure.

Sound great. But it's still have some difficult, user currently using EOA-based wallets, it means having move assets from an EOA to a newly deployed account - a potentially complex and costly process

There are many teams has working with ERC-4337 to create an awesome wallets to user. Example of this is an experiment conducted by `VISA` using `StarkWare` platform to enable [auto payments for self-custody wallets](https://usa.visa.com/solutions/crypto/auto-payments-for-self-custodial-wallets.html) (it's similar to direct debit or standing order).
