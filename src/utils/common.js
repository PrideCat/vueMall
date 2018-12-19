String.prototype.toTimes = function() {
    return new Date(this.replace(/\/|\\/g, '/'));
}

/**
 * 时间格式化工具
 * 调用方式：new Date().format("yyyy-MM-dd hh:mm:ss.S")
 * @param format 时间格式，如："yyyy-MM-dd hh:mm:ss.S"
 * @returns String "2017-05-13 10:40:00.000"
 */
Date.prototype.format = function(format) {
    format = format || 'YYYY-MM-DD hh:mm:ss'
        // 日期格式化
    var o = {
        'M+': this.getMonth() + 1, // month
        'd+': this.getDate(), // day
        'h+': this.getHours(), // hour
        'm+': this.getMinutes(), // minute
        's+': this.getSeconds(), // second
        'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
        'S': this.getMilliseconds() // millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (o.hasOwnProperty(k) && new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return format
}

/**
 * 与其它时间计算持续时间
 * @param otherTime 其它时间，为空时为当前时间。格式：1494680981788, "1494680981788", "2017/05/14 13:49:41", "2017-05-14 13:49:41"
 * @param format 格式，如："dd天h小时mm分钟"
 * @returns String 00天1小时13分钟
 */
Date.prototype.formatDurationTime = function(otherTime, format) {
    var otherTimes = otherTime
    if (typeof otherTime === 'date') {
        otherTimes = otherTimes.getTime()
    } else if (typeof otherTime === 'string') {
        if (/^[0-9\-]*$/.test(otherTime)) {
            otherTimes = parseInt(otherTime)
        } else {
            otherTimes = new Date(otherTime.replace(/-/g, '/')).getTime()
        }
    } else {
        otherTimes = new Date().getTime()
    }
    return Date.timeOfDuration(Math.abs(this.getTime() - otherTimes), format)
}

/**
 * 给日期加(减)时间
 * @param addTimes 添加的时间，格式：1y,-1M,1d,1h,1m,1s,1S
 * @returns {Date}
 */
Date.prototype.addTimes = function(addTimes) {
    let timeType;
    if (typeof addTimes === 'string') {
        if (/^([0-9\-]+)(y|M|d|h|m|s|S)?$/.test(addTimes)) {
            switch (RegExp.$2) {
                case 'y':
                    timeType = "FullYear";
                    break
                case 'M':
                    timeType = "Month";
                    break
                case 'd':
                    timeType = "Date";
                    break
                case 'h':
                    timeType = "Hours";
                    break
                case 'm':
                    timeType = "Minutes";
                    break
                case 's':
                    timeType = "Seconds";
                    break
                default:
                    timeType = "Milliseconds";
                    break
            }
            this[`set${timeType}`](this[`get${timeType}`]() + parseInt(RegExp.$1));
        }
    } else if (typeof addTimes !== 'undefined') {
        this.setMinutes(this.getMinutes() + addTimes)
    }
    return this
}

/**
 * 将时间戳转成指定时间格式
 * 调用方式：
 *     Date.formatByTimes(1494559111528, "yyyy-MM-dd hh:mm:ss.S")
 *     Date.formatByTimes("1494559111528", "yyyy-MM-dd hh:mm:ss.S")
 * @param times 时间戳
 * @param format 时间格式，如："yyyy-MM-dd hh:mm:ss.S"
 * @returns String "2017-05-13 10:40:00.000"
 */
Date.formatByTimes = function(times, format) {
    var t = parseInt(times)
    if (isNaN(t)) return times
    return new Date(t).format(format)
}

/**
 * 持续时间 计算
 * @param times 持续毫秒数
 * @param format 格式，如："dd天h小时mm分钟"
 * @returns String 00天1小时13分钟
 */
Date.timeOfDuration = function(times, format) {
    format = format || 'dd天hh小时mm分钟'
    let temp, total, fields = [
        [86400000, /(d+)/],
        [3600000, /(h+)/],
        [60000, /(m+)/],
        [1000, /(s+)/]
    ]
    for (var i in fields) {
        if (fields.hasOwnProperty(i) && fields[i][1].test(format)) {
            temp = Math.floor(times / fields[i][0])
            times = times % fields[i][0]
            total = Math.max(RegExp.$1.length, ('' + temp).length)
            format = format.replace(RegExp.$1, (Array(total).join('0') + temp).slice(-total))
        }
    }
    if (/(S)/.test(format)) {
        total = Math.max(RegExp.$1.length, ('' + times).length)
        format = format.replace(RegExp.$1, (Array(total).join('0') + times).slice(-total))
    }
    temp = null
    total = null
    fields = null
    return format
}

String.prototype.compile = function() {
    let code = this;
    console.log(code);
    let c = String.fromCharCode(code.charCodeAt(0) + code.length);
    for (let i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    return encodeURIComponent(escape(c));
}

String.prototype.uncompile = function() {
    let code = this;
    code = unescape(code);
    let c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (let i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
}