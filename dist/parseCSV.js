import { parse } from "csv-parse";
import fs from "fs";
export const parseCSV = async (filePath) => {
    const records = [];
    const parser = fs.createReadStream(filePath).pipe(parse({
        delimiter: ";",
        columns: true,
        trim: true,
        skip_empty_lines: true,
        bom: true,
    }));
    for await (const record of parser) {
        records.push(record);
    }
    return records;
};
