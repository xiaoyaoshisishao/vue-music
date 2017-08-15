export const commonParams = {
  g_tk: 1693637572,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}
// 基于jsonp方库，设置自定义的cbname
// 解决cbname未定义的问题
export const options1 = {
  param: 'jsonpCallback',
  prefix: 'playlistinfoCallback'
}
export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0