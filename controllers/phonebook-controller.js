const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getAllContacts();
    const model = {
      contacts: contacts
    };

    res.render('index', model);
  },
  addPhonebookPost:(req, res) => {
    const newContact = new Contact(req.body.name, req.body.number);

    phonebook.addContact(newContact);

    res.redirect('/');
  }
}