const awaitOne = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('awaitOne：这个要经过3s?')
      console.log('awaitOne：这个要经过3s?')
    }, 3000);
  })
}
const awaitTwo = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('awaitTwo：这个要经过2s')
      console.log('awaitTwo：这个要经过2s')
    }, 2000);
  })
}

const firstAsync = async function () {
  const two = await awaitTwo()
  const one = await awaitOne()

  console.log('two: ', two)
  console.log('one: ', one)
}

const secondAsync = async function () {
  const two = awaitTwo()
  const one = awaitOne()

  console.log(await two)
  console.log(await one)
}

// firstAsync()  //  3s之后输出one
// secondAsync()  // 1s之后输出one