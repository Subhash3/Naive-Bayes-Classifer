import NaiveBayesClassifier from './naive_bayes'
import fs from 'fs'
import { shuffleArray } from './helpers'
import { IFC_Iris_Data_Sample } from './Types'

let classifier = new NaiveBayesClassifier()

let dataset: IFC_Iris_Data_Sample[] = JSON.parse(fs.readFileSync('./iris.json').toString())

console.log(dataset[10]);
dataset = shuffleArray(dataset)
console.log(dataset[10]);

classifier.loadDataset(dataset)

for (let i = 0; i < 10; i++) {
    let j = Math.floor(Math.random() * classifier.noOfSamples)

    let prediction = classifier.predict(classifier.dataset[j])
    console.log(prediction, classifier.dataset[j].category);
}

// classifier.describeByClass(true)