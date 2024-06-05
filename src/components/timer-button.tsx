"use client";

import {useEffect, useState} from "react";

export default function TimerButton({children}: {children?: React.ReactNode}) {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="flex w-fit flex-col gap-2">
      <button
        className="rounded border bg-white px-4 py-2 text-black"
        type="button"
        onClick={() => setTimer(1)}
      >
        {children}
      </button>
      {Boolean(timer > 0) && (
        <span className="rounded bg-black p-2 text-center text-xl text-white">
          Time elapsed: {timer}
        </span>
      )}
    </div>
  );
}
