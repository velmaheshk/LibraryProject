import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-library-table',
  imports: [FormsModule,CommonModule],
  templateUrl: './library-table.html',
  styleUrl: './library-table.css',
})
export class LibraryTable {
  libraryData = [
    {
      "firstname": "Arun",
      "lastname": "Kumar",
      "salary": 45000,
      "designation": "Software Engineer",
      "place": "Chennai",
      "district": "Chennai"
    },
    {
      "firstname": "Priya",
      "lastname": "Sharma",
      "salary": 52000,
      "designation": "UI Developer",
      "place": "Coimbatore",
      "district": "Coimbatore"
    },
    {
      "firstname": "Ravi",
      "lastname": "Raj",
      "salary": 60000,
      "designation": "Backend Developer",
      "place": "Madurai",
      "district": "Madurai"
    },
    {
      "firstname": "Divya",
      "lastname": "Iyer",
      "salary": 48000,
      "designation": "QA Engineer",
      "place": "Trichy",
      "district": "Tiruchirappalli"
    },
    {
      "firstname": "Karthik",
      "lastname": "Subramanian",
      "salary": 70000,
      "designation": "Tech Lead",
      "place": "Salem",
      "district": "Salem"
    },
    {
      "firstname": "Meena",
      "lastname": "Krishnan",
      "salary": 42000,
      "designation": "HR Executive",
      "place": "Erode",
      "district": "Erode"
    },
    {
      "firstname": "Vijay",
      "lastname": "Anand",
      "salary": 55000,
      "designation": "Business Analyst",
      "place": "Vellore",
      "district": "Vellore"
    }
  ]
}
