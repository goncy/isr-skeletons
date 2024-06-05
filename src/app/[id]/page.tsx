import Link from "next/link";

import TimerButton from "@/components/timer-button";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [];
}

export default async function IdPage({params: {id}}: {params: {id: string}}) {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));

  return (
    <div>
      <h1>{id} page</h1>
      <Link href="/">
        <TimerButton>Go back to home</TimerButton>
      </Link>
    </div>
  );
}
