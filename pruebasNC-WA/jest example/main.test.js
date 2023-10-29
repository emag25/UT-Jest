
const getBalance = require('./super-duper-important-thing').getBalance;

test('Get account balance', async () => {

  expect(await getBalance(1022)).toBeGreaterThanOrEqual(0);

});


/*

Estructura de un test:

describe(nombre, funcion): Agrupa pruebas relacionadas.
it o test(nombre, funcion): Prueba individual.
expect(valor): Valor a evaluar.

Ejemplo:

describe('Testing guardarUsuario ', () => {
  
    // Caso de exito
    it('Debe devolver un objeto con los atributos nombre y apellido', () => {
        expect(guardarUsuario('Juan', 'Perez')).toHaveProperty('nombre', 'apellido');
    });

    // Caso de error 1
    it('Debe devolver null si no se le envia un nombre y apellido', () => {
        expect(guardarUsuario()).toBeNull();
    });

});

toBeLessThan: El valor es menor que.
toBeLessThanOrEqual: El valor es menor o igual que.
toBeGreaterThanOrEqual: El valor es mayor o igual que.
toBeGreaterThan: El valor es mayor que.

toBeTruthy: El valor es verdadero.
toBeFalsy: El valor es falso.
toBeUndefined: El valor es ‘undefined’
toBeNull: El valor es ‘null’

toContain: Contiene el elemento dentro del array
toHaveLength: Comprueba la longitud.
toBe: Usado para comparar valores primitivos
toEqual: Usado para comparar recursívamente todas las propiedades de un objetos, también conocido
toMatch: Comprueba que un texto coincide con una expresión regular

toHaveBeenCalled: Verifica si la función fue llamada
toHaveBeenCalledWith: Verifica si la función fue llamada con ciertos parámetros
toHaveBeenCalledTimes: Verifica cuantas veces fue llamada la función
toHaveReturned: Verifica si la función retornó un valor
toHaveReturnedTimes: Verifica cuantas veces la función retornó un valor
toHaveReturnedWith: Verifica si la función retornó un valor específico


afterEach(): Después de cada prueba.
afterAll(): Después de todas las pruebas.
beforeEach(): Antes de cada prueba.
beforeAll(): Antes de todas las pruebas.

*/