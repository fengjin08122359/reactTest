import { createSelector } from 'reselect'

const getPath = (state) => state.path
const getProduction = (state) => state.production
const getPassword = (state) => state.password

export const appExample = createSelector(
  [ getPath, getProduction, getPassword ],
  (path, production, password) => {
    var textarea = "#app\r\n";
    textarea += "#app证书路径\r\n"
    textarea += "app.p12.file.path:" + path + "\r\n"
    textarea += "#区分是否生产配置	exp:true,false\r\n"
    textarea += "app.production:" + production + "\r\n"
    textarea += "#证书密码\r\n"
    textarea += "app.p12.file.password:" + password + "\r\n"
    textarea += "\r\n";
    return textarea
  }
)