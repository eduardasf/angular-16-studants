import { Component, OnInit } from '@angular/core';
import { Arte } from 'src/app/models/Arte';
import { ArteService } from 'src/app/services/arte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  artes: Arte[] = [];
  artesGeral: Arte[] = [];

  constructor(private arteService: ArteService) {}

  ngOnInit(): void {
    this.arteService.GetArte().subscribe((data) => {
      console.log(data);
      this.artes = data;
      this.artesGeral = data;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.artes = this.artesGeral.filter((arte) => {
      return arte.nome_Quadro.toLowerCase().includes(value);
    });
  }
}
