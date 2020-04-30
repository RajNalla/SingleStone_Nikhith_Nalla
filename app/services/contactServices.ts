import {contact} from '../models/nosql/contact.model';

async function saveContact(contactDetails) {
    try {
        if (JSON.stringify(contactDetails) === '{}') {
            return {status: false, message: 'Inserting Empty Data', statusCode: 400};
        } else {
            contact().insert(contactDetails);
        }
        return {status: true, message: 'Successfully created contact', statusCode: 200};
    } catch (err) {
        throw err;
    }
}

async function getAllContacts() {
    try {
        return contact().find();
    } catch (err) {
        throw err;
    }
}

async function updateContact(contactDetails) {
    try {
        const contactInfo = await getContact(contactDetails.id, 'id');
        if (!contactInfo) {
            return {status: false, message: 'Contact not exist with the given ID', statusCode: 400};
        }
        for (const key in contactDetails) {
            if (key !== '$loki' && key !== 'id') {
                contactInfo[key] = contactDetails[key];
            }
        }
        contact().update(contactInfo);
        return {status: true, message: 'Contact updated', statusCode: 200};
    } catch (err) {
        throw err;
    }
}

async function getContact(id, fieldName = 'id') {
    try {
        const contacts = await contact().where((obj) => obj[fieldName] == id);
        if (contacts && contacts.length) {
            return contacts[0]
        }
    } catch (err) {
        throw err;
    }
}

async function deleteContact(contactId) {
    try {
        const contactInfo = await getContact(contactId);
        if (!contactInfo) {
            return {status: false, message: 'Contact not exist with the given ID', statusCode: 400};
        }
        contact().remove(contactInfo);
        return {status: true, message: 'Contact deleted', statusCode: 200};
    } catch (e) {
        throw e;
    }
}

export {saveContact, getAllContacts, getContact, deleteContact, updateContact}
