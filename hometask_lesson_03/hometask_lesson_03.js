const fs = require('fs-extra');

fs.ensureDirSync ('folder_1'); // 1st folder creation

fs.outputFileSync ('folder_1/file.txt', 'some data'); // file creation with some data

fs.ensureDirSync ('folder_2'); // 2nd folder creation

fs.moveSync ('folder_1/file.txt', 'folder_2/file.txt'); // move file from 1st folder to 2nd one

fs.ensureDirSync ('folder_3'); // 3rd folder creation

fs.copySync('folder_2/file.txt', 'folder_3/file.txt'); // file copied from 2nd folder to the 3rd

fs.removeSync('folder_2/file.txt'); // deleting file from 2nd folder
fs.removeSync('folder_3/file.txt'); // deleting file from 3rd folder

fs.removeSync('folder_1'); // removing 1st folder
fs.removeSync('folder_2'); // removing 2nd folder
fs.removeSync('folder_3'); // removing 3rd folder