import { createSelector } from 'reselect'

const getHttp = (state) => state.httpselect
const getDomain = (state) => state.domain
const getInside = (state) => state.inside
const getOutside = (state) => state.outside
const uccUrls = [
  {
    pre:"OPERATOR_URL",
    after:"/plugins/echat/userservice",
  },
  {
    pre:"BROADCAST",
    after:"/plugins/broadcast/service",
  },
  {
    pre:"ONLINE_STATUS",
    after:"/plugins/online/status",
  },
  {
    pre:"SYSTEM_NOTIFIY",
    after:"/plugins/systemNotifiy/service",
  },
]

export const umpExample = createSelector(
  [ getHttp, getDomain, getInside, getOutside],
  (http, domain, inside, outside ) => {
    var durl = "";
    var textarea = "#ump\r\n";
    if ( http ) {
      durl = 'https'+'://'+domain
    } else {
      durl = 'http'+'://'+domain
    }
    for (let i in uccUrls) {
      if (uccUrls[i].explain) {
        textarea += "# " +uccUrls[i].explain + "\r\n"
      }
      textarea += uccUrls[i].pre + ":" + durl + uccUrls[i].after + "\r\n"
    }
    textarea += "\r\n"
    textarea += "OPENFIREMAP:"+ outside +"@" + inside + "\r\n"
    textarea += "\r\n";
    return textarea
  }
)