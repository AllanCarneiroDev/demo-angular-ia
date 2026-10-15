import { Component, signal } from '@angular/core';
import { CounterComponent } from './counter.component';
import { FormDemoComponent } from './form-demo.component';
import { OverviewComponent } from './overview.component';

export type TabId = 'overview' | 'counter' | 'form';

@Component({
  imports: [OverviewComponent, CounterComponent, FormDemoComponent],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly activeTab = signal<TabId>('overview');

  protected readonly tabs: { id: TabId; label: string; number: string }[] = [
    { id: 'overview', label: 'Visão geral', number: '01' },
    { id: 'counter', label: 'Contador', number: '02' },
    { id: 'form', label: 'Formulário', number: '03' },
  ];

  protected selectTab(tab: TabId): void {
    this.activeTab.set(tab);
  }
}
