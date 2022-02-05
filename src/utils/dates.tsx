export function parseTimeToDate(time: number) : string {
    return new Date(time).toDateString();
}