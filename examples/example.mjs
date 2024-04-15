import {writeAtomicFileJSON, writeAtomicFileJSONSync} from "../src/index.mjs"

console.log(
	await writeAtomicFileJSON("/tmp/test", "data")
)

console.log(
	writeAtomicFileJSONSync("/tmp/test", "data")
)
