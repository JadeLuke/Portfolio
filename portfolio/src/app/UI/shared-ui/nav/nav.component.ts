import { Component } from '@angular/core';
import { AboutComponent } from '../../../pages/about/about.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  toAbout(){
    document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})
  }

  toSkills(){
    document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'})
  }

  toProjects(){
    document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
  }
}
