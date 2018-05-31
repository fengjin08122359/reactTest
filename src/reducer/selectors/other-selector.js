import { createSelector } from 'reselect'

const getwxUrl = (state) => state.wxUrl
const getwccUrl = (state) => state.wccUrl
const getpluginUrl = (state) => state.pluginUrl
const getip = (state) => state.ip
const getmail = (state) => state.mail
const getumpInterface = (state) => state.umpInterface
const getump = (state) => state.ump
const getreplace = (state) => state.replace

export const otherExample = createSelector(
  [ getwxUrl, getwccUrl, getpluginUrl, getip, getmail, getumpInterface, getump, getreplace ],
  (wxUrl, wccUrl, pluginUrl, ip, mail, umpInterface, ump, replace) => {
    var textarea = `#other
#微信认证
WX_AUTHORITY_URL:${wxUrl}
#wcc接口
WCC_SERVER_URL:${wccUrl}
#插件中心
PLUGIN_CENTER_URL:${pluginUrl}
#IP库配置
ip2region.db:${ip}
#邮件webservice
WEBSERVICE_URL:${mail}
#BS内外网替换
REPLACEMAP:${replace}
#UMP的内部调用地址
UMP_INTERFACE_URL:${umpInterface}
#UMP的地址
UMP_URL:${ump}

`
    return textarea
  }
)