import { saveContact, getAllContacts, updateContact, deleteContact } from '../services/contactServices';
import {initialiseDB} from '../datasource';
import { save, update } from './mockData.mock';

describe('Save contact into db',  () => {

    beforeAll(async () => {
       
        await initialiseDB('test');

    });
    it('should return true if record is saved successfully in LOKI DB', () => {
        try {
            const processedData = saveContact(save);
            expect(processedData).toBeInstanceOf(Object);
            expect.objectContaining({status: 'true'});
            expect(processedData.constructor.name).toBe('Promise');
        } catch (err) {
            throw err;
        }
    });
    it('should return true if record is validated successfully', () => {
        try {
            const processedObject = getAllContacts();
            expect(processedObject).toBeInstanceOf(Object);
            expect(processedObject.constructor.name).toBe('Promise');
        } catch (err) {
            throw err;
        }
    });
    it('should return true if record is validated successfully', () => {
        try {
            const processedObject = updateContact(update);
            expect(processedObject).toBeInstanceOf(Object);
            expect(processedObject.constructor.name).toBe('Promise');
        } catch (err) {
            throw err;
        }
    });

    it('should return true if record is validated successfully', () => {
        try {
            const processedObject = deleteContact(1);
            expect(processedObject).toBeInstanceOf(Object);
            expect.objectContaining({status: 'true'});
            expect(processedObject.constructor.name).toBe('Promise');
        } catch (err) {
            throw err;
        }
    });
});