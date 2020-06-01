import { EntityWithId } from '../shared/interfaces/entity-with-id';

import { Picture } from '../pictures/picture';

export class Album implements EntityWithId{
  constructor(
    public id:number,
    public title: string,
    public thumbnail: String,
    public pictures: Picture[]
  ) {}

  getId(): number {
    return this.id;
  }
}
