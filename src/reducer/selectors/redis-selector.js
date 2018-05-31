import { createSelector } from 'reselect'

const getMode = (state) => state.mode
const getSlave = (state) => state.slaveIpPort
const getMaster = (state) => state.masterIpPort
const getPwd = (state) => state.password
    
export const redisExample = createSelector(
  [ getMode, getSlave, getMaster, getPwd],
  (mode, slave, master, pwd) => {
    var textarea = "#redis\r\n";
    textarea += "#默认为SINGLE.其他：CLUSTER,ELASTICACHE,SENTINEL,MASTER_SLAVE"+ "\r\n"
    textarea += "REDIS_MODE:" + mode + "\r\n"
    textarea += "#主从模式时需要配置，多slave用“；”分割"+ "\r\n"
    textarea += "REDIS_SLAVE_IP_PORT:" + slave + "\r\n"
    textarea += "REDIS_MASTER_IP_PORT:" + master + "\r\n"
    textarea += "#redis密码"+ "\r\n"
    textarea += "REDIS_PWD:" + pwd + "\r\n"
    textarea += "REDIS_IP_PORT:" + (slave || master) + "\r\n"
    textarea += "\r\n";
    return textarea
  }
)