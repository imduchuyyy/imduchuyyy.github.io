---
title: Research | Account Abstraction - Where we are?
date: 2023-07-22 10:17:30 +/-0700
---

"Account Abstraction" is a proposal to increase flexibility in management and behavior of account in blockchain-one that’s increasingly the subject of many discussions in the crypto community. However, what exactly is account abstraction and why we need to care about it ?

---

## Background on Ethereum Accounts?
To understand the value of account abstraction, it necessary to understand the fundamental of Ethereum account first. On Ethereum, there are two types of account: External Owned Account (EOA) and Smart Contract Account (SCA)

An EOA is made up of [a cryptography pair of keys](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm): User will have a pair of keys: private key and public key.
It is represented by an address. A private key is used to sign transactions, it grants users custody over the funds associated with their accounts.

There is the workflow to create an EOA and interacting with Dapp I found on [Metamask post](https://metamask.io/news/latest/account-abstraction-past-present-future/).

<img src="https://images.ctfassets.net/9sy2a0egs6zh/5GwjBrBDSxaBqoPLzgY9Ah/436d6837761be954dc756628819a338f/Workflow_of_creating_an_EOAand_interacting_with_dapp_2x.png">

The key pair can sign transactions given by the address. This results in special restrictions, for example only one key  to authorize transactions and control the account. Unlike the regular bank account, users cannot "recover" their EOA wallet if private key is lost or stolen. This require a good understanding of how a blockchain works to use safely, which can be a barrier for some users.

> Takeaway:
- EOA wallet cannot recover without private key
- Private keys create single points of failure. If the private key was stolen, the funds associated with this wallet will be lost forever and user can no longer using this wallet (think about an [SoulBound Token](https://academy.binance.com/en/articles/what-are-soulbound-tokens-sbt)).

## How about Smart Contract Account also Account Abstraction?
Account Abstraction refers to separating the control of an account from its associated private key. This allow an account to be controlled by a smart contract rather than simply a private key. This powerful concept enables developers to build complex wallet application.

One of the most significant benefits of account abstraction is that it creates more sophisticated smart contracts. Therefore, this mean that smart contracts can execute more complex logic to verify an transaction than what an EOA can do. Think about `signature abstraction`, this can solve these problem by removing ECDSA signatures as default authorization mechanism for the wallet. Rather, user are permitted to define custom rules for authorizing wallets to initiate transactions. The account abstraction also enables new mechanism for wallet recovery - social recovery ([Argent - What is Social Recovery?](https://www.argent.xyz/learn/what-is-social-recovery/))

There is an example of how account abstraction wallet work from Braavos team, they are building an account abstraction wallet with custom verification logic for user wallet on StarkWare, [read more here](https://braavos.app/account-abstraction-why-should-you-care/):

<img src="https://braavos.app/wp-content/uploads/2023/04/Authentication-Types-account-abstraction-security-pyramid-1.png">

Account Abstraction also propose a new concept for fee mechanism and nonce mechanism like paying gas fee in ethereum with custom ERC20 or execute many transactions it just one request, you can read about this on [Metamask team's post](https://metamask.io/news/latest/account-abstraction-past-present-future/)

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
