import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListPage } from './workout-list.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/core/shared.module';

const routes: Routes = [
  {
    path: '',
    component: WorkoutListPage,
  },
];

@NgModule({
  declarations: [WorkoutListPage],
  imports: [
    FormsModule,
    IonicModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class WorkoutListModule {}
