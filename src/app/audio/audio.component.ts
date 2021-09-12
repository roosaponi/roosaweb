import { Component, Input } from '@angular/core';
import { Audio, SourceAttributes } from '../models';


@Component({
  selector: 'audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {

  audio: Audio;
  frame_soure: string;
  source_base: string;
  attr: SourceAttributes;

  constructor() {
    this.source_base = "https://w.soundcloud.com/player/?";
    this.attr = new SourceAttributes();
    this.attr.color = "%23ff5500";
    this.attr.auto_play = false;
    this.attr.hide_related = false;
    this.attr.show_comments = true;
    this.attr.show_user = true;
    this.attr.show_reposts = false;
    this.attr.show_teaser = true;
    this.attr.visual = true;
  }

  @Input()
  set setAudio(audio: Audio) {
    this.audio = audio;
    this.attr.url = audio.embed_url;
    this.frame_soure = this.source_base + JSON.stringify(this.attr);
  }
}
