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

Trong ví dụ lần này, mình sẽ demo một bài toán đơn giản:

> Lin và Terry biết một giá trị `c` và  Lin muốn chứng minh với Terry "Lin biết 2 số một giá trị `y` sao cho `hash(y) = c` mà không làm lộ giá trị của `y`"

### Setup project

Tạo project 
```sh
mkdir bellman-example 
cd bellman-example
```

Init cargo project
```sh
cargo init
```

Add bellman dependencies vào file Cargo.toml 

File `Cargo.toml` sẽ trông giống như thế này:

```toml
[package]
authors = ["Terry"]
name = "bellman-example"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
bellman = "0.13.1"
```

Build thử và chạy project 

```sh
cargo build && ./target/debug/bellman-example
```

Chúng ta đã hoàn thành setup rust project đơn giản.

### Setup bài toán

Bellman cung cấp cho chúng ta `Circuit` trait, chúng tá có thể sử dụng nó để synthesize các ràng buộc của bài toán trên

```rust
/// Implement sha256(hash) function. Input and output are in little-endian bit order.
fn impl_sha256<Scalar: PrimeField, CS: ConstraintSystem<Scalar>> (
    mut cs: CS,
    data: &[Boolean]
) -> Result<Vec<Boolean>, SynthesisError> {
    let input: Vec<_> = data.chunks(8).map(|c| c.iter().rev()).flatten().cloned().collect();

    let res = sha256(cs.namespace(|| "SHA-256(input)"), &input)?;

    Ok(res.chunks(8).map(|c| c.iter().rev()).flatten().cloned().collect())
}

struct OurProblem {
    value: Option<[u8; 80]>,
}

impl<Scalar: PrimeField> Circuit<Scalar> for OurProblem {
    fn synthesize<CS: ConstraintSystem<Scalar>>(self, cs: &mut CS) -> Result<(), SynthesisError> {
    }
}
```

Trong hàm `synthesize`, chúng ta define bài toán theo dạng <a href="https://en.wikipedia.org/wiki/Constraint_programming">Constraint programming</a> và alloc giá trị vào các biến được define ở `OurProblem` struct

```rust
fn synthesize<CS: ConstraintSystem<Scalar>>(self, cs: &mut CS) -> Result<(), SynthesisError> {
    let bit_values = if let Some(value) = self.value {
        value.into_iter().map(|byte| (0..8).map(move |i| (byte >> i) & 1u8 == 1u8)).flatten().map(|b| Some(b)).collect()
    } else {
        vec![None; 80 * 8]
    };

    let pre_bit = bit_values.into_iter().enumerate().map(|(i, b)| {
        AllocatedBit::alloc(cs.namespace(|| format!("Pre bit {}", i)), b)
    }).map(|b| b.map(Boolean::from))
    .collect::<Result<Vec<_>, _>>()?;

    let hash = impl_sha256(cs.namespace(|| "SHA-256(value)"), &pre_bit)?;

    multipack::pack_into_inputs(cs.namespace(|| "pack hash"), &hash)
}
```

### Tạo random key

Tạo bộ `pk` và `pvk`, bộ key này sẽ được công khai và chia sẻ giữa Lin và Terry:

```rust
let params = {
    let c = problem::OurProblem { value: None };

    generate_random_parameters::<Bls12, _, _>(c, &mut OsRng).unwrap()
};

println!("Prepare key...");
let pvk = prepare_verifying_key(&params.vk);
```

### Tạo proofs

Tạo proof với hidden input. Ở đây mình sẽ lấy ví dụ giá trị `y` của Lin là `[40; 80]`. Lin gửi `inputs` + `proof` cho Terry với tuyên bố `Lin biết giá trị y sao cho hash(y) = x`

```rust
println!("Prepare input...");
let hidden_value = [40; 80];
let hash_bit = bytes_to_bits_le(&Sha256::digest(&hidden_value));
let x = compute_multipacking::<Scalar>(&hash_bit);

let c = problem::OurProblem {
    value: Some(hidden_value),
};

println!("Create proof...");
let proof = create_random_proof(c, &params, &mut OsRng).unwrap();
```

### Verify proof

Terry có thể verify tuyên bố của Lin là đúng ở bước `Tạo proofs` bằng cách tự xác thực proof mà không cần liên hệ với Lin đây là điểm `non-interactive` trong zk-SNARKs: 

```rust
println!("Verify proof...");
let result = verify_proof(&pvk, &proof, &x);

println!("Result: {}", result.is_ok());
```

```sh
Verify proof...
Result: true
```

Toàn bộ source code của example mình sẽ để <a target="_blank" href="https://github.com/bui-duc-huy/bellman-example">ở đây</a>. Với bất kỳ thắc mắc các bạn có thể open issue ở repo, mình sẽ trả lời nếu mình biết :v.

# Conclusion
Như vậy qua bài viết cũng đã phần nào giới thiệu sơ lược về `zk-SNARKs`. Theo đánh giá cá nhân của mình, mình nghĩ `zk-SNARKs` là một công nghệ khá là thú vị và đáng học hỏi cho các bạn tìm hiểu về thuật toán mã hoá. Ứng dụng của nó cũng đã được chứng minh ở các dự án về blockchain lớn có thể kể tên như <a target="_blank" href="https://tornado.cash/">Tornado Cash</a>, <a target="_blank" href="https://z.cash/">Z Cash</a>

# References 
1. <a target="_blank" href="https://github.com/arcalinea/bellman-examples">Bellman example</a>
2. <a target="_blank" href="https://starli.medium.com/zkp-deep-into-bellman-library-9b1bf52cb1a6">ZKP — Deep into Bellman Library</a>
3. <a target="_blank" href="https://www.investopedia.com/terms/z/zksnark.asp">What Is zk-SNARK?</a>