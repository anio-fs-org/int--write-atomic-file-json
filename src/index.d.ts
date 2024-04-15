declare type WriteAtomicFileJSONOptions = {
	/**
	 * @brief Create parent directories.
	 * @description
	 * Whether to create non-existing directories in the path.
	 * The default is `false`.
	 */
	create_parents? : boolean;

	/**
	 * @brief Produce indentation.
	 * @description
	 * Whether to make the resulting JSON file human readable or not.
	 */
	pretty? : boolean;

	/**
	 * @brief End of file ending.
	 * @description
	 * This option controls whether a new line is appended at the
	 * end of the file or not. The default is `false`.
	 */
	disable_new_line_at_eof? : boolean;
};

/**
 * @brief Asynchronously and atomically create a json file
 * @description
 * Serializes the data `data` into the JSON format and asynchronously
 * and atomically writes it to `file_path`.
 * If `options.create_parents` is set, directories in the path will be created
 * if they don't exist.
 * If `options.pretty` is set, the data is serialized in a human readable format.
 * @param file_path File path to be written.
 * @param data Data to be serialized.
 * @param options Optional options.
 * @return
 * Returns the number of bytes written.
 */
export function writeAtomicFileJSON(
	file_path : string, data : any, options? : WriteAtomicFileJSONOptions
) : Promise<number>

/**
 * @brief Synchronously and atomically create a json file
 * @description
 * Serializes the data `data` into the JSON format and synchronously
 * and atomically writes it to `file_path`.
 * If `options.create_parents` is set, directories in the path will be created
 * if they don't exist.
 * If `options.pretty` is set, the data is serialized in a human readable format.
 * @param file_path File path to be written.
 * @param data Data to be serialized.
 * @param options Optional options.
 * @return
 * Returns the number of bytes written.
 */
export function writeAtomicFileJSONSync(
	file_path : string, data : any, options? : WriteAtomicFileJSONOptions
) : number
