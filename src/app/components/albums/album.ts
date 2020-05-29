import { Picture } from '../pictures/picture';

export class Album {
  constructor(public id:number, public title: string, public pictures: Picture[]) {}
}