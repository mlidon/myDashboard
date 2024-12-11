import { ChangeDetectionStrategy, Component,ViewChild } from '@angular/core';
import { ChartComponent,NgApexchartsModule } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ApexDataLabels, ApexLegend } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
};

@Component({
  selector: 'grafic-donut-bank',
  imports: [NgApexchartsModule,ChartComponent],
  templateUrl: './graficDonutBank.component.html',
  styleUrl: './graficDonutBank.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraficDonutBankComponent{
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(){
    this.chartOptions = {
      series: this.generateRandomPercentages(),
      chart:{type:'donut', height: 350},
      dataLabels: { enabled: true,
        formatter: function (val,opts) {
          return opts.w.config.series[opts.seriesIndex] + '%';
        },
      },
      legend:{ position:'bottom'},
      responsive:[{
        breakpoint:480,
        options:{
          chart:{width:200},
          legend:{position:'bottom'},
        },
      }]
    }
  }


  private generateRandomPercentages(): number[] {
    let total = 0;
    const percentages = [];
    for (let i = 0; i < 2; i++) {
      const value = Math.floor(Math.random() * (100 - total));
      percentages.push(value);
      total += value;
    }
    percentages.push(100 - total);
    return percentages;
  }
}
