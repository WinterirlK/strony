import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './moj_pli.html',
  templateUrl: './zdarzenia.html',
  // styleUrl: './app.component.css',
  styleUrl: './style.css',
  
})
export class AppComponent {
  title = 'projekt';
  imie: string = "Dawid";
  nazwisko : string = "Wisniewski";
  kolor: string = "yellow";
  jak: string = "center";
  aktywna: boolean = true;
  zmienKolor(){
    this.kolor = this.kolor === "yellow" ? "green" : "yellow";
  }
}

