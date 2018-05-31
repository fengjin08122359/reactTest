import { createSelector } from 'reselect'

const getHost = (state) => state.host
const getPort = (state) => state.port
const getDb = (state) => state.db
const getCollection = (state) => state.collection
const getImCollection = (state) => state.imCollection
const getImGroupCollection = (state) => state.imGroupCollection
const getOpCollection = (state) => state.opCollection

export const mongoExample = createSelector(
  [ getHost, getPort, getDb, getCollection, getImCollection, getImGroupCollection, getOpCollection ],
  (host, port, db, collection, imCollection, imGroupCollection, opCollection) => {
    var textarea = "#mongo\r\n";
    textarea += "#mongodb配置\r\n"
    textarea += "mongo.host:" + host + "\r\n"
    textarea += "mongo.port:" + port + "\r\n"
    textarea += "mongo.db:" + db + "\r\n"
    textarea += "#对话记录\r\n"
    textarea += "mongo.collection:" + collection + "\r\n"
    textarea += "#IM对话记录\r\n"
    textarea += "mongo.im.collection:" + imCollection + "\r\n"
    textarea += "#IM群聊对话记录\r\n"
    textarea += "mongo.imgroup.collection:" + imGroupCollection + "\r\n"
    textarea += "#记录IM操作时间，比如座席进入/离开群聊窗口时间\r\n"
    textarea += "mongo.im.op.behavior.collection:" + opCollection + "\r\n"
    textarea += "\r\n";
    return textarea
  }
)