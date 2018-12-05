import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

	@Input("config") config;

	jumpNumber:number;
	pages:number;

	paper:any;

	constructor() { }

	ngOnInit() {
		this.paper=this.config.pageModal.paper;
		this.pages=Math.ceil(this.paper.total/this.paper.pageSize);
	}

	toFirstPage():void{
		if(this.paper && this.paper.page){
			this.paper.page=1;
			this.jump();
		}
	}
	toLastPage():void{
		if(this.paper && this.paper.page){
			this.paper.page=this.pages;
			this.jump();
		}
	}
	prePage():void{
		if(this.paper && this.paper.page){
			this.paper.page=this.paper.page-1;
		  	if(this.paper.page<1){
		  		this.paper.page=1;
		  	}
		  	this.jump();
		}
	}
	nextPage():void{
		if(this.paper && this.paper.page){
			this.paper.page=this.paper.page+1;
		  	if(this.paper.page>this.pages){
		  		this.paper.page=this.pages;
		  	}
		  	this.jump();
		}
	}

	toPage():void{
		if(this.paper && this.paper.page && this.jumpNumber){
			this.paper.page=this.jumpNumber;
			this.jump();
		}
	}

	jump():void{
		var filter=this.getFilter();
		this.setPaper(filter);
		this.config.pageModal.click(filter);
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

	formatNum():boolean{
		console.log(this.jumpNumber);
		if(this.jumpNumber){
			if(isNaN(this.jumpNumber)){
				this.jumpNumber=null;
				return true;
			}
			if(this.pages){
				if(this.jumpNumber>this.pages){
					this.jumpNumber=null;
					return true;
				}	
			}
		}
		return false;
	}

}
