import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, FooterComponent, LandingPageComponent, MainComponent, TopNavComponent, LayoutComponent],
  imports: [
    CommonModule, RouterModule, RouterOutlet
  ],
  exports: [AboutUsComponent, ContactUsComponent, FooterComponent, LandingPageComponent, MainComponent, TopNavComponent, LayoutComponent]
})
export class LayoutModule { }
