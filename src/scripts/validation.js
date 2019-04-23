// CHARACTER VALIDATION - (whitelist acceptable characters)
// regular expression to match only alphanumeric characters, spaces, and {}:;()-
var charRegex = /^[A-Za-z0-9' {}:;()-]*$/;
// ALERT MESSAGE on character fail
let charErrors =
  " input contains invalid characters." +
  "\n" +
  "please limit to a-z 0-9 (){};:";

// PROFANITY FILTER -  list profane words in array
const swearWords = [
  "ass",
  "asshole",
  "bitch",
  "dick",
  "fuck",
  "fucked",
  "fucker",
  "fucking",
  "fucks",
  "shit",
  "shits",
  "shitty"
];

// Concatenate string into RegExp
const swearFilter = `^(?!.*(${swearWords.join("|")})$).*$`;
// Create RegExp and add case insensitive modifier
const swearRegEx = new RegExp(swearFilter, "i");
// ALERT MESSAGE on swear fail
let swearErrors = " input contains swear words. please watch your language.";
