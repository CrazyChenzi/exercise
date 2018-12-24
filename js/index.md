# js节流和防抖

函数的节流和防抖实际上都是优化高频执行js代码的一种方式
函数节流是指，在规定的时间内这个函数只会被执行一次
函数防抖是指，在频繁触发的情况下，只有足够的空闲时间才会执行代码

## 函数节流

节流函数允许一个函数在规定的时间内只执行一次。大多用在页面滚动时，鼠标移动等高频触发的事件中

实现：

```js
/**
  * fn 要节流的函数
  * delay 节流的间隔时间
*/
function throttle (fn, delay) {
  let timer, args = arguments, start
  return function Loop () {
    const _this = this
    let now = Date.now()
    !start && (start = now)
    timer && clearTimeout(timer)

    if (now -start >= delay) {
      fn.apply(_this, args)
      start = now
    } else {
      timer = setTimeout(() => {
        Loop.apply(_this.args)
      }, 50)
    }
  }
}
```

```js
function foo () {
  console.log('节流....' + Date.now())
}
```

使用：

```js
window.onscroll = throttle(foo, 800)
```

## 函数防抖

防抖：在下次函数执行之前必须等待相应的时间，正确实现的方法：将若干个函数组合在一起，并在给定的时间过去之后仅被调用一次

实现：

```js
/**
 *  防抖主要使用setTimeout实现
 *  fn 被防抖的方法
 *  delay 防抖的时间
*/
function debounce (fn, delay) {
  let timer = null
  return function () {
    // 通过this 和 arguments获取函数的作用域和变量
    const _this = this
    const args = arguments

    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, delay)
  }
}
```

```js
function foo () {
  console.log('防抖....' + Date.now())
}
```

使用：

```js
window.onscroll = debounce(foo, 200)
```

## 区别

节流和防抖的最大区别就是到这个时间就会执行一次  而不是停下后才会执行
