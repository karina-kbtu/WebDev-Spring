import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../models/company';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
@Component({
  selector: 'app-company-list',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }
}
