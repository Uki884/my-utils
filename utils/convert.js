/**
 * 与えられた文字列が与えられた長さを上回っていた場合省略する
 * @param {string} str 内容
 * @param {number} len 文字数
 */
export const convertLongTextToShortText = (str, len) => {
    return str.length <= len ? str : str.substr(
        0,
        len
    ) + '...';
};

// Dateオブジェクトを文字列に変換する
export const convertDateToString = (date) => {
    let year_str = date.getFullYear();
    let month_str = 1 + date.getMonth();
    let day_str = date.getDate();
    let format_str = 'YYYY-MM-DD';
    format_str = format_str.replace(
        /YYYY/g,
        year_str
    );
    format_str = format_str.replace(
        /MM/g,
        month_str
    );
    format_str = format_str.replace(
        /DD/g,
        day_str
    );
    return format_str;
};

/**
 * 文字数をカウントする
 * 大文字の場合は2文字として扱う
 * @param {string} str
 */
export const convertStringToLength = (str) => {
    if (!str) return false;
    let result = 0;
    for (let i = 0; i < str.length; i ++) {
        let chr = str.charCodeAt(i);
        if ((chr >= 0x00 && chr < 0x81) ||
            (chr === 0xf8f0) ||
            (chr >= 0xff61 && chr < 0xffa0) ||
            (chr >= 0xf8f1 && chr < 0xf8f4)) {
            //半角文字の場合は1を加算
            result += 1;
        } else {
            //それ以外の文字の場合は2を加算
            result += 2;
        }
    }
    //結果を返す
    return result;
};
