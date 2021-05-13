import NaiveBayesClassifier from './naive_bayes'

let nbc = new NaiveBayesClassifier()

nbc.loadDataset('./iris.json')

for (let i = 0; i < 2; i++) {
    let j = Math.floor(Math.random() * nbc.noOfSamples)

    let probabilities = nbc.computeClassProbabilities(nbc.dataset[j])
    console.log(probabilities, nbc.dataset[j].category);
}