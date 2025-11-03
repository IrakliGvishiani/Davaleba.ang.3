import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailsComponent } from './details/details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    }
    ,
    {
        path : 'main',
        component: MainComponent
    }
    ,
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'details',
        component: DetailsComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
