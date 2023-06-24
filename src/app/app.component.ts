import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    poppedPopcorns: any[] = [];
  addPopcorn(event: MouseEvent) {
      const popcorn = {
      x: event.clientX - 25,
      y: event.clientY - 25,
      falling: false
    };
    this.poppedPopcorns.push(popcorn);
  this.playPopcornSound()
    setTimeout(() => {
      popcorn.falling = true;
      setTimeout(() => {
        this.poppedPopcorns = this.poppedPopcorns.filter(p => p !== popcorn);
      }, 2000);
    }, 100);
  }
    playPopcornSound() {
    const audio = new Audio("assets/popcorn_sound.mp3");
    audio.play();
  }
}
