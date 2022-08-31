export const carReducer = (acc, curr) => {
    const car = {
        brand: curr.brand,
        models: curr.models,
        quantityModels: curr.models.length,
    };

    return [...acc, car];
};

export const first = (arr, numb) => {
    if (!arr.length) return undefined;

    return arr.splice(0, numb);
};

export const last = (arr, numb) => {
    if (!arr.length) return undefined;
    return arr.slice(-(numb + 1))
};

export const filterItems = (query, arr) => {
    return arr.find(arr => arr.brand.toLowerCase() === query.toLowerCase());
};

export const empates = (arr) => {
    const quant = arr.map(quant => quant.quantityModels)
    return quant.indexOf()


    // var haDuplicados = function(quant) {
    //     var i;
    //     for(i = 0; i < arr.length; i++) {
    //         if(arr.indexOf(arr[i]) != i) {
    //             return true;
    //         };
    //     }
    //     return false;
    // }
}


export const buildRecords = (data) => data.reduce(carReducer, []);