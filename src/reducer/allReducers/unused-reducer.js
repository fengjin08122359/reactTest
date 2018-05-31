import { unusedExample } from "../selectors/unused-selector.js"

export default function unused(state = {
  example: ""
},action){
  return Object.assign({}, state, {
    example: unusedExample(state)
  })
}


