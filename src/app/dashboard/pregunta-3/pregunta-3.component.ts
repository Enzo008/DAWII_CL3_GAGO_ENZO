import { Component } from '@angular/core';
import { ImageService } from './image.service';
import { Image } from './Image';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta-3',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './pregunta-3.component.html',
  styleUrl: './pregunta-3.component.css'
})
export class Pregunta3Component {
  fotos: Image[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.obtenerFotos().subscribe((fotos: Image[]) => {
      this.fotos = fotos;
    });
  }
}
