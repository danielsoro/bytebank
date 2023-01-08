import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: string;

  constructor(private readonly service: TransferenciaService) {}

  async transferir(): Promise<void> {
    const transferencia: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.create(transferencia).subscribe({
      next: (_transferencia) => {
        this.limparValores();
      },
      error: (error) => console.log(error),
    });
  }

  async limparValores(): Promise<void> {
    this.valor = undefined;
    this.destino = undefined;
  }
}
