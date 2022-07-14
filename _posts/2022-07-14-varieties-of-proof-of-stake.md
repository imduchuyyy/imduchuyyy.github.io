---
title: Varieties of Proof of Stake!
categories: [Blockchain, Consensus]
tags: [blockchain, learning]     # TAG names should always be lowercase
---
Proof-of-stake protocols are a class of consensus mechanisms for blockchains that work by selecting validators in proportion to their quantity of holdings in the associated cryptocurrency. This is done to avoid the computational cost of proof-of-work schemes.
With proof-of-stake (POS), cryptocurrency owners validate block transactions based on the number of coins a validator stakes

<img src="https://cdn.bho.network/cms/proof_of_stake_la_gi_9_34ebf9b1dd.png" />

There are several variations of Proof-of-Stake, each with its own solution to achieve effective, resource-efficient network governance.

## Proof of Stake (Ethereum)
Proof-of-stake is a type of consensus mechanism used by blockchains to achieve distributed consensus. In proof-of-work, miners prove they have capital at risk by expending energy. In proof-of-stake, validators explicitly stake capital in the form of ether into a smart contract on Ethereum. This staked ether then acts as collateral that can be destroyed if the validator behaves dishonestly or lazily. The validator is then responsible for checking that new blocks propagated over the network are valid and occasionally creating and propagating new blocks themselves

In Ethereum, to participate as a validator, a user must deposit 32 ETH into the deposit contract and run three separate pieces of software: an execution client, a consensus client, and a validator. On depositing their ether, the user joins an activation queue that limits the rate of new validators joining the network. Once activated, validators receive new blocks from peers on the Ethereum network. The transactions delivered in the block are re-executed, and the block signature is checked to ensure the block is valid. The validator then sends a vote (called an attestation) in favor of that block across the network

<img src="https://lh4.googleusercontent.com/aLfz4aYiMQjG9cj2VQZElG5UsZXhZ21BvIWkh7nJe77EjnAw33d2Znbt2oNHVmIkEqZVT0zKxFuXJMG3ZH6SsYBXiUU0ZmeYGOETQOD5N6fw_n3uMeOTfrzg9asDfZn9hg8gQnVV" />

Whereas under proof-of-work, the timing of blocks is determined by the mining difficulty, in proof-of-stake, the tempo is fixed. Time in proof-of-stake Ethereum is divided into slots (12 seconds) and epochs (32 slots). One validator is randomly selected to be a block proposer in every slot. This validator is responsible for creating a new block and sending it out to other nodes on the network. Also in every slot, a committee of validators is randomly chosen, whose votes are used to determine the validity of the block being proposed.

## Delegate Proof of Stake (EOS, Cardano, Tron)

Delegated Proof of Stake (DPoS) is a popular evolution of the PoS concept, whereby users of the network vote and elect delegates to validate the next block. Delegates are also called witnesses or block producers. Using DPoS, users can vote on delegates by pooling user’s tokens into a staking pool and linking those to a particular delegate. Users do not physically transfer user’s tokens to another wallet, but instead utilize a staking service provider to stake user’s tokens in a staking pool.

A limited number of delegates (most protocols choose between 20 and 100) are chosen for each new block, so the delegates of one block might not be the delegates of the next. Elected delegates receive the transaction fees from the validated block, and that reward is then shared with users who pooled their tokens in the successful delegate’s pool. The more users stake, the higher a share of the block reward users receive. The rewards are shared based on each user’s stake; so if the user stake represents 5% of the total staking balance, the user would receive 5% of the block reward.

<img src="https://lh4.googleusercontent.com/IRUvqZtCaM-k3Ed1M-L4YnFA-q24QRA9ZRbsZON7uFrEnyBx8iuBaCpd9FP4CGAxLAkFaUMWpHPgSt-NhCRs2f99kB4O3uCtcEZQZkqgqoFzXW7hU_glezF92t5YZHsvsNJCCB9K" />


## Proof of Stake Authority (Binance Smart Chain)
PoSA, as applied by the network, is a combination of Delegated Proof of stake (DPoS) and Proof of Authority (PoA).

The DPoS is a form of staking model whereby validators put up a stake of the network’s native tokens to get a chance to validate transactions and create blocks. Technically, anyone with a minimum stake of the required tokens can become a validator, but the network would become sluggish if this were allowed. DPoS networks allow token holders to vote in a specified number of delegates to become validators. In the case of BSC, that number is 21 validators.

PoA, represents a model in which validators are chosen or picked by a central party, in this case, Binance. The exchange vets all validators before they can be voted on by the delegators (token holders.) Think of it like a validator KYC where Binance approves who gets to participate in block creation.

While the PoSA consensus model allows for short block times and lower costs, it comes at the cost of network decentralization and security. Due to this PoSA consensus model, a user cannot simply start validating transactions of the Binance Smart Chain themselves in the same way that they can with Bitcoin or Ethereum.


## Compare

<style>
.table-wrapper {
    width: auto;
    overflow-x: hidden;
  }
  
.table-wrapper>table tbody tr td, .table-wrapper>table thead th {
    white-space: unset;
    vertical-align: top;
  }
</style>

Consensus | Props | Cons 
| ----   | - | - |
Proof Of Stake | - Provides fast and inexpensive transaction procession. | - Validators with large holdings can have excessive influence on transaction verification. <br> - Complexity to set up. 
Delegate Proof Of Stake | - DPoS allows for block producers to validate transactions in seconds – providing faster transactions than PoS and PoW. <br> - Delegates are elected through a democratic voting system, so each token holder has a say. | - By putting validation into a small number of hands, Delegates can form cartels making the blockchain less decentralized and less resilient to attacks.  
Proof Of Stake Authority | - Allow for short block times and lower costs | - Low decentralization, low security. <br> - Reputation cannot always keep participants from malicious actions. If the reward for fraud is more valuable than the authority, a participant can harm the system. 

## Summary

Proof-of-Stake (PoS) consensus mechanisms were designed to address inefficiencies inherent in conventional Proof-of-Work (PoW) protocols. Instead of relying on crypto mining, PoS blockchains use nodes selected based on their stake of platform tokens to verify and record transactions. The majority of new blockchain projects use some form of PoS consensus mechanism, as it is significantly more scalable, flexible, and environmentally friendly than PoW iterations.

> Hundreds of blockchain projects have so far implemented some form of PoS, and by improving network decision-making, scalability, and resource efficiency, this consensus-mechanism category is expected to play an increasingly integral role in the future of the blockchain industry.


# Reference
1. <a href="https://www.investopedia.com/terms/p/proof-stake-pos.asp">What is proof of stake ?</a>
2. <a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/">Proof Of Stake In Ethereum</a>
3. <a href="https://www.gemini.com/cryptopedia/proof-of-stake-delegated-proof-of-stake-consensus-mechanism">Varieties of Proof of Stake</a>
