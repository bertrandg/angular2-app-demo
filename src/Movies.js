
export class Movies {
  list: array;

  constructor() {
    this.list = [
      { id: 0, name: 'Harry Potter 8' },
      { id: 1, name: 'Le fils de l\'homme' },
      { id: 2, name: 'Hannibal Lecter'}
    ];
  }

  getList() {
    return this.list;
  }

  add(value) {
    this.list.push({
      id: Math.floor(Math.random() * 10000),
      name: value
    });
  }

  remove(id) {
    _.remove(this.list, {id: Number(id)});
  }
  

}