export const problems = [
  // Problem 1
  {
    key: 1,
    title: 'Multiples of 3 and 5',
    prompt:
      <>
        <p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.<br />
        The sum of these multiples is 23.</p>
        <p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
      </>,
    codeStringified:
`public int MultiplesOfThreeAndFive(int maxNum)
{
  var sum = 0;
  for (var i = 1; i < maxNum; ++i)
  {
    if (i % 3 == 0 || i % 5 == 0)
      sum += i;
  }
  return sum;
}

return MultiplesOfThreeAndFive(1000);`,
    completed: true,
  },
  // Problem 2
  {
    key: 2,
    title: 'Even Fibonacci numbers',
    prompt:
      <>
        <p>Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:</p>
        <p className="text-center">1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</p>
        <p>By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.</p>
      </>,
    codeStringified:
`public int EvenFibonacciNumbers(int maxNum)
{
  var prevNum = 1;
  var nextNum = 1;
  var sum = 0;
  while (nextNum <= maxNum)
  {
    if (nextNum % 2 == 0)
      sum += nextNum;
    prevNum = nextNum - prevNum;
    nextNum += prevNum;
  }
  return sum;
}

return EvenFibonacciNumbers(4000000);`,
    completed: true,
  },
  // Problem 3
  {
    key: 3,
    title: 'Largest prime factor',
    prompt:
      <>
        <p>The prime factors of 13195 are 5, 7, 13 and 29.</p>
        <p>What is the largest prime factor of the number 600851475143?</p>
      </>,
    codeStringified:
`public long LargestPrimeFactor(long value, long divisor = 2)
{
  while ((value % divisor) != 0 && Math.Pow(divisor, 2) <= value)
  {
    divisor++;
  }

  return Math.Pow(divisor, 2) <= value
    ? LargestPrimeFactor(value / divisor, divisor)
    : value;
}

return LargestPrimeFactor(600851475143);`,
    completed: true,
  },
  // Problem 4
  {
    key: 4,
    title: 'Largest palindrome product',
    prompt:
      <>
        <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.</p>
        <p>Find the largest palindrome made from the product of two 3-digit numbers.</p>
      </>,
    codeStringified: null,
    completed: false,
  },
  // Problem 5
  {
    key: 5,
    title: 'Smallest multiple',
    prompt:
      <>
        <p>2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.</p>
        <p>What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?</p>
      </>,
    codeStringified: null,
    completed: false,
  },
  // Problem 6
  {
    key: 6,
    title: 'Sum square difference',
    prompt:
      <>
        <p>The sum of the squares of the first ten natural numbers is,</p>
        <p className="text-center">1^2 + 2^2 + ... + 10^2 = 385</p>
        <p>The square of the sum of the first ten natural numbers is,</p>
        <p className="text-center">(1 + 2 + ... + 10)^2 = 55^2 = 3025</p>
        <p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is <b>3025 - 385 = 2640.</b></p>
        <p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p>
      </>,
    codeStringified: null,
    completed: false,
  },
  // Problem 7
  {
    key: 7,
    title: '10001st prime',
    prompt:
      <>
        <p>By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.</p>
        <p>What is the 10 001st prime number?</p>
      </>,
    codeStringified: null,
    completed: false,
  },
];