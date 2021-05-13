
const { sqrt, PI, exp, pow } = Math

export const gaussianPdf = (x: number, mean: number, stddev: number) => {
    return (1 / (stddev * (sqrt(2 * PI)))) * (exp((-1 / 2) * pow(((x - mean) / (stddev)), 2)))
}