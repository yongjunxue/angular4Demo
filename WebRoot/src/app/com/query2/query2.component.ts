import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {

	@Input("config") config={};
	
	constructor() { }

	ngOnInit() {
	}

	clickButton(button: any, event: any):void{
		var filter=this.getFilter();
		this.setPaper(filter);
		button.click(filter);
	}

	getFilter():any{
		var filter={};
		if(this.config && this.config.queryModal && this.config.queryModal.fields && this.config.queryModal.fields.length > 0){
			for (var i = 0; i < this.config.queryModal.fields.length; i++) {
				var field=this.config.queryModal.fields[i];
				if(field && field.value){
					filter[field.code]=field.value;
				}
			}
		}
		return filter;
	}
	setPaper(filter : any):void{
		if(this.config && this.config.pageModal){
			filter.paper=this.config.pageModal.paper;
		}
	}
}
