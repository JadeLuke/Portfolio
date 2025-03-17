import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared-ui/nav/nav.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, SkillsComponent, ProjectsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
