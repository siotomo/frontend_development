import * as obj from './esmodule/export.js'
import { createRequire } from "module";
const require = createRequire(import.meta.url)
const commonObj = require('./commonjs/export.cjs');


console.log(obj.default.name);
console.log(commonObj);