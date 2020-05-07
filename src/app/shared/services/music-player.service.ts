import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {
  song: Subject<any> = new Subject<any>();
  playObserve:Subject<boolean> = new Subject<any>();
  playingSong: any = null;

  constructor() {}

  emitSong(song: any) {
    this.playingSong = song;
    this.song.next(song);
  };
  
  play(){
    this.playObserve.next(true);
  };

  pause() {
    this.playObserve.next(false);
  }
}