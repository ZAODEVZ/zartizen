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
  { name: 'The Impact Concerts', owner: 'EZ (EZinCrypto)', slug: 'impact-concerts', note: 'Regen musician running monthly impact concerts; long-time ZAO supporter.' },
  { name: 'POIDH', owner: 'Kenny', slug: 'poidh', note: 'Bounty platform the BCZ/ZAO crew runs clip-up + creative bounties on.' },
  { name: 'Fellenz Tourz North America', owner: 'Tom Fellenz', slug: 'fellenz-tourz-north-america', note: 'Veteran event producer + ZAOstock advisor; 20+ events run.' },
  { name: 'COC Concertz', owner: 'Thy Revolution', slug: 'cocconcertz', note: '50/50 ZAO x COC live-concert joint venture; Thy Rev leads.' },
  { name: 'Heritage Collection', owner: 'Gneric', slug: 'heritage-collection', note: 'Multidisciplinary fashion, music + blockchain showcase.' },
  { name: 'InSync', owner: 'JedXO', slug: 'insync', note: 'Music project from JedXO (also behind the HOPE EP); ZAO community artist.' },
  { name: 'HuRya Empowerment Foundation', owner: 'PolyRaiders (Moses)', slug: 'hurya-empowerment-foundation', note: 'Web3 art funding dignity for girls (pads, education, vocational center). Close ZAO ally.' },
  { name: 'The Creator Block', owner: 'KOSBAAR', slug: 'the-creator-block', note: 'Two-day summit where creators showcase work + learn to own it on-chain.' },
  { name: 'Ecoes of Freedom', owner: 'Trish', slug: 'ecoes-of-freedom', note: 'America 250 - site-specific AR public-art + history XR project.' },
  { name: 'Baraza TV', owner: 'Motomoto (Aziz)', slug: 'baraza-tv', note: "Africa's AI-anchored broadcast network, Nairobi; pays African creators. ZAO Fund supporter." },
];
