import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const routes: Routes = [
    {path:'',component:HomeComponent},
     {path:'login',component:LoginComponent},
     {path:'signup',component:RegisterComponent},
     {path:'dashboard',component:DashboardComponent},


];



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }