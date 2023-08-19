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

The key pair can sign transactions given by the address. This results in special restrictions, for example only one key  to authorize transactions and control the account. If lost or stolen, the account is likely list forever. EOA require a good understanding of how a blockchain works to use safely, which can be a barrier for some users.

### How about Smart contract account also Account Abstraction?
Account Abstraction refers to separating the control of an account from its associated private key. This allow an account to be controlled by a smart contract rather than simply a private key. This powerful concept enables developers to build complex wallet application.

One of the most significant benefits of account abstraction is that it creates more sophisticated smart contracts. Therefore, this mean that smart contracts can execute more complex logic to verify an transaction than what an EOA can do.

There are many teams has working with Account Abstraction to create an awesome wallets to user. Example of this is an experiment conducted by `VISA` using `StarkWare` platform to enable [auto payments for self-custody wallets](https://usa.visa.com/solutions/crypto/auto-payments-for-self-custodial-wallets.html) (it's similar to direct debit or standing order).
