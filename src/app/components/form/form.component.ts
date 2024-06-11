import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 
  @Output() empleadoEvent = new EventEmitter<any>();

  mForm = this.fb.group({

      nombre: [""],
      apellidos: [""],
      puesto: [""],
      telefono: [""],
      remoto: [""]

  })
  constructor(private fb: FormBuilder){

  }
  sendForm(){

    this.empleadoEvent.emit(this.mForm.value)

    this.mForm.patchValue({

      nombre: "",
      apellidos: "",
      puesto: "",
      telefono: ""
    })

  }
}
