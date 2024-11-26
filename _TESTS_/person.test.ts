import { Person } from '../functions/person';

var Paulo = new Person(
    'Paulo Rodrigues', 
    'paulorodrigues@gmail.com', 
    new Date('1990-01-01')
);


var objectTest = new Person(
    'Paulo Rodrigues', 
    'paulorodrigues@gmail.com', 
    new Date('1990-01-01')
);

it('should check if the properties of object Paulo is equal the properties of objetc objectTest', () => {
    expect(Paulo).toEqual(objectTest);
})

