import { BlockChainIcon, Consultation, MarketingIcon, NftIcon, SmartContractIcon, TrustIcon, W3Icon, WebThreeIcon } from "./icons";

export const NAVBAR_LIST = [
  { name: "Home", link: "#home" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#about" }
];

export const PROJECT_LIST = [
  {
    cardImg: "./assets/images/webp/nubbies-img.webp",
    heading: "Nubbies",
    time: "15 : 54 : 12",
    description: "NFT"
  },
  {
    cardImg: "./assets/images/webp/nekozuma-img.webp",
    heading: "Nekozuma",
    time: "15 : 54 : 12",
    description: "NFT"
  },
  {
    cardImg: "./assets/images/webp/galactium-img.webp",
    heading: "Galactium",
    time: "15 : 54 : 12",
    description: "NFT"
  },
  {
    cardImg: "./assets/images/webp/frenz-img.webp",
    heading: "Frenz Forever ",
    time: "15 : 54 : 12",
    description: "NFT"
  },
];

export const SERVICES_LIST = [
  {
    logo: <SmartContractIcon />,
    heading: 'Smart Contract ',
    description: 'Tailored smart contracts to fit your needs , no matter the size. No idea is too big, too small, or too degen... '
  },
  {
    logo: <WebThreeIcon />,
    heading: 'Web3 Services',
    list: [
      'Metmask integration', 'NFT s', 'Dapps', 'Tokenomics', 'Metaverse AR/VR', 'SDK Gaming Integration'
    ]
  },

  {
    logo: <MarketingIcon />,
    heading: 'Marketing / Media',
    description: 'We have worked with some of the spaces most reputable figures to drive audiences.',
  },

  {
    logo: <Consultation />,
    heading: 'Consultation',
    description: 'Have an idea but not sure where to start? Hop on a call with us and we will help you to put plans into action.',
  },

  {
    logo: <NftIcon />,
    heading: 'NFT Services',
    description: 'NFT solutions from start to finish. From Initial Concept to Secondary market listings, we will guide you every step of the way to ensure your project is a successfully and seemlessly delivered come mint day.',
  },
];
export const VALUES_LIST = [
  {
    logo: <W3Icon />,
    heading: 'W3 ',
    description: 'Not your average degens. Karmic is lead by a team of Industry professionals with extensive backgrounds in web3 and web2. We are actively involved in all that we do. Boots on the ground. We know the ins and outs of the space, because we are building it.'
  },
  {
    logo: <BlockChainIcon />,
    heading: 'Blockchain Agnostic ',
    description:'Our team of seasoned developers will help you to launch your project on the network of your choosing- be it ethereum, solana, polygon, etc..'
  },

  {
    logo: <TrustIcon />,
    heading: 'Trust',
    description: "Trustless and results driven development backed by a portfolio of success. You're the captain of the ship, and the keys are always in your hands.",
  }
];

export const PROJECTS_LISTS = [
  {
    image: './assets/images/webp/project-first.webp',
    title: 'Nubbies'
  },
  {
    image: './assets/images/webp/project-second.webp',
    title: 'Nubbies'
  },
  {
    image: './assets/images/webp/project-third.webp',
    title: 'Nubbies'
  },
  {
    image: './assets/images/webp/project-fourth.webp',
    title: 'Nubbies'
  },
  {
    image: './assets/images/webp/project-five.webp',
    title: 'Nubbies'
  },
  {
    image: './assets/images/webp/project-six.webp',
    title: 'Nubbies'
  },

  {
    image: './assets/images/webp/project-seven.webp',
    title: 'Nubbies'
  },
  {
    image: './assets/images/webp/project-eight.webp',
    title: 'Nubbies'
  }
];
export const BUILDERS_LIST = [
  {
    image: './assets/images/webp/builder-img1.webp'
  },
  {
    image: './assets/images/webp/builder-img2.webp'
  },
  {
    image: './assets/images/webp/builder-img4.webp'
  }
]