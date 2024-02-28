import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // template: ``,
  templateUrl: './tak.html',
  styleUrl: './style.css'
})
export class AppComponent {

  title = 'projekt';
  tak: string = "Kowalski";
  imie: string = "Jan";
  Nazwisko: string = "Kowalski";
  src1: string = "assets/img/obraz2.jpg";
  src2: string = "assets/img/obraz3.jpg";
  kolor: string = "yellow";
  jak: string = "center";
  aktywna: boolean = true;
  decimal: number = 6;
  hex: number = 0XFFF;
  binary: number = 0B1101;
  octan: number = 0O361;
  posesja: number = 17;
  metraz: number = 223.32;
  wartosc: number = 69420;
 


  zmienKolor(){
    this.kolor = this.kolor === "yellow" ? "green" : "yellow";
  }
 
}
