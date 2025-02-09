/*
 * @Author: daidai
 * @Date: 2022-02-23 08:59:26
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-24 17:11:58
 * @FilePath: \big-screen-vue-datav\src\utils\index.js
 */

/**
 * @param {Function} fn 防抖函数
 * @param {Number} delay 延迟时间
 */
export function debounce(fn, delay) {
  var timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
/**
 * @param {date} time 需要转换的时间
 * @param {String} fmt 需要转换的格式 如 yyyy-MM-dd、yyyy-MM-dd HH:mm:ss
 */
export function formatTime(time, fmt) {
  if (!time) return '';
  else {
    const date = new Date(time);
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
}


export function formatNumberWithDots(number) {
    // 将数字转换为字符串
    let numStr = number.toString();

    // 使用正则表达式每三位数字前加一个小数点
    let formattedStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return formattedStr;
}
export function displayCurrentTime() {
    // 获取显示时间的元素
    const timeElement = document.getElementById('current-time');

    // 更新时间的函数
    function updateTime() {
        // 获取当前时间
        const now = new Date();

        // 获取时、分、秒
        const hours = String(now.getHours()).padStart(2, '0'); // 补零
        const minutes = String(now.getMinutes()).padStart(2, '0'); // 补零
        const seconds = String(now.getSeconds()).padStart(2, '0'); // 补零

        // 格式化时间为 HH:MM:SS
        const formattedTime = `${hours}:${minutes}:${seconds}`;

        // 更新显示内容
        if (timeElement) {
            timeElement.textContent = formattedTime;
        } else {
            console.log(formattedTime); // 如果没有 DOM 元素，直接打印到控制台
        }
    }

    // 初始调用一次，避免延迟
    updateTime();

    // 每秒更新一次时间
    setInterval(updateTime, 1000);
}

