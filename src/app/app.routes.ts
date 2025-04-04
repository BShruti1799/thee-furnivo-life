import { Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { ExploreNowComponent } from './layout/explore-now/explore-now.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path:'',component:LandingPageComponent
    },
    {
        path:'explore-now',component:ExploreNowComponent
    },
    {
        path:'about-us',component:AboutUsComponent
    },
    {
        path:'contact-us',component:ContactUsComponent
    }
];
