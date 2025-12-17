function calcTotal(items) {
  if (!Array.isArray(items)) throw new Error('items must be an array');

  let total = 0;

  for (const item of items) {
    if (typeof item !== 'object' || item === null) throw new Error('each item must be an object');
    const price = Number(item.price);
    const qty = Number(item.qty);

    if (!Number.isFinite(price) || price < 0) throw new Error('invalid price');
    if (!Number.isInteger(qty) || qty < 0) throw new Error('invalid qty');

    total += price * qty;
  }

  // round to 2 decimals
  return Math.round(total * 100) / 100;
}

module.exports = { calcTotal };
