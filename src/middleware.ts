import { defineMiddleware } from "astro:middleware";
import { DEFAULT_LANGUAGE, LANGUAGES } from "@/features/i18n";

export const onRequest = defineMiddleware((context, next) => {
    const { pathname } = context.url;

    // Verificar si ya tiene un prefijo de idioma válido
    const hasLangPrefix = Object.values(LANGUAGES).some(
        (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
    );

    if (!hasLangPrefix) {
        // Reescribir /about → /es/about, / → /es/, etc.
        const newPath = `/${DEFAULT_LANGUAGE}${pathname === "/" ? "/" : pathname}`;
        return context.rewrite(newPath);
    }

    return next();
});