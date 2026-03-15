import Icon from '@/components/ui/icon';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/49e99abb-d129-4f88-9d15-d27bfc85ebd1/files/c561276c-9e3e-45c1-b046-77bfcc93229f.jpg';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* TOP BAR — Telegram CTA */}
      <div className="bg-surface-2 border-b border-border py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
            Meridian Capital · Инвестиции в недвижимость
          </span>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gold hover-gold font-body text-xs tracking-widest uppercase transition-all group"
          >
            <span className="hidden sm:inline">Подпишитесь на наш канал</span>
            <span className="sm:hidden">Telegram</span>
            <Icon name="Send" size={13} className="text-gold group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-display text-xl tracking-[0.12em] uppercase text-foreground font-light">
              MERIDIAN
            </span>
            <span className="section-label" style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}>
              Capital Group
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#beginner" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover-gold">
              Для начинающих
            </a>
            <a href="#experienced" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover-gold">
              Для опытных
            </a>
            <a href="#major" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover-gold">
              Крупным инвесторам
            </a>
          </div>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs"
          >
            Консультация
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="section-label mb-6 animate-fade-in-up delay-100">
              Профессиональное управление капиталом
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light leading-[0.95] text-foreground mb-8 animate-fade-in-up delay-200">
              Недвижимость<br />
              <em className="text-gold not-italic">как инструмент</em><br />
              роста капитала
            </h1>
            <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-lg mb-12 animate-fade-in-up delay-300" style={{ fontWeight: 300 }}>
              Мы помогаем инвесторам любого уровня превращать капитал в стабильный доход через тщательно отобранные объекты жилой и коммерческой недвижимости.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <a href="#beginner" className="btn-gold">
                Начать инвестировать
              </a>
              <a href="#experienced" className="btn-outline-gold">
                Узнать об условиях
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border animate-fade-in-up delay-500">
            {[
              { num: '12+', label: 'лет на рынке' },
              { num: '₽ 8,4 млрд', label: 'под управлением' },
              { num: '340+', label: 'успешных сделок' },
              { num: '18%', label: 'средняя доходность' },
            ].map(({ num, label }) => (
              <div key={label} className="bg-surface px-6 py-5">
                <div className="stat-number text-3xl sm:text-4xl">{num}</div>
                <div className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1" style={{ fontWeight: 400 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* SECTION: BEGINNING INVESTORS */}
      <section id="beginner" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-6">Уровень I</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Для начинающих<br />
                <em className="text-gold not-italic">инвесторов</em>
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8" style={{ fontWeight: 300 }}>
                Ваш первый шаг в мире инвестиционной недвижимости — с минимальными рисками и полным сопровождением на каждом этапе. Мы берём на себя всю операционную работу.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Порог входа от 1 000 000 ₽',
                  'Гарантированная доходность 10–13% годовых',
                  'Персональный менеджер на весь срок',
                  'Обучение и аналитика в Telegram-канале',
                  'Ежеквартальные выплаты дохода',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-gold" />
                    </div>
                    <span className="font-body text-sm text-foreground/80" style={{ fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Записаться на консультацию
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-luxury p-6 col-span-2">
                <div className="section-label mb-3">Доходность</div>
                <div className="font-display text-5xl font-light text-gold mb-2">10–13%</div>
                <p className="font-body text-xs text-muted-foreground" style={{ fontWeight: 300 }}>
                  годовых по жилой недвижимости Москвы и МО
                </p>
              </div>
              {[
                { icon: 'Shield', title: 'Юридическая чистота', desc: 'Полная проверка каждого объекта' },
                { icon: 'TrendingUp', title: 'Рост актива', desc: 'Прирост стоимости 6–10% в год' },
                { icon: 'Clock', title: 'Срок', desc: 'От 12 месяцев' },
                { icon: 'Users', title: 'Портфель', desc: 'Диверсификация активов' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card-luxury p-5">
                  <Icon name={icon} size={18} className="text-gold mb-3" />
                  <div className="font-body text-xs font-medium text-foreground mb-1 tracking-wide">{title}</div>
                  <div className="font-body text-xs text-muted-foreground" style={{ fontWeight: 300 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* SECTION: EXPERIENCED INVESTORS */}
      <section id="experienced" className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-6">Уровень II</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
              Для опытных<br />
              <em className="text-gold not-italic">инвесторов</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border mb-12">
            {[
              {
                num: '15–22%',
                label: 'Доходность',
                desc: 'годовых по коммерческой недвижимости и стратегиям перепродажи',
              },
              {
                num: '₽ 5 млн+',
                label: 'Порог входа',
                desc: 'с доступом к закрытым предложениям и эксклюзивным лотам',
              },
              {
                num: '24ч',
                label: 'Реакция',
                desc: 'приоритетный доступ к новым объектам раньше публичного рынка',
              },
            ].map(({ num, label, desc }) => (
              <div key={label} className="bg-background px-8 py-10 group hover:bg-surface-2 transition-colors duration-400">
                <div className="stat-number mb-2">{num}</div>
                <div className="section-label mb-4">{label}</div>
                <div className="divider-gold mb-4" style={{ width: '40px' }} />
                <p className="font-body text-sm text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Коммерческая недвижимость',
                yield: '15–18% год.',
                tags: ['Офисы', 'Ритейл', 'Склады'],
                desc: 'Стабильная арендная база, долгосрочные договоры с якорными арендаторами',
              },
              {
                title: 'Стратегия «купить и перепродать»',
                yield: '18–22% год.',
                tags: ['Редевелопмент', 'Новостройки', 'Реновация'],
                desc: 'Работаем с недооценёнными активами и объектами в стадии строительства',
              },
            ].map(({ title, yield: yld, tags, desc }) => (
              <div key={title} className="card-luxury p-8 bg-background">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-2xl font-light">{title}</h3>
                  <div className="text-right">
                    <div className="font-display text-2xl text-gold font-light">{yld}</div>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed" style={{ fontWeight: 300 }}>{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="font-body text-xs px-3 py-1.5 border border-border text-muted-foreground tracking-wider uppercase" style={{ fontWeight: 400 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
              Получить персональное предложение
            </a>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* SECTION: MAJOR INVESTORS */}
      <section id="major" className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(43,65%,62%) 0%, transparent 60%), radial-gradient(circle at 80% 50%, hsl(220,80%,40%) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <p className="section-label mb-6">Уровень III</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                Крупным<br />
                <em className="text-gold not-italic">инвесторам</em>
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-10" style={{ fontWeight: 300 }}>
                Для инвесторов с капиталом от 50 млн рублей мы формируем индивидуальные инвестиционные стратегии, предоставляем закрытые аналитические материалы и доступ к сделкам институционального уровня.
              </p>
              <div className="border-l-2 border-gold pl-6 mb-10">
                <p className="font-display text-xl font-light italic text-foreground/70 leading-relaxed">
                  «Мы не просто управляем активами — мы строим долгосрочную архитектуру капитала для каждого клиента»
                </p>
                <p className="font-body text-xs text-muted-foreground mt-4 tracking-wider uppercase" style={{ fontWeight: 500 }}>
                  Андрей Соколов, управляющий партнёр
                </p>
              </div>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Приватная встреча
              </a>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  icon: 'Building2',
                  title: 'Институциональные сделки',
                  yield: '20–28%',
                  desc: 'Участие в крупных девелоперских проектах, портфельные сделки, co-investment с ведущими застройщиками. Минимальный вход от 50 млн ₽.',
                },
                {
                  icon: 'Globe',
                  title: 'Зарубежная недвижимость',
                  yield: '12–16% USD',
                  desc: 'ОАЭ, Турция, Сербия, Таиланд. Защита капитала в твёрдой валюте, ВНЖ за инвестиции, налоговая оптимизация.',
                },
                {
                  icon: 'BarChart3',
                  title: 'ЗПИФ недвижимости',
                  yield: '14–18%',
                  desc: 'Участие в закрытых паевых фондах под управлением Meridian Capital. Ликвидность выше прямых инвестиций, налоговые льготы.',
                },
                {
                  icon: 'Landmark',
                  title: 'Доверительное управление',
                  yield: 'Индивидуально',
                  desc: 'Полное делегирование управления портфелем. SLA на отчётность, dedicated team, квартальные board meetings.',
                },
              ].map(({ icon, title, yield: yld, desc }) => (
                <div key={title} className="card-luxury flex gap-6 p-6 group">
                  <div className="flex-shrink-0 w-10 h-10 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                    <Icon name={icon} size={18} className="text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <h3 className="font-body text-sm font-medium tracking-wide text-foreground">{title}</h3>
                      <span className="font-display text-lg text-gold font-light flex-shrink-0">{yld}</span>
                    </div>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed" style={{ fontWeight: 300 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* CTA FINAL */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-6">Начните сегодня</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light mb-6 leading-tight">
            Ваш капитал должен<br />
            <em className="text-gold not-italic">работать</em>
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-10 leading-relaxed" style={{ fontWeight: 300 }}>
            Подпишитесь на Telegram-канал Meridian Capital — закрытые аналитические материалы, обзоры рынка и эксклюзивные инвестиционные предложения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-3 justify-center"
            >
              <Icon name="Send" size={15} />
              Подписаться на Telegram
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              Записаться на консультацию
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-display text-base tracking-[0.15em] uppercase text-foreground font-light">MERIDIAN</span>
            <span className="font-body text-xs text-muted-foreground ml-3" style={{ fontWeight: 300 }}>Capital Group</span>
          </div>
          <p className="font-body text-xs text-muted-foreground text-center" style={{ fontWeight: 300 }}>
            © 2024 Meridian Capital Group · Лицензия ЦБ РФ · Инвестиции сопряжены с риском
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover-gold tracking-wider uppercase transition-colors" style={{ fontWeight: 300 }}>
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}