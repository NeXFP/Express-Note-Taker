const fs = require('fs');
const path = require('path');


function createNotes (body, notesArr) {
    notesArr.push(body);

    fs.writeFileSync(
        path.join(__dirname, "../data/db.json"),
        JSON.stringify({notesArr}, null, 2)
    );
    return body;
}

module.exports = createNotes;