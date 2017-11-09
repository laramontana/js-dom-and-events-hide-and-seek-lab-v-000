const getFirstSelector = function (selector) {
  return document.querySelector(selector);
}

const nestedTarget = function () {
  return document.querySelector("#nested .target");
}

const increaseRankBy = function (n) {
  let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString();
  }
}

const deepestChild = function () {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
