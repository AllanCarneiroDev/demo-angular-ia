import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the component lab and switch tabs', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Componentes que');
    expect(compiled.querySelector('app-overview')).toBeTruthy();

    const tabs = compiled.querySelectorAll<HTMLButtonElement>('.tab');
    tabs[1].click();
    fixture.detectChanges();

    expect(compiled.querySelector('app-counter')).toBeTruthy();
  });
});
