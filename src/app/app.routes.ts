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
        loadComponent: () => import('./main/main.component').then(com => com.MainComponent)
    }
    ,
    {
        path: 'contact-us',
        loadComponent: () => import('./contact-us/contact-us.component').then(com => com.ContactUsComponent)
    },
    {
        path: 'details',
        loadComponent: () => import('./details/details.component').then(com => com.DetailsComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./about-us/about-us.component').then(com => com.AboutUsComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./products/products.component').then(com => com.ProductsComponent)
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
