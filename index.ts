/// <reference path="typings/main/ambient/node/index.d.ts" />
import * as path from "path"
import { loadApi, api10 as API } from "raml-1-parser"

function listMethods(resource: API.Resource) {
  resource.methods().forEach(method => console.log(`Method name: ${method.method()}`))
}

function listResources(api : API.Api) {
    api.resources().forEach(res => {
      console.log(`Resource name: ${res.displayName()}`)
      listMethods(res)
    })
}

const fName = path.resolve(__dirname, "../specs/api.raml");
const loader : Promise<API.Api> = loadApi(fName)
loader.then(api => {
  console.log('api loaded')
  listResources(api)
})
