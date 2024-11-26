import { Employee } from "../functions/person";
import { PersonFactory } from "../functions/person_factory";

var factory = new PersonFactory();

describe('Factory of Person', () => {
    it('not passing the parameter should return null', () => {
        expect(factory.getPerson(null)).toBeNull();
    })
    it('passing the invalid parameter must return null', () => {
        expect(factory.getPerson('employee')).toBeNull();
    })
})