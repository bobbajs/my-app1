
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Foundation } from 'foundation-sites/js/foundation.core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  id="123";
  ModalId = "modal123";

  ngAfterViewInit() {
    //Foundation.addToJquery($);
    (<any>$(`#${this.ModalId}`)).foundation();
  }

  openModal(){
      (<any>$(`#${this.ModalId}`)).foundation("open");
  }
}
