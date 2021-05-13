import NaiveBayesClassifier from './naive_bayes'
import fs from 'fs'
import { shuffleArray, splitArr } from './helpers'
import { IFC_Iris_Data_Sample } from './Types'

let classifier = new NaiveBayesClassifier()

let dataset: IFC_Iris_Data_Sample[] = JSON.parse(fs.readFileSync('./iris.json').toString())
dataset = shuffleArray(dataset)
let training, testing: IFC_Iris_Data_Sample[]
[training, testing] = splitArr(dataset, 2 / 3)

console.log(training.length, testing.length);

classifier.loadDataset(training)

for (let sample of testing) {
    let prediction = classifier.predict(sample)
    console.log(prediction, sample.category);
}

// classifier.describeByClass(true)