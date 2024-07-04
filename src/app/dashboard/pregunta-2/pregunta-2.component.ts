import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EpisodeService } from './episode.service';
import { Episode } from './Episode';

@Component({
  selector: 'app-pregunta-2',
  standalone: true,
  imports: [MaterialModule ],
  templateUrl: './pregunta-2.component.html',
  styleUrl: './pregunta-2.component.css'
})
export class Pregunta2Component {
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode'];
  dataSource = new MatTableDataSource<Episode>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private episodeService: EpisodeService) {}

  ngOnInit() {
    this.episodeService.obtenerEpisodios().subscribe((episodios: Episode[]) => {
      this.dataSource.data = episodios;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
