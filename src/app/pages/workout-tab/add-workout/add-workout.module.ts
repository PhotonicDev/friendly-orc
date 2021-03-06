import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWorkoutPage } from './add-workout.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddWorkoutPage,
  },
];

@NgModule({
  declarations: [AddWorkoutPage],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AddWorkoutModule {}
