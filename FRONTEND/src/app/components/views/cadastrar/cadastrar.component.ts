import { Component, OnInit } from '@angular/core';
import { Computador } from 'src/app/models/Computador';
import { ComputadorService } from 'src/app/services/computador.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  computador : Computador = new Computador();
  constructor(private service: ComputadorService) { }

  ngOnInit(): void {
  }
  cadastrar(): void{
    this.service.cadastrar(this.computador).subscribe((computador)=>{
      console.log(computador);
    });
  }

}
