export function getRandomQuery() {
  const queries = [
    '"No, I am your father."',
    "how to use Google",
    "what's in India",
    "how to hack",
    "李小龍",
    "李克勤",
    "how to relax",
    "Order 66",
    "Warren Hue",
    "Vibranium",
    "WD40",
    "Pineapple Kryptonite",
    "Lilas Ikuta",
    "Donald Glover",
    "Lobot",
    "what are centimeters",
    "chicken and broccoli"
  ];
  const i = Math.floor(Math.random() * queries.length);
  return queries[i];
}
