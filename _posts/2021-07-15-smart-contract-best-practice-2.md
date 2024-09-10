---
title: Smart contract best practice 2
date: 2021-07-15 17:20:30 +/-0700
---

<p>This blog provides a baseline knowledge of security considerations for Smart Contract developer in Ethereum Blockchain.</p>

# Recommendations for Smart Contract Security in coding
<p>This session demonstrates a number of design patterns which should generally be followed when writing smart contracts</p>

## External Calls
### Use caution when making external calls and make untrusted contract

<p>Calls to untrusted contracts can introduce several unexpected risks or errors. External calls may execute malicious code in that contract or any other contract that it depends upon.</p>

<p>When interacting with external contracts, name your variables, methods, and contract interfaces in a way that makes it clear that interacting with them is potentially unsafe</p>

```solidity
UntrustedBank.withdraw(100); //untrusted external call
TrustedBank.withdraw(100); //trusted contract

function makeUntrustedWithdrawal(uint amount) {
    UntrustedBank.withdraw(amount);
}
```
### Avoid state changes after external calls
<p>Whenever using <i>raw calls</i> (someAddress.call()) or <i>contract calls</i> (externalContract.method()), always assume that malicious code might execute.</p>
<a href="https://docs.soliditylang.org/en/develop/security-considerations.html?highlight=check%20effects#use-the-checks-effects-interactions-pattern">Using the Checks-Effects-Interactions Pattern</a>

### Handle errors in external calls
Solidity offers low-level call methods that work on raw addresses: `address.call()`, `address.callcode()`, `address.delegatecall()` and `address.send()`. These low-level methods never throw an exception, but will return `false` if the call encounters an exception
```solidity
(bool success, ) = someAddress.call.value(55).(bytes4(sha3("deposit()")));
if (!success) {
    // handle exception
}
```

### Don't delegatecall to untrusted code
The `delegatecall` function is used to call functions from other contracts as if they belong to the caller contract. Thus the callee may change the state of the calling address. This may be insecure. An example below shows how using `delegatecall` can lead to the destruction of the contract and loss of its balance.

## On-chain data is public
If we require submitted data to be private up until some point in time in order to work, the best strategy is use <a href="">commitment schemes</a> with separate phases: <i>first commit using the hash of the values and in a later phase revealing the values</i>.
<br/>
Example: In an auction, require players to submit a hash of their bid value in an initial phase (along with a deposit greater than their bid value), and then submit their auction bid value in the second phase.

## Beware of negation of the most negative signed integer
Solidity provides several types to work with signed integers. Like in most programming languages, in Solidity a signed integer with N bits can represent values from `-2^(N-1)` to `2^(N-1)-1`.

## Enforce invariants
An assert guard triggers when an assertion fails, use assert to verify data all the time function execute.It wil throw message when an assertion fails, an external service can handle it.
```solidity
function deposit() public payable {
    balanceOf[msg.sender] += msg.value;
    totalSupply += msg.value;
    assert(this.balance >= totalSupply); // this trigger balance of token contract will larger than totalSupply
}
```
> In Ethereum, you can use both `assert()` and `require()`. `require(condition)` is meant to be used for input validation, which should be done on any user input, and reverts if the condition is false. `assert()` also reverts if the condition is false but should be used only for invariants: internal errors or to check if your contract has reached an invalid state. Following this paradigm allows formal analysis tools to verify that the invalid opcode can never be reached: meaning no invariants in the code are violated and that the code is formally verified.

> The convenience functions `assert` and `require` can be used to check for conditions and throw an exception if the condition is not met.

> The `assert` function should only be used to test for internal errors, and to check invariants.

>The `require` function should be used to ensure valid conditions, such as inputs, or contract state variables are met, or to validate return values from calls to external contracts.

## Use modifiers only for checks
Use modifiers to replace duplicate condition checks in multiple functions, such as `isOwner()`, otherwise use require or revert inside the function. This makes smart contract code more readable and easier to audit.

## Beware rounding with integer division
All integer division rounds down to the nearest integer. If you need more precision, consider using a multiplier, or store both the numerator and denominator.

## Explicitly mark visibility in functions and state variables
Explicitly label the visibility of functions and state variables. Functions can be specified as being `external`, `public`, `internal` or `private`
 * `external` functions are part of the contract interface. An external function `f` cannot be called internally (i.e. `f()` does not work, but `this.f()` works). `external` functions are sometimes more efficient when they receive large arrays of data
 * `public` functions are part of the contract interface and can be either called internally or via messages. For public state variables, an automatic getter function is generated.
 * `internal` functions and state variables can only be accessed internally, without using `this`.
 * `private` functions and state variables are only visible for the contract they are defined in and not in derived contracts.

## Lock pragmas to specific compiler version
Contracts should be deployed with the same compiler version and flags that they have been tested the most with. Locking the pragma helps ensure that contracts do not accidentally get deployed using, for example, the latest compiler which may have higher risks of undiscovered bugs. Contracts may also be deployed by others and the pragma indicates the compiler version intended by the original authors.
```solidity
// bad
pragma solidity ^0.4.4;


// good
pragma solidity 0.4.4;
```
> Pragma statements can be allowed to float when a contract is intended for consumption by other developers, as in the case with contracts in a library or EthPM package. Otherwise, the developer would need to manually update the pragma in order to compile locally.

## Use events to monitor contract activity
It can be useful to have a way to monitor the contract's activity after it was deployed. One way to accomplish this is to look at all transactions of the contract, however that may be insufficient, as message calls between contracts are not recorded in the blockchain. Moreover, it shows only the input parameters, not the actual changes being made to the state. Also events could be used to trigger functions in the user interface.

## Avoid using tx.origin
Never use `tx.origin` for authorization, another contract can have a method which will call your contract

## Multiple Inheritance Caution
When a contract is deployed, the compiler will linearize the inheritance from right to left (after the keyword is the parents are listed from the most base-like to the most derived).
```solidity
contract Final {
    uint public a;
    function Final(uint f) public {
        a = f;
    }
}

contract B is Final {
    int public fee;

    function B(uint f) Final(f) public {
    }

    function setFee() public {
        fee = 3;
    }
}

contract C is Final {
    int public fee;

    function C(uint f) Final(f) public {
    }

    function setFee() public {
        fee = 5;
    }
}

contract A is B, C {
    function A () public B(3) C(5) public {
        setFee();
    }
}
```

Contract A's linearization: **Final <- B <- C <- A**.
<br/>
The consequence of the linearization will yield a fee value of 5, since C is the most derived contract

## Use interface type instead of the address for type safety
When a function takes a contract address as an argument, it is better to pass an interface or contract type rather than raw address. If the function is called elsewhere within the source code, the compiler it will provide additional type safety guarantees.

<p style="font-size: 25px; font-weight: bold">Thank you for your reading and keep update with me</p>
