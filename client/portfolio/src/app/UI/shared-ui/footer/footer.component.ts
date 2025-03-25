import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  toAbout(){
    document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})
  }

  toSkills(){
    document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'})
  }

  toProjects(){
    document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
  }

  toTop(){
    document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
  }
}
