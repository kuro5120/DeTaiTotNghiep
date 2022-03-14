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
    id: "a88da78f-5d9d-4790-9b4b-98bd8e03d1c6",
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=a88da78f-5d9d-4790-9b4b-98bd8e03d1c6&groupId=f2aa8ae7-1c57-4cc0-8437-999620735a3f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNWI5OGExZDQtYWJjMy00MmNkLTg5NmUtMmUxYjI0MGRjNjYyLyIsImlhdCI6MTY0NzIyMDMyNCwibmJmIjoxNjQ3MjIwMzI0LCJleHAiOjE2NDcyMjUwNjYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUExdzBVTlpiVFVIY1ZYdVFFcjh3ZUk5ZG1MRWswTXpzWkhJRFhuYWc4bGgxSThJKzBmMFZrWDZ1cVM2ZDVRdFdZIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImlwYWRkciI6IjEwMS45OS41Mi4xMCIsIm5hbWUiOiJEb2FuIFBoYW0gTmdvYyBIaWV1Iiwib2lkIjoiZGNiMGNmMWUtNmRjOS00M2ZmLTk2MzgtYjcxMTA2MTQ0MTU0IiwicHVpZCI6IjEwMDMyMDAwRDhBODQxNkUiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVhJQTFLR1lXOE9yelVLSmJpNGJKQTNHWWdrQUFBQUFBQUFBd0FBQUFBQUFBQUJ5QUxrLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlV1T3JMZzZMcmR5c05lVmZUb3dDX2ZZUm5GYlJiV0ZvSUlZRjBiV1l1bWsiLCJ0aWQiOiI1Yjk4YTFkNC1hYmMzLTQyY2QtODk2ZS0yZTFiMjQwZGM2NjIiLCJ1bmlxdWVfbmFtZSI6IjE4MTEyMTUyMTExMUBkdWUudWRuLnZuIiwidXBuIjoiMTgxMTIxNTIxMTExQGR1ZS51ZG4udm4iLCJ1dGkiOiJlTm5fa0M2V0kwNjhwRzQ2V1pUTUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.dNvdBoYVUz2_-df_ZItPfugBFgOu2ulignMd1KBjnNA-ZwxtAQxKy4C5jFnL0POdxt1lgxtd0V8K7XWEeGnsovVb_rWcPknhJZ4f-F02fEUHB0cFqymtknV4Lz_buzKWpcfaUP7V-pitV1_kaucqMTMPg9RztgoxUz_oeVzrKpqtO8VZW2bQK_mNpyH6pjfNV019xVPZJA1cquL5DK8C3NJH7SBjT0FXMqbyTKzpWYKNFvGX20SaXF4zbWlRkXVXLWXaX7sxtS9ZmIpK5iZhPJC-nIJp2okzvwFtlUvMSTfCbfYpPWkB6_iWBISplwoFqJ2laxG8CySmXp_23HdSDg",
    // tokenType: models.TokenType.Embed,
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
      background: models.BackgroundType.Transparent,
    }
  }
  eventHandlers = new Map([
    ['loaded', () => console.log('Report loaded')],
    ['rendered', () => console.log('Report rendered')],
    ['error', (event: any) => console.log(event.detail)]
  ]);


}
