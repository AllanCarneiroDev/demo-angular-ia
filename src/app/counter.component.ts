import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="demo-grid">
      <div class="section-label">02 / estado local</div>
      <div>
        <p class="kicker">Signals + eventos</p>
        <h2>Um contador<br /><span>que responde.</span></h2>
        <p class="description">O valor abaixo vive dentro deste componente. Clique nos botões e veja o template reagir ao estado sem recarregar a página.</p>
        <div class="counter-box">
          <span class="counter-value">{{ count() }}</span>
          <div class="counter-actions">
            <button type="button" (click)="decrement()" aria-label="Diminuir contador">−</button>
            <button type="button" (click)="reset()">resetar</button>
            <button type="button" (click)="increment()" aria-label="Aumentar contador">+</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .demo-grid { display: grid; grid-template-columns: 160px 1fr; gap: 34px; }
    .section-label, .kicker { font: 11px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .08em; color: var(--coral); }
    .kicker { margin: 0 0 22px; color: var(--muted); }
    h2 { margin: 0; font-size: clamp(2.4rem, 5vw, 4.6rem); line-height: .98; letter-spacing: -.07em; font-weight: 600; }
    h2 span { color: var(--coral); }
    .description { max-width: 450px; color: var(--muted); line-height: 1.65; margin: 28px 0 0; }
    .counter-box { display: flex; align-items: center; justify-content: space-between; max-width: 520px; margin-top: 38px; padding: 20px 24px; border: 1px solid var(--line); background: rgba(255,255,255,.25); }
    .counter-value { color: var(--coral); font: 600 60px 'DM Mono', monospace; }
    .counter-actions { display: flex; gap: 8px; align-items: center; }
    button { border: 1px solid var(--ink); background: transparent; color: var(--ink); cursor: pointer; min-width: 42px; height: 42px; }
    button:hover { background: var(--ink); color: var(--paper); }
    button:nth-child(2) { border-color: var(--line); font: 11px 'DM Mono', monospace; text-transform: uppercase; padding: 0 12px; }
    @media (max-width: 700px) { .demo-grid { display: block; } .section-label { margin-bottom: 34px; } .counter-box { align-items: flex-start; flex-direction: column; gap: 22px; } }
  `],
})
export class CounterComponent {
  protected readonly count = signal(0);

  protected increment(): void { this.count.update((value) => value + 1); }
  protected decrement(): void { this.count.update((value) => value - 1); }
  protected reset(): void { this.count.set(0); }
}
