const path = require('path');
const fse = require('fs-extra');

const BUILD_DIR = path.join(__dirname, './build');
const PUBLIC_DIR = path.join(__dirname, '../main/resources/public');

fse.copySync(BUILD_DIR , PUBLIC_DIR);