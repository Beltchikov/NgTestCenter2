import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { ModalComponent } from './modal/modal.component';
import { SharingDataComponent } from './sharing-data/sharing-data.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path: 'sharing-data', component: SharingDataComponent},
  {path: 'grid', component: GridComponent},
  {path: 'dropdown', component: DropdownComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
