import { Component, OnInit } from '@angular/core';
import { NavLinks } from 'src/app/interfaces/navLink.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navLinks: NavLinks[] = [
    { label: 'Home', route: '/home' },
    { label: 'About Us', route: '/' },
    { label: 'Catalysts', route: '/' },
    { label: 'Admissions', route: '/admissions/form' },
    { label: 'Support', route: '/' },
  ];
  ngOnInit(): void {}
}
