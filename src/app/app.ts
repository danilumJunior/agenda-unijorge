import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
=======
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
>>>>>>> df1203bb5b2c10b0d44ce3011c2cfe0ace1936df
})
export class App {
  protected readonly title = signal('agenda-unijorge');
}
<<<<<<< HEAD
=======

>>>>>>> df1203bb5b2c10b0d44ce3011c2cfe0ace1936df
