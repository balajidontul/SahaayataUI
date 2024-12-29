import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullScreenBannerComponent } from './full-screen-banner/full-screen-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FullScreenBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SahaayataUI';
}
