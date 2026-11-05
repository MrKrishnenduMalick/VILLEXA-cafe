const fs = require('fs');

const file = fs.readFileSync('data/products.ts', 'utf8');

// Find all products
const productRegex = /id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*category:\s*'([^']+)'[\s\S]*?image:\s*'([^']+)'/g;

let match;
const products = [];
while ((match = productRegex.exec(file)) !== null) {
  products.push({
    id: match[1],
    name: match[2],
    category: match[3],
    image: match[4]
  });
}

console.log('Total products parsed:', products.length);
products.forEach((p, i) => {
  console.log(`${i+1}. [${p.category}] ${p.name}: ${p.image}`);
});

