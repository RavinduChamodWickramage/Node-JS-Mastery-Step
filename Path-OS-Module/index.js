// With module package
// const os = require('os')
// const path = require('path')

// WIthout module package
import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(os.platform())
console.log(os.version())

console.log(__dirname)
console.log(__filename)

console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.parse(__filename))