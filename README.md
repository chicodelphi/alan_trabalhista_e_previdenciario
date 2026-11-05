# Dr. Alan Jantsch — Advocacia Especializada em Acidentados

Landing page institucional e de captação do **Dr. Alan Jantsch — OAB/SC 73.129**, com
atuação no **Distrito Federal (DF), Santa Catarina (SC), Amazonas (AM), Rio Grande do
Sul (RS) e São Paulo (SP)**.

Áreas em destaque: Auxílio-Acidente (INSS — Art. 86 da Lei 8.213/91), Acidentes de
Trabalho e Doenças Ocupacionais, Seguros (Vida em Grupo / IPA / Obrigatório) e
Responsabilidade Civil.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion + lucide-react

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção e pré-visualização:

```bash
npm run build
npm run preview
```

Verificação de tipos:

```bash
npm run typecheck
```

## Deploy na Vercel

O projeto já está configurado para deploy (`vercel.json`).

**Opção A — pelo painel da Vercel (recomendada):**

1. Suba este repositório para o GitHub/GitLab/Bitbucket.
2. Em <https://vercel.com/new>, importe o repositório.
3. A Vercel detecta o framework **Vite** automaticamente. Os valores já vêm
   definidos no `vercel.json`:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`
4. Clique em **Deploy**.

**Opção B — pela CLI:**

```bash
npm i -g vercel
vercel
```

Para publicar em produção:

```bash
vercel --prod
```

## Antes de publicar — pendências obrigatórias

Os itens abaixo estão marcados com `TODO` no código e **precisam ser substituídos
pelos dados reais** antes de o site ir ao ar:

| Item | Onde | Observação |
| --- | --- | --- |
| Número de WhatsApp | `src/data.ts` → `LAWYER_INFO.whatsappNumber` | Formato `55` + DDD + número, sem símbolos. O valor atual é provisório. |
| E-mail do escritório | `src/data.ts` → `LAWYER_INFO.email` | O valor atual é provisório. |
| Depoimentos | `src/data.ts` → `TESTIMONIALS_DATA` | Devem ser depoimentos reais, com autorização expressa e por escrito dos clientes (Provimento nº 205/2021 do CFOAB). |
| Endereço da sede | `src/sections.tsx` (seção `AuthorityMetricsSection`) | A foto da fachada já está publicada; o endereço textual pode ser incluído se o escritório desejar. |

## Imagens

Ficam em `public/images/` e são servidas estaticamente:

- `dr-alan-jantsch.jpg` — retrato usado no topo (hero).
- `escritorio-fachada.jpg` — fachada do edifício (bloco "Onde o escritório atua" e
  fundo da seção final de conversão).
- `worker-rehabilitation.jpg` — imagem editorial da seção "Como funciona".

São os mesmos arquivos enviados originalmente, sem recorte nem recompressão.

## Aviso

Conteúdo meramente informativo, elaborado em observância ao Código de Ética e
Disciplina e ao Provimento nº 205/2021 do Conselho Federal da OAB. O site não tem
vínculo oficial com o Governo Federal ou com o INSS.
