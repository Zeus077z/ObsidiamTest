import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  dollars:string = "";
  bitcoins:string = "";

  constructor() { }

  ngOnInit() {
  }
   /*
   Event keyUp to convert the dollars to bitcoins 
    */
   onKeyUpUSDtoBTC (dollar: any): void{
    this.bitcoins = dollar.target.value !== "" ? String(dollar.target.value / 60000) : "";   
   }

  /*
   Event keyUp to convert the bitcoins to dollars 
    */
   onKeyUpBTCtoUSD (bitcoins: any): void{
    this.dollars = bitcoins.target.value !== "" ? String(bitcoins.target.value * 60000) : "";   
   }

}
