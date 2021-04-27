
export default function initialValue() {
  const data = require('./data/data.json')
  return {
    items: data.products,
    count: data.products.length
  };
}


