import { Component,EventEmitter, OnInit ,Input, Output} from '@angular/core';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})

//--------不建议使用这个
export class QueryComponent implements OnInit {

	@Input("query") query={};

	@Input("queryModal") queryModal=[];

	@Output() eventEmitter = new EventEmitter<{}>();

	constructor() {
	}

	ngOnInit(): void {
	}

	search():void{
		this.eventEmitter.emit();
	}

}
