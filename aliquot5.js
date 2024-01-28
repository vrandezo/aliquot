const sqrt =(integer) => {
    if (integer < 2n) {
        return integer;
    }

    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(integer, 1n);
}

const factorize = (integer) => {
  const result = [ BigInt(1) ]
  let i = BigInt(2)
  let product = BigInt(1)
  let rest = integer
  let limit = sqrt(integer)
  while (i <= limit) {
    if (rest % i == BigInt(0)) {
      result.push(i)
      product *= i
      rest = integer / product
      limit = sqrt(rest)
    } else {
      i++
    }
  }
  result.push(rest)
  return result
}

const divisors = (integer) => {
  const result = [ BigInt(1) ]
  const inner = (integer, list) => {
    result.push(integer)
    if (list.length === 0) {
      return [ integer ]
    }
    const in_results = [ integer ]
    const in_factors = inner(list[0], list.slice(1))
    for (const f of in_factors) {
      result.push(integer*f)
      result.push(f)
      in_results.push(integer*f)
      in_results.push(f)
    }
    return in_results
  }
  const list = factorize(integer)
  inner(list[0], list.slice(1))
  const im = [...new Set(result)].sort((a, b) => (a < b)?-1:((a > b)?1:0))
  return im.slice(0, im.length-1)
}

const sum = x => x.reduce(
  (partialSum, i) => partialSum + i, BigInt(0)
)

const s = (integer) => sum(divisors(integer))

const digits = (integer) => integer.toString().length

const aliquot = (integer) => {
  let steps = 0
  const previous = []
  let value = integer
  console.log(steps, value, digits(value), 0, 'ms')
  let lastTime = new Date().getTime()
  let currentTime = new Date().getTime()

  while (true) {
    steps += 1
    previous.push(value)
    value = s(value)
    currentTime = new Date().getTime()
    console.log(steps, value, digits(value), currentTime-lastTime, 'ms')
    lastTime = currentTime
    if (previous.includes(value)) break
  }
}

aliquot(BigInt(276))
