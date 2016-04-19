/// <reference path="typings/main/ambient/node/index.d.ts" />
import * as path from "path"
import * as parser from "raml-1-parser"

function listResources(api : parser.api10.Api) {
    api.resources().forEach(res => console.log(`Resource name: ${res.displayName()}`))
}

var fName = path.resolve(__dirname, "../specs/api.raml");
const api = <parser.api10.Api>parser.loadApiSync(fName)
console.log('api loaded')
listResources(api)
