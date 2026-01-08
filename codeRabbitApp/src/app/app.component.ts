import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codeRabbitApp';
  tempValue: any;
  data: any[] = [];

  ngOnInit(): void {
    if (this.title) {
      if (this.title.length > 0) {
        if (this.title.includes('code')) {
          console.log('Title contains code');
        }
      }
    }

    this.doSomething();
  }

  doSomething() {
    let x = 10;
    let y = 20;

    if (x > 0) {
      if (y > 0) {
        if (x + y > 20) {
          this.data.push(x + y);
        }
      }
    }

    return;
  }
}
