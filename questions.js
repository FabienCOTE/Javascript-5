var languagesArrayCreation = function () {

  return languages =  ["Html", "CSS", "Java", "PHP"];
}

var numbersArrayCreation = function () {

    return number = [0, 1, 2, 3, 4, 5];
}

var ElementReplacement = function (languages) {
  languages.splice(2, 1, "Javascript");
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push("Ruby", "Python");
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.splice(0, 0, -2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {

  return languages.slice(1);
}

var deleteArrayLastElement = function (languages) {

  return languages.slice(0,4);
}

var stringToArray = function (socialMediaInString) {

  return socialMediaString = socialMedia = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn'];
}

var arrayToString = function (languages) {

  return languages = languagesInString = 'CSS,Javascript,PHP,Ruby';
}

var arraySort = function (socialMedia) {

  return socialMedia.sort();
}

var arrayInvert = function (languages){


  return languages.reverse();
}
