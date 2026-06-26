// ZAO community projects on Artizen - projects owned by ZAO members (people who have supported
// The ZAO). These are the "ZAO bloc": back them all (buy + boost) so the whole set climbs together.
// Curate them into the ZAO Fund + adjacent funds for stacked match. Edit this list as members launch projects.

export interface CommunityProject {
  name: string;
  owner: string; // the ZAO member who runs it
  slug: string; // artizen.fund/index/p/<slug>
  note: string; // their tie to the ZAO / what it is
}

export const ARTIZEN_PROJECT_BASE = 'https://artizen.fund/index/p/';

export const communityProjects: CommunityProject[] = [
  // Notes verified 2026-06-26 - see research/bloc-projects.md for confidence + sources. Items marked
  // "(confirming)" were not web-verifiable; keep neutral until Zaal confirms.
  { name: 'The Impact Concerts', owner: 'EDInCrypto', slug: 'impact-concerts', note: 'Impact-driven music events; ZAO supporter. (Creator identity confirming.)' },
  { name: 'POIDH', owner: 'Kenny Vidinich', slug: 'poidh', note: 'Non-custodial on-chain bounty platform on Base; BCZ/ZAO run creative bounty rounds on it (zpoidh).' },
  { name: 'Fellenz Tourz North America', owner: 'Tom Fellenz', slug: 'fellenz-tourz-north-america', note: 'Tom Fellenz - veteran event producer + ZAOstock advisor. (Project name/listing confirming.)' },
  { name: 'COC Concertz', owner: 'Thy Revolution', slug: 'cocconcertz', note: '50/50 ZAO x COC live-concert JV - Thy Rev leads, COC owns it. 5 shows, multi-platform stream.' },
  { name: 'Heritage Collection', owner: 'Gneric', slug: 'heritage-collection', note: 'Fashion, music + blockchain showcase. In the ZAO Fund (~$5.8k Artifact sales, June 2026).' },
  { name: 'InSync', owner: 'JED XO', slug: 'insync', note: 'Music by JED XO - Artizen also lists "HOPE", a 5-track EP (~$5.7k sales). (Exact title confirming.)' },
  { name: 'HuRya Empowerment Foundation', owner: 'PolyRaiders (Moses)', slug: 'hurya-empowerment-foundation', note: 'Web3 art funding dignity for girls in Nigeria - 767 Base mints reached 1,000 girls; building a vocational center. Close ZAO ally.' },
  { name: 'The Creator Block', owner: 'KOSBAAR', slug: 'the-creator-block', note: 'Summit where creators showcase + learn to own work on-chain. (Details confirming.)' },
  { name: 'Ecoes of Freedom', owner: 'Trish', slug: 'ecoes-of-freedom', note: 'America 250 - site-specific AR public-art + history. (Details confirming.)' },
  { name: 'Baraza TV', owner: 'Motomoto (Aziz)', slug: 'baraza-tv', note: 'Africa-focused media project, Nairobi. (Exact nature confirming - see research doc.)' },
];
