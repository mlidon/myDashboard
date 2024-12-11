import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { ApexAxisChartSeries, ApexChart,ApexXAxis, ApexDataLabels, ApexStroke, ApexMarkers, ApexYAxis, ApexLegend, ApexGrid } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
};


@Component({
  selector: 'grafic-chard-bank',
  imports: [NgApexchartsModule,ChartComponent],
  templateUrl: './graficChardBank.component.html',
  styleUrl: './graficChardBank.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraficChardBankComponent {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Ventas",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Gastos",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: "Ingresos",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      chart: { height: 350, type: "line"},
      dataLabels: { enabled: false },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      colors: ["#FF1654", "#247BA0", "#70C1B3"],
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]},
      yaxis: {
        title: {text: "Cantidad"},
      },
      grid: {borderColor: "#f1f1f1"}
    };
  }


 }
