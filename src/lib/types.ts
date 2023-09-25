export type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export interface Post {
    title: string,
    description: string,
    date: string,
    slug: string
}