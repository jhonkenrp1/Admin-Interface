import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RgjsComponent } from './rgjs/rgjs.component';

 

const routes: Routes = [
    {path:'dasboard',component:PagesComponent,
    children:[
     {path:'',component:DashboardComponent,data:{titulo:'Dashboard'}},
     {path:'progress',component:ProgressComponent,data:{titulo:'Progressbar'}},
     {path:'grafica1',component:Grafica1Component,data:{titulo:'Grafica'}},
     {path:'account-settings', component:AccountSettingsComponent,data:{titulo:'Ajustes'}},
     {path:'promesas',component:PromesasComponent,data:{titulo:'Promesas'}},
     {path:'rgjs',component:RgjsComponent,data:{titulo:'Rxjs'}}
    ] 
   },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
