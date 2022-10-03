const cs = {
    DELIMITER: '=',
    DEFAULT_INPUTS: ['inputFolder=jsonFiles', 'outputFolder=schemas', 'fileType=ts'],
    JS_IMPORT: 'const Joi = require(\'joi\');',
    TS_IMPORT: 'import { Joi } from \'joi\';',
    INPUT_FOLDER_NAME: 'jsonFiles',
    OUTPUT_FOLDER_NAME: 'schemas',
    EXTENSION: {
        JS: 'js',
        TS: 'ts'
    }
};

module.exports = cs;