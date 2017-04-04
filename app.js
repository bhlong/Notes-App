const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Yargs: ', argv);

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note added" );
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("Note with same title already exists");
    }
} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}
