---
title: "About Layer2, Rollup and Optimistic Rollup"
date: 2024-10-18 07:21:00 +/-0700
image: /images/scalability.png
---

Ethereum quá chậm và đắt để tiến tới mass adoption. Không ai muốn thực hiện một lệnh mua một ly Cafe giá 2$ mà phải đợi tới 15s confirm và 5$ fee giao dịch.

Theo như Vitalik, Một blockchain có ba vấn đề cần phải giải quyết để đạt được “Hệ thống toàn vẹn” gọi là blockchain trilemma: bảo mật (security), phi tập trung (decentralization) và có thể mở rộng (scability). Vitalik cùng ethereum luôn canh cánh đi tìm giải phát cho Ethereum để giải quyết bài toán này.

# What is layer 2?
Layer2 là một trong các solution được team Ethereum propose để giải quyết Blockchain trilemma. Ethereum hiện tại được đánh giá là Smart contract platform secure nhất hiện tại. Ethereum blockchain focus vào giải quyết tính decentralized và security trong blockchain trilemma, cũng vì vậy khả năng scalability của Ethereum khá tệ, hiện tại Ethereum chỉ có thể thực thi được tầm 15 transactions trên giây (15 tps). Với demand sử dụng Ethereum khá cao, mạng Ethereum trở nên tắc nghẽn làm gia tăng transaction fee đến mức khó chấp nhận đối với user bình thường. 

Main goal của Layer2 là gia tăng transaction throughput cho Ethereum. Thay vì Ethereum phải thực thi từng transaction và đóng vào block. Layer2 sẽ tách riêng ra một lớp thực thi riêng, thực thi transaction của user vào chỉ push kết của transaction về lại ethereum layer1. Như vậy có thể thấy Ethereum chỉ cần thực thi công việc lưu lại kết quả của các transaction của users thay vì phải thực thi các tác vụ phức tạp như swap, gaming… Trong khi đó với nhiều layer2 cùng tồn tại thì sẽ gia tăng đáng kể Throughput cho users. 

![alt text](images/layer2.png)

Hiện tại có rất nhiều loại layer-2, mỗi loại có trade-offs và security modals riêng. Trong blog này thì mình chỉ đi vào Rollup thui nhé

# Rollup
Rollups là hệ thống sẽ bundle hàng trăm transaction của users vào 1 transaction duy nhất và submit lên Ethereum. Transaction data sẽ được submit lên layer 1, nhưng phần execute từ transaction data ra kết quả sẽ được thực thi ngoài layer1 cụ thể là các hệ thống rollup sẽ làm việc này. Vậy làm sao layer1 có thể đảm bảo các hệ thống rollup khi thực thi transaction sẽ có ra kết quả là đúng và chấp nhận kết quả đó ?. Hiện tại có 2 hướng tiếp cận với rollups: optimistic rollup và zero-knowledge rollup:
- Optimistic rollup: Ở loại rollup này, layer 1 sẽ giả định tất cả các tác vụ thực thi transaction trong rollup là đúng, và có thể bị những người ngoài challenge nếu muốn. Khi có challenge xảy ra, hệ thống fault proofs sẽ được thực thi giúp cho Layer 1 kiểm chứng kết quả của giao dịch. Nếu trong thời gian quy định không có bất cứ ai thực hiện challenge, kết quả của transaction sẽ được mặc nhiên coi là đúng đắn
- Zero-knowledge rollup: Ở loại rollup này, layer1 sẽ xác minh kết quả của transaction bằng validity proofs (được tạo ra bằng zero-knowledge proofs). Bằng việc sử dụng công nghệ zero-knowledge việc xác mình validity proofs sẽ đỡ tốn computing power hơn là chạy lại toàn bộ transaction.

Trong blog này mình mình focus vào Optimistic rollup thôi nhé, vì nó dễ hiểu hơn thằng còn lại =)).

# Overview optimistic rollups
Như đã nhắc ở trên thì trong hệ thống optimistic rollup, transactions sẽ được thực thi ngoài layer1, operators của hệ thống sẽ thực thi và đóng gói N-transactions off-chain, sau đó sẽ chỉ submit kết quả của transaction (dưới dạng Merkel state root) lên Ethereum. Hướng tiếp cận này giúp giảm chi phí thực thi trên từng transaction từ đó giảm phí giao dịch cho người dùng cuối. Optimistic rollup cũng giảm số lượng data được post lên Ethereum.

Optimistic được xem là “optimistic” vì sau khi các operators thực thi transaction, họ chỉ submit kết quả lên layer 1 và cho rằng kết quả này là đúng. Vậy nếu như các operators là malicious cố tình submit kết quả sai của transaction thì sao ?

Để đảm bảo hệ thống bảo mật và không bị tấn công từ các operator, optimistic rollup sẽ dựa vào fraud-prove để chứng minh kết quả là đúng hay sai. Sau khi rollup batch được submit lên Ethereum sẽ có 1 khoảng thời gian chờ (gọi là challenge time) trong khoảng thời gian này bất cứ ai cũng có quyền challenge kết quả của batch đó bằng cách tính toán fraud-proof:
- Nếu như kết quả của fraud-proof là đúng, rollup protocol sẽ thực thi lại từng transaction và update lại state. 
- Nếu như rollup batch không bị challenge trong khoảng thời gian đó, kết quả sẽ được mặc nhiên là đúng và được chấp nhận bởi layer1. 

![alt text](images/fraud-prove.png)

# How do optimistic rollups work?

## Transaction execution and aggregation

Users sẽ submit transactions tới “sequencer”, sequencer node sẽ chịu trách nhiệm thực thi transactions cho user, nén dữ liệu và submit lên Ethereum.

## Submitting rollup blocks to Ethereum 

Như đã nói ở trên, sequencer sẽ bundle nhiều off-chain transactions thành 1 batch và submit lên Ethereum. Dữ liệu này được gửi lên Ethereum dưới dạng calldata hoặc là blobs
- Calldata là một vùng dữ liệu không thể thay đổi trong smart contracts mặc dù không được lưu trực tiếp vào blockchain state, nhưng Calldata vẫn tồn tại trên Ethereum như 1 phần lịch sử của blockchain. Chính vì calldata không được lưu vào blockchain state, nên nó rẻ hơn rất nhiều so với việc lưu trữ on-chain. Trong hệ thống optimistic rollup, calldata được dùng để gửi compressed transaction data lên on-chain contract. Đây là một ví dụ của batch submission: [Etherscan](https://etherscan.io/tx/0x9102bfce17c58b5fc1c974c24b6bb7a924fb5fbd7c4cd2f675911c27422a5591)

```
function submitData(bytes calldata data) external {

}
```

- Một vài rollups hiện tại sử dụng blobs để post transaction lên Ethereum. Blobs cũng gần giống như calldata nhưng blobs data sẽ bị xoá khỏi lịch sử của Ethereum sau 18 ngày. Blobs data sử dụng Kzg commitment, đọc thêm về KZG ở đây: [imduchuyyy'blog](https://imduchuyyy.xyz/posts/kzg-in-practice/)

## State commitment
Về thông thường, toàn bộ trạng thái của optimistic rollup (gồm accounts, balances, contract code,…) được tổ chức thành một cây Merkel tree, được gọi là state tree (đọc thêm về Merkle tree ở đây: [TuPhan' blog](https://tuphan.dev/blog/merkle-trie-the-definition-and-applications)), Mọi lần chuyển trạng thái trong hệ thống optimistic sẽ làm thay đổi state tree, state tree này sẽ được sequencer commit lên layer 1. Ngoài state root represent cho toàn bộ state của optimistic rollup, sequencer cũng cần commit cả transaction root đại diện cho toàn bộ transactions được gửi trong Calldata hoặc blobs để cho mọi người có thể chứng minh được sự tồn tại của 1 transaction trong batch đó

State commitment là 1 phần rất quan trọng trong hệ thống optimistic rollup, điều này giúp cho tất cả mọi người có thể chứng minh tính đúng đắn của hệ thống. Smart contracts trên layer1 sẽ chấp nhận state root ngay khi nhận được, nhưng sau đó có thể xoá những state root không hợp lệ và restore về các trạng thái hợp lệ khác nhờ vào fraud prove

## Fraud prove
Như đã nói ở trên, sau khi sequencer publish batch lên layer1, bất kì ai cũng có thể vào kiểm chứng lại kết quả được tạo ra bởi sequencer. Nếu trong thời gian hợp lệ, có ai đó tạo ra tranh chấp với 1 state root, rollup protocol sẽ tạo ra Fraud proof. Mọi loại fraud proof sẽ là tương tác. Ai đó tạo ra tranh chấp, bên còn lại sẽ phòng thủ.

### Single-round interactive proving
Khi có tranh chấp sảy ra, tức một bên cho rằng state root được propose bởi sequencer là không chính xác, rollup protocol sẽ thực thi lại toàn bộ transaction diễn ra trên layer 2 ngay tại layer 1 và tính ra kết quả cuối cùng để xác định được bên nào sẽ chiến thắng và chọn ra được hướng đi đúng. Tuy nhiên, việc thực hiện lại toàn bộ giao dịch của Layer2 trên L1 sẽ tiêu tốn rất nhiều chi phí cho network, vì lý do này các Optimistic rollup chuyển qua sử dụng Multi-round interactive proving giảm thiểu chi phí hơn

### Multi-round interactive proving
Multi-round interactive proving là sự tương tác qua lại giữa người khẳng định kết quả và người tranh chấp kết quả và được quan sát bởi contracts trên layer1. Để chứng minh được một kết quả là đúng hay sai cần qua nhiều bước. 
￼
![alt text](<images/multiround.png>)

- Nếu như một người đưa ra challenge (challenger) cho một kết quả trên layer 1, bên tạo ra kết quả đó (proposer) cần chia quá trình execute các transactions để có được kết quả đó thành 2 phần bằng nhau và submit lên on-chain 
- Challenger sẽ tiếp tục đưa ra challenge cho 1 trong 2 phần vừa được đưa lên bởi Proposer, 
- Người propose sẽ tiếp tục chia nhỏ phần được challenger challenge thành 2 phần bằng nhau..
- Quá trình chia này được gọi là bisection protocol, cứ chia như vậy cho đến khi phần được chia trở nên nhỏ và có thể được verify bởi contract trên Layer1
- Khi đó contracts trên layer 1 sẽ tự verify và chọn ra hướng đi đúng.
- Nếu trong quá trình challenge, một trong hai bên bỏ cuộc thì bên còn lại hiển nhiên sẽ chiến thắng

# Conclusion
Đây là tất cả những gì mình học được về layer 2, rollup và optimistic rolupp. Bài này cũng khá dài, đừng ngại nếu như bạn có bất kì câu hỏi nào hãy liên hệ với mình. 
- [Telegram](https://t.me/imduchuyyy)
- [Github](https://github.com/imduchuyyy)
- [X](https://x.com/imduchuyyy)
