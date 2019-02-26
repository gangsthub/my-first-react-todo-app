export default (charsLong = 5) => {
  // generate a random 5 charachters length string (random number in base 10 to string and striped the first 5 chars)
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(10).substring(0, charsLong)
}
