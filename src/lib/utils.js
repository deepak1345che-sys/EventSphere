export { cn } from "cn"
import { format, formatDistanceToNow, parseISO } from "date-fns";
export function formatPrice(amount, currency = "INR") {
    const value = Number(amount);
    if (!value) return "Free";

    return new Intl.NumberFormat('en-IN', {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(value);
}

export function formatEventDate(dateInput) {
    if (!dateInput) return;
    const date = parseISO(dateInput)
    return format(date, "E, LLL dd, yyyy")
}

export function formatEventTimeRange(startDate, endDate) {
    if (!startDate || !endDate) return;
    const start = parseISO(startDate)
    const end = parseISO(endDate)

    const startTime = format(start, "h:mm a")
    const endTime = format(end, "h:mm a")
    return `${startTime} - ${endTime}`
}

export function getDaysRemaining(startDate) {
    if (!startDate) return;
    const eventDate = parseISO(startDate)
    const currentDate = new Date();

    if(currentDate > eventDate){
        return "Ended";
    }
    
    return formatDistanceToNow(eventDate , {addSuffix : true})
    



}