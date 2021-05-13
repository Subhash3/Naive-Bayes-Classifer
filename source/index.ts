import NaiveBayesClassifier from './naive_bayes'

let nbc = new NaiveBayesClassifier()

nbc.loadDataset('./iris.json')

for (let i = 0; i < 10; i++) {
    let j = Math.floor(Math.random() * nbc.noOfSamples)

    let prediction = nbc.predict(nbc.dataset[j])
    console.log(prediction, nbc.dataset[j].category);
}