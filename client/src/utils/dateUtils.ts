import type { DateRange } from "react-day-picker";

export const formatRelativeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const diffInHours = Math.floor(diffInMs / 3600000);
  const diffInDays = Math.floor(diffInMs / 86400000);

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60)
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  if (diffInDays < 7)
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }
  const months = Math.floor(diffInDays / 30);
  return `${months} month${months > 1 ? "s" : ""} ago`;
};

export const getDateRangeLabel = ({ from, to }: DateRange) => {
  if (!from) {
    return "";
  }

  const startDate = new Date(from);

  const monthName = startDate.toLocaleDateString("en-US", { month: "long" });
  const startDay = startDate.getDate();
  const year = startDate.getFullYear();

  if (!to) {
    return `${monthName} ${startDay}${getDaySuffix(startDay)} ${year}`;
  }

  const endDate = new Date(to);
  const endDay = endDate.getDate();

  return `${monthName} ${startDay}-${endDay}${getDaySuffix(endDay)} ${year}`;
};

export const getDaySuffix = (day: number) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
