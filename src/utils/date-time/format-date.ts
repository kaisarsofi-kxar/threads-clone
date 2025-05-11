import { formatDistanceToNow } from "date-fns";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatRelativeTime(date: string | Date): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function timeToLocaleDateString(date: string | Date): string {
  return new Date(date).toLocaleDateString();
}

export function getRelativeTimeFromNow(
  date: string | Date,
  options: { withoutSuffix?: boolean } = {}
): string {
  const { withoutSuffix = false } = options;
  return dayjs(date).fromNow(withoutSuffix);
}
