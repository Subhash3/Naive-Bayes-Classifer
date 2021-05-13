import NaiveBayesClassifier from './naive_bayes'
import fs from 'fs'
import { shuffleArray, splitArr } from './helpers'
import { IFC_Iris_Data_Sample } from './Types'
import * as nj from 'numjs'

let classifier = new NaiveBayesClassifier()

let dataset: IFC_Iris_Data_Sample[] = JSON.parse(fs.readFileSync('./iris.json').toString())

dataset = shuffleArray(dataset)
let training, testing: IFC_Iris_Data_Sample[]
[training, testing] = splitArr(dataset, 4 / 5)

classifier.loadDataset(training)
let loss = classifier.train()

for (let sample of testing) {
    let prediction = classifier.predict(sample, true)
    console.log(prediction[0])
}

console.log({ loss })