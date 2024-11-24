import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/Models/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  @Input() properties: Property[];
  constructor() { }

  ngOnInit(): void {
  }

}
