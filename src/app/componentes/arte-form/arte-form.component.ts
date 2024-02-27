import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Arte } from 'src/app/models/Arte';

@Component({
  selector: 'app-arte-form',
  templateUrl: './arte-form.component.html',
  styleUrls: ['./arte-form.component.scss']
})
export class ArteFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Arte>()
  arteForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    
    this.arteForm = new FormGroup({
        id: new FormControl(0),
        nome_Quadro: new FormControl(''),
        nome_Pintor: new FormControl(''),
        ano_Quadro: new FormControl(''),
        valor: new FormControl('')

    });
  }

  submit(){
      this.onSubmit.emit(this.arteForm.value);
  }
}
