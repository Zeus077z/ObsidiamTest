import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  dollars:number = 0;
  bitcoins:number = 0;

  constructor() { }

  ngOnInit() {
  }
   /*
   Event keyUp to convert the dollars to bitcoins 
    */
   onKeyUpUSDtoBTC (dollar: any): void{
    this.bitcoins = dollar.target.value !== "" ? dollar.target.value / 60000 : 0;   
   }

  /*
   Event keyUp to convert the bitcoins to dollars 
    */
   onKeyUpBTCtoUSD (bitcoins: any): void{
    this.dollars = bitcoins.target.value !== "" ? bitcoins.target.value * 60000 : 0;   
   }

}
