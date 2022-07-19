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

# Cách thức hoạt động của zk-SNARKs
Zk-SNARKs bao gồm 3 thuật toán khác nhau: G, P and V

1. G algorithm: G (Key generation) nhận vào input "lambda" (phải được giữ bí mật về input lambda) và chương trình C. Sau đó, G tiến hành tạo ra 2 public key, 1 khoá dành cho prover (pk) và một khoá dành cho verifier (vk). Các khoá này đều công khai cho tất cả các bên tham gia

2. P algorithm: P dành cho prover nhận vào 3 tham số đầu vào:
- pk: khoá dành cho prover (generate bằng G)
- x: Tham số ngẫu nhiên public bởi các bên
- w: private statament prover muốn chứng minh họ biết nhưng không muốn tiết lộ w

    Thuật toán P tạo ra một bằng chứng `prf = P(pk, x, w)`

3. V algorithm: V nhận vào 3 input và cơ bản trả về 1 trá trị boolean. 
- vk: Khoá dành cho verifier (generate bằng G)
- x: Tham số tạo bởi P
- prf: Proof tạo bởi prover

    `boolean a = V(vk, x, prf)`

Một biết boolean có 2 lựa chọn, TRUE có nghĩa là bằng chứng cho P tạo ra là đúng, FALSE là ngược lại.

Về tham số lambda và chương trình C:
- Tham số Lambda phải được giữ bí mật vì bất kì ai có được tham số lambda đều có thể tạo ra <b>prf</b> giả mạo
- Về cơ bản, hàm C nhận 2 giá trị đầu vào, giá trị công khai x và tham số bí mật w, Thường x sẽ được chọn là giá trị hash của w, `x = H(w)` và hàm C được thiết kế như sau:

```python
def C(x, w):
    ...
    return sha256(w) == x
```

# Example với ngôn ngữ Rust

## Giới thiệu về Rust

Rust là ngôn ngữ lập trình được tạo ra vào năm 2006 bởi Graydon Hoare như một dự án phụ khi đang là developer tại Mozilla.  Rust pha trộn hiệu suất của các ngôn ngữ như C ++ với cú pháp thân thiện hơn, tập trung vào code an toàn và được thiết kế tốt giúp đơn giản hóa việc phát triển

Nói một cách đơn giản, mình thấy Rust là ngôn ngữ lập trình cấp thấp (low level), định kiểu tĩnh (statically typed), khá là đa dụng (multi-paradigm), phù hợp với các ứng dụng tập trung vào sự an toàn và hiệu suất.

## Giới thiệu về bellman

<a href="https://github.com/zcash/librustzcash/tree/master/bellman">Bellman</a>
 là một thư viện phần mềm zk-SNARK được phát triển bởi nhóm <a href="https://z.cash/">Zcash</a> bằng ngôn ngữ Rust, thực hiện thuật toán Groth16. 

Quy trình tổng thể của bellman:

<img src="https://miro.medium.com/max/1400/1*CXpf6f27J7kx83C_nRtF-g.png" />

Quá trình tổng thể có thể được chia thành các bước sau:
1. Flatten bài toán đa thức và xây dựng circuit tương ứng. Bước này được thực hiện bởi upper-level application
2. Tạo R1CS (Rank 1 Constraint System) theo circuit ở bước 1
3. Chuyển đổi R1CS (Rank 1 Constraint System) sang QAP (Quadratic Arithmetic Program). Phương pháp truyền thống là sử dụng phép <a href="https://en.wikipedia.org/wiki/Lagrange_polynomial">nội suy Lagrange</a>, nhưng để giảm độ phức tạp tính toán, nó có thể được thực hiện bằng <a href="https://en.wikipedia.org/wiki/Fast_Fourier_transform">Fast Fourier Transform</a>.
4. Setup các tham chiếu của QAP, đó là CRS (Common Reference Strings)
5. Tạo proof dựa trên CRS và input của prover
4. Verifier verify proof

## Let Code With Terry =))

https://github.com/arcalinea/bellman-examples
