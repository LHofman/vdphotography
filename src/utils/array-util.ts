/**
 * Create a new list with the elements of the provided list in a random order
 */
export const shuffle = (list: any[]) => {
  const newList = [];

  while (list.length) {
    let index = Math.floor(Math.random() * list.length);
    newList.push(list[index]);
    list.splice(index, 1);
  }

  return newList;
}