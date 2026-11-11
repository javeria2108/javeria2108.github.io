# Javeria Zaheer — Personal Archive

Next.js App Router, strict TypeScript, Tailwind CSS, and Motion for React.

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

```sh
npm run lint
npm run typecheck
npm run build
```

The build exports a static site into `out/`. Pages: Home, Projects (with case
studies), Experience, Journal (LinkedIn post summaries), Reading List,
Courses/certificates, Now, About/contact,
and a print-friendly résumé at `/resume`.

Edit `src/content/profile.ts` for experience, contact details, skills, reading,
and the dated Now snapshot; `src/content/projects.ts` for personal projects;
`src/content/journal.ts` for verified LinkedIn post summaries; and
`src/content/courses.ts` for LinkedIn-listed courses and certificates.
Professional work is included only in Experience. Repository/demo links were
checked against GitHub; missing post and credential URLs are not guessed.
No confidential repositories, internal ticket IDs, or invented screenshots are included.

Shared visual tokens live in `src/app/globals.css`. See `ASSETS.md` for asset
and font credits. External project demos are supplied references; their
availability is not guaranteed. Static pages export as directories containing
`index.html` so nested routes work on GitHub Pages. The custom 404 is `404.html`.

The GitHub Pages workflow in `.github/workflows/publish.yml` builds and deploys
`out/` on pushes to `master` in `javeria2108/javeria2108.github.io`. The repository’s
Pages publishing source must be GitHub Actions. This publishes the site at
`https://javeria2108.github.io/`.
