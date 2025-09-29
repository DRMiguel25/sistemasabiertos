import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  closeNavbar() {
    const navCollapse = document.getElementById('navList');
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse)
        || new bootstrap.Collapse(navCollapse);
      bsCollapse.hide();
    }
  }
}
