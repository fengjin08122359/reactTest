import { createSelector } from 'reselect'

const getUrl = (state) => state.url
const getEnable = (state) => state.enable

export const qaExample = createSelector(
  [ getUrl, getEnable ],
  (url, enable) => {
    var textarea = "#qa\r\n";
    textarea += "#智能问答更新接口\r\n"
    textarea += "QASYSTEMUPDATEURL:" + url + "\r\n"
    textarea += "export_unknown_knowledge_point:" + url + "/resteasy/Knowledge/exportUnknown?companyPk=\r\n"
    textarea += "export_total_knowledge_point:" + url + "/resteasy/Knowledge/export?companyPk=\r\n"
    textarea += "import_unknown_knowledge_point:" + url + "/resteasy/Knowledge/report?companyPk=\r\n"
    textarea += "ReportQASystemController_report:" + url + "/resteasy/Knowledge/report?companyPk\r\n"
    textarea += "ReportQASystemController_reportTopTen:" + url + "/resteasy/Knowledge/salient?companyPk=\r\n"
    textarea += "#是否启用智能推荐\r\n"
    textarea += "IS_ENABLE_QA:" + enable + "\r\n"
    textarea += "\r\n";
    return textarea
  }
)