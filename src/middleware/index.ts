import { handleAPIDocs } from './apiDocs'
import { handleCors, handleBodyRequestParsing, handleCompression } from './common'
import { simulateInstability } from './simulateInstability'

export default [handleAPIDocs, handleCors, handleBodyRequestParsing, handleCompression, simulateInstability]
