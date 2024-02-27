import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Arte } from 'src/app/models/Arte';
import { ArteService } from 'src/app/services/arte.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  constructor(private arteService: ArteService, private router: Router) {}
  createArte(arte: Arte) {
    this.arteService.CreateArte(arte).subscribe((data) => {
      this.router.navigate(['']);
    });
  }
}
