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

export const buildRecords = (data) => data.reduce(carReducer, []);
