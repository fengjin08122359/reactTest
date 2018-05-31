import { createSelector } from 'reselect'

const getRootPath = (state) => state.rootPath
const getDomain = (state) => state.domain
const getPrePath = (state) => state.prePath
const getCodeImgFile = (state) => state.codeImgFile
const getFaceDir = (state) => state.faceDir

export const imageExample = createSelector(
  [ getRootPath, getDomain, getPrePath, getCodeImgFile, getFaceDir ],
  (rootPath, domain, prePath, codeImgFile, faceDir) => {
    var textarea = "#img\r\n";
    textarea += "ROOT_UPLOAD_PATH:" + rootPath + "\r\n"
    textarea += "PREFIX_UPLOAD_PATH:" + prePath + "\r\n"
    textarea += "MAPPING_ROOT_PATH:" + domain + "\r\n"
    textarea += "CODE_DOMAIN:" + rootPath + "\r\n"
    textarea += "CODE_IMG_DEPLOY_NAME:" + prePath + "\r\n"
    textarea += "CODE_IMG_FILE:" + codeImgFile + "\r\n"
    textarea += "#对话记录表情\r\n"
    textarea += "FACEIMAGEURL:" + faceDir + "\r\n"
    textarea += "\r\n";
    return textarea
  }
)