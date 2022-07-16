export const dateStringToDate = (dateString: string): Date => {
    const dateParsts = dateString
        .split('/').map((value: string): number  => {
            return parseInt(value)
        })
    
    return new Date(dateParsts[2], dateParsts[1] - 1, dateParsts[0])
}