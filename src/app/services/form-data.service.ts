import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormDataObj } from '../Models/formData';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formDataSubject = new BehaviorSubject<FormDataObj>({});
  public formData$: Observable<FormDataObj> = this.formDataSubject.asObservable();
  constructor() { }

  updateFormData(data: FormDataObj): void {
    this.formDataSubject.next(data);
  }

  getCurrentFormData(): FormDataObj {
    return this.formDataSubject.value;
  }

  clearFormData(): void {
    this.formDataSubject.next({});
  }
}
