function mergeObjects(...objects) {
    const result = {};

    for (const obj of objects) {
      
        for (const key in obj) {
          
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              
                if (!result.hasOwnProperty(key)) {
                    result[key] = obj[key];
                }
            }
        }
    }
    return result;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

const result = mergeObjects(obj1, obj2, obj3);
console.log(result);
