import { Component, OnInit} from '@angular/core';
import { Query2Component } from '../../com/query2/query2.component';
import { PageComponent } from '../../com/page/page.component';
@Component({
  selector: 'app-exam-verify',
  templateUrl: './exam-verify.component.html',
  styleUrls: ['./exam-verify.component.css']
})
export class ExamVerifyComponent implements OnInit {

	queryModal={
		fields:[
			{code:"examName",name:"试卷名称",type:"text",value:""},
			{code:"creater",name:"创建人员",type:"text",value:""},
			{code:"examCreateTime",name:"创建时间",type:"date",value:""},
			{code:"examType",name:"试卷类型",type:"select",value:"1000",selectList:[
				{code:"",name:"请选择"},
				{code:"1000",name:"正式考试"},
				{code:"2000",name:"同步测验"}
			]},
		],
		btns:[
			{name:"查询",click:this.search}
		]
	};

	gridModal={
		heads:[
			{code:"examName",name:"试卷名称",type:"link",click:this.getDetail},
			{code:"creater",name:"创建人员"},
			{code:"examType",name:"试卷类型",type:"select",selectList:[
				{code:"",name:"请选择"},
				{code:"1000",name:"正式考试"},
				{code:"2000",name:"同步测验"}
			]},
			{code:"score",name:"总分"},
			{code:"verifyStatus",name:"审核状态",type:"select",selectList:[
				{code:"",name:"请选择"},
				{code:"1",name:"未审核"},
				{code:"2",name:"通过"},
				{code:"3",name:"不通过"},
			]},
		],
		datas:[
			{id:"1",examName:"月考",creater:"老大",examType:"1000",score:"100",verifyStatus:"1"},
			{id:"2",examName:"周考",creater:"老二",examType:"2000",score:"120",verifyStatus:"1"},
			{id:"3",examName:"季度考",creater:"王八",examType:"1000",score:"150",verifyStatus:"2"}
		],
		btns:[
			//{name:"审核",click:this.verify,ifShow:this.ifShow}, //根据条件是否显示这个按钮
			{name:"修改",click:this.edit},
			{name:"删除",click:this.del},
			{name:"通过",click:this.pass,ifShow:this.ifShow_pass},
			{name:"不通过",click:this.reject,ifShow:this.ifShow_reject},
		]
	};

	pageModal={
		paper:{
			page:1,
			pageSize:5,
			total:10
		},
		click:this.search
	};

	config={
		queryModal:this.queryModal,
		gridModal:this.gridModal,
		pageModal:this.pageModal
	};

	constructor() {
	}

	ngOnInit(): void {
	}


	search(filter : any):void{
		console.log(filter);
		console.log("exam-verify-----------查询");

		//1.请求后台
		//2.重新设置pageModal.paper中的值
	}

	edit(data:any):void{
		console.log(this.pageModal);
		console.log(data);
		console.log("exam-verify-----------修改");
	}
	del(data:any):void{
		console.log(data);
		console.log("exam-verify-----------删除");
	}
	verify(data:any):void{
		console.log(data);
		console.log("exam-verify-----------审核");
	}
	pass(data:any):void{
		data.verifyStatus="2";
		console.log("exam-verify-----------通过");
	}
	reject(data:any):void{
		data.verifyStatus="3";
		console.log("exam-verify-----------不通过");
	}

	ifShow(data:any):boolean{
		var isShow=false;
		if(data.verifyStatus=='1'){
			isShow=true;
		}
		return isShow;
	}

	ifShow_pass(data:any):boolean{
		var isShow=false;
		if(data.verifyStatus=='3' || data.verifyStatus=='1'){
			isShow=true;
		}
		return isShow;
	}
	ifShow_reject(data:any):boolean{
		var isShow=false;
		if(data.verifyStatus=='2' || data.verifyStatus=='1'){
			isShow=true;
		}
		return isShow;
	}



	//---------没有实现
	getDetail(data:any):void{
		console.log(data);
		console.log("exam-verify-----------详情");
	}

}
