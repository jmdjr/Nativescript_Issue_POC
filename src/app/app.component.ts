import { Component, OnInit } from '@angular/core'; 
import { native } from '@nativescript/capacitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message:string = "waiting...";
  countdown:number = 5;

  ngOnInit(): void {
    setInterval(() =>{
      if(this.countdown > 0)
      this.countdown -= 1;
    }, 1000);

    setTimeout(() => {
      this.unzip();
    }, this.countdown * 1000);
  }

  unzip() {
    this.message = "trying to unzip...";
    native.unzip("test.zip", "test/").then(() => {
      this.message = "unzip call made...";
    })
  }
}
