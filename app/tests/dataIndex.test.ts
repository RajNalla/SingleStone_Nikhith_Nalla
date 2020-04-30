import { getDBInstance } from '../datasource/index';
import {initialiseDB} from '../datasource';

describe('Save contact into db',  () => {

    beforeAll(async () => {
       
        await initialiseDB('test');

    });
    it('should return true if record is saved successfully in LOKI DB', () => {
        try {
            const processedData = getDBInstance(0,'contact');
            expect(processedData).toBeInstanceOf(Object);
            expect.objectContaining({status: 'true'});
            expect(processedData.constructor.name).toBe('Promise');
        } catch (err) {
            throw err;
        }
    });
});