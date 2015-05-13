
export class Movies {
  list: array;

  constructor() {
    this.list = [
      { id: 0, name: 'Harry Potter' },
      { id: 1, name: 'Le fils de l\'homme' },
      { id: 2, name: 'Hannibal Lecter'}
    ];
  }

  getList() {
    return this.list;
  }

}