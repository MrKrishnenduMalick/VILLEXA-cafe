const fs = require('fs');

const imageMap = {
  'dark-chocolate-tart': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop',
  'the-cherry': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
  'milk-chocolate-tart': 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1000&auto=format&fit=crop',
  'raspberry-tart': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop',
  'almond-tart': 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop',
  'mixed-berry-tart': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000&auto=format&fit=crop',
  'lemon-meringue-tart': 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop',

  'pistachio-croissant': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
  'pain-au-chocolat': 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=1000&auto=format&fit=crop',
  'almond-croissant': 'https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?q=80&w=1000&auto=format&fit=crop',
  'pain-aux-raisins': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
  'choux-croquant': 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop',

  'kouign-amann': 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1000&auto=format&fit=crop',
  'sourdough-brioche': 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1000&auto=format&fit=crop',
  'cardamom-cinnamon-cruffin': 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop',
  'hazelnut-babka': 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?q=80&w=1000&auto=format&fit=crop',
  'cannele-de-bordeaux': 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop',

  'dark-knight-cookie': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop',
  'pistachio-raspberry-cookie': 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop',
  'sea-salt-caramel-cookie': 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=1000&auto=format&fit=crop',
  'red-velvet-cream-cookie': 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=1000&auto=format&fit=crop',
  'triple-dark-espresso-cookie': 'https://images.unsplash.com/photo-1548741487-18d16a1a083c?q=80&w=1000&auto=format&fit=crop',

  'ecuador-72-origin-bar': 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1000&auto=format&fit=crop',
  'ecuador-smoke-wood-85': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop',
  'ecuador-sipping-chocolate': 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1000&auto=format&fit=crop',
  'ecuador-raw-nibs-truffles': 'https://images.unsplash.com/photo-1548741487-18d16a1a083c?q=80&w=1000&auto=format&fit=crop',
  'ecuador-caramelized-cacao-bark': 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1000&auto=format&fit=crop',

  'jewel-bonbon-coffret': 'https://images.unsplash.com/photo-1548741487-18d16a1a083c?q=80&w=1000&auto=format&fit=crop',
  'ruby-rose-bonbon': 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=1000&auto=format&fit=crop',
  'golden-smoked-caramel-bonbon': 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1000&auto=format&fit=crop',
  'passionfruit-yuzu-bonbon': 'https://images.unsplash.com/photo-1589218436045-ee320057f443?q=80&w=1000&auto=format&fit=crop',
  'kyoto-matcha-bonbon': 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop',

  'pistachio-kunafa-bar': 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1000&auto=format&fit=crop',
  'ruby-berry-bar': 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1000&auto=format&fit=crop',
  'honeycomb-sea-salt-bar': 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1000&auto=format&fit=crop',
  'caramelized-white-vanilla-bar': 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=1000&auto=format&fit=crop',
  'orange-blossom-dark-bar': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop',

  'dark-knight-brownie': 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?q=80&w=1000&auto=format&fit=crop',
  'salted-caramel-pecan-brownie': 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?q=80&w=1000&auto=format&fit=crop',
  'espresso-hazelnut-brownie': 'https://images.unsplash.com/photo-1589218436045-ee320057f443?q=80&w=1000&auto=format&fit=crop',
  'ruby-raspberry-brownie': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop',
  'brookie-valrhona': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop',

  'cream-mania': 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1000&auto=format&fit=crop',
  'royal-almond-cake': 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop',
  'opera-gateau': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000&auto=format&fit=crop',
  'chocolate-mirror-entremet': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
  'pistachio-rose-entremet': 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop',
};

let content = fs.readFileSync('data/products.ts', 'utf8');

for (const [id, url] of Object.entries(imageMap)) {
  const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*')[^']+(')`, 'g');
  if (regex.test(content)) {
    content = content.replace(regex, `$1${url}$2`);
    console.log(`Updated image for ${id}`);
  } else {
    console.warn(`Could not find product ${id}`);
  }
}

fs.writeFileSync('data/products.ts', content, 'utf8');
console.log('Successfully updated data/products.ts');

