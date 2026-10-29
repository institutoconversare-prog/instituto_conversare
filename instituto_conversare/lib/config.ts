// =====================================================================
//  CONFIGURAÇÃO DA PÁGINA DE VENDAS — edite só este arquivo
// =====================================================================
//
//  SITE_URL: o endereço final do site (ex.: "https://manualdebolso.com").
//            Usado nas tags de idioma (hreflang) e nas prévias de links.
//
//  CHECKOUT: link de pagamento (Hotmart, Kiwify, Eduzz...) por idioma.
//            Idioma sem link próprio usa "padrao". Se "padrao" estiver
//            vazio, o botão apenas rola até a seção da oferta.
//
//  PRECOS:   "atual" em destaque e "antigo" riscado (deixe '' para não mostrar).
//            ATENÇÃO: os valores em € e US$ são EXEMPLOS — troque pelos
//            preços reais do seu checkout antes de publicar.
//
//  Códigos: pt en es fr de it nl pl ru tr ja zh ko ar hi
// =====================================================================

import type { Lang } from './i18n';

export const SITE_URL = 'https://institutoconversare.vercel.app';

export const CHECKOUT: Partial<Record<Lang | 'padrao', string>> = {
  pt: 'https://pay.hotmart.com/O108252938M',
  padrao: 'https://pay.hotmart.com/O108252938M', // troque quando criar o produto internacional em dólar
};

type Preco = { atual: string; antigo: string };

export const PRECOS: Partial<Record<Lang | 'padrao', Preco>> = {
  pt: { atual: 'R$ 9,90', antigo: '' }, // antigo vazio = sem preço riscado
  de: { atual: '2,00 €', antigo: '7,90 €' },
  fr: { atual: '2,00 €', antigo: '7,90 €' },
  es: { atual: '2,00 €', antigo: '7,90 €' },
  it: { atual: '2,00 €', antigo: '7,90 €' },
  nl: { atual: '€ 2,00', antigo: '€ 7,90' },
  padrao: { atual: 'US$ 2,00', antigo: 'US$ 7.90' },
};

export function precoDe(lang: Lang): Preco {
  return PRECOS[lang] ?? PRECOS.padrao!;
}

export function checkoutDe(lang: Lang): string {
  return CHECKOUT[lang] || CHECKOUT.padrao || '#oferta';
}
