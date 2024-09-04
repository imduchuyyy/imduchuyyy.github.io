---
title: "Why we need liquid staking?"
date: 2024-09-03 18:21:00 +/-0700
---

Heyyy, trong một ngày mưa gió, ngồi ở quán cafe ngắm đường phố, cũng rảnh rỗi nên viết bài chia sẽ 1 xíu với mọi người về Liquid Staking nhen. Topic liquid staking thực sự cũng không mới, chỉ cần lướt một vòng trên mạng là mọi người có thể hiểu được "sương sương" liquid staking là gì rồi. Nên trong post này, mình sẽ tiếp cận liquid staking với một hướng khác đi xíu, mình sẽ đi tìm hiểu thử đâu là vấn đề cơ bản hình thành nên giải pháp liquid staking, cũng như liquid staking sinh ra để làm gì

# Tại sao cần liquid staking?

Overview về Proof of stake, Đây là một cơ chế giúp cho các người dùng đang năm giữ Ether có thể lock số Ether của họ để bảo vệ network đồng thời tham gia quá trình xác thực block mới được tạo ra và nhận về <b>block reward</b> và <b>transaction fee</b>.

Quá trình để một người tham gia vào việc staking được thể hiện trong hình sau:

![Staking proccess](/images/ethereum-deposit-withdraw-process.png)

Có thể thấy rằng trong hình trên, khi bắt đầu deposit, stakers sẽ phải đợi từ 12-24 tiếng mới có thể bắt đầu earn được yield và khi bắt đầu request withdraw thì stakers cũng phải đợi từ 1-7 ngày mới hoàn toàn rút được số Ether đã khoá. Điều này là cần thiết để đảm bảo network có thể run một cách ổn định mà không bị sock khi có lượng deposit hoặc withdraw quá lớn.

<i>Từ đây sinh ra nhu cầu, có cách nào giúp những người muốn stake có thể bắt đầu earn yield ngay lập tức mà không cần phải đợi 12-24 tiếng ngoài ra có cách nào giúp những người đang stake có thể rút tiền của họ ngay lập tức mà không cần đợi 1-7 ngày ?</i>

Câu trả lời được các dự án Liquid Staking đưa ra là kết nối 2 tập người dùng này lại với nhau và cho phép họ trao đổi vị thế staking. Từ là người muốn stake sẽ mua lại vị thế stake của người khác bằng ETH của họ (việc này giúp họ có vị thế staking ngay lập tức mà không cần phải đợi 12-24 tiếng), người đang stake có thể bán vị thế của mình cho người khác và nhận về ETH (việc này giúp họ có thể rút tiền ngay lập tức mà không cần đợi 1-7 ngày).

# Làm thế nào để thực hiện việc này ?

Các dự án liquid staking đã mapping vị thế staking của stakers thành 1 đồng ERC-20 token đại điện vì vậy các đồng ERC-20 đại diện này có thể được deposistors và withdrawers mua bán với nhau thông qua decentralized exchange như Uniswap.

![How LSD works](/images/how-lsd-work.png)

Khi có 1 user stake vào mạng Liquid staking protocol (LSP), LSP sẽ issue cho user đó 1 lượng token đại diện với lượng ether mà user đó gửi vào. Về rate trao đổi giữa ether user gửi vào và lượng token đại điện được issue ra sẽ tuỳ thuộc vào từng thời điểm, rate chênh lệch giữa Ether và token đại diện sẽ là lượng reward mà user nhận được

Mình sẽ lấy 1 ví dụ cụ thể:
- <b>Tại thời điểm năm 2020</b>: Mình stake vào LSP với tỷ giá trao đổi là 1:1 (tức 1 ether đổi được 1 token)
- <b>Một năm sau (tức 2021)</b>: Mình muốn rút ether bằng việc bán lại token đại diện cho LSP và nhận lại Ether đã stake trước đó 1 năm. Lúc này tỷ giá sẽ thay đổi (giả định bỏ qua trượt giá do market condition và protocol fee) là 1:1.04 (Tức là với mỗi 1 token đại diện mình sẽ nhận về 1,04 ether, nếu trừ đi 1 ether stake ban đầu thì 0,04 ether chính là lượng yeild mình nhận được sau 1 năm stake)
- Và cứ thế tiếp diễn... Exchange rate quy đổi giữa Token và Ether sẽ luôn tăng do lượng yeild được sinh ra từ network.

Như hình dưới đây là exchange rate của ETH với wstETH - token đại diện được Lido (dự án lớn nhất về Liquid staking trên Ethereum) issue ra, có thể thấy được rate này sẽ luôn luôn tăng do lượng yeild được sinh ra trong hoạt động staking:

![wstETH/ETH](/images/wstETH-ETH.png)

Ngoài ra với việc có token đại diện cho các vị thế Staking, những người đang stake (nắm giữ token đại diện) có thể tham gia vào các hoạt động khác trong hệ sinh thái Defi để nhận thêm lợi nhuận...

Ngoài ra thì còn 1 số problem đã được giải quyết như Staker có thể stake với số lượng Ether tuỳ ý mà không cần phải tuân theo quy định của network, các ý này được giải thích khá rõ ràng ở đây: <a href="https://chain.link/education-hub/liquid-staking">What is liquid staking - by Chainlink</a>

# Good approach
Thực sự các dự án Liquid staking đã có cách giải quyết vấn đề khá tốt. Không những giải quyết được các nhu cầu cơ bản cho user cũng đồng thời mở ra được nhiều usecase mới khi người dùng tham gia stake. Giờ đây stake không chỉ là hoạt động bảo vệ network nhận reward mà còn trở thành một trong các lớp infra chính của nền Decentralize Finance.
