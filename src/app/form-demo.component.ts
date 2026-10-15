import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="demo-grid">
      <div class="section-label">03 / binding</div>
      <div>
        <p class="kicker">Two-way data binding</p>
        <h2>Escreva algo<br /><span>e veja aparecer.</span></h2>
        <p class="description">O campo usa <code>[(ngModel)]</code>: o que você digita atualiza o estado e o estado atualiza a mensagem ao lado.</p>
        <div class="form-layout">
          <label>
            <span>Seu nome</span>
            <input [(ngModel)]="name" placeholder="Digite aqui..." />
          </label>
          <div class="greeting">
            <span class="greeting-label">saída do componente</span>
            <strong>{{ name ? 'Olá, ' + name + '!' : 'Olá, pessoa curiosa!' }}</strong>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .demo-grid { display: grid; grid-template-columns: 160px 1fr; gap: 34px; }
    .section-label, .kicker, label span, .greeting-label { font: 11px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .08em; color: var(--coral); }
    .kicker { margin: 0 0 22px; color: var(--muted); }
    h2 { margin: 0; font-size: clamp(2.4rem, 5vw, 4.6rem); line-height: .98; letter-spacing: -.07em; font-weight: 600; }
    h2 span { color: var(--coral); }
    .description { max-width: 450px; color: var(--muted); line-height: 1.65; margin: 28px 0 0; }
    code { color: var(--ink); font-family: 'DM Mono', monospace; font-size: .9em; }
    .form-layout { display: grid; grid-template-columns: minmax(180px, 280px) 1fr; gap: 22px; align-items: end; margin-top: 38px; }
    label { display: grid; gap: 10px; }
    label span, .greeting-label { color: var(--muted); }
    input { width: 100%; border: 0; border-bottom: 1px solid var(--ink); background: transparent; padding: 12px 0; outline: 0; color: var(--ink); }
    input:focus { border-color: var(--coral); }
    .greeting { border-left: 2px solid var(--coral); padding: 8px 0 8px 18px; }
    .greeting strong { display: block; margin-top: 9px; font-size: 20px; }
    @media (max-width: 700px) { .demo-grid { display: block; } .section-label { margin-bottom: 34px; } .form-layout { grid-template-columns: 1fr; } }
  `],
})
export class FormDemoComponent {
  protected name = '';
}
