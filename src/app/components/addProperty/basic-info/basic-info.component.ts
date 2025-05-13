import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  isRent: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void {

  }

  onBasicFormSubmit(values: any){
    console.log('basicInfoComponent::onBasicFormSubmit()')
    this.router.navigateByUrl(`home/list-property/pricing?isRent=${this.isRent}`);
  }
}
