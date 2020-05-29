export const shuffle = (list: any[]) => {
  const newList = [];

  while (list.length) {
    let index = Math.floor(Math.random() * list.length);
    newList.push(list[index]);
    list.splice(index, 1);
  }

  return newList;
}