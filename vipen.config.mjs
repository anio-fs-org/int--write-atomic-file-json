import {generateFromTemplate} from "vipen/autogenerate"

const asyncToSync = {
	"import {writeAtomicFile} from \"@anio-fs/int--write-atomic-file\"": "import {writeAtomicFileSync} from \"@anio-fs/int--write-atomic-file\"",
	"export default async function": "export default function",
	"await writeAtomicFile(": "writeAtomicFileSync("
}

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {})
	}
}
