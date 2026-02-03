import { Routes } from '@angular/router';
import { LibraryForm } from './Form/library-form/library-form';
import { LibraryTable } from './Table/library-table/library-table';
import { LibraryCard } from './Card/library-card/library-card';

export const routes: Routes = [
    {path:'Form',component:LibraryForm},
    {path:'Table',component:LibraryTable},
    {path:'Card',component:LibraryCard}
];
