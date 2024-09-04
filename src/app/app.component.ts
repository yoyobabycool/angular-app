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
  token:any;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
      for (let lang in this.Fury) {
      this.furyUrls1[lang] = this.sanitizer.bypassSecurityTrustResourceUrl(this.Fury[lang]);
	  this.glimpseUrls1[lang] = this.sanitizer.bypassSecurityTrustResourceUrl(this.Glimpse[lang]);
	  this.fearSongUrls1[lang] = this.sanitizer.bypassSecurityTrustResourceUrl(this.FearSong[lang]);
    this.secondSongUrls1[lang] = this.sanitizer.bypassSecurityTrustResourceUrl(this.SecondSong[lang]);
    this.davudiUrls1[lang] = this.sanitizer.bypassSecurityTrustResourceUrl(this.davudi[lang]);
    }
  }
    ngOnInit(): void {
    this.getDataspot();
  }
      furyUrls1: { [key: string]: SafeResourceUrl } = {};
  glimpseUrls1: { [key: string]: SafeResourceUrl } = {};
  fearSongUrls1: { [key: string]: SafeResourceUrl } = {};
  secondSongUrls1: { [key: string]: SafeResourceUrl } = {};
  davudiUrls1: { [key: string]: SafeResourceUrl } = {};
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
  SecondSong : { [key: string]: string } = {
	"Telugu" : "https://livecounts.io/embed/youtube-live-view-counter/5vsOv_bcnhs",
	"Tamil" : "https://livecounts.io/embed/youtube-live-view-counter/IARc_LBgQZE",
	"Hindi" : "https://livecounts.io/embed/youtube-live-view-counter/_OS2FSIpQ2s",
	"Kannada" : "https://livecounts.io/embed/youtube-live-view-counter/ZPg_uf-40AA",
	"Malayalam" : "https://livecounts.io/embed/youtube-live-view-counter/yjWgj5Z6lR0"
  }
  davudi: { [key: string]: string } = {
    "Telugu" : "https://livecounts.io/embed/youtube-live-view-counter/22IEnKGVuUY",
    "Tamil" : "https://livecounts.io/embed/youtube-live-view-counter/RLc8BsHourA",
    "Hindi" : "https://livecounts.io/embed/youtube-live-view-counter/TV8OOVDnq8w",
    "Kannada" : "https://livecounts.io/embed/youtube-live-view-counter/7zp5iBcQA60",
    "Malayalam" : "https://livecounts.io/embed/youtube-live-view-counter/Ow_x-QNSg2U"
    }
  getDataspot(): void {
    this.http.get('assets/spotify.json').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      });

  }
  //   poppedPopcorns: any[] = [];
  // addPopcorn(event: MouseEvent) {
  //     const popcorn = {
  //     x: event.clientX - 25,
  //     y: event.clientY - 25,
  //     falling: false
  //   };
  //   this.poppedPopcorns.push(popcorn);
  // this.playPopcornSound()
  //   setTimeout(() => {
  //     popcorn.falling = true;
  //     setTimeout(() => {
  //       this.poppedPopcorns = this.poppedPopcorns.filter(p => p !== popcorn);
  //     }, 2000);
  //   }, 100);
  // }
  //   playPopcornSound() {
  //   const audio = new Audio("assets/popcorn_sound.mp3");
  //   audio.play();
  // }
}
