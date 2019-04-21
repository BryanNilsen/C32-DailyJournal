// CHARACTER VALIDATION - (whitelist acceptable characters)
// regular expression to match only alphanumeric characters, spaces, and {}:;()-
var re = /^[A-Za-z0-9' {}:;()-]*$/;
// ALERT MESSAGE on character fail
let charErrors =
  " input contains invalid characters." +
  "\n" +
  "please limit to a-z 0-9 (){};:";

// PROFANITY FILTER -  list profane words in array
const swearWords = [
  "shit",
  "shitty",
  "shits",
  "fuck",
  "fucker",
  "fucking",
  "fucks",
  "fucked",
  "bitch",
  "asshole"
];
// Concatenate string into RegExp
const swearFilter = `^(?!.*(${swearWords.join("|")})$).*$`;
// Create RegExp and add case insensitive modifier
const swearReg = new RegExp(swearFilter, "i");
// ALERT MESSAGE on swear fail
let swearErrors = " input contains swear words. please watch your language.";
