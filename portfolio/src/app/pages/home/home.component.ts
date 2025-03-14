import { Component } from '@angular/core';
import { NavComponent } from '../../UI/shared-ui/nav/nav.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
