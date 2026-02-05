import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-library-card',
  imports: [CommonModule],
  templateUrl: './library-card.html',
  styleUrl: './library-card.css',
})
export class LibraryCard {

  libraryData=[
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
  },
  {
    "firstname": "Anitha",
    "lastname": "Ramesh",
    "salary": 50000,
    "designation": "Project Coordinator",
    "place": "Thanjavur",
    "district": "Thanjavur"
  },
  {
    "firstname": "Suresh",
    "lastname": "Babu",
    "salary": 65000,
    "designation": "DevOps Engineer",
    "place": "Tirunelveli",
    "district": "Tirunelveli"
  },
  {
    "firstname": "Lakshmi",
    "lastname": "Narayanan",
    "salary": 47000,
    "designation": "Support Engineer",
    "place": "Kanchipuram",
    "district": "Kanchipuram"
  }
]
}
