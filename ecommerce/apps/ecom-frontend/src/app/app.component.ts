import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconComponent, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [ RouterModule,FaIconComponent, NavbarComponent],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  
  private faIconLibrary= inject(FaIconLibrary);
  private faConfig = inject(FaConfig);
  ngOnInit(): void {
   this.initFontAwesome();
  }
  private initFontAwesome() {
   this.faConfig.defaultPrefix='far';
   this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}