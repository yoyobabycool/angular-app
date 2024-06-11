import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';   
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
      for (let lang in this.Fury) {
      this.furyUrls1[lang] = this.sanitizer.bypassSecurityTrustResourceUrl(this.Fury[lang]);
	  this.glimpseUrls1[lang] = this.sanitizer.bypassSecurityTrustResourceUrl(this.Glimpse[lang]);
	  this.fearSongUrls1[lang] = this.sanitizer.bypassSecurityTrustResourceUrl(this.FearSong[lang]);
    }
  }
    ngOnInit(): void {
    this.getData();
      this.getDataspot()
  }
      furyUrls1: { [key: string]: SafeResourceUrl } = {};
  glimpseUrls1: { [key: string]: SafeResourceUrl } = {};
  fearSongUrls1: { [key: string]: SafeResourceUrl } = {};
  langs: any[] = ["Telugu","Hindi","Tamil","Kannada","Malayalam"]
    Fury : { [key: string]: string } = {
	"Telugu" : "https://livecounts.io/embed/youtube-live-view-counter/cW2RWZCUot4",
	"Tamil" : "https://livecounts.io/embed/youtube-live-view-counter/S6Ll0_dqfkY",
	"Hindi" : "https://livecounts.io/embed/youtube-live-view-counter/sP6qnPmgZHI",
	"Kannada" : "https://livecounts.io/embed/youtube-live-view-counter/Y5rM7xkXQH0",
	"Malayalam" : "https://livecounts.io/embed/youtube-live-view-counter/oHLWDI4LEbQ"
  } 
  Glimpse : { [key: string]: string } = {
	"Telugu" : "https://livecounts.io/embed/youtube-live-view-counter/rc61YHl1PFY",
	"Tamil" : "https://livecounts.io/embed/youtube-live-view-counter/qB7kO-Z-zjU",
	"Hindi" : "https://livecounts.io/embed/youtube-live-view-counter/J1g-8hBwj3I",
	"Kannada" : "https://livecounts.io/embed/youtube-live-view-counter/0aCqlN9IbC4",
	"Malayalam" : "https://livecounts.io/embed/youtube-live-view-counter/WTcSeqf555c"
  } 
   FearSong : { [key: string]: string } = {
	"Telugu" : "https://livecounts.io/embed/youtube-live-view-counter/CKpbdCciELk",
	"Tamil" : "https://livecounts.io/embed/youtube-live-view-counter/WAM3E91iKWM",
	"Hindi" : "https://livecounts.io/embed/youtube-live-view-counter/D6MOuX980gc",
	"Kannada" : "https://livecounts.io/embed/youtube-live-view-counter/XUO4fCXG7tE",
	"Malayalam" : "https://livecounts.io/embed/youtube-live-view-counter/hB9pvZC1KHk"
  }
  getData(): void {
  const targetUrl = 'https://devara.pythonanywhere.com/';
  const url = targetUrl;
    this.http.get(url)
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
      }, error => {
        console.error('Error fetching data', error);
      });
  }
  getDataspot(): void {
  const targetUrl = 'https://api-partner.spotify.com/pathfinder/v1/query?operationName=getTrack&variables=%7B%22uri%22%3A%22spotify%3Atrack%3A6b2WJDzGt5X8dYfpkWtvXW%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22ae85b52abb74d20a4c331d4143d4772c95f34757bfa8c625474b912b9055b5c0%22%7D%7D';
  const headers = {"Authorization" : "Bearer BQCylPN6TvhRTLmsj1j-x_dhcvN99Xt6sR5Fk6-qBtSnJX63jMYTf1pJdF4ASD6aU0B1pBlgVt48MG_Za8hoBfOPEBP52JtcK0Pm5Me2X8Pse748s58"}
  const url = targetUrl;
    this.http.get(url)
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
      }, error => {
        console.error('Error fetching data', error);
      });
  }
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
