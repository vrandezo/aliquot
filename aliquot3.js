const divisors = (integer) => {
  const result = []
  const half = integer / 2
  for(let i = 1; i <= half; i++) {
    if(integer % i == 0) result.push(i)
  }
  return result
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
