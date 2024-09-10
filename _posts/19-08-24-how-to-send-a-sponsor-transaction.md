---
title: "How to send a sponsor transactions?"
date: 2024-08-19 14:51:30 +/-0700
---

GM GM mọi người, hôm nay mình cùng nhau đi tìm hiểu có cách nào để giải quyết vấn để sponsor transaction trên blockchain không?. Có cách nào để giúp trải nghiệm của người dùng mượt mà hơn ví dụ như user có thể swap USDC -> USDT mà không cần phải có thể ETH trong ví để trả fee gas cho transaction?.

## Tại sao cần sponsor transactions?
Ở crypto, có 2 cái rào cản khá là lớn cho các users mới bắt đầu sử dụng ví blockchain, 1 là phải học cách bảo mật key (phần này mình sẽ để dành cho các bài sau), 2 là phải trả tiền fee cho các transaction trên mạng blockchain bằng đồng native của chain đó (ví dụ trên mạng Ethereum thì user sẽ cần phải mua ETH để trả phí, Binance Smart Chain thì phải mua BNB để trả phí) hôm nay mình đi sâu vào tìm giải pháp cho vấn để này có cách nào làm dapp trên blockchain mà khi user sử dụng họ sẽ không cần phải trả phí gas không ?

![User pay gas](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1gWApAWQ3fKHv7Df5e-Nr3ACfcuznn5xzA&s)

## Gas station solution
Đây là một giải pháp được phát triển bởi team [Eth Gas Station](https://ethgasstation.info/), giải pháp của họ khá là hay cho phép các dự án sponsor transaction cho users một cách dễ dàng và bảo mật.

Ý tưởng này có thể được giải thích đơn giản như sau: bên thứ ba (được gọi là forwarders) có thể gửi giao dịch của user khác và tự trả chi phí gas.

Trong sơ đồ này, users ký các tin nhắn (không phải transaction) chứa thông tin về transaction mà họ muốn thực hiện. Sau đó, forwarders chịu trách nhiệm ký các transactions hợp lệ với thông tin này và gửi chúng đến blockchain network, thanh toán chi phí gas. Contracts sẽ xác minh danh tính của user ban đầu yêu cầu giao dịch. Bằng cách này, users có thể tương tác trực tiếp với các smart contracts mà không cần phải có ví hoặc sở hữu Ether.

![User pay gas](https://docs.opengsn.org/assets/img/paymaster_needs_gas.7ef47ccb.png)

Nhược điểm của cách này thì DApp developers cần phải custom lại smart contracts của hệ thống mới có thể apply sponsor gas cho user.

> Các bạn xem một ví dụ về contract sử dụng Gas Station ở đây [Openzeppelin - Gas Station](https://docs.openzeppelin.com/contracts/2.x/api/gsn)

## Một số solution cho sponsor transaction khác
Ngoài Gas Station, cũng có một số bên thứ ba cố gắng solve problem này để mang tới trải nghiệm muợt mà nhất cho user:
- [VRC25 on Viction](https://coin98.net/vrc-25-la-gi): Đây là một tiêu chuẩn token trên Viction Network cho phép các dapp developers có thể sponsor gas cho mọi transaction của users khi tương tác với contracts. Tuy nhiên giống với Gas station thì các DApp developers phải custom lại contract của họ để có thể sponsor gas.
- [Sui sponsored transaction](https://docs.sui.io/concepts/transactions/sponsored-transactions): Đây là solution được trang web official của Sui Network đề cập. Sui đã custom lại network của họ để việc sponsor transaction dẽ dàng hơn
- [Paymaster on ERC-4337](https://www.erc4337.io/docs/paymasters/introduction): Đây là một giải pháp khá generic, cho phép sponsor gas cho mọi hành động của user trên blockchain, nhưng bù lại users bắt buộc phải xài ví account abstraction mới có thể được sponsor gas.

Mong rằng trong tương lai, vấn đề về gas fee sẽ được các developers giải quyết mang tới trải nghiệm liền mạch cho user.

Nếu có bất kỳ thắc mắc nào hãy discuss với mình ở đây [@imduchuyyy](https://t.me/imduchuyyy).
