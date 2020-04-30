import {db} from '../../datasource';

let contactDB;

function contact() {
    if (!contactDB) {
        contactDB = db.addCollection('contact');
        contactDB.on('insert', function (input) {
            input.id = input.$loki;
        });
    }
    return contactDB;
}

// return the model
export {contact};
