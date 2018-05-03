const proto = Date.prototype

export const getTime = date => proto.getTime.call(date)

export const getFullYear = date => proto.getFullYear.call(date)

export const getMonth = date => proto.getMonth.call(date)

export const getDate = date => proto.getDate.call(date)

export const getDay = date => proto.getDay.call(date)

export const getHours = date => proto.getHours.call(date)

export const getMinutes = date => proto.getMinutes.call(date)

export const getSeconds = date => proto.getSeconds.call(date)

export const getMilliseconds = date => proto.getMilliseconds.call(date)

export const getUTCFullYear = date => proto.getUTCFullYear.call(date)

export const getUTCMonth = date => proto.getUTCMonth.call(date)

export const getUTCDate = date => proto.getUTCDate.call(date)

export const getUTCDay = date => proto.getUTCDay.call(date)

export const getUTCHours = date => proto.getUTCHours.call(date)

export const getUTCMinutes = date => proto.getUTCMinutes.call(date)

export const getUTCSeconds = date => proto.getUTCSeconds.call(date)

export const getUTCMilliseconds = date => proto.getUTCMilliseconds.call(date)
