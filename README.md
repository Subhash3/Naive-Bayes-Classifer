# Naive Bayes Classifer


    Just trying to "learn naive bayes classifer"

![alt text](https://github.com/Subhash3/Naive-Bayes-Classifer/blob/main/math.png?raw=true)

### API
```ts
    /* Loads the dataset from a json file of data samples*/
    loadDatasetFromFile(file: string);

    /* Assign the dataset to be an array of pre-loaded samples*/
    loadDataset(data: IFC_Iris_Data_Sample[]);

    /* Computes the mean and standard deviation of  different features of each category */
    train();

    /* Computes the probability of each class given a new data sample by using bayes theorem */
    predict(newSample: IFC_Iris_Data_Sample, returnProbabilities: boolean = false);
```

### Dataset format
* A dataset is a list of data samples of the following interface
```ts
interface IFC_Iris_Data_Sample {
    features: number[],
    category: string
}

Eg:
dataset = [
    {
        "features": [
            3.393533211,
            2.331273381
        ],
        "category": 0
    },
    {
        "features": [
            3.110073483,
            1.781539638
        ],
        "category": 0
    }
]
```

### TODO
    - [ ] Document the code nicely in tsdoc format.
    - [ ] Use a matrix of size mxn where m is the no.of categories and n is the number of features such that the location [i][j] contains the mean and standard deviation of ith feature, given class = j.
    - [ ] Extend the classifier to text classification.