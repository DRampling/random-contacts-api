import { handleAPIDocs } from './apiDocs'
import { handleCors, handleBodyRequestParsing, handleCompression } from './common'

export default [handleAPIDocs, handleCors, handleBodyRequestParsing, handleCompression]
