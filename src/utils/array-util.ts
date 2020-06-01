import { EntityWithId } from 'src/app/components/shared/interfaces/entity-with-id';
import { AlertService } from 'src/app/services/alert.service';

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

/**
 * Finds element in a list by element id
 * Deletes the element from the list if found
 */
export const removeFromListById = (
  list: EntityWithId[],
  id: number,
  notFoundError: string,
  alertService: AlertService
): boolean => {
  const existingEntity = list.filter((entity: EntityWithId) => entity.getId() === id);
  if (!existingEntity) {
    if (notFoundError.length) {
      alertService.flashError(notFoundError);
    }
    return false;
  }

  const index = list.indexOf(existingEntity[0]);

  list.splice(index, 1);

  return true;
}

/**
 * Finds element in a list by element id
 * Updates the element in the list if found
 */
export const updateInListById = (
  list: EntityWithId[],
  id: number,
  newEntity: EntityWithId,
  notFoundError: string,
  alertService: AlertService
): boolean => {
  const existingEntity = list.filter((entity: EntityWithId) => entity.getId() === id);
  if (!existingEntity) {
    if (notFoundError.length) {
      alertService.flashError(notFoundError);
    }
    return false;
  }

  const index = list.indexOf(existingEntity[0]);

  list[index] = newEntity;

  return true;
}

/**
 * Compares the elements of 2 lists
 * Returns whether the lists' elements are identical
 */
export const compareLists = (list1: any[], list2: any[]): boolean => {
  for (let element of list1) {
    if (!list2.includes(element)) {
      return false;
    }
  }

  return true;
}