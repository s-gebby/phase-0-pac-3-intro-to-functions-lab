function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(String) {
  console.log(String.toUpperCase());
}

function logWhisper(String) {
  console.log(String.toLowerCase());
}

function sayHiToHeadphonedRoommate(String) {
  const lowerCaseString = String.toLowerCase();
  const upperCaseString = String.toUpperCase();

  if (String === lowerCaseString) {
    return "I can't hear you!";
  } else if (String === upperCaseString) {
    return "YES INDEED!";
  } else if (String === "Let's have dinner together!") {
    return "I would love to!";
    console.log(`HELLO, ${String.toUpperCase()}!`);
  }
}
