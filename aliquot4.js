const factorize = (integer) => {
  const result = [ 1 ]
  let i = 2
  let product = 1
  let rest = integer
  let limit = Math.ceil(Math.sqrt(integer))
  while (i <= limit) {
    if (rest % i == 0) {
      result.push(i)
      product *= i
      rest = integer / product
      limit = Math.ceil(Math.sqrt(rest))
    } else {
      i++
    }
  }
  result.push(rest)
  return result
}

const divisors = (integer) => {
  const result = [ 1 ]
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
  const im = [...new Set(result)].sort((a, b) => a - b)
  return im.slice(0, im.length-1)
}

const sum = x => x.reduce(
  (partialSum, i) => partialSum + i, 0
)

const s = (integer) => sum(divisors(integer))

const aliquot = (integer) => {
  let steps = 0
  const previous = []
  let value = integer
  console.log(steps, value)
  let lastTime = new Date().getTime()
  let currentTime = new Date().getTime()

  while (true) {
    steps += 1
    previous.push(value)
    value = s(value)
    currentTime = new Date().getTime()
    console.log(steps, value, currentTime-lastTime, 'ms')
    lastTime = currentTime
    if (previous.includes(value)) break
  }
}

aliquot(276)
