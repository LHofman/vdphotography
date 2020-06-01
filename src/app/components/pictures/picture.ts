import { EntityWithId } from '../shared/interfaces/entity-with-id';

export class Picture implements EntityWithId {
  constructor(
    public id: number,
    public title: string,
    public src: string,
    public tags: string[]
  ) {}

  getId(): number {
    return this.id;
  }
}
