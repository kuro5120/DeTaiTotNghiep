import { Component, OnInit } from '@angular/core';
import * as models from 'powerbi-models';

@Component({
  selector: 'app-orderlist-bi',
  templateUrl: './orderlist-bi.component.html',
  styleUrls: ['./orderlist-bi.component.css']
})
export class OrderlistBiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  embedConfig = {
    type: "report",
    pageName: 'ReportSectioncd9ff255c07c6331be3e',
    id: "3d1a906c-da36-4ecc-bdd4-6a396fe91ba7",
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3d1a906c-da36-4ecc-bdd4-6a396fe91ba7&groupId=3ec1721f-a446-488e-a8db-100485f408ea&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNWI5OGExZDQtYWJjMy00MmNkLTg5NmUtMmUxYjI0MGRjNjYyLyIsImlhdCI6MTY0Nzk5Nzc0NywibmJmIjoxNjQ3OTk3NzQ3LCJleHAiOjE2NDgwMDE4NDAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFtY0RVRllQMzN5S3FCaTdmN1hpNXJmbDJLYmVOTWtzS25RU1h1UFVaL2M3QjFySWt6bTdaNkRzUytLTDk3Sng3IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImlwYWRkciI6IjEwMS45OS41Mi4xMCIsIm5hbWUiOiJEb2FuIFBoYW0gTmdvYyBIaWV1Iiwib2lkIjoiZGNiMGNmMWUtNmRjOS00M2ZmLTk2MzgtYjcxMTA2MTQ0MTU0IiwicHVpZCI6IjEwMDMyMDAwRDhBODQxNkUiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVhJQTFLR1lXOE9yelVLSmJpNGJKQTNHWWdrQUFBQUFBQUFBd0FBQUFBQUFBQUJ5QUxrLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlV1T3JMZzZMcmR5c05lVmZUb3dDX2ZZUm5GYlJiV0ZvSUlZRjBiV1l1bWsiLCJ0aWQiOiI1Yjk4YTFkNC1hYmMzLTQyY2QtODk2ZS0yZTFiMjQwZGM2NjIiLCJ1bmlxdWVfbmFtZSI6IjE4MTEyMTUyMTExMUBkdWUudWRuLnZuIiwidXBuIjoiMTgxMTIxNTIxMTExQGR1ZS51ZG4udm4iLCJ1dGkiOiIxOVRLWC02S1IwLUpSU21QOWZjakFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.sH_02DsMu3KI8Sfqk-jd5Peg3-H3DvSidUvFtbqobpp-i2_apMKdDHg4c7z6hpKAO_vMLBRgAaHbrAOq58zxD6UNsavr8d9JuLktx4Ui2z1O5k5pAw0rnz-2f0aASAOZJn8g_t5OjEWi4uEgPOHFNi80iMErdlpxI5oQBjDqrrk5pT9fpWxyiGa3icZrarMK9SLn3188yBMccf9_SaHmErGdh9havNA5yvNn2wl7mK_R51AK4ccIROPOB8znYGl0Mdk3tDB8um4flh1j8wshEIcLGULw35cEMrE4nGYrrCtx-8sTvsLRdCKYOxg8i4dYt6pyN8WRZXtJnGEDVjrRCg",
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
