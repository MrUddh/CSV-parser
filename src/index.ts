// index.ts
import fs from "fs"; // Import the fs module
import {
  calculateAverageExposures,
  countAnswerOccurrences,
  countResponsesByHour,
  findMinMaxTimeInView,
  findPeakResponseHour,
} from "./dataAnalysis.js";
import { parseCSV } from "./parseCSV.js";
import { convertHourToReadableFormat } from "./utilities.js";

const csvFilePath = "./resps.csv";
const outputFilePath = "./analysisOutput.txt";

(async () => {
  try {
    const records = await parseCSV(csvFilePath);
    let output = `Average Number of Exposures: ${calculateAverageExposures(
      records
    )}\n`;
    output += `Min and Max Time in View: ${JSON.stringify(
      findMinMaxTimeInView(records)
    )}\n`;
    output += `Answer Occurrences: ${JSON.stringify(
      countAnswerOccurrences(records)
    )}\n`;

    const hourCounts = countResponsesByHour(records);
    const peakHour = findPeakResponseHour(hourCounts);
    output += `Peak Response Hour: ${convertHourToReadableFormat(peakHour)}\n`;

    console.log(output);
    fs.writeFileSync(outputFilePath, output);
  } catch (error) {
    console.error("Failed to process CSV data:", error);
  }
})().catch(console.error);
