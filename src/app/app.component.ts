import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name = 'Ayush'
  imgUrl = 'https://picsum.photos/id/237/500/500'

  getName() { return this.name.toUpperCase(); }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
