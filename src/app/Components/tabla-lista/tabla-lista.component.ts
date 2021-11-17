import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../../Services/indicadores.service';

@Component({
  selector: 'app-tabla-lista',
  templateUrl: './tabla-lista.component.html',
  providers: [ IndicadoresService ],
  styleUrls: ['./tabla-lista.component.scss'],

})
export class TablaListaComponent implements OnInit {

  public elementos: any = []
  headers: string[] = [];
  config: any | undefined;

  constructor(private indicadores: IndicadoresService) { }


  ngOnInit(): void {
    this.getIndicadores();
  }

  getIndicadores(): void {
    this.indicadores.getService()
    .subscribe ((resp) => {
      const keys = resp.headers.keys();
      this.headers = keys.map((key) => `${key}: ${resp.headers.get(key)}`);
      this.config = { ...resp.body! };
      console.log(this.config)
    });
  }
}
