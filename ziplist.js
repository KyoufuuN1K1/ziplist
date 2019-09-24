const testList1 = ['a', 'b', 'c', 'd']; const
  testList2 = [1, 2, 3, 4];

function zipList(list1, list2) {
  const newList = [];
  for (let x = 0; x < list1.length && x < list2.length; x++) {
    newList.push(list1[x]);
    newList.push(list2[x]);
  }
  return newList;
}
console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.zip(list1, list2);
}
console.log(zipListTheSimpleWay(testList1, testList2));
