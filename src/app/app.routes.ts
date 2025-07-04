import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', loadComponent: () => import('./components/dashboard-home/dashboard-home').then(m => m.DashboardHome) },
  { path: 'profile', loadComponent: () => import('./components/user-profile/user-profile').then(m => m.UserProfile) },
  { path: 'notifications', loadComponent: () => import('./components/notifications/notifications').then(m => m.Notifications) },
  { path: 'representative', loadComponent: () => import('./components/representative/representative').then(m => m.RepresentativeComponent) },
  { path: 'typography', loadComponent: () => import('./components/typography/typography').then(m => m.Typography) },
  { path: 'icons', loadComponent: () => import('./components/icons/icons').then(m => m.Icons) },
  { path: 'forms', loadComponent: () => import('./components/forms/forms').then(m => m.Forms) },
  // Add more routes for other major sections as needed
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
