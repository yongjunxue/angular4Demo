import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  	@Input("config") config={};

  constructor() { }

  ngOnInit() {
  }



  clickButton(data:any,button: any, event: any):void{
    //console.log(button);
  	button.click(data);
  }

  checkConditon(data:any,button: any):boolean{
    var flag=true;
    if(button.ifShow != null && button.ifShow != ''){
      //eval('flag = ' + button.ifShow);
      flag=button.ifShow(data);
    }
    return flag;
  }

}
