import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, If, For} from 'angular2/angular2';
import {Zippy} from 'zippy';

@Component({
    selector: 'hello'
})
@View({
    template: `
      <div>
        <span *if="name">Hello, {{ name }}!</span>
        <h1>AVANT ZIPPY</h1>
        <zippy title="My zippy zip !!">
          <zippy title="Inside my zippy zip !!">
            <zippy title="Again Inside my zippy zip !!">
              <zippy title="Again Again Inside my zippy zip !!">
                <h2>It is a fucking inception</h2>
              </zippy>
            </zippy>
          </zippy>
        </zippy>
        <h1>APRES ZIPPY</h1>
        <ul>
          <li *for="#m of list; #i = index">{{ i + ' - ' + m.name }}</li>
        </ul>
      </div>
    `,
    directives: [Zippy, If, For]
})
export class Hello {
    name: string = 'World';
    list: array = [];

    constructor() {
        setTimeout(() => {
          this.name = 'NEW World'
        }, 2000);

        this.list = [
          { id: 0, name: 'Harry Potter' },
          { id: 1, name: 'Le fils de l\'homme' },
          { id: 2, name: 'Hannibal Lecter'}
        ];

    }
}

bootstrap(Hello);
