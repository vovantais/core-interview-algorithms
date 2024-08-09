/**
 * Returns object item if this id exist.
 * @param {string} id
 * @param {object} obj
 * @return {object}
 *
 */

function findItemInTrees(id, obj) {
  if (id == null || typeof id !== 'string' || Object.keys(obj).length === 0) {
    return {};
  }
  if (obj?.id === id) {
    return obj;
  }
  let found;

  for (const product of obj.products) {
    found = findItemInTrees(id, product);
    if (found) {
      return found;
    }
  }
}

module.exports = {
  findItemInTrees,
};
