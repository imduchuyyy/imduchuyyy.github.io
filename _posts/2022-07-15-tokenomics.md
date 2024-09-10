---
title: Everything About Tokenomics!
---

> Tokenomics is the topic of understanding the supply and demand characteristics of cryptocurrencies.

<img src="https://uploads-ssl.webflow.com/6144a5538866e5dba87d9af9/6250758174196069bc576bb0_what%20is%20tokenomics1.jpeg" />

The structure of a cryptocurrency’s economy determines the incentives that encourage investors to buy and hold a specific coin or token. Just like how fiat currencies are all different, each cryptocurrency has its own monetary policy.

Tokenomics determine two things about a crypto economy – the incentives that set out how the token will be distributed and the utility of the tokens that influence its demand. Supply and demand has a huge impact on price, and projects that get the incentives right can surge in value.

# Mining and Staking
For base layer blockchains, like Ethereum 1.0 and Bitcoin, mining is the core incentive for a decentralized network of computers to validate transactions. Here, new tokens are given to those who devote their computing power to discovering new blocks, filling them with data and adding them to the blockchain.

Staking rewards those who fulfil a similar role but by locking away a number of coins in blockchain system instead - this is how blockchains like Binance Smart Chain operate, and it's the model that Ethereum's moving toward with its 2.0 upgrade.

# Token burns
Some blockchains or protocols "burn/" tokens – permanently remove them from circulation – to reduce the supply of coins in circulation. According to the laws of supply and demand, reducing a token’s supply should help to support its price as the remaining tokens in circulation become more scarce.

When there is excessive cryptocurrency flowing in the market, the price of that token remains low as the demand never exceeds the supply. In such a scenario, burning a portion of the cryptocurrency acts as a ‘deflationary’ move. The scarcity of the token rises and triggers a price appreciation of the remaining tokens in circulation.

Example for token burns:

> Proof-of-Burn (PoB): This consensus mechanism requires users to stake their coins to become network validators. However, the staked coins are sent to a dead wallet, after which, they can no longer be accessed or spent. The more coins you burn, the higher your chances of becoming a validator.

# Limited and unlimited supplies
Tokenomics determines a token’s maximum supply. Bitcoin’s tokenomics, for instance, dictates that no more than 21 million coins can ever be mined, with the last coin expected to enter circulation around the year 2140. Ethereum, by contrast, has no maximum limit, although its issuance each year is capped.

Let's look at Ethereum as an example of a coin with an infinite supply

Today, there are over 120,000,000 ETH in circulation. Though its yearly supply is capped at 18,000,000, there is no end to how many ETH can be mined over time. While Ethereum does have monetary value and can be bought or sold like any other crypto, it isn't just a store-of-value coin like Bitcoin, meaning its value doesn't need to be finite. Ethereum has a vast and diverse blockchain on which any number of decentralized projects can be built. New tokens, NFTs, and DeFi services are being created on Ethereum's blockchain every day, and it currently stands as the most popular blockchain out there. On this blockchain, ETH can be used to pay gas fees and other transactional fees, giving the coin value within the network.

# Game Theory in tokenomics

Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure.

# Example
The great team at Messari created the chart below, which demonstrates the wide-ranging distribution among leading blockchains.

<img src="https://pbs.twimg.com/media/E1l8L2dXMAExklv?format=jpg&name=large" />

It is easy to see the stark difference in token allocation among the Public Blockchains, but only upon careful examination do these hidden factors emerge. For example, Ethereum and EOS are heavily skewed in favor of public investors, in comparison to Binance or Solana. Still, distribution alone only paints a vague picture.

## Solana tokenomic

<img src="https://file.publish.vn/amberblocks/2021-11/solana-sol-token-allocation-1636016629061.png" />

Solana is a balance of `inflationary` forces and `deflationary` forces.

The largest source of inflation is staking rewards, which are paid out on a schedule that produces a pre-computed inflation rate. This started at 8% a couple of months ago and reduces a little bit every epoch (about 2 days 19 hours). The rate at 2021 is 7.78%.

This inflation will hit its final rate of 1.5% in about 10 years from now.

That is a pretty low terminal rate and it's quite reasonable.

However there are also deflationary forces at work. A percent of every transaction fee is burned. This is deflationary. With enough transactions per second, this burn could equal 1.5% per year which would then make Solana 0% inflation (assuming we're talking far enough out that inflation had already reached its terminal 1.5%). The burn rate could even be more than 1.5% per year with many, many transactions, which would then make Solana long-term deflationary.

Basically, the inflation schedule range on this page:

<a target="_blank" href="https://docs.solana.com/implemented-proposals/ed_overview/ed_validation_client_economics/ed_vce_state_validation_protocol_based_rewards">https://docs.solana.com/implemented-proposals/ed_overview/ed_validation_client_economics/ed_vce_state_validation_protocol_based_rewards</a>

The network pays rewards from a portion of network inflation. The rewards per epoch are fixed and must be evenly divided among all staked nodes according to their relative stake weight (stake proportional) and participation. Staking yields are based on the current inflation rate, the total number of SOL staked, and individual validator uptime and commission. A validator's commission fee is the percentage fee paid to validators from network inflation. Validator uptime is defined by a validator's voting. One vote credit is earned for each successful validator vote and votes are tallied at the end of the epoch for reward calculation.


## Polkadot tokenomic

<img src="https://file.publish.vn/coin98/2021-07/phan-phoi-dot-coin-1627639546072.png" />

Polkadot uses `NPoS (Nominated Proof-of-Stake)` as its consensus mechanism. The system encourages DOT holders to participate as nominators. Nominators may back up to 16 validators as trusted validator candidates. Both validators and nominators lock their tokens as collateral and receive staking rewards.

The staking system pays out rewards essentially equally to all validators regardless of stake. Having more stake on a validator does not influence the amount of block rewards it receives. However, there is a probabilistic component to reward calculation, so rewards may not be exactly equal for all validators in a given era.

Distribution of the rewards are pro-rata to all stakers after the validator's commission is deducted. In this way, the network creates incentives for the nomination of lower-staked validators to create an equally-staked validator set.


# References

1. <a target="_blank" href="https://www.coindesk.com/learn/what-is-tokenomics-and-why-is-it-important/">What Is Tokenomics and Why Is It Important?</a>
2. <a target="_blank" href="https://thedatascientist.com/game-theory-tokenomics-noah-healy/">Podcast: Game theory, tokenomics and more with Noah Healy</a>
3. <a target="_blank" href="https://blockdaemon.com/docs/protocol-documentation/polkadot/how-polkadot-staking-works/">Polkadot Staking</a>
