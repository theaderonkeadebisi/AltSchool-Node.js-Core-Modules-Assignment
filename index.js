const path = require('path');
const fs = require('fs');

//Create directory named students
// fs.mkdir('Students', (err) => {
//     if (err) throw err;
//     console.log('Directory created successfully');
// });

//Create a file named user.js in Students dir
// fs.writeFile(path.join(__dirname, 'Students', 'user.js'), '', (err) => {
//     if (err) throw err;
//     console.log('File created successfully');
// });

// Update the Students directory to “Names”
// fs.rename('Students', 'Names', (err) => {
//     if (err) throw err;
//     console.log('Directory renamed successfully');
// });

// Add your name as content to the file user.js
// fs.writeFile(path.join(__dirname, 'Names', 'user.js'), 'Aderonke Adebisi', (err) => {
//     if (err) throw err;
//     console.log('Content added successfully');
// });

//Update the file and add your age, sex, nationality, phone number and any other information about yourself
// fs.appendFile(path.join(__dirname, 'Names', 'user.js'), '\nI am a 20 years old Nigerian female. \nYou can contact me on 12345678910.', (err) => {
//     if (err) throw err;
//     console.log('Content appended successfully');
// });

// Update the file user.js to {your_name}.js eg daniel_adesoji.js
// fs.rename(path.join(__dirname, 'Names', 'user.js'), path.join(__dirname, 'Names', 'aderonke_adebisi.js'), (err) => {
//     if (err) throw err;
//     console.log('File renamed successfully');
// });

//Read the contents from {your_name}.js.
// fs.readFile(path.join(__dirname, 'Names', 'aderonke_adebisi.js'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Delete the file {your_name}.js
// fs.rm(path.join(__dirname, 'Names', 'aderonke_adebisi.js'), (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully');
// });

// Delete the directory “Names”
// fs.rmdir(path.join(__dirname, 'Names'), (err) => {
//     if (err) throw err;
//     console.log('Directory deleted successfully');
// });