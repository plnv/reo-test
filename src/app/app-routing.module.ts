import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModModule } from './mod/mod.module';

const routes: Routes = [
  { path: 'test', loadChildren: './mod/mod.module#ModModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
