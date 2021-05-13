import { IFC_Iris_Data_Sample, IFC_Summary, IFC_Summary_By_Class } from './Types'
import * as nj from "numjs"
import fs from 'fs'
import { gaussianPdf } from './helpers'


class NaiveBayesClassifier {
    dataset: IFC_Iris_Data_Sample[]
    noOfFeatures: number = 0
    noOfSamples: number = 0

    constructor() {
        this.dataset = []
    }

    loadDataset(file: string) {
        try {
            this.dataset = JSON.parse(fs.readFileSync(file).toString())
            this.noOfSamples = this.dataset.length
            if (this.dataset.length > 0) {
                this.noOfFeatures = this.dataset[0].features.length
            }
            // console.log(this.dataset);
        } catch (err) {
            console.log("Error loading dataset!!", err.message)
        }
    }

    describeData(dataset: IFC_Iris_Data_Sample[] = this.dataset, display: boolean = true): IFC_Summary {
        let summary: IFC_Summary = {
            noOfSamples: dataset.length,
            mean: [] as number[], // mean of values of each feature
            stddev: [] as number[], // standard deviation of values each feature
        }


        // Iterate over each feature
        for (let i = 0; i < this.noOfFeatures; i++) {
            let featureValues: number[] = []

            // Accumulate the values of feature i 
            for (let sample of dataset) {
                featureValues.push(sample.features[i])
            }
            // console.log(featureValues)
            let m = nj.mean(featureValues)
            let s = nj.std(featureValues)
            summary.mean.push(m)
            summary.stddev.push(s)
        }

        if (display) {
            console.log("No. of samples: ", summary.noOfSamples)
            for (let i = 0; i < this.noOfFeatures; i++) {
                console.log(`Mean of ${i}th feature's values: ${summary.mean[i]}`)
                console.log(`Standard Deviation of ${i}th feature's values: ${summary.stddev[i]}`)
            }
        }

        return summary
    }

    separateByClass() {
        let separatedByClass: { [category: string]: IFC_Iris_Data_Sample[] } = {}

        for (let dataSample of this.dataset) {
            let { category } = dataSample

            if (!(category in separatedByClass)) {
                separatedByClass[category] = []
            }

            separatedByClass[category].push(dataSample)
        }

        // console.log(separatedByClass);
        return separatedByClass
    }

    describeByClass(): IFC_Summary_By_Class {
        let separatedByClass = this.separateByClass()
        let categories = Object.keys(separatedByClass)
        let summaryByClass: IFC_Summary_By_Class = {}

        for (let category of categories) {
            let samples = separatedByClass[category]
            let summary = this.describeData(samples, false)

            summaryByClass[category] = summary
        }

        return summaryByClass
    }

    computeClassProbabilities(newSample: IFC_Iris_Data_Sample) {
        let summaryByClass: IFC_Summary_By_Class = this.describeByClass()
        let probabilities: { [category: string]: number } = {}

        let categories = Object.keys(summaryByClass)
        let noOfClasses = categories.length
        for (let category of categories) {
            probabilities[category] = summaryByClass[category].noOfSamples / this.noOfSamples
            let summary = summaryByClass[category]

            for (let i = 0; i < noOfClasses; i++) {
                let m = summary.mean[i]
                let s = summary.stddev[i]
                let p = gaussianPdf(newSample.features[i], m, s)

                probabilities[category] *= p
            }
        }

        return probabilities
    }
}

export default NaiveBayesClassifier;