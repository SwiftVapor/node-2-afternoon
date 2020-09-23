const express = require('express');
const mc = require (`./Controllers/messagesController`);

const app = express();

app .use(express.json());
app.use(express.static(__dirname + '/../public/build'));

let messagesUrl = '/api/messages';
app.post(messagesUrl, mc.create);
app.get(messagesUrl, mc.read);
app.put(`${messagesUrl}/:id`, mc.update);
app.delete(`${messagesUrl}/:id`, mc.delete);

let port = 3001;
app.listen (port, () => {
    console.log(`Server listening on port ${port}`)
});