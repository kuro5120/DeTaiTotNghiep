import { Component, OnInit } from '@angular/core';
import * as models from 'powerbi-models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  embedConfig = {
    type: "report",
    pageName: 'ReportSection',
    id: "3d1a906c-da36-4ecc-bdd4-6a396fe91ba7",
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3d1a906c-da36-4ecc-bdd4-6a396fe91ba7&groupId=3ec1721f-a446-488e-a8db-100485f408ea&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNWI5OGExZDQtYWJjMy00MmNkLTg5NmUtMmUxYjI0MGRjNjYyLyIsImlhdCI6MTY0ODAyNjIwNywibmJmIjoxNjQ4MDI2MjA3LCJleHAiOjE2NDgwMzA1OTYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFRdkxqV2pPUWw3WjFiU3BUY0t3Umo2cytWOVpJS3ZYUi9SYU8wWmI2SkJlOWZzM3pjQmZpRkdhdmkxc1Z5VUdEIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImlwYWRkciI6IjEwMS45OS41Mi4xMCIsIm5hbWUiOiJEb2FuIFBoYW0gTmdvYyBIaWV1Iiwib2lkIjoiZGNiMGNmMWUtNmRjOS00M2ZmLTk2MzgtYjcxMTA2MTQ0MTU0IiwicHVpZCI6IjEwMDMyMDAwRDhBODQxNkUiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVhJQTFLR1lXOE9yelVLSmJpNGJKQTNHWWdrQUFBQUFBQUFBd0FBQUFBQUFBQUJ5QUxrLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlV1T3JMZzZMcmR5c05lVmZUb3dDX2ZZUm5GYlJiV0ZvSUlZRjBiV1l1bWsiLCJ0aWQiOiI1Yjk4YTFkNC1hYmMzLTQyY2QtODk2ZS0yZTFiMjQwZGM2NjIiLCJ1bmlxdWVfbmFtZSI6IjE4MTEyMTUyMTExMUBkdWUudWRuLnZuIiwidXBuIjoiMTgxMTIxNTIxMTExQGR1ZS51ZG4udm4iLCJ1dGkiOiJ3LXpWazFvTnVFNms4WlhFclpFNkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.iAjVesWbTXE-WFsHdFMiDKvk-y8mgxs-lEghicrdgFexxUeZLBUjeau0ZN6Y_aCg0JHR3Wo2pW9QZQBEFafopAHY-MeRghkELspvDlsjZaJrHojAwAwP2NYVAKLUx02n5oTYVSc8qN_kkcipV55EMXv-RImm_sAz4Oshw5ZyRkUmwRh7we29Y4cdWDCHdAHph5GS5sJYW5aKw1avtTzI60pKiyA-eE5YrDAYJOCvctGH9dsaDbGwg-s4od8a7BwfwYyha0r-T77kjy7PdPdLvUd7OPpMN7IckESTC1u24g-9Q2oQOxZBrm8NF6mmk0F7-HUI_jkAW5rG-6oxclOFpg",
    tokenType: models.TokenType.Aad,
    settings: {

      panes: {
        filters: {
          expanded: false,
          visible: false
        },
        pageNavigation: {
          visible: false
        },
      },
      //background: models.BackgroundType.Transparent,
    }
  }
  eventHandlers = new Map([
    ['loaded', () => console.log('Report loaded')],
    ['rendered', () => console.log('Report rendered')],
    ['error', (event: any) => console.log(event.detail)]
  ]);

}
