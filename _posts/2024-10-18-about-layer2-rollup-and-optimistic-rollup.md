---
title: "About Layer2, Rollup and Optimistic Rollup"
date: 2024-10-18 07:21:00 +/-0700
image: /images/scalability.png
---

Ethereum hiện quá chậm và đắt đỏ để đạt được sự chấp nhận rộng rãi. Không ai muốn mua một ly cà phê giá 2$ nhưng phải chờ 15 giây để xác nhận và trả thêm 5$ phí giao dịch.

Theo Vitalik, một blockchain cần giải quyết ba vấn đề để đạt được “hệ thống toàn vẹn,” được gọi là blockchain trilemma: bảo mật, phi tập trung và khả năng mở rộng. Vitalik và đội ngũ Ethereum luôn nỗ lực tìm kiếm giải pháp để vượt qua thách thức này.

# What is layer 2?
Layer 2 là một trong những giải pháp mà đội ngũ Ethereum đề xuất nhằm giải quyết vấn đề blockchain trilemma. Hiện tại, Ethereum được coi là nền tảng hợp đồng thông minh an toàn nhất. Blockchain Ethereum tập trung giải quyết tính phi tập trung và bảo mật, nhưng do đó khả năng mở rộng (scalability) của nó khá hạn chế, chỉ có thể xử lý khoảng 15 giao dịch mỗi giây (15 TPS). Với nhu cầu sử dụng Ethereum cao, mạng lưới trở nên quá tải, khiến phí giao dịch tăng lên mức khó chấp nhận đối với người dùng thông thường.

Mục tiêu chính của Layer 2 là tăng khả năng xử lý giao dịch cho Ethereum. Thay vì Ethereum phải xử lý từng giao dịch và ghi vào block, Layer 2 tạo ra một lớp riêng để thực thi giao dịch, sau đó chỉ gửi kết quả về lại Ethereum Layer 1. Điều này giúp Ethereum chỉ cần lưu kết quả của giao dịch, thay vì phải xử lý các tác vụ phức tạp như swap hay gaming. Với nhiều Layer 2 hoạt động cùng lúc, throughput cho người dùng sẽ tăng đáng kể.

![alt text](images/layer2.png)

Hiện tại, có rất nhiều loại Layer 2, mỗi loại có những ưu điểm và nhược điểm riêng, cùng với các mô hình bảo mật khác nhau. Trong blog này, mình sẽ chỉ tập trung vào Rollup thôi nhé.

# Rollup
Rollups là hệ thống gộp hàng trăm giao dịch của người dùng thành một giao dịch duy nhất và đưa lên Ethereum. Dữ liệu giao dịch sẽ được gửi lên Layer 1, nhưng phần thực thi để tạo ra kết quả từ dữ liệu giao dịch sẽ được xử lý bên ngoài Layer 1, cụ thể là do các hệ thống Rollup đảm nhiệm. Vậy Layer 1 làm sao đảm bảo rằng các hệ thống Rollup sẽ thực thi chính xác và chấp nhận kết quả đó? Hiện tại, có hai hướng tiếp cận Rollup: Optimistic Rollup và Zero-Knowledge Rollup.

- <b>Optimistic Rollup</b>: Trong loại Rollup này, Layer 1 mặc định tin rằng tất cả các tác vụ giao dịch trong Rollup là chính xác và chỉ có thể bị khiêu khích (challenge) bởi người dùng khác nếu có nghi ngờ. Khi có khiêu khích xảy ra, hệ thống fault proofs sẽ được thực thi để Layer 1 kiểm chứng kết quả giao dịch. Nếu trong thời gian quy định không có ai thực hiện khiêu khích, kết quả giao dịch sẽ được mặc nhiên chấp nhận là đúng.
- <b>Zero-Knowledge Rollup</b>: Trong loại này, Layer 1 xác minh kết quả giao dịch bằng các validity proofs (được tạo ra bằng công nghệ zero-knowledge proofs). Việc sử dụng công nghệ này giúp xác minh tính hợp lệ mà không cần tiêu tốn nhiều tài nguyên tính toán như khi phải thực thi lại toàn bộ giao dịch.

Trong blog này, mình sẽ tập trung vào Optimistic Rollup, vì nó dễ hiểu hơn so với Zero-Knowledge Rollup. =))

# Overview optimistic rollups
Như đã đề cập trước đó, trong hệ thống Optimistic Rollup, các giao dịch sẽ được thực thi ngoài Layer 1. Các operator của hệ thống sẽ xử lý và gói gọn N giao dịch off-chain, sau đó chỉ gửi kết quả của các giao dịch (dưới dạng Merkle state root) lên Ethereum. Cách tiếp cận này giúp giảm chi phí thực thi cho từng giao dịch, từ đó hạ phí giao dịch cho người dùng cuối. Optimistic Rollup cũng giúp giảm lượng dữ liệu cần phải gửi lên Ethereum.

Optimistic Rollup được gọi là “optimistic” vì sau khi các operator thực thi giao dịch, họ chỉ gửi kết quả lên Layer 1 với giả định rằng kết quả đó là chính xác. Nhưng nếu các operator có ý định xấu và cố tình gửi kết quả sai thì sao?

Để đảm bảo tính bảo mật và ngăn chặn các cuộc tấn công từ operator, Optimistic Rollup sử dụng cơ chế fraud-proof để kiểm chứng kết quả. Sau khi một rollup batch được gửi lên Ethereum, sẽ có một khoảng thời gian chờ (gọi là “challenge time”), trong đó bất kỳ ai cũng có thể thách thức kết quả của batch bằng cách cung cấp fraud-proof:

- Nếu fraud-proof chứng minh kết quả sai, giao thức Rollup sẽ thực thi lại từng giao dịch và cập nhật lại trạng thái. 
- Nếu không có ai thách thức batch trong thời gian chờ, kết quả sẽ được mặc định coi là đúng và được Layer 1 chấp nhận. 

![alt text](images/fraud-prove.png)

# How do optimistic rollups work?

## Transaction execution and aggregation

Hiện tại, các hệ thống Optimistic Rollup vẫn đang ở giai đoạn khá mới, vì vậy việc quản lý và vận hành sequencer – node chịu trách nhiệm sắp xếp, thực thi các giao dịch – đang được giao cho một bên duy nhất. Sequencer đóng vai trò quan trọng trong quá trình xử lý giao dịch ngoài chuỗi và nén dữ liệu trước khi gửi kết quả lên Ethereum. Mặc dù việc tập trung hóa vào một sequencer duy nhất giúp đảm bảo hiệu suất và sự ổn định trong giai đoạn đầu, điều này cũng tạo ra một số hạn chế về mặt phân quyền.

Trong tương lai, khi hệ thống Optimistic Rollup phát triển và trưởng thành hơn, dự kiến rằng mô hình sequencer này sẽ được phi tập trung hóa hơn, nhằm đảm bảo tính minh bạch và bảo mật cao hơn cho người dùng. Tuy nhiên, ở thời điểm hiện tại, việc có một sequencer duy nhất giúp tối ưu hóa quy trình xử lý giao dịch và giảm thiểu chi phí vận hành.

Cụ thể, người dùng sẽ gửi giao dịch của họ tới “sequencer”, sequencer sẽ chịu trách nhiệm thực thi các giao dịch đó ngoài chuỗi, nén dữ liệu để giảm tải lượng thông tin, sau đó gửi kết quả cuối cùng lên Layer 1 của Ethereum. Phương pháp này giúp giảm chi phí giao dịch, tăng tốc độ xử lý và làm cho hệ thống hiệu quả hơn, đồng thời vẫn giữ được tính toàn vẹn của dữ liệu khi gửi về Ethereum để lưu trữ lâu dài.


## Submitting rollup blocks to Ethereum 

Như đã đề cập trước đó, sequencer sẽ gộp nhiều giao dịch off-chain thành một batch và gửi lên Ethereum. Dữ liệu này được gửi lên dưới dạng calldata hoặc blobs.

- <b>Calldata</b> là một vùng dữ liệu bất biến trong smart contracts. Mặc dù calldata không được lưu trực tiếp vào trạng thái của blockchain, nhưng nó vẫn tồn tại trên Ethereum như một phần của lịch sử blockchain. Do không được lưu trữ trong blockchain state, calldata có chi phí rẻ hơn rất nhiều so với việc lưu trữ dữ liệu on-chain. Trong hệ thống Optimistic Rollup, calldata được sử dụng để gửi dữ liệu giao dịch đã nén lên contract trên chuỗi. Đây là một ví dụ của batch submission: [Etherscan](https://etherscan.io/tx/0x9102bfce17c58b5fc1c974c24b6bb7a924fb5fbd7c4cd2f675911c27422a5591)

- Ngoài việc sử dụng calldata, một số hệ thống Rollup hiện tại áp dụng blobs để gửi dữ liệu giao dịch lên Ethereum. <b>Blobs</b> là một giải pháp tương tự calldata nhưng với một số điểm khác biệt quan trọng. Dữ liệu blobs sẽ không được lưu trữ vĩnh viễn trên Ethereum, thay vào đó, chúng sẽ bị xóa khỏi lịch sử sau một khoảng thời gian nhất định, thường là 18 ngày. Điều này giúp giảm bớt gánh nặng lưu trữ lâu dài trên blockchain, làm cho việc sử dụng blobs trở nên hiệu quả và tiết kiệm hơn khi xử lý các khối lượng lớn giao dịch. Blobs hoạt động dựa trên cơ chế KZG commitments([about KZG](https://imduchuyyy.xyz/posts/kzg-in-practice/)), một kỹ thuật mã hóa đặc biệt, giúp đảm bảo rằng dữ liệu đã nén và gửi lên Ethereum vẫn có thể được kiểm chứng một cách chính xác mà không cần lưu trữ toàn bộ thông tin mãi mãi. KZG commitments cho phép tạo ra các bằng chứng về tính toàn vẹn của dữ liệu mà không cần tải trọng quá lớn về mặt lưu trữ. Điều này có ý nghĩa quan trọng đối với việc tối ưu hóa khả năng mở rộng của hệ thống Rollup. Việc sử dụng blobs mang lại lợi thế lớn khi cần xử lý khối lượng giao dịch lớn mà không làm tăng chi phí lưu trữ dài hạn trên Ethereum. Mặc dù dữ liệu blobs bị xóa khỏi mạng sau 18 ngày, nhờ vào KZG commitments, Ethereum vẫn có thể xác thực tính hợp lệ của giao dịch mà không cần giữ lại toàn bộ dữ liệu, giúp giảm tải cho hệ thống mà vẫn đảm bảo tính bảo mật và tin cậy.

## State commitment
Thông thường, toàn bộ trạng thái của hệ thống Optimistic Rollup (bao gồm tài khoản, số dư, mã hợp đồng và các thành phần khác) được tổ chức thành một Merkle tree, gọi là state tree. Đây là cấu trúc dữ liệu quan trọng giúp lưu trữ và quản lý trạng thái của hệ thống một cách hiệu quả. Merkle tree cho phép mọi thay đổi trong trạng thái được ghi nhận dưới dạng một “state root” – đại diện cho toàn bộ trạng thái của hệ thống tại một thời điểm nhất định. Khi trạng thái của Optimistic Rollup thay đổi, chẳng hạn như khi một giao dịch được thực thi hoặc khi tài khoản người dùng thay đổi, state tree cũng sẽ cập nhật và tạo ra một state root mới. Mỗi lần có sự thay đổi này, sequencer sẽ cam kết (commit) state root mới lên Ethereum, nhằm ghi nhận sự thay đổi trạng thái trên Layer 1.

Merkle tree là một công cụ mạnh mẽ vì nó cho phép người dùng dễ dàng xác minh tính toàn vẹn của dữ liệu mà không cần phải lưu trữ toàn bộ trạng thái. Chỉ cần thông qua state root, người dùng có thể xác minh liệu một phần dữ liệu cụ thể có nằm trong state tree hay không, nhờ vào các bằng chứng Merkle (Merkle proofs). Để hiểu rõ hơn về cơ chế hoạt động của Merkle tree, bạn có thể tham khảo bài viết này: [Merkle Trie: Định nghĩa và Ứng dụng](https://tuphan.dev/blog/merkle-trie-the-definition-and-applications).

Ngoài việc cam kết state root, sequencer còn phải cam kết transaction root, đại diện cho toàn bộ các giao dịch đã được gửi trong một batch. Transaction root cũng được tạo ra bằng cách tổ chức các giao dịch thành một Merkle tree, sau đó cam kết lên Ethereum. Điều này giúp cho bất kỳ ai cũng có thể chứng minh sự tồn tại của một giao dịch cụ thể trong batch đó. Ví dụ, nếu một người dùng muốn kiểm tra xem giao dịch của họ có thực sự được bao gồm trong batch đã nộp lên Ethereum hay không, họ có thể sử dụng transaction root và Merkle proofs để xác minh điều này mà không cần phải truy xuất toàn bộ dữ liệu.

Việc cam kết cả state root và transaction root có ý nghĩa rất quan trọng trong hệ thống Optimistic Rollup. Nó cung cấp cho người dùng một phương thức để kiểm chứng tính đúng đắn của hệ thống. Bên cạnh đó, nó cũng giúp các smart contract trên Layer 1 của Ethereum quản lý trạng thái của Optimistic Rollup một cách hiệu quả. Khi một state root mới được cam kết lên Layer 1, các smart contract sẽ tạm thời chấp nhận nó. Tuy nhiên, nếu có bất kỳ nghi ngờ nào về tính hợp lệ của state root này, người dùng hoặc các bên tham gia có thể sử dụng cơ chế <b>fraud-proof</b> để thách thức và xác minh lại tính hợp lệ của nó.

## Fraud prove
Như đã đề cập trước đó, sau khi sequencer đăng tải batch lên Layer 1, bất kỳ ai cũng có thể kiểm tra lại kết quả do sequencer tạo ra. Nếu trong khoảng thời gian quy định có người phát hiện và thách thức tính hợp lệ của một state root, giao thức Rollup sẽ khởi tạo cơ chế fraud-proof. Cơ chế fraud-proof này mang tính chất tương tác: người đưa ra tranh chấp sẽ đóng vai trò tấn công, trong khi phía còn lại (thường là sequencer) sẽ phải bảo vệ tính đúng đắn của kết quả mà họ đã công bố.

Hiện tại có hai hiện thực chính của Fraud prove:

### Single-round interactive proving
Khi có một tranh chấp xảy ra, tức là một bên cho rằng state root do sequencer đề xuất không chính xác, giao thức Rollup sẽ thực thi lại toàn bộ các giao dịch diễn ra trên Layer 2 tại Layer 1 và tính toán kết quả cuối cùng để xác định bên nào đúng. Mặc dù cách tiếp cận này giúp đưa ra kết quả chính xác, nhưng việc thực thi lại tất cả các giao dịch của Layer 2 trên Layer 1 đòi hỏi chi phí rất lớn cho mạng lưới. Chính vì lý do này, các hệ thống Optimistic Rollup đang dần chuyển sang cơ chế <b>multi-round interactive proving</b> để giảm thiểu chi phí.

### Multi-round interactive proving
Cơ chế multi-round interactive proving là một quá trình tương tác giữa người khẳng định kết quả (proposer) và người đưa ra thách thức (challenger), được giám sát bởi các smart contract trên Layer 1. Để xác định một kết quả là đúng hay sai, quá trình này diễn ra qua nhiều bước phân đoạn (bisection protocol):
￼
![alt text](<images/multiround.png>)

- Khi có một tranh chấp về kết quả, người đưa ra thách thức (challenger) sẽ yêu cầu phân tích lại các giao dịch. Người đề xuất kết quả (proposer) sẽ chia nhỏ toàn bộ quá trình thực thi giao dịch thành hai phần bằng nhau và nộp lên Layer 1.
- Challenger sau đó sẽ thách thức một trong hai phần đã được chia nhỏ bởi proposer.
- Người đề xuất tiếp tục chia nhỏ phần bị thách thức thành hai phần bằng nhau và nộp lên Layer 1.
- Quá trình này, gọi là bisection protocol, sẽ tiếp diễn cho đến khi phần được chia trở nên đủ nhỏ để có thể xác minh trực tiếp bởi các smart contract trên Layer 1.
- Khi đến bước này, smart contract sẽ tự động xác minh và đưa ra kết luận về bên nào đúng
- Nếu trong quá trình thách thức, một trong hai bên từ bỏ, bên còn lại sẽ được xem là thắng cuộc.

Quá trình multi-round này giúp giảm đáng kể chi phí so với việc thực thi toàn bộ giao dịch trên Layer 1, đồng thời vẫn đảm bảo tính chính xác và bảo mật cho hệ thống.

# Conclusion
Đây là tất cả những gì mình đã tìm hiểu và học được về Layer 2, Rollup, và đặc biệt là Optimistic Rollup. Hy vọng bài viết này đã giúp bạn hiểu rõ hơn về cách hoạt động của các công nghệ này, từ vai trò của sequencer, cách mà giao dịch được xử lý ngoài chuỗi, đến những cơ chế bảo mật như fraud-proof. Dù khá dài, nhưng đây chỉ là bước khởi đầu trong việc khám phá thế giới Layer 2 và những tiềm năng của nó trong việc mở rộng quy mô và giảm chi phí cho các mạng blockchain như Ethereum.

Công nghệ Layer 2 đang ngày càng phát triển và hứa hẹn sẽ mở ra nhiều cơ hội mới cho cộng đồng blockchain. Nếu bạn có bất kỳ câu hỏi, thắc mắc nào hoặc cần giải đáp về nội dung này, đừng ngần ngại liên hệ với mình. Mình rất sẵn lòng trao đổi và hỗ trợ thêm để chúng ta cùng nhau học hỏi.

- [Telegram](https://t.me/imduchuyyy)
- [Github](https://github.com/imduchuyyy)
- [Twitter (X)](https://x.com/imduchuyyy)

# References
1. [Web3 init Bootcamp #1: Layer2 - Tiếp cận bài toán mở rộng EVM](https://www.facebook.com/events/839750258277520/839750278277518/)
2. [Ethereum rollup](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups)
3. [Arbitrum Assertion Tree](https://docs.arbitrum.io/how-arbitrum-works/assertion-tree)
4. [ETH Scaling 2: How the Op Rollup and Zk Rollup Work](https://medium.com/@geraldlee0825/eth-scaling-2-how-the-op-rollup-and-zk-rollup-work-d6003d8fce2)
