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

export const SITE_URL = 'https://SEU-DOMINIO.com';

export const CHECKOUT: Partial<Record<Lang | 'padrao', string>> = {
  pt: 'https://go.hotmart.com/O108252938M?dp=1',
   padrao: 'https://go.hotmart.com/O108252938M?dp=1',
  };

type Preco = { atual: string; antigo: string };

export const PRECOS: Partial<Record<Lang | 'padrao', Preco>> = {
  pt: { atual: 'R$ 9,90', antigo: '' }, // antigo vazio = sem preço riscado
  de: { atual: '4,90 €', antigo: '7,90 €' },
  fr: { atual: '4,90 €', antigo: '7,90 €' },
  es: { atual: '4,90 €', antigo: '7,90 €' },
  it: { atual: '4,90 €', antigo: '7,90 €' },
  nl: { atual: '€ 4,90', antigo: '€ 7,90' },
  padrao: { atual: 'US$ 4.90', antigo: 'US$ 7.90' },
};

export function precoDe(lang: Lang): Preco {
  return PRECOS[lang] ?? PRECOS.padrao!;
}

export function checkoutDe(lang: Lang): string {
  return CHECKOUT[lang] || CHECKOUT.padrao || '#oferta';
}
