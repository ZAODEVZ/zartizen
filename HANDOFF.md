# ZArtizen - Handoff (current as of 2026-06-14)

For whoever picks this up next (Zaal, a teammate, or a fresh session). Read README.md for the full
picture; this is the "where it stands + what to do next" layer.

## What this is

The ZAO's operating home for everything Artizen - research, strategy, a ready-to-use kit, and a live
3-page site. Graduated out of the ZAOOS monorepo (2026-06-13) into ZADEVZ/zartizen so parallel sessions
stop colliding the work.

## Live site (deploy via Vercel)

- **https://zartizen.vercel.app** - the ZAO Fund hub (daily featured project, searchable 32-project roster, like-minded funds).
- **https://zartizen.vercel.app/festivals** - the ZAO Festivals umbrella (ZAOstock, Zaoville, how to join).
- **https://zartizen.vercel.app/proposal** - SHAREABLE decision page for ZAO Festivals teammates (create a fund vs curate into existing, with a call for input). Send this one around for feedback.

## The headline decision (needs team input)

A full scan of Artizen (79 funds) reversed the original plan. **Recommendation: do NOT create a new ZAO
Festivals Fund yet - curate ZAOstock + Zaoville INTO existing funds** (We're Loud, Global Music, Greenpill,
ZAO Emerging Culture). Why: the "music white space" is gone (those funds exist and 6 ZAO music projects
are already stacked in Global Music), and a new fund is overhead in a crowded field while the ZAO fund is
already dormant. A dedicated ZAO Festivals Fund is a later, bigger step (only if ZAO wants to host other
organizers). Full reasoning: research/priority-funds.md + research/research-audit.md. The /proposal page
puts this to the team.

## Tasks to absorb (priority order)

1. **Share /proposal** with the ZAO Festivals team, collect input on Option A (create) vs B (curate-into).
2. **Activate the ZAO fund this drive** - it's dormant (~$188); rally the community to collect its projects (kit/outreach-drafts.md #4).
3. **Stack the events** - submit ZAOstock + Zaoville (kit/make-festivals-on-artizen.md) into We're Loud + Global Music + Greenpill + ZAO Emerging Culture.
4. **Put ZOE/Hermes in the Bonfires fund** - our knowledge-graph partner; Arun's DreamStarter + Abraham Nash are already there.
5. **Send the René DM** (kit/outreach-drafts.md #1) only if the team chooses to pursue a dedicated fund.

## Key findings / decisions on record

- Music/festival funds are crowded (We're Loud, Global Music, Greenpill + more) - white-space claim corrected.
- ZAO Fund is dormant per-drive ($188, ~#23); standings are volatile - re-render before quoting any rank.
- The "$14M endowment" is self-reported - on-chain, the ART token's Juicebox project (587) holds ~34 ETH
  and is dormant. Do NOT cite $14M as fact; keep ZAO treasury off the ART token. (research/art-token-onchain.md)
- Ecosystem allies run funds: Bonfires (our partner), Edge City (Telamon), DeSci Asia, Pressman Film.

## Open items

- **Auto-deploy is NOT wired.** Git pushes do NOT trigger Vercel builds - deploys have been manual
  (`npx vercel --prod` as bettercallzaal). Fix with `vercel git connect` so pushes ship themselves.
  Until then, after any change, run a manual deploy or the live site lags the repo.
- We're Loud Fund slug unresolved (couldn't render its roster); curator = Pete Menchetti (We're Loud Fest).
- Verify the $14M: render Juicebox project 587's full treasury (browser/subgraph) to settle it.

## Repo layout

- `research/` - 15 docs incl. the full 79-fund directory, the audit, priority-fund renders, on-chain checks (see research/README.md).
- `kit/` - copy-paste outreach, submissions, fund proposal, daily spotlights, launch posts, operating rhythm.
- `app/` - the Next.js site (`/`, `/festivals`, `/proposal` + OG images). `npm install && npm run dev`.
- README.md (front door) + CLAUDE.md (agent/collaborator context) + this file.

## Cold-start for a new session

- Read README.md, then research/priority-funds.md + research/research-audit.md for the current strategy.
- Artizen is a Bubble.io app - curl/exa return empty shells; render fund pages with a headless browser.
- Standings change per-drive; never trust a cached number.
- Contacts: René Pinnell (@RJPinnell), Nate Van Cleve; Bonfires team (our partner); Pete Menchetti (We're Loud).
- Human-only actions (send DMs, submit projects, collect/boost, Console) are the operator's; the kit has the copy.
