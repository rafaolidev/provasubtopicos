import { Component, OnInit } from '@angular/core';
import { Computador } from 'src/app/models/Computador';
import { HttpClient } from "@angular/common/http"
import { ComputadorService } from 'src/app/services/computador.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  computador : Computador[] = [];
  constructor(private service: ComputadorService) {
  }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.computador = lista;
    });
  }

}
