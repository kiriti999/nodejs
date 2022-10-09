/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Wraps a string around each character/letter
 *
 * @param {string} str The string to transform
 * @param {string} tmpl Template that gets interpolated
 * @returns {string} The given input as splitted by chars/letters
 */
function wrapChars(str, tmpl) {
  return str.replace(/\w/g, tmpl || "<span>$&</span>");
}

/**
 * Wraps a string around each word
 *
 * @param {string} str The string to transform
 * @param {string} tmpl Template that gets interpolated
 * @returns {string} The given input splitted by words
 */
function wrapWords(str, tmpl) {
  return str.replace(/\w+/g, tmpl || "<span>$&</span>");
}

/**
 * Wraps a string around each line
 *
 * @param {string} str The string to transform
 * @param {string} tmpl Template that gets interpolated
 * @returns {string} The given input splitted by lines
 */
function wrapLines(str, tmpl) {
  return str.replace(/.+$/gm, tmpl || "<span>$&</span>");
}