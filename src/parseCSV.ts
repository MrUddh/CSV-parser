import { parse } from "csv-parse";
import fs from "fs";
import { CsvRow } from "./types";

export const parseCSV = async (filePath: string): Promise<CsvRow[]> => {
  const records: CsvRow[] = [];
  const parser = fs.createReadStream(filePath).pipe(
    parse({
      delimiter: ";",
      columns: true,
      trim: true,
      skip_empty_lines: true,
      bom: true,
    })
  );

  for await (const record of parser) {
    records.push(record as unknown as CsvRow);
  }

  return records;
};
