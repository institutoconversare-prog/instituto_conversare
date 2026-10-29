# Pequeno Manual de Bolso Mental — página de vendas (Next.js)

Next.js 15 (App Router) + TypeScript. 15 idiomas, cada um com a sua URL
(`/`, `/en/`, `/es/`, `/de/`, `/ar/`...), gerados como páginas estáticas.

## Antes de publicar — edite `lib/config.ts`
- `SITE_URL`: seu domínio final.
- `CHECKOUT`: link de pagamento por idioma (ou só `pt` e `padrao`).
- `PRECOS`: os valores em € e US$ são **exemplos** — troque pelos reais.

## Publicar na Vercel (pelo GitHub)
1. Crie um repositório vazio no GitHub.
2. Descompacte o zip. Abra a pasta e **selecione tudo o que está DENTRO dela**
   (`app`, `components`, `content`, `lib`, `public`, `package.json`...).
3. No GitHub: **Add file → Upload files** → arraste a seleção → **Commit changes**.
   - Confira que, na página do repositório, aparecem as pastas `app`, `components`,
     `lib`, `public` e o `package.json` **na raiz** (não dentro de outra pasta).
4. Na Vercel: **Add New → Project → Import** o repositório → **Deploy**.

## Rodar no computador
```bash
npm install
npm run dev      # http://localhost:3000
```

## Onde mudar o quê
- Textos de todos os idiomas: `content/texts.json`
- Layout: `components/Landing.tsx`
- Cores e estilo: `app/globals.css`
- Imagens: `public/assets/`
