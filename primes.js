const isPrime = (num) => {
	let isPrime = true
	for (let i = 2; i < num; i++) {
		if (num % i === 0) isPrime = false
	}
	return isPrime
}

const listPrimes = (n) => {
	let primes = []
	for (let num = 2; num < n; num++) {
		if (isPrime(num)) primes.push(num)
	}
	return primes
}

console.log(listPrimes(15))
console.log(listPrimes(50))
