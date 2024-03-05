import { convertHourToReadableFormat } from "./utilities.js";
export const calculateAverageExposures = (records) => {
    if (records.length === 0)
        return 0; // Prevent division by zero
    const totalExposures = records.reduce((acc, curr) => acc + parseFloat(curr.Exposures.toString()), 0);
    return totalExposures / records.length;
};
export const findMinMaxTimeInView = (records) => {
    const timesInView = records.map((record) => record.TimeInView);
    return {
        min: Math.min(...timesInView),
        max: Math.max(...timesInView),
    };
};
export const countAnswerOccurrences = (records) => {
    const answerCounts = {};
    records.forEach((record) => {
        answerCounts[record.answer] = (answerCounts[record.answer] || 0) + 1;
    });
    return answerCounts;
};
export const countResponsesByHour = (records) => {
    const hourCounts = {};
    records.forEach((record) => {
        // Extract only the hour from the timestamp
        const hour = record.TimeStamp.slice(-2);
        // Increment the count for this hour
        hourCounts[hour] = (hourCounts[hour] || 0) + 1;
    });
    return hourCounts;
};
export const findPeakResponseHour = (hourCounts) => {
    let maxCount = 0;
    let peakHour = "";
    Object.entries(hourCounts).forEach(([hour, count]) => {
        if (count > maxCount) {
            maxCount = count;
            peakHour = hour;
        }
    });
    return peakHour ? convertHourToReadableFormat(peakHour) : "No data available";
};
