import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  template: `
    <div class="overview-grid">
      <div class="section-label">01 / composição</div>
      <div class="overview-content">
        <div>
          <p class="kicker">O componente raiz está conversando com você</p>
          <h2>Uma tela feita de<br /><span>peças pequenas.</span></h2>
          <p class="description">Esta aba é um componente filho renderizado pelo <code>App</code>. As outras duas abas fazem a mesma coisa, mas cada uma encapsula seu próprio estado e comportamento.</p>
        </div>
        <div class="component-stack" aria-label="Árvore de componentes">
          <div class="tree-root">app-root</div>
          <div class="tree-branch"></div>
          <div class="tree-items">
            <span>app-overview</span><span>app-counter</span><span>app-form-demo</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .overview-grid { display: grid; grid-template-columns: 160px 1fr; gap: 34px; }
    .section-label, .kicker { font: 11px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .08em; color: var(--coral); }
    .overview-content { display: grid; grid-template-columns: 1fr 290px; gap: 54px; }
    .kicker { margin: 0 0 22px; color: var(--muted); }
    h2 { margin: 0; font-size: clamp(2.4rem, 5vw, 4.6rem); line-height: .98; letter-spacing: -.07em; font-weight: 600; }
    h2 span { color: var(--coral); }
    .description { max-width: 450px; color: var(--muted); line-height: 1.65; margin: 28px 0 0; }
    code { color: var(--ink); font-family: 'DM Mono', monospace; font-size: .9em; }
    .component-stack { align-self: center; border-left: 1px solid var(--coral); padding-left: 22px; }
    .tree-root { background: var(--ink); color: var(--paper); display: inline-block; padding: 11px 14px; font: 13px 'DM Mono', monospace; }
    .tree-branch { height: 32px; width: 48px; border-left: 1px solid var(--coral); border-bottom: 1px solid var(--coral); }
    .tree-items { display: grid; gap: 9px; color: var(--muted); font: 12px 'DM Mono', monospace; }
    .tree-items span::before { content: '↳ '; color: var(--coral); }
    @media (max-width: 700px) { .overview-grid, .overview-content { display: block; } .section-label { margin-bottom: 34px; } .component-stack { margin-top: 38px; } }
  `],
})
export class OverviewComponent {}
