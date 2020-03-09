const contactList = [];

module.exports = {
	getAllContacts() {
		return contactList;
	},

	addContact(contact) {
		contactList.push(contact);
	}
}