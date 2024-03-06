import { Component, ViewChild, ElementRef } from '@angular/core';
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
  hex: number = 0xFFF;
  binarny: number = 0b1101;
  oktal: number = 0o7034;
  posesja: number = 17;
  metraz: number = 223.32;
  wartosc: number = 42069;
  kobieta: boolean = false;
  facet: boolean = true;
  n: number = 0;
  poprawne: string = "Podaj liczbe";
  n2: number = 0;
  poprawne2: string = "Podaj liczbe";
  n3: number = 0;
  czekyn: boolean = false;
  poprawne3: string = "sprawdz czy mozesz zostac prezydentem";
  stala(){
    const agnieszka = "kobieta";
    if(agnieszka == "kobieta"){
      this.kobieta = true;
      this.facet = false;
    }
    else{
      this.kobieta = false;
      this.facet = true;
    }
  }
  

  getValue() {
    // Retrieve the value from the input element
    this.n = parseInt((document.getElementById("liczba") as HTMLInputElement).value);
    if(this.n>=1 && this.n<=12){
      this.poprawne = "poprawna";

    }
    else{
      this.poprawne = "niepoprawne";
    }
  }

  getValue2(){
    this.n2 = parseInt((document.getElementById("liczba2") as HTMLInputElement).value);
    if(this.n2 % 2 == 0){
      this.poprawne2 = "parzysta";
    }
    else{
      this.poprawne2 = "nieparzyste";
    }
  }

  getValue3(){
    this.n3 = parseInt((document.getElementById("liczba3") as HTMLInputElement).value);
    this.czekyn = (document.getElementById("check") as HTMLInputElement).checked;
    if(this.czekyn == true){
      if(this.n3>=35){
        this.poprawne3 = "Mozesz zostac prezydentem";
      }
      else{
        this.poprawne3 = "Nie mozesz zostac prezydentem";
      }
    }
    else{
      this.poprawne3 = "Nie mozesz zostac prezydentem";
    }
    
  }



  

  zmienKolor(){
    this.kolor = this.kolor === "yellow" ? "green" : "yellow";
  }
 
}
