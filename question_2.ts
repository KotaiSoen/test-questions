let counter = function counter(int: number = 0) {
    let globalInt: number = int;

    function firstFunction() {
        console.log(globalInt);
        return globalInt;
    }

    function secondFunction() {
        globalInt += 1;
        console.log(globalInt);
    }

    return [firstFunction, secondFunction];

}

const [getA, nextA] = counter(3);

getA();

nextA();

const [getB, nextB] = counter(6);

getB();

nextB();

getA();