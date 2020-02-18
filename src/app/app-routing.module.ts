import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "about", component: AboutComponent },
      { path: "dashboard", component: DashboardComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
