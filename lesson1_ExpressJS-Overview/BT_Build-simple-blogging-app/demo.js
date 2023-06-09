// let qs = require("qs")
// let queryString = require("query-string")
import * as querystring from "query-string";
let result = querystring.parse("person[name]=bobby&person[age]=3")
console.log(result) // { person: { name: 'bobby', age: '3' } }


