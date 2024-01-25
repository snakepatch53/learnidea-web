import { differenceInMilliseconds, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

export default function Chronometer({ datetime, className = "", classNameFinish = "" }) {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const intervalo = setInterval(() => {
            const ahora = new Date();
            const diferencia = differenceInMilliseconds(datetime, ahora);
            const tiempoRestante = intervalToDuration({ start: ahora, end: datetime });
            setTime(tiempoRestante);
            if (diferencia < 0) clearInterval(intervalo);
        }, 1000);
        return () => clearInterval(intervalo);
    }, [datetime, time]);
    if (time.seconds > 0)
        return (
            <div className={"flex justify-center gap-[2px] min-w-36 " + className}>
                <span className="text-[var(--c1-txt2)]">{time.days || 0}</span>
                <span className="mr-2">D</span>
                <span className="text-[var(--c1-txt2)]">{time.hours || 0}</span>
                <span className="mr-2">H</span>
                <span className="text-[var(--c1-txt2)]">{time.minutes || 0}</span>
                <span className="mr-2">M</span>
                <span className="text-[var(--c1-txt2)]">{time.seconds || 0}</span>
                <span className="mr-2">S</span>
            </div>
        );
    else
        return (
            <span className={"min-w-36 text-[var(--c1-txt2)] font-content " + classNameFinish}>
                🎉 ¡Ya ha empezado! 😎
            </span>
        );
}
