
const fetch = require("node-fetch");

async function getBalance(account) {

    let response = await fetch(`http://localhost:3000/account/${account}`);

    if( response.ok ) {
        return (await response.json()).balance };

    return -1;

}
  
module.exports = {
    getBalance
};

/* Funciones de comparación
########################################################## 

// For strings
expect('Christoph').toMatch(/stop/);

// For limits
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);

// toBe and toEqual are equivalent for numbers
expect(value).toBe(4);
expect(value).toEqual(4);

// for floating numbers
expect(value).toBeCloseTo(0.3);*/
