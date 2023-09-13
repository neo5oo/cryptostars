// Возвращает строковое представление числа с отделением тысячных разрядов пробелом

export const splitNumber = (num, delimiter = ' ') => num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${delimiter}`);
