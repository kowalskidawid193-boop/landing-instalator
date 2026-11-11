import { Link, createFileRoute } from '@tanstack/react-router'
import { definePage, guardRoute, pageHead } from '@softr/sdk'
import {
  ArrowRight,
  Cable,
  CalendarCheck,
  ChevronDown,
  ClipboardList,
  Gauge,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar.tsx'
import { Button } from '#/components/ui/button.tsx'
import { Card, CardContent } from '#/components/ui/card.tsx'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '#/components/ui/collapsible.tsx'
import { LeadForm } from '#/components/lead-form.tsx'

const pageSettings = definePage({
  visibility: { userGroupTypes: ['NON_LOGGED_IN_USERS', 'LOGGED_IN_USERS'] },
  title: 'Elektryk Częstochowa – instalacje i pomiary SEP | Elektryk Online',
  description:
    'Elektryk w Częstochowie i okolicach: nowe instalacje, rozdzielnice, pomiary i odbiory SEP, montaż oświetlenia. Bez telefonów – wypełnij formularz i umów darmowy audyt.',
})

export const Route = createFileRoute('/_public/')({
  beforeLoad: guardRoute(pageSettings),
  head: pageHead(pageSettings),
  component: Landing,
})

const A =
  'https://assets.softr-files.com/applications/ef48e292-4a82-4db7-bd20-0f61727dca4f/assets/generated'

const IMG = {
  hero: `${A}/d1f84c07-e041-4414-9823-02603355eee5.webp`,
  board: `${A}/6aca14ea-6c68-4f88-ab0a-fd93b1cce814.webp`,
  led: `${A}/d303539b-8c01-46cf-881b-c8a88131300f.webp`,
  block: `${A}/a1035537-e0ad-4c25-928e-9a85219f404c.webp`,
  socket: `${A}/aee7e5cf-20f7-4575-995b-2b59abe5004b.webp`,
  measure: `${A}/d9bf4b7c-760b-4bb7-a6b8-427651cdfd33.webp`,
  hob: `${A}/e90c2fb0-551b-4b5a-9eb7-ecdd2604c1dc.webp`,
}

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Wypełnij formularz',
    text: 'Odpowiedz na kilka krótkich pytań o Twój problem lub projekt.',
  },
  {
    icon: CalendarCheck,
    title: 'Umów audyt',
    text: 'Wybierz termin bezpłatnych oględzin z linku w wiadomości e-mail.',
  },
  {
    icon: ShieldCheck,
    title: 'Wycena i realizacja',
    text: 'Otrzymasz wiążący kosztorys. Po akceptacji wykonujemy prace zgodnie z normami SEP.',
  },
]

const SERVICES = [
  {
    icon: Cable,
    title: 'Wymiana i nowe instalacje',
    text: 'Kompleksowe układanie instalacji elektrycznych w domach, mieszkaniach i biurach.',
  },
  {
    icon: Zap,
    title: 'Montaż rozdzielnic i bezpieczników',
    text: 'Modernizacja skrzynek, montaż wyłączników różnicowoprądowych i zabezpieczeń.',
  },
  {
    icon: Gauge,
    title: 'Pomiary i odbiory SEP',
    text: 'Przeglądy okresowe, pomiary ochronne, odbiory instalacji do nadzoru budowlanego.',
  },
  {
    icon: Lightbulb,
    title: 'Montaż oświetlenia i osprzętu',
    text: 'Instalacja lamp, taśm LED, gniazdek, włączników oraz płyt indukcyjnych z wpisem do gwarancji.',
  },
]

const PROJECTS = [
  {
    src: IMG.board,
    title: 'Nowa rozdzielnica 3-fazowa',
    place: 'Częstochowa',
    wide: true,
  },
  {
    src: IMG.hero,
    title: 'Nowe gniazda i oświetlenie w salonie',
    place: 'Częstochowa',
    wide: false,
  },
  {
    src: IMG.hob,
    title: 'Podłączenie płyty indukcyjnej i oświetlenia kuchni',
    place: 'Mstów',
    wide: false,
  },
  {
    src: IMG.led,
    title: 'Oświetlenie LED i szynoprzewody',
    place: 'Kłobuck',
    wide: true,
  },
  {
    src: IMG.measure,
    title: 'Pomiary ochronne i odbiór instalacji',
    place: 'Poczesna',
    wide: false,
  },
  {
    src: IMG.block,
    title: 'Modernizacja instalacji w wielkiej płycie',
    place: 'Blachownia',
    wide: true,
  },
]

const REVIEWS = [
  {
    quote:
      'Formularz zajął mi dwie minuty, a audyt instalacji odbył się już następnego dnia. Żadnego dzwonienia i czekania.',
    name: 'Anna K.',
    where: 'Częstochowa',
    photo:
      'https://images.pexels.com/photos/11946133/pexels-photo-11946133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    quote:
      'Wygodnie, że wszystko załatwiłem online: pytania w formularzu, termin audytu z kalendarza i wycena na mailu. Elektryk przyjechał punktualnie.',
    name: 'Marcin W.',
    where: 'Kłobuck',
    photo:
      'https://images.pexels.com/photos/12871449/pexels-photo-12871449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    quote:
      'Pracuję cały dzień i nie mam czasu na rozmowy. Wypełniłem formularz wieczorem, a audyt rozdzielnicy miałem umówiony w ciągu 48 godzin.',
    name: 'Tomasz R.',
    where: 'Blachownia',
    photo:
      'https://images.pexels.com/photos/8121920/pexels-photo-8121920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
]

const FAQ = [
  {
    q: 'Dlaczego nie podajecie numeru telefonu?',
    a: 'Świadomie obsługujemy zgłoszenia tylko przez formularz. Dzięki temu dostajemy od razu komplet informacji, nic nam nie umyka, a Ty nie czekasz na wolną linię. Każde zgłoszenie dostaje pisemną odpowiedź.',
  },
  {
    q: 'Jak wygląda audyt?',
    a: 'Po wysłaniu formularza dostajesz e-mailem link do kalendarza. Wybierasz dogodny termin, a nasz specjalista przyjeżdża na krótkie oględziny: ocenia stan instalacji, zakres prac i przygotowuje wiążącą wycenę.',
  },
  {
    q: 'Jak szybko dostanę odpowiedź?',
    a: 'Zwykle w ciągu jednego dnia roboczego odpisujemy e-mailem z kolejnymi krokami.',
  },
  {
    q: 'Czy wycena jest wiążąca?',
    a: 'Wycena zawiera zakres prac, materiały i termin. Jeśli nic się nie zmieni w zakresie, cena pozostaje taka, jak w ofercie.',
  },
  {
    q: 'Jakie prace wykonujecie?',
    a: 'Nowe instalacje i wymiany, rozdzielnice i zabezpieczenia, pomiary i odbiory SEP, montaż oświetlenia, gniazdek, włączników oraz płyt indukcyjnych.',
  },
  {
    q: 'Na jakim terenie działacie?',
    a: 'Obsługujemy Częstochowę i okolice w promieniu 30 km. Jeśli jesteś poza tym obszarem, napisz w formularzu, a sprawdzimy, czy możemy dojechać.',
  },
]

function Landing() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pt-12 pb-10 sm:pt-20">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <MapPin className="size-4 text-primary" />
          Częstochowa i okolice
        </p>
        <h1 className="max-w-4xl text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl">
          Bezpieczna instalacja elektryczna{' '}
          <span className="text-primary">bez wydzwaniania</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Szanujemy Twój czas. Odpowiedz na 4 proste pytania online i umów darmowy audyt instalacji. Na miejscu ocenimy koszty i przedstawimy wycenę.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            nativeButton={false}
            render={
              <Link
                to="/"
                hash="formularz"
                hashScrollIntoView={{ behavior: 'smooth', block: 'start' }}
              />
            }
          >
            Wypełnij formularz i umów audyt
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
        <img
          src={IMG.hero}
          alt="Jasny salon z nowymi włącznikami, gniazdkami i oświetleniem"
          className="mt-12 aspect-[21/9] w-full rounded-lg object-cover"
        />
      </section>

      <section id="jak-dzialamy" className="bg-muted/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-24">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Jak działamy: instalacja w trzech prostych krokach
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col gap-4 border-t border-border pt-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <step.icon className="size-6" />
                  </span>
                  <span className="font-heading text-5xl font-extrabold text-muted-foreground/30">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="uslugi"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-24"
      >
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Usługi elektryczne
        </h2>
        <p className="mt-4 flex items-start gap-2 text-xl font-bold text-balance sm:text-2xl">
          <MapPin className="mt-1 size-6 shrink-0 text-primary" />
          Działamy na terenie Częstochowy i w promieniu 30 km
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <li key={s.title}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-3">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="realizacje"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-24"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Realizacje instalacji elektrycznych
          </h2>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <li key={p.title} className={p.wide ? 'lg:col-span-2' : undefined}>
              <figure className="flex flex-col gap-3">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className={`w-full rounded-lg object-cover ${p.wide ? 'aspect-[4/3] lg:aspect-[2/1]' : 'aspect-[4/3]'}`}
                />
                <figcaption>
                  <span className="block font-semibold">{p.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {p.place}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section id="opinie" className="bg-muted/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-24">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Opinie klientów: szybka odpowiedź i wygodny proces
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <Card key={r.name}>
                <CardContent className="flex h-full flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div
                      className="flex gap-1 text-primary"
                      role="img"
                      aria-label="Ocena: 5 na 5 gwiazdek"
                    >
                      {[0, 1, 2, 3, 4].map((n) => (
                        <Star key={n} className="size-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg leading-snug">
                      „{r.quote}”
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar size="lg">
                      <AvatarImage src={r.photo} alt={r.name} />
                      <AvatarFallback>{r.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <p className="text-sm">
                      <span className="font-semibold">{r.name}</span>
                      <span className="text-muted-foreground">
                        {' '}
                        - {r.where}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Najczęstsze pytania o remonty i wycenę online
          </h2>
          <div className="flex flex-col divide-y border-y">
            {FAQ.map((item, i) => (
              <Collapsible key={item.q} defaultOpen={i === 0}>
                <CollapsibleTrigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-data-[panel-open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="pb-5 text-muted-foreground">{item.a}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      <section id="formularz" className="bg-muted/60">
        <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Zamów bezpłatny audyt i wycenę elektryki
          </h2>
          <p className="mt-3 mb-8 text-muted-foreground">
            Wypełnij krótki formularz. Na podstawie zgłoszenia wyślemy e-mail z
            możliwością wyboru terminu oględzin.
          </p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
