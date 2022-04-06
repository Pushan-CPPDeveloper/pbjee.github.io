import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { BehaviorSubject, Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
logs:Log[];

private logSource = new BehaviorSubject<Log>({
  id: "",
  text: "",
        date: null
      
});
selectedLog=this.logSource.asObservable();
  constructor() { 
    this.logs=[
      {
        id: '1',
        text: 'Generated Component',
        date: new Date('12/26/2017 12:54:23')
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('12/28/2017 09:54:23')
      },
      {
        id: '3',
        text: 'Added Logs Component',
        date: new Date('12/30/2017 12:00:23')
      }
    ]

  }
  getLogs():Observable<Log[]>{
    return of(this.logs);
  }
  setFormLog(log:Log){
 this.logSource.next(log)
  }
  addLog(log:Log){
    this.logs.unshift(log);
  }
}
