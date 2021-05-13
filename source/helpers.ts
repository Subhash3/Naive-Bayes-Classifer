
const { sqrt, PI, exp, pow } = Math

export const gaussianPdf = (x: number, mean: number, stddev: number) => {
    return (1 / (stddev * (sqrt(2 * PI)))) * (exp((-1 / 2) * pow(((x - mean) / (stddev)), 2)))
}

export const customArgmax = (data: { [key: string]: number }) => {
    let maxKey: string | null = null

    let maxValue: number | null = null
    Object.keys(data).forEach(key => {
        if (maxKey == null) maxKey = key

        if (maxValue == null || maxValue < data[key]) {
            maxValue = data[key]
            maxKey = key
        }
    })

    return maxKey
}