const categories = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];
const photos = [
  'sofa', 'keyboard', 'workmedia', 'dddone', 'abstract',
  'handp', 'architect', 'calc', 'sport'
];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomChar = () => String.fromCharCode(
  Math.random() * 26 + 65 + (Math.random() > .5 ? 32 : 0)
)
const randomString = (length) => {
  let res = '';
  for (let i = 0; i < length; i++) {
    res += randomChar();
  }
  return res;
}

export function fetchPhotos(amount = 9) {
  return new Promise((resolve) => {
    let data = [];
    for (let i = 0; i < amount; i++) {
      data.push(
        {
          title: randomString(10),
          img: randomItem(photos),
          category: randomItem(categories),
        }
      );
    }
    setTimeout(() => resolve({ data: data }), 500);
  }
  );
}
