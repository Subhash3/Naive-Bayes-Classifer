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

    /* Loads the dataset from an array(array(strings)) 
        Something like this
        [
            ["1.0", "3.2", "6.9",    "4.20"],
            ["1.0", "3.2", "6.9",    "4.20"],
            ["1.0", "3.2", "6.9",    "4.20"],
            <--   Features   --> <- Category ->
        ]
    */
    loadDatasetFromArr(data: (string[])[]);
```


### How to run?
```bash
    # Install npm dependencies
    git clone https://github.com/Subhash3/Naive-Bayes-Classifier
    cd Naive-Bayes-Classifier
    npm install

    # Start
    ts-node source/index.js

    # Build: Compile ts to generate js files
    npm run build # this creates a build/ folder with all the compiled (js) code
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
    - [x] Loss Computation.
    - [ ] Apply log to bayes chain to get rid of overflow errors.
    - [ ] Document the code nicely in tsdoc format.
    - [ ] Use a matrix of size mxn where m is the no.of categories and n is the number of features such that the location [i][j] contains the mean and standard deviation of ith feature, given class = j.
    - [ ] Extend the classifier to text classification.

#### Feel free to contribute and open any issues.