import { TruckIcon, CashIcon, ShieldIcon } from "./icons";

const features = [
  {
    Icon: TruckIcon,
    title: "Livraison rapide",
    text: "Douala & Yaoundé en 24-48h",
  },
  {
    Icon: CashIcon,
    title: "Payez à la livraison",
    text: "Vous payez quand vous recevez",
  },
  {
    Icon: ShieldIcon,
    title: "Qualité garantie",
    text: "Sacs vérifiés avant envoi",
  },
];

// Bande de réassurance affichée sous le hero.
export function TrustBar() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-8 sm:grid-cols-3">
        {features.map(({ Icon, title, text }) => (
          <div key={title} className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-800">
              <Icon />
            </span>
            <div>
              <p className="font-semibold text-neutral-900">{title}</p>
              <p className="text-sm text-neutral-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
