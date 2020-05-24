export default function titleize(text) {
  const loweredText = text.toLowerCase();
  const words = loweredText.split(' ');
  for (let a = 0; a < words.length; a++) {
    let w = words[a];

    const firstLetter = w[0];
    w = firstLetter.toUpperCase() + w.slice(1);

    words[a] = w;
  }
  return words.join(' ');
}
