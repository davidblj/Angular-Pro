import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]'
})
export class MyForDirective {

  @Input()
  set myForOf(collection) {

    this.view.clear(); // as this function triggers each time a new
                       // reference is passed, we need to reset our list 

    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
    
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

}