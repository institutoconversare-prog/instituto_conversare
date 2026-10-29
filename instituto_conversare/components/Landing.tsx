import Image from 'next/image';
import LanguageSelect from './LanguageSelect';
import { LANGS, dict, pathOf, type Lang } from '@/lib/i18n';
import { checkoutDe, precoDe } from '@/lib/config';

const PAGE_W = 744;
const PAGE_H = 1052;

function Check() {
  return (
    <svg className="ck" aria-hidden="true" viewBox="0 0 22 22">
      <circle cx="11" cy="11" r="11" fill="#e6f1f0" />
      <path d="M6.5 11.3l3 3 6-6.3" fill="none" stroke="#2f7d7a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Landing({ lang }: { lang: Lang }) {
  const t = dict(lang);
  const img = (name: string) => `/assets/${lang}-${name}.jpg`;
  const preco = precoDe(lang);
  const checkout = checkoutDe(lang);
  const external = checkout.startsWith('http');
  const names = Object.fromEntries(LANGS.map((l) => [l, dict(l).name])) as Record<Lang, string>;
  const n4 = [1, 2, 3, 4] as const;
  const n6 = [1, 2, 3, 4, 5, 6] as const;
  const k = (key: string) => (t as unknown as Record<string, string>)[key];

  return (
    <>
      <header className="top">
        <div className="wrap row">
          <a className="brand" href={pathOf(lang)}>
            <Image src="/assets/logo.png" alt="" width={46} height={46} priority />
            <span>INSTITUTO CONVERSARE</span>
          </a>
          <div className="row gap">
            <LanguageSelect current={lang} names={names} />
            <a className="btn sm navcta" href="#oferta">{t.nav_cta}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-bg">
          <div className="wrap hero">
            <div className="col">
              <span className="eyebrow">{t.eyebrow}</span>
              <h1>{t.h1}</h1>
              <div className="row gap wrapx">
                <a className="btn lg" href="#oferta">{t.cta} · {preco.atual}</a>
                <span className="note">{t.note1}<br />{t.note2}</span>
              </div>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="disc" />
              <div className="book">
                <div className="pages" />
                <div className="cover">
                  <Image src={img('capa-01')} alt="" width={827} height={1170} priority sizes="290px" />
                  <div className="spine" />
                </div>
              </div>
              <div className="tablet">
                <Image src={img('pg-11')} alt="" width={PAGE_W} height={PAGE_H} sizes="190px" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap stack">
            <h2 className="center">{t.pain_t}</h2>
            <div className="g4">
              {n4.map((n) => (
                <div className="pain" key={n}><span className="bar" /><p>{k(`pain${n}`)}</p></div>
              ))}
            </div>
            <p className="center accentline">{t.pain_c}</p>
          </div>
        </section>

        <section className="dark">
          <div className="wrap stack">
            <div className="center col narrow">
              <span className="eyebrow gold">{t.road_e}</span>
              <h2>{t.road_t}</h2>
              <p className="muted">{t.road_s}</p>
            </div>
            <div className="g3">
              {n6.map((n) => (
                <div className="step" key={n}>
                  <span className={`num${n % 2 === 0 ? ' gold' : ''}`}>{n}</span>
                  <h3>{k(`s${n}`)}</h3>
                  <p>{k(`d${n}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap stack">
            <div className="center col narrow">
              <h2>{t.in_t}</h2>
              <p className="muted2">{t.in_s}</p>
            </div>
            <Image
              className="previews-img"
              src={img('previews')}
              alt={`${t.s1} · ${t.s2} · ${t.s3} · ${t.s4}`}
              width={1128}
              height={1544}
              sizes="(max-width:800px) 100vw, 720px"
            />
          </div>
        </section>

        <section className="sand">
          <div className="wrap bonus">
            <div className="col">
              <span className="eyebrow brown">{t.bo_e}</span>
              <h2>{t.bo_t}</h2>
              <div className="feat big"><Check /><p><b>{t.b1t}</b><br />{t.b1d}</p></div>
              <div className="feat big"><Check /><p><b>{t.b2t}</b><br />{t.b2d}</p></div>
              <p className="brownt">{t.bo_n}</p>
              <a className="btn navy" href="#oferta">{t.bo_cta}</a>
            </div>
            <div className="sheets">
              <Image src={img('pg-10')} alt={t.b1t} width={PAGE_W} height={PAGE_H} sizes="240px" />
              <Image src={img('pg-11')} alt={t.b2t} width={PAGE_W} height={PAGE_H} sizes="240px" />
            </div>
          </div>
        </section>

        <section>
          <div className="wrap bio">
            <Image className="photo" src="/assets/alan.jpg" alt="Alan Robson Vieira" width={640} height={640} sizes="260px" />
            <div className="col">
              <span className="eyebrow">{t.au_e}</span>
              <h2>Alan Robson Vieira</h2>
              <p>{t.au_bio}</p>
              <div className="tags">
                {t.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="hero-bg">
          <div className="wrap center-box">
            <div className="offer">
              <span className="badge">{t.of_badge}</span>
              <h2 className="h-offer">{t.title}</h2>
              <div className="prices">
                {preco.antigo && <span className="old">{t.of_from} <s>{preco.antigo}</s></span>}
                <span className="price">{preco.atual}</span>
                <span className="once">{t.of_once}</span>
              </div>
              <div className="feats">
                {n4.map((n) => <div className="feat" key={n}><Check /><span>{k(`f${n}`)}</span></div>)}
              </div>
              <a className="btn lg block" href={checkout} {...(external ? { rel: 'noopener' } : {})}>{t.of_cta}</a>
              <div className="guar">
                <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#2f7d7a" strokeWidth="2.2" strokeLinejoin="round">
                  <path d="M20 4l13 5v9c0 9-6 15-13 18C13 33 7 27 7 18V9z" />
                  <path d="M14 20l4 4 8-8" strokeLinecap="round" />
                </svg>
                <p><b>{t.gu_t}</b> {t.gu_d}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap faq">
            <h2 className="center">{t.faq_t}</h2>
            {n4.map((n) => (
              <details key={n}>
                <summary>{k(`q${n}`)}</summary>
                <p>{k(`a${n}`)}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="dark">
        <div className="wrap stack center">
          <h2>{t.fin_t}</h2>
          <a className="btn lg" href="#oferta">{t.fin_cta}</a>
          <p className="disc-text">{t.disc}</p>
          <p className="copy">© 2026 Instituto Conversare · Alan Robson Vieira</p>
        </div>
      </footer>
    </>
  );
}
