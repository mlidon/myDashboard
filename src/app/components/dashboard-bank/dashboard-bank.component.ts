import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CardInfoBankComponent } from '../../shared/dashboard/cardInfoBank/cardInfoBank.component';
import { InfoBank } from '../../_models/shared';
import { GraficChardBankComponent } from '../../shared/dashboard/graficChardBank/graficChardBank.component';
import { GraficDonutBankComponent } from "../../shared/dashboard/graficDonutBank/graficDonutBank.component";
import { TableBasicBankComponent } from '../../shared/dashboard/tableBasicBank/tableBasicBank.component';

@Component({
  selector: 'dashboard-bank',
  imports: [CardInfoBankComponent, GraficChardBankComponent, GraficDonutBankComponent,TableBasicBankComponent],
  templateUrl: './dashboard-bank.component.html',
  styleUrl: './dashboard-bank.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardBankComponent {
  infoCards:InfoBank[]=[
    {title: 'CONVERSATION RATE', value:0,rate:0.81, quantity:0,state:'arrow_downward',valueState:0.6, stateColor:'bgRed'},
    {title: 'AVG. ORDER VALUE', value:306.2,rate:0, quantity:0,state:'arrow_upward', valueState:4.2, stateColor:'bgGreen'},
    {title: 'CONVERSATION RATE', value:0.81,rate:0, quantity:0,state:'arrow_downward',valueState:2.1, stateColor:'bgRed'},
    {title: 'ORDER QUANTITY', value:0,rate:0, quantity:1.620,state:'remove',valueState:1.4, stateColor:'bgBlue'}
  ];


}
