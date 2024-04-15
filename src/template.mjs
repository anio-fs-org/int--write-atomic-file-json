import {writeAtomicFile} from "@anio-fs/int--write-atomic-file"

export default async function(file_path, data, options = {}) {
	let data_str = options.pretty === true ? JSON.stringify(data, null, 4) : JSON.stringify(data)

	//
	// in unix it is common, if not required, that text files
	// end with a new line
	//
	if (options.disable_new_line_at_eof !== true) {
		data_str += "\n"
	}

	return await writeAtomicFile(file_path, data_str, {
		create_parents: options.create_parents === true
	})
}
