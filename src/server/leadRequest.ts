import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const MAKE_WEBHOOK_URL =
  'https://hook.eu1.make.com/nifmtk2f36l6mgv5w949hdnntogmltt5'

const NewLead = z.object({
  imiINazwisko: z.string().trim().min(1, 'Podaj imię i nazwisko.').max(200),
  email: z.string().trim().email('Podaj poprawny adres e-mail.').max(200),
  rodzajPomieszczenia: z.string(),
  zakladanyBudzet: z.string(),
  kiedyChceszRozpoczac: z.string(),
})

export const submitLeadRequest = createServerFn({ method: 'POST' })
  .validator(NewLead)
  .handler(async ({ data }) => {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Nie udało się wysłać danych do Webhooka Make')
    }

    return { ok: true as const }
  })
