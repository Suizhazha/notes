function clock () {
  // 实例化当前时间
  let time = new Date();
  //年月日周
  let y = time.getFullYear(),
    m = time.getMonth() + 1,
    day = time.getDate(),
    week = toWeek(time.getDay());
  //小时，分钟，秒
  let h = time.getHours(),
    miu = time.getMinutes(),
    s = time.getSeconds(),
    ms = time.getMilliseconds();
  var resultTimne = `今天是 ${y}年${m}月${day}日 ${week} ${h}时${miu}分${s}秒${ms}毫秒`;
  return resultTimne;
}
function toWeek (week) {
  let returnWeek = '';
  switch (week) {
    case 0:
      returnWeek = '日';
    case 1:
      returnWeek = '一';
    case 2:
      returnWeek = '二';
    case 3:
      returnWeek = '三';
    case 4:
      returnWeek = '四';
    case 5:
      returnWeek = '五';
    case 6:
      returnWeek = '六';
  }
  return '星期' + returnWeek;
}
console.log(clock());