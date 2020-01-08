function fetchRandomNumbers() {
    console.log('Fetching number...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            console.log('Received random number:', randomNum);
            resolve(randomNum);
        }, (Math.floor(Math.random() * 5) + 1) * 1000);
    });
}


function fetchRandomString() {
    console.log('Fetching string...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for (let i = 0; i < 5; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            console.log('Received random string:', result);
            resolve(result);
        }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}


// TASK 1

fetchRandomNumbers().then((randomNum) => {
    console.log(randomNum)
});

fetchRandomString().then((randomString) => {
    console.log(randomString)
});

// TASK 2

async function task2() {
    let sum = await fetchRandomNumbers().then((randomNum) => {
        return randomNum
    });
    const randomNumber = await fetchRandomNumbers().then((randomNum) => {
        return randomNum
    });
    sum += randomNumber
    console.log(`Sum of two random number is ${sum}`)
}

task2()

// TASK 3

async function task3() {
    const randomNumber = await fetchRandomNumbers().then((randomNum) => {
        return randomNum;
    })
    const randomString = await fetchRandomString().then((randomStr) => {
        return randomStr;
    })
    console.log(`Concatenated String is ${randomNumber}${randomString}`)
}

task3()

// TASK 4

async function task4() {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        let randomNumber = await fetchRandomNumbers().then((randomNum) => {
            return randomNum;
        })
        sum += randomNumber;
    }
    console.log(`Total sum is ${sum}`)
}

task4()


// fetchRandomNumbers((randomNum) => console.log(randomNum))
// fetchRandomString((randomStr) => console.log(randomStr))