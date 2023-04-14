import moment from "moment";

export function fullDateConvertor(date: Date) {
    return moment(date).format("LL");
}

export function getDayDiff(date: Date) {
    const now = new Date()
    var mydate = new Date(date);
    const difference = now.getTime() - mydate.getTime()
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}

export function getFullOfDateUntilNow(date: Date) {
    const now = new Date()
    var mydate = new Date(date);
    const difference = now.getTime() - mydate.getTime()
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    const monthDiff = now.getMonth() - mydate.getMonth();
    const yearDiff = now.getFullYear() - mydate.getFullYear();
    let TotalMonth = monthDiff + yearDiff * 12;
    let TotalWeek = Math.round((difference) / (1000 * 60 * 60 * 24 * 7));
    return `${TotalMonth} month or ${TotalWeek} week or ${TotalDays} days`;
}