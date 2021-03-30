import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription} from 'rxjs';
import {retry,take,map,filter} from 'rxjs/operators'

@Component({
  selector: 'app-rgjs',
  templateUrl: './rgjs.component.html',
  styles: [
  ]
})
export class RgjsComponent implements OnDestroy {
  public intervalSubs:Subscription;

  constructor() { 

   
   /*  this.retornaObservable().pipe(
      retry()
    ).subscribe(valor=>console.log('Subs',valor)),
    error=>console.warn('Err',error),
    ()=>console.info('Ons termindo')
 */
   this.intervalSubs=this.retornaIntervalo().subscribe(valor=>console.log(valor))
    
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
     return interval(1000)
    .pipe(map(valor=>valor+1),
              filter(valor=>(valor%2===0)?true:false),
              take(10),
    );

  }

  retornaObservable(): Observable<number>{
    let i=-1;
    const obs$=new Observable<number>(observer=>{
      const intervalo=setInterval(()=>{
        i++;
        observer.next(i);
        if(i===4){
          clearInterval(intervalo);
          observer.complete()
        }
        if(i===2){
          observer.error('i llego a 2')
        }

      },1000)

      
    });

    return obs$;

  }

  ngOnInit(): void {
  }



}
