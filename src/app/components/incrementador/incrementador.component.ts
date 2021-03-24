import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit  {
  ngOnInit(){
    
    this.btnClass=`btn ${this.btnClass}`;
  }

  @Input('valor')  progreso:number=40;
  @Input() btnClass:string="btn btn-primary";

  @Output('valor') valorSalida: EventEmitter<number>=new EventEmitter();
  
  //Renombrar progreso se cambia en el llmdo x valor

   getPorcentaje(){
    return `${this.progreso}%`
   }
   cambiarValor(valor:number){
     if(this.progreso>=100 && valor>=0){
       this.valorSalida.emit(100);
       return this.progreso=100;
     }
     if(this.progreso<=0 && valor<0){
      this.valorSalida.emit(0);
       return this.progreso=0;
     }

     this.progreso=this.progreso+ valor;
     this.valorSalida.emit(this.progreso)
   }

   onChange(nuevoValor:number){
    if(nuevoValor>=100){
      this.progreso=100;
    }else if (nuevoValor<=0){
      this.progreso=0;
    }else{
      this.progreso=nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

}
