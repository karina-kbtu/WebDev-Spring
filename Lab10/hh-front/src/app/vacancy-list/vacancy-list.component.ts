
import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../models/vacancy';
@Component({
  selector: 'app-vacancy-list',
  imports: [],
  standalone: true,
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    const companyId = 1; 
    this.vacancyService.getVacancies(companyId).subscribe((data) => {
      this.vacancies = data;
    });
  }
}
