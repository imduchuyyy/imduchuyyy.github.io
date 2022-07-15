---
title: Tìm hiểu zk-SNARKs với rust!
categories: [Cryptography]
tags: [cryptography, blockchain, learning]     # TAG names should always be lowercase
---

Zk-SNARKs là từ viết tắt của `Zero-Knowledge Succinct Non-Interactive Argument of Knowledge`. Zk-SNARK là một bằng chứng mật mã cho phép một bên chứng minh rằng họ sở hữu một số thông tin nhất định mà không tiết lộ thông tin đó.
Bằng chứng này được thực hiện bằng cách sử dụng khóa bí mật được tạo trước khi giao dịch diễn ra. Nó được sử dụng như một phần của giao thức cho nhiều loại tiền điện tử như ([ZCash](https://z.cash/))

> zk-SNARKs is Zero-Knowledge proof protocol used in encryption, and is and acronym that stands for "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge". 

# Hiểu về zk-SNARKs
Zk-SNARKs phát triển dựa trên thuật toán gốc `zero-knowledge proof`:

`Zero-knowledge proof` (zk) là một loại thuật toán cho phép một bên (the prover) chứng minh với bên khác (the verifier) rằng một tuyên bố là đúng, mà không tiết lộ bất kỳ thông tin nào vượt quá giá trị của tuyên bố đó. Ví dụ, với <b>hàm băm của một số ngẫu nhiên</b>, prover có thể thuyết phục verifier rằng thực sự tồn tại một số với giá trị băm này, mà không tiết lộ nó là gì.

Mục tiêu của `zero-knowledge proofs` là để verifier có thể tự thuyết phục mình rằng prover sở hữu kiến thức về một tham số bí mật, được gọi là `witness`, đáp ứng một số mối quan hệ, mà không tiết lộ `witness` cho verifier hoặc bất kỳ ai khác.

Trong từ viết tắt SNARK, `succinct` có nghĩa là những bằng chứng này có kích thước nhỏ hơn và có thể nhanh chóng được xác minh. `Non-interactive` có nghĩa là có rất ít hoặc không có sự tương tác giữa prover và verifier. Các phiên bản cũ hơn của zero-knowledge protocols thường yêu cầu prover và verifier giao tiếp qua lại và do đó, được coi là . Nhưng trong các cấu trúc `non-interactive`, prover và verifier chỉ phải trao đổi một bằng chứng. Chuyển sang phần `Arguments of Knowledge` của từ viết tắt. zk-SNARK được coi là hợp lý về mặt tính toán, có nghĩa là một prover không trung thực có rất ít khả năng gian lận thành công hệ thống mà không thực sự có dữ liệu về witness để hỗ trợ chứng minh của họ. Tính chất này được gọi là tính hợp lý và giả định rằng prover có khả năng tính toán hạn chế.

Về mặt lý thuyết, một prover có đủ sức mạnh tính toán có thể tạo ra các bằng chứng giả, và đây là một trong những lý do khiến máy tính lượng tử được nhiều người coi là mối đe dọa đối với zk-SNARK (và các hệ thống blockchain).

Chúng ta có thể nghĩ về điều này một cách cụ thể hơn là có một hàm, ký hiệu là C, lấy hai đầu vào: C (x, w). Đầu vào x là đầu vào công khai và w là đầu vào của `witness`. Đầu ra của chương trình là boolean, tức là true hoặc false. Mục tiêu sau đó được đưa ra một đầu vào công khai cụ thể x, chứng minh rằng prover biết `witness` w sao cho C (x, w) == true.

`Zero-knowledge proof` có thể xác minh nhanh chóng và thường chiếm ít dữ liệu hơn nhiều so với một giao dịch Bitcoin tiêu chuẩn. Điều này mở ra một con đường cho công nghệ zk-SNARK được sử dụng như một giải pháp bảo mật và khả năng mở rộng.

Trên thế giới hiện nay đã có rất nhiều implement của zk-SNARKs, các bạn có thể tìm hiểu qua:
- <a herf="https://github.com/microsoft/Spartan">Spartan của ông lớn Microsoft</a>
- <a herf="https://github.com/zkcrypto/bellman">Bellman</a>
- ...

# Example với ngôn ngữ Rust

## Giới thiệu về Rust

Rust là ngôn ngữ lập trình được tạo ra vào năm 2006 bởi Graydon Hoare như một dự án phụ khi đang là developer tại Mozilla.  Rust pha trộn hiệu suất của các ngôn ngữ như C ++ với cú pháp thân thiện hơn, tập trung vào code an toàn và được thiết kế tốt giúp đơn giản hóa việc phát triển

Nói một cách đơn giản, mình thấy Rust là ngôn ngữ lập trình cấp thấp (low level), định kiểu tĩnh (statically typed), là ngôn ngữ lập trình đa dụng (multi-paradigm), phù hợp với các ứng dụng tập trung vào sự an toàn và hiệu suất.

## Giới thiệu về bellman

<a href="https://github.com/zcash/librustzcash/tree/master/bellman">Bellman</a>
 là một thư viện phần mềm zk-SNARK được phát triển bởi nhóm Zcash bằng ngôn ngữ Rust, thực hiện thuật toán Groth16. 

Quy trình tổng thể của bellman:

<img src="https://miro.medium.com/max/1400/1*CXpf6f27J7kx83C_nRtF-g.png" />

## Let Code With Terry =))

https://github.com/arcalinea/bellman-examples