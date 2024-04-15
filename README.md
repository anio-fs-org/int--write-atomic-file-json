# @anio-fs/int--write-atomic-file-json

Atomically write a JSON file.

```js
import {writeAtomicFileJSON, writeAtomicFileJSONSync} from "@anio-fs/int--write-atomic-file-json"

console.log(
	await writeAtomicFileJSON("/tmp/test", "data")
)

console.log(
	writeAtomicFileJSONSync("/tmp/test", "data")
)
```
