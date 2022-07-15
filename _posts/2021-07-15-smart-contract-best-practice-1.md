---
title: Smart contract best practice 1
date: 2021-07-15 15:17:30 +/-0700
categories: [Blockchain, Smart contract]
tags: [blockchain, smartcontract, learning, practice, ethereum]     # TAG names should always be lowercase
---

<p>This blog provides a baseline knowledge of security considerations for Smart Contract developer in Ethereum Blockchain.</p>

# Change your mindset
<p>Smart contract programming requires a different engineering mindset than you may be used to. It is therefore not enough to defend against known vulnerabilities. Instead, you will need to learn a new philosophy of development.</p>

## General Philosophy

<p>Ethereum is new highly experimental. Therefore, you should expect constant changes in the security landscape, as new bugs and security risks are discovered, and new best practices are developed.</p>

### Prepare for failure

<p>Any contract can have error in it, your code must be able response to bugs and vulnerabilities gracefully.</p>
  * Pause the contract when things are going wrong.
  * Manage the amount of money at risk.
  * Have an effective upgrade path for bugfixes and improvements.
  * Figure out effective ways to fix bugs and improve functionality.

### Keep contracts simple

<p>Complexity increases the likelihood of errors.</p>
  * Ensure the contract logic is very simple.
  * Use already-written tools or code where possible.
  * Modular, reuses code instead of duplicating it, and supports upgradeable components.
  * Clarity is more important than performance when allows.

### Be aware of blockchain properties
  * Be extremely careful about external contract calls, which may execute malicious code and change control flow.
  * Understand that public functions are public, and may be called maliciously. Private data is also viewable by anyone.

### Keep updated

<p>Ensure access to the latest security developments by disclosing resources</p>
  * Check your smart contract when any new vulnerabilities are discovered.
  * Update the library or tool as quickly as possible when possible.
  * Use the latest security technologies.
  * Get clear understanding of blockchain features.

<p style="font-size: 25px; font-weight: bold">Thank you for your reading and keep update with me</p>
