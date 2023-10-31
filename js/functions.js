/* const controlLength = (string, maxLength) => (string.length <= maxLength);

const checkingPalindrome = (string) => {
  const doneString = string.replaceAll(' ','').toLowerCase();
  for (let symbol = 0; doneString.length / 2 > symbol; symbol++) {
    if (doneString.at(symbol) !== doneString.at(-symbol - 1)) {
      return false;
    }
  }
  return true;
}
*/
const minutesInHour = 60;
const numberOfSingleDigits = 10;

function getTimeInMinutes(time) {
  // разбиваем строку на часы и минуты
  let [hours, minutes] = time.split(':');
  // преобразуем часы и минуты в числа
  hours = parseInt(hours);
  minutes = parseInt(minutes);
  // если часы указаны одной цифрой, добавляем ноль спереди
  if (hours < numberOfSingleDigits) {
    hours = '0' + hours;
  }
  // если минуты указаны одной цифрой, добавляем ноль спереди
  if (minutes < numberOfSingleDigits) {
    minutes = '0' + minutes;
  }
  // преобразуем время в минуты и возвращаем результат
  return parseInt(hours) * minutesInHour + parseInt(minutes);
}

function isMeetingInWorkingHours(startOfWorkday, endOfWorkday, meetingStart, meetingDuration) {
  let startOfWorkdayInMinutes = getTimeInMinutes(startOfWorkday);
  let endOfWorkdayInMinutes = getTimeInMinutes(endOfWorkday);
  let meetingStartInMinutes = getTimeInMinutes(meetingStart);
  let meetingEndInMinutes = meetingStartInMinutes + meetingDuration;
  // проверяем, что время окончания встречи не превышает конец рабочего дня
  return meetingEndInMinutes <= endOfWorkdayInMinutes && meetingStartInMinutes >= startOfWorkdayInMinutes;
}


