import { ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, If, For } from 'angular2/angular2';
import { Zippy } from 'zippy';
import { Movies } from 'movies';


@Component({
    selector: 'hello',
    injectables: [Movies]
})

@View({
    template: `
        <input #ref type="text" (keyup)><p (click)="onClick(ref)" [style.color]="ref.value">WWWWW{{ ref }}QQQQQQ</p>
    `,
/*    template: `
      <div>
        <span *if="name">Hello, {{ name }}!</span>

        <hr>

        <h1>ZIPPY</h1>
        <zippy title="My zippy zip !!">
          <zippy title="Inside my zippy zip !!">
            <zippy title="Again Inside my zippy zip !!">
              <zippy title="Again Again Inside my zippy zip !!">
                <h2>It is a fucking inception</h2>
              </zippy>
            </zippy>
          </zippy>
        </zippy>

        <hr>

        <input #newVal type="text">
        <p>{{ newVal.value }}</p>
        <button (click)="add($event, newVal)">ADD</button>

        <ul>
          <li *for="#m of list; #i = index">
            <span>{{ i + ' - ' + m.name }}</span>
            <button (click)="remove(m.id)">X</button>
          </li>
        </ul>
      </div>
    `,*/
    directives: [Zippy, If, For]
})

export class Hello {
    name: string = 'World';

    movies: Movies;
    list: array = [];

    constructor(movies:Movies) {
      this.movies = movies;
      this.list = this.movies.getList();
    }

    add(event, value) {
      console.log(event, value);
      this.movies.add(value);
    }

    remove(id) {
      this.movies.remove(id);
    }

    onClick(ref) {
      console.log(ref);
      console.log(ref.value);
    }
}


bootstrap(Hello);
