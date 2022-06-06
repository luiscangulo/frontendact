import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteInterface } from '../../interfaces/PacienteInterface';
import { ListaPacienteService } from '../../services/lista-paciente.service';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styles: [
  ]
})
export class ListaPacienteComponent implements OnInit {

  dataSource: any= [];
  displayedColumns: string[] = ['nombres','apellidoPaterno','apellidoMaterno','fechaNacimiento',
  'ci','celular','telefono','email','direccion', 'estado']

  //public pacientes: PacienteInterface []=[];
  constructor(private service: ListaPacienteService) { }

  ngOnInit(): void {

    this.service.getPacientes().subscribe((data:PacienteInterface[]) => {
      this.dataSource = new MatTableDataSource<PacienteInterface>(data as PacienteInterface[]);
      //this.pacientes = data;
      console.log(data);
    })
  }

}
