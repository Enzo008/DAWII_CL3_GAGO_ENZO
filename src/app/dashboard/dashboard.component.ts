import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){
  }

  irPregunta2():void{
    this.router.navigate(["/pregunta2"], {relativeTo: this.route})
  }
  irPregunta3():void{
    this.router.navigate(["/pregunta3"], {relativeTo: this.route})
  }

}
