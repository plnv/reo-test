import { NgModule } from '@angular/core';
import { ZzzComponent } from '../zzz/zzz.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DilaogComponent } from '../dilaog/dilaog.component';
import { WellService } from '../shared/services/well.service';

const routes: Routes = [
  {
    path: '',
    component: ZzzComponent,
  },
];

@NgModule({
  declarations: [ZzzComponent, DilaogComponent],
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  entryComponents: [DilaogComponent],
  providers: [WellService],
})
export class ModModule {}
