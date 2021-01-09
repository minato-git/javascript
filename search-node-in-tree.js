// Iterative approach
function searchNodeInTreeIterative(tree, node) {
  if (tree == null || tree === undefined) {
    throw new Error('Cannot search in null or undefined DOM tree');
  }

  if (tree === node) {
    return tree;
  }

  const stack = [tree];
  while (stack.length) {
    const elem = stack.pop();
    if (elem === node) {
      return elem;
    } else {
      for (let i = 0; i < elem.childNodes.length; i++) {
        stack.push(elem.childNodes[i]);
      }
    }
  }
  return null;
}

// Recursive approach
function searchNodeInTreeRecursive(tree, node) {
  if (tree == null || tree == undefined) {
    return null;
  }
  if (tree === node) {
    return node;
  }
  let result = null;
  for (let i = 0; result == null && i < tree.childNodes.length; i++) {
    result = searchNodeInTreeRecursive(tree.childNodes[i], node);
  }
  return result;
}
