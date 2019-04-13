import {Component} from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'Seater-0', viewValue: 'Seater'},
    {value: 'Semi sleeper-1', viewValue: 'Semi sleeper'},
    {value: 'Sleeper-2', viewValue: 'Sleeper'}
  ];
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */