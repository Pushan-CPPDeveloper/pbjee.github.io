import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
text!:string;
id!: string;
date: any;
 isNew:boolean=true;     
  constructor(private logService:LogService) { }

  ngOnInit(){
  //subscribe to selected log Observable
  this.logService.selectedLog.subscribe(log=>{
    if(parseInt(log.id) !== 0){
      this.isNew=false;
      this.id =log.id;
      this.text=log.text;
      this.date= log.date;
    }
  })
  }
  onSubmit(){
   if(this.isNew){
     //crete a new log
     const newLog:Log ={
      id: this.generateID(),
      text: this.text,
      date: new Date()
     }
    this.logService.addLog(newLog);
   }
   else{
     //create log to be updated
     const updLog:Log ={
      id: this.id,
      text: this.text,
      date: new Date()
     }
     //this.logService.updateLog(updLog;
    }
  }
  generateID()
    { // Public Domain/MIT
      var d = new Date().getTime();//Timestamp
      var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16;//random number between 0 and 16
          if(d > 0){//Use timestamp until depleted
              r = (d + r)%16 | 0;
              d = Math.floor(d/16);
          } else {//Use microseconds since page-load if supported
              r = (d2 + r)%16 | 0;
              d2 = Math.floor(d2/16);
          }
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
  }
  
}
