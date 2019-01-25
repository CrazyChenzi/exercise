function myPromise (executor) {
  let _this = this

  function resolve () {
    console.log('resolve')
  }
  function reject () {
    console.log('reject')
  }
  executor(resolve, reject)
}
myPromise.prototype.then = function (onResolve) {

}
myPromise.prototype.catch = function (handleError) {
  
}

module.exports = myPromise