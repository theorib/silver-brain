const str1 = 'Theo Ribeiro';
const str2 = '    Camera   ';
const str3 = '1234567890';
/*
 *********************
 * Return a Modified String?
 *  Modify the Whole String
 */

// Converts all the alphabetic characters in a string to lowercase.
// Returns a string
console.log(`toLowerCase`, str1.toLowerCase());

// Converts all the alphabetic characters in a string to uppercase.
// Returns a string
console.log(`toUpperCase`, str1.toUpperCase());

// Removes the leading and trailing white space and line terminator characters from a string.
// Returns a string
console.log(`trim`, str2.trim());

// Removes the leading white space and line terminator characters from a string.
// Returns a string
console.log(`trimStart`, str2.trimStart());

// Removes the trailing white space and line terminator characters from a string.
// Returns a string
console.log(`trimEnd`, str2.trimEnd());

// Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
// First argument is how many paddings to insert
// Second argument is what string to use to pad
// Returns a string
console.log(`padStart`, str1.padStart(20, '*'));

// Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
// First argument is how many paddings to insert
// Second argument is what string to use to pad
// Returns a string
console.log(`padEnd`, str1.padEnd(20, '*'));

/*
 *********************
 * Return a Modified String?
 *  Replace Values
 */

// Replaces the first occurance of text in a string, using a regular expression or search string.
// First argument is what to search for
// Second argument is what to replace it with
// Returns a string
console.log(`replace`, str1.replace('Theo', 'Canis'));
console.log(`replace`, str1.replace('i', '***'));

// Replaces all occurences of a search expression with a string
// First argument is what to search for
// Second argument is what to replace it with
// Returns a string
console.log(`replaceAll`, str1.replaceAll('i', '**'));

/*
 *********************
 * Return a Modified String?
 *  Replace Values
 */

// Returns a section of a string.
// The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
// Returns a string
console.log(`slice`, str3.slice(1, 2));
console.log(`slice`, str3.slice(1));
console.log(`slice`, str3.slice(-1));
console.log(`slice`, str3.slice(1, -1));

/*
 *********************
 * Return a Modified String?
 *  Repeat Characters
 */
// Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
// Returns a string
console.log(`repeat`, str1.repeat(5));

/*
 *********************
 * Return a New String from an array
 *
 */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//Adds all the elements of an array into a string, separated by the specified separator string.
//Takes one parameter which is the separator string
// Returns a string
console.log(`join`, arr1.join('*'));

//Returns a string representation of an array.
// Returns a string
console.log(`toString`, arr1.toString());

// Returns an array Split a string into substrings using the specified separator and return them as an array.
// Returns an array
console.log(`split`, str3.split(6));

/*
 *********************
 * Search a String?
 * Return an index or Length?
 */

// Returns the position of the first occurrence of a substring.
// Takes two parameters:
// The first is the string to search
// The second is the index at which to begin searching the String object.
// Returns -1 if nothing found
// Returns a number
console.log(`indexOf`, str1.indexOf('i'));
console.log(`indexOf`, str1.indexOf('i', 10));

// Returns the last occurrence of a substring in the string.
// Takes two parameters:
// The first is the string to search
// The second is the index at which to begin searching the String object.
// Returns -1 if nothing found
// Returns a number
console.log(`lastIndexOf`, str1.lastIndexOf('i'));
console.log(`lastIndexOf`, str1.lastIndexOf('i', 1));

// Returns the length of a string
// Returns a number
console.log(`length`, str1.length);

/*
 *********************
 * Character at a position
 *
 */
// Returns the character at a specific position
// Returns a character (string)
console.log(`at`, str1.at(2));

//Returns the character at the specified index.
// Returns a character (string)
console.log(`charAt`, str1.charAt(2));

/*
 *********************
 * Regular Expression (regex)
 *
 */
//Finds the first substring match in a regular expression search.
// Returns a string
// ???
console.log(`search`, str1.search());

//Matches a string with a regular expression, and returns an array containing the results of that search.
// ???
// Returns an array containing the result of the search
console.log(`match`, str1.match());

//Matches a string with a regular expression, and returns an iterable of matches containing the results of that search.
// ???
// returns an iterable of matches containing the results of that search.
console.log(`matchAll`, str1.matchAll());

/*
 *********************
 * eturn a Boolean, check if a string includes
 *
 */

//Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
// Returns a Boolean
console.log(`includes`, str1.includes('T'));

// Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
// Returns a Boolean
console.log(`startsWith`, str1.startsWith('T'));

// Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
// Returns a Boolean
console.log(`endsWith`, str1.endsWith('T'));

// ???
// Returns a Boolean
console.log(`isWellFormed`, str1.isWellFormed());
