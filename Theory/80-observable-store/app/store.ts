import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

import { State } from './state';

const state: State = {
  playlist: undefined
};

export class Store {

  // we use a behaviour subject as we need an initial value, which in this case
  // is an empty object. A subject may serve the same purpose, but it does not
  // receive an initial value. 
  
  // a subject main purpose is to pass down the latest streamed value to any
  // new subscriptor
  private subject = new BehaviorSubject<State>(state);

  // Our subject is then converted into an observable to access
  // its values. This store is to who you subscribe and its who
  // reacts to any value that is set to our subject  
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {

    // pluck extracts an object property of the stream, and creates
    // a new observable of the property type and not the entire object
    return this.store.pluck(name);
  }

  set(name: string, state: any) {
    
    // Setting our store the state. Do note that we are passing a new
    // object. This new object is composed of the subject value, and 
    // a new property 
    this.subject.next({

      // the spread operator merge an object properties, into 'this' object
      ...this.value, [name]: state
    });
  }

}