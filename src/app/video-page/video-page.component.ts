import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-page',
  template: `
  <div class="container">
    <div class="row">
      <div class="col s12">
          <h1>Yolobrolo Videos</h1>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
      <div class="row">
          <div *ngFor="let video of videos" class="col s12 m6 l4">
            <div class="card-panel center-align">
              <div class="purple-text">
                <p>{{video.title}}</p>
              </div>
              <div class="video-container">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/peNV2yJRMLo?rel=0" frameborder="0" allowfullscreen></iframe>
              </div>
              <div class="purple-text">
                With {{video.people}}
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class VideoPageComponent implements OnInit {

  videos: Object=[] = [{
      title: "Ember DND Helper",
      people: "Taras Mankovski",
      videoLink: "peNV2yJRMLo?rel=0"
    },{
      title: "Dependency Injection in Angular 2",
      people: "Patrick J. Stapleton",
      videoLink: "46WovCX8i-I?rel=0"
    },{
      title: "Angular CLI",
      people: "Mike Brocchi",
      videoLink: "BmZLpNRNnZo"
    },{
      title: "Angular Material 2 Spelunking & Issue Submission",
      people: "Ben Lesh",
      videoLink: "3gNsyL7wpXU"
    },{
      title: "Angular Material 2 Spelunking",
      people: "Ben Lesh",
      videoLink: "64PrKAQmXdk"
    },{
      title: "Template Driven Forms in Angular 2",
      people: "Deborah Kurata",
      videoLink: "iRz9WKfYy6U"
    },{
      title: "Contributing to RxJS",
      people: "Ben Lesh",
      videoLink: "jbNqD1OkIEY"
    },{
      title: "Contributing to Ember",
      people: "Jorge Lainfiesta",
      videoLink: "UoMg9Jm-V6k"
    },{
      title: "Functional Programming at a Bar",
      people: "Ben Lesh",
      videoLink: "Eh39B-DGKr8"
    }]


  constructor() { }

  ngOnInit() {
  }

}
