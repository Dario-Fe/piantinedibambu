# PiantineDiBambù

![PiantineDiBambù](logo.png)

Sito web vetrina per **PiantineDiBambù**, un'azienda agricola a conduzione familiare del Verbano Cusio Ossola (Piemonte) specializzata nella coltivazione e vendita di piantine di bambù.

**URL:** [mark.ni@hotmail.it](mailto:mark.ni@hotmail.it)

---

## Panoramica

Landing page static realizzata in puro HTML, CSS e JavaScript. Il sito presenta le quattro varietà di bambù coltivate, permette di prenotare piantine tramite form di contatto, offre consigli di coltivazione e mostra la disponibilità aggiornata.

### Sezioni

| Sezione | Descrizione |
|---|---|
| **Hero** | Introduzione con logo, titolo e CTA |
| **Specie** | Le 4 varietà: Edulis, Dendrocalamus, Nigra, Madake |
| **Chi Siamo** | La storia e la filosofia dell'azienda |
| **Prenota** | Listino prezzi con pre-ordine diretto |
| **Consigli** | Guida alla coltivazione in 6 passi |
| **Disponibilità** | Stato aggiornato delle piantine |
| **Contatti** | Form di contatto e informazioni aziendali |
| **Newsletter** | Popup per iscrizione alla newsletter |

### Specie di bambù

1. **Phyllostachys Edulis** (Moso Bamboo) — Gigante 25/30 m, invasivo
2. **Dendrocalamus** (Bambù Gigante / Calcutta) — Non invasivo, 8-15 m
3. **Phyllostachys Nigra** (Bambù Nero / Kuro-chiku) — Resiste fino a −20 °C
4. **Phyllostachys Bambusoides** (Madake) — Invasivo, legno durissimo

---

## Tecnologie

- **HTML5** — Semantico, meta tag Open Graph e Twitter Card
- **CSS3** — Variabili custom, animazioni, grid, responsive design, Intersection Observer
- **JavaScript** (Vanilla) — Scroll spy, mobile menu, card expand, form mailto, animazioni reveal

Nessun framework o libreria esterna (solo Google Fonts: Inter + Playfair Display).

---

## Struttura del progetto

```
nuovo_sito_bambu/
├── index.html          # Pagina principale (single-page)
├── logo.png            # Logo principale (hero)
├── logo_old.png        # Logo precedente
├── css/
│   └── style.css       # Tutti gli stili (1037 righe)
├── js/
│   └── main.js         # Script client-side (117 righe)
└── images/
    ├── moso.jpg        # Phyllostachys Edulis
    ├── bambugigante.jpg # Dendrocalamus
    ├── bambunero.jpg    # Phyllostachys Nigra
    ├── madake.jpg       # Phyllostachys Bambusoides
    └── bambu-nagasaki.jpg # Immagine "chi siamo"
```

---

## Funzionalità principali

- **Navigazione sticky** — Header trasparente che diventa bianco con sfocatura allo scroll
- **Scroll spy** — Link di navigazione evidenziati in base alla sezione visibile
- **Menu mobile** — Hamburger con overlay a schermo intero
- **Card specie espandibili** — Click per leggere dettagli aggiuntivi
- **Pre-ordine** — Pulsanti "Prenota" che pre-compilano il form di contatto
- **Form contatto** — Invia tramite `mailto:` con soggetto e corpo preformattati
- **Animazioni reveal** — Elementi che appaiono con fade-in all'entrata nel viewport
- **Popup newsletter** — Overlay con modulo di iscrizione (attivabile da link esterno)
- **Design responsivo** — Breakpoint a 768px e 480px per mobile e tablet

---

## Come eseguire

Il sito è **statico** e non richiede build o server. Apri `index.html` in qualsiasi browser:

```bash
# Apri direttamente
start index.html

# Oppure con un server locale (Python)
python -m http.server 8000
# Visita http://localhost:8000
```

---

## Contatti aziendali

- **Email:** mark.ni@hotmail.it
- **Luogo:** Verbano Cusio Ossola (VCO), Piemonte
- **P. IVA:** 02453870038

---

## Licenza

Tutti i diritti riservati. Il contenuto e le immagini sono di proprietà di PiantineDiBambù.
