const divisors = (integer) => {
  const result = []
  for(let i = BigInt(1); i < integer; i++) {
    if(integer % i == 0) result.push(i)
  }
  return result
}

const sum = x => x.reduce(
  (partialSum, i) => partialSum + i, BigInt(0)
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

aliquot(BigInt(276))
