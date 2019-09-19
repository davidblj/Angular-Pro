import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        
        <li *myFor="let item of items; let i = index;">
          {{ i }} Member: {{ item.name | json }}
        </li>

        <!-- the snippet above compiles to this html. A template wont 
             render itself, it needs a container, this container is provided
             by the directive. Its the directive that creates a new item based on
             a template. Which template ?: this template which is given at compilation time.  -->

        <template myFor [myForOf]="items" let-item let-i="index">
          
          <li>
            {{ i }} Member: {{ item.name | json }}
          </li>

        </template>
      </ul>
    </div>
  `
})
export class AppComponent {
  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  },{
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  },{
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];
  constructor() {

    // angular on change detection will not trigger an update if 
    // the items array changes, and thats why we need to send a new instance
    setTimeout(() => {
      this.items = [...this.items, { name: 'Matt Skiba', age: 40, location: 'California' }];
    }, 2000);
  }
}
