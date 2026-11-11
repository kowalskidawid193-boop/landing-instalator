import type { FormEvent } from 'react'
import { useState } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { toast } from 'sonner'

import { Button } from '#/components/ui/button.tsx'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '#/components/ui/card.tsx'
import { Input } from '#/components/ui/input.tsx'
import { Label } from '#/components/ui/label.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select.tsx'
import { submitLeadRequest } from '#/server/leadRequest.ts'

// Opcje dopasowane 1:1 do wartości w Airtable
const ROOM_ITEMS = [
  { value: 'fotowoltaika', label: 'Fotowoltaika' },
  { value: 'pompy_ciepla', label: 'Pompy ciepła' },
  { value: 'instalacja_elektryczna', label: 'Instalacja elektryczna' },
]

const BUDGET_ITEMS = [
  { value: 'nowy_budynek', label: 'Nowy budynek' },
  { value: 'modernizacja', label: 'Modernizacja' },
  { value: 'obiekt_b2b', label: 'Obiekt B2B' },
]

const START_ITEMS = [
  { value: 'pilny', label: 'Pilny (<30 dni)' },
  { value: 'w_tym_kwartale', label: 'W tym kwartale' },
  { value: 'rozgladam_sie', label: 'Tylko się rozglądam' },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LeadForm() {
  const submit = useServerFn(submitLeadRequest)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [room, setRoom] = useState<string | null>(null)
  const [budget, setBudget] = useState<string | null>(null)
  const [start, setStart] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending) return
    if (name.trim() === '') return setError('Podaj imię i nazwisko.')
    if (!EMAIL_PATTERN.test(email.trim()))
      return setError('Podaj poprawny adres e-mail.')
    if (!room || !budget || !start)
      return setError('Wybierz rodzaj usługi, typ obiektu i termin realizacji.')
    setError(null)
    setPending(true)

    // Wyciągamy dokładny tekst opcji, który wpadnie do Single Select w Airtable
    const roomLabel = ROOM_ITEMS.find((i) => i.value === room)?.label ?? room
    const budgetLabel =
      BUDGET_ITEMS.find((i) => i.value === budget)?.label ?? budget
    const startLabel =
      START_ITEMS.find((i) => i.value === start)?.label ?? start

    try {
      await submit({
        data: {
          imiINazwisko: name,
          email,
          rodzajPomieszczenia: roomLabel,
          zakladanyBudzet: budgetLabel,
          kiedyChceszRozpoczac: startLabel,
        },
      })
      setDone(true)
      toast.success('Zapytanie wysłane')
    } catch {
      setError(
        'Nie udało się wysłać zapytania. Spróbuj ponownie — wybrane opcje zostały zachowane.',
      )
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="bg-card text-card-foreground">
      {!done && (
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">
            Zgłoś projekt elektryczny w 2 minuty
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>
        {done ? (
          <div role="status" className="py-6 text-center">
            <p className="text-lg font-semibold text-white">
              Dziękujemy za zgłoszenie! Nasz zespół skontaktuje się z Tobą w
              ciągu 24 godzin.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="lead-name">Imię i nazwisko</Label>
              <Input
                id="lead-name"
                name="imiINazwisko"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lead-email">Email</Label>
              <Input
                id="lead-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Rodzaj usługi</Label>
              <Select items={ROOM_ITEMS} value={room} onValueChange={setRoom}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wybierz rodzaj usługi" />
                </SelectTrigger>
                <SelectContent>
                  {ROOM_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Typ obiektu</Label>
              <Select
                items={BUDGET_ITEMS}
                value={budget}
                onValueChange={setBudget}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wybierz typ obiektu" />
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Termin realizacji</Label>
              <Select
                items={START_ITEMS}
                value={start}
                onValueChange={setStart}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wybierz termin" />
                </SelectTrigger>
                <SelectContent>
                  {START_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {error ? (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            ) : null}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={pending}
            >
              {pending ? 'Wysyłanie…' : 'Wyślij zgłoszenie i przejdź do audytu'}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
