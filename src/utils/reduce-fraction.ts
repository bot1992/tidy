const gcd = function (a: number, b: number): number {
  return b ? gcd(b, a % b) : a
}

export default function reduceFraction(fraction: string) {
  const splitFraction = fraction.split("/")
  const number = parseInt(splitFraction?.[0] ?? 1)
  const denomin = parseInt(splitFraction?.[1] ?? 1)

  let gcdResult = gcd(number, denomin)
  let numResult = number / gcdResult
  let denominResult = denomin / gcdResult
  return numResult === denominResult
    ? numResult
    : `${numResult}/${denominResult}`
}
