import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mywidget',
  template: `
    <p>
      mywidget works!
    </p>
  `,
  styles: [
  ]
})
export class MywidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
