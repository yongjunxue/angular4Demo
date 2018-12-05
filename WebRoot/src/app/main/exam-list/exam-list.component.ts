import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	query={
		examName:"",
		startTime:"",
		verifyStatus:"0",
	};

	queryModal=[
		{code:"examName",name:"试卷名称",type:"text"},
		{code:"startTime",name:"创建人员",type:"date"},
		{code:"verifyStatus",name:"试卷类型",type:"select",selectList:[
				{code:"0",name:"未审核"},
				{code:"1",name:"已审核"},
			]
		},
		{code:"search",name:"查询",type:"btn",url:""}
	];

	search():void{
		console.log(this.query);
	}






}
