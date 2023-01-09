import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptosListComponent } from './components/conceptos-list/conceptos-list.component';
const routes: Routes = [
  {
    path:'',
    component: ConceptosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
