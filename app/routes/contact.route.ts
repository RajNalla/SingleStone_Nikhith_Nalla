import {
    deleteContact,
    getAllContacts,
    getContact,
    saveContact,
    updateContact
} from "../services/contactServices";
import * as express from 'express';

let router = express.Router();

router.post('', async (req, res) => {

    try {
        if (req.body) {
            const data = req.body;
            const response = await saveContact(data);
            res.status(response.statusCode).send({ ...response });
        } else {
            res.sendStatus(400);
        }
    } catch (e) {
        console.log('error', `/contact POST API error - ${e.message}`);
        res.status(500).send({ status: '500', message: `Ooops! Something went wrong` });
    }

});

router.get('/:id', async (req, res) => {
    try {
        const contactId = req.params.id;
        const data = await getContact(contactId);
        if (!data) {
            res.status(400).send({ message: "Contact not exist with the given ID" });
        } else {
            res.status(200).send(data);
        }
    } catch (err) {
        res.send({ status: 500, message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const response = await deleteContact(req.params.id);
        res.status(response.statusCode).send({ ...response });
    } catch (err) {
        res.status(500).send({ status: 500, message: err.message });
    }
});

router.get('', async (req, res) => {
    try {
        const contacts = await getAllContacts();
        res.status(200).send({ data: { contacts } })
    } catch (err) {
        res.status(500).send({ status: 500, message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (req.body) {
            const data = req.body;
            if (req.params.id) {
                data.id = req.params.id;
            }
            const response = await updateContact(data);
            res.status(response.statusCode).send({ ...response });
        } else {
            res.sendStatus(400);
        }
    } catch (err) {
        res.status(500).send({ status: 500, message: err.message });
    }
});

export = router;
