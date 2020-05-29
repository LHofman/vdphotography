import { Picture } from '../pictures/picture';

export class Album {
  constructor(
    public id:number,
    public title: string,
    public thumbnail: String,
    public pictures: Picture[]
  ) {}
}