import Link from "next/link";

import TimerButton from "@/components/timer-button";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const randomId = crypto.randomUUID();

  return (
    <section>
      <Link href={`/${randomId}`}>
        <TimerButton>Go to {randomId}</TimerButton>
      </Link>
    </section>
  );
}
