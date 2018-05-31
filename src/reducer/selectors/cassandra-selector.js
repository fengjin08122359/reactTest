import { createSelector } from 'reselect'

const getHost = (state) => state.host
const getCluster = (state) => state.cluster
const getDefaultKeyspace = (state) => state.defaultKeyspace
const getStrategyKeyspace = (state) => state.strategyKeyspace
const getColumnfamily = (state) => state.columnfamily
const getReplication = (state) => state.replication

export const cassandraExample = createSelector(
  [ getHost, getCluster, getDefaultKeyspace, getStrategyKeyspace, getColumnfamily, getReplication ],
  (host, cluster, defaultKeyspace, strategyKeyspace, columnfamily, replication) => {
    var textarea = "#cassandra\r\n";
    textarea += "cassandra.host:" + host + "\r\n"
    textarea += "cassandra.default.cluster.name:" + cluster + "\r\n"
    textarea += "cassandra.default.keyspace.name:" + defaultKeyspace + "\r\n"
    textarea += "cassandra.strategy.keyspace.name:" + strategyKeyspace + "\r\n"
    textarea += "cassandra.default.columnfamily.name:" + columnfamily + "\r\n"
    textarea += "cassandra.replication.factor:" + replication + "\r\n"
    textarea += "\r\n";
    return textarea
  }
)