import { Component, OnInit } from '@angular/core';
import { NavLinks } from 'src/app/interfaces/navLink.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navLinks: NavLinks[] = [
    { name: 'About Us', route: '/' },
    { name: 'Catalysts', route: '/' },
    { name: 'Admissions', route: '/' },
    { name: 'Support', route: '/' },
  ];
  ngOnInit(): void {}
}
