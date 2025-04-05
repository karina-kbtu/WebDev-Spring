import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { VacancyService } from '../vacancy.service';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit  {
  company: Company | undefined;
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompany(id).subscribe((data) => {
      this.company = data;
    });
    this.vacancyService.getVacancies(id).subscribe((data) => {
      this.vacancies = data;
    });
  }
}
