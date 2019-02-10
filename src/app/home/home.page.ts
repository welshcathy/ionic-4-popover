import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  customPopoverOptions = {
    // to prove that these options are taken into account
    header: 'Custom title',
    cssClass: 'app-popover',
    // color not listed as an option but tried it anyway
    color: 'warning'
  };

  testForm = new FormGroup({
    city: new FormControl('')
  });

}
