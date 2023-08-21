---
title: Random number in Ethereum!
categories: [Cryptography, Ethereum]
tags: [cryptography, learning, solidity, ethereum]     # TAG names should always be lowercase
---

Randomness is a crucial aspect often overlooked in blockchain applications like gaming, NFT projects, and digital art.
In these contexts, random numbers play a significant role in determining outcomes fairly and unpredictably.
Whether it's generating unique assets, distributing prizes, or selecting participants for governance roles, secure sources of randomness are essential for creating a truly decentralized and engaging Web3 experience.

### But it's hard to generate the random number in blockchain network!

Smart contracts are deterministic, meaning anyone with the code and input can predict the output.
Smart contracts are also public. Given public code, how can we make this non-deterministic?

Below are a few techniques:
- Pseudorandom Number by Hashing
- Off-chain Verifiable Random Function
- Commit-Reveal Randomness

# Pseudorandom Number by Hashing
The idea is to generate random number by hashing the blockhash, timestampand transaction origin.
This is pseudorandom because miners can theoretically generate these values before submitting the blocks

```solidity
function randomNumber() internal view returns (uint256) {
  return uint256(keccak256(abi.encodePacked(msg.sender, blockhash(block.number - 1), block.timestamp)));
}
```

## Pros:
- Easy to implement on all blockchain

## Cons:
- Least secure

> <b>Don’t use this technique if a lot of money relies on this number</b>

# Off-chain Verifiable Random Function
Chainlink and many other oracle protocol provides a solution for generating randomness by utilizing off-chain oracles.
This approach is implemented in various dApps, including PoolTogether, where random winners are selected to receive prizes.
Given that randomness involves significant sums of money, ensuring true randomness (not just pseudo-randomness) becomes crucial for the integrity and fairness of such applications.
