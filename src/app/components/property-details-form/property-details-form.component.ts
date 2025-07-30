import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-details-form',
  templateUrl: './property-details-form.component.html',
  styleUrls: ['./property-details-form.component.css']
})
export class PropertyDetailsFormComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }
}
