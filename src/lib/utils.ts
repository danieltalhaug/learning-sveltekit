import type { DateStyle } from '$lib/types';

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'nb') {
    const formatter = new Intl.DateTimeFormat(locales, {
        dateStyle
    });

    return formatter.format(new Date(date));
}