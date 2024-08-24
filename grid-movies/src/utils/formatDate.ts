export const formatDate: (rawDate: string) => string = (rawDate) => {
    const dateObject = new Date(rawDate)
    const date = dateObject.getDate();
    const month = dateObject.toLocaleString('default', { month: 'long' });;
    const year = dateObject.getFullYear();

    return `${date} ${month} ${year}`
}