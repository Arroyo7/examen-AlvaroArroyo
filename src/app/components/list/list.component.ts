import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormComponent, ItemListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  empleados: any[] = [


  ]

  addEmpleado(empleado : any){

    this.empleados.push(empleado);
    console.log(this.empleados)

  }

}
