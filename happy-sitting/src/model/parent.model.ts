export class userParent {
  static nextId = 0;
  id = ++userParent.nextId;
  constructor(
    public fName: string,
    public lName: string,
    public date: string,
    public timeFrom: number,
    public timeTo: number,
    public kidName: string,
    public kidAge: number,
    public imageUrl: string
  ) {}
}
