import { Component, OnInit,ViewChild } from '@angular/core';

import { QueryComponent } from '../query/query.component';
import { GridComponent } from '../grid/grid.component';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	
	@ViewChild("query") tableQuery: QueryComponent;
  	@ViewChild("grid") tableContent: GridComponent;
  	@ViewChild("page") tablePager: PageComponent;

	constructor() { }

	ngOnInit() {
	}

}
