import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markerWidth = 30;
  markerHeight = 45;
  tentIcon = {
    scaledSize: {width: this.markerWidth, height: this.markerHeight},
    url: "assets/icons/tent.png"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
