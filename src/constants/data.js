import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import profile from '../assets/profile.png'

// TODO: Use an existing gallery; hand roll something??
import chuckWork1 from '../assets/chuckWork1.png'
import chuckWork1TN from '../assets/chuckWork1TN.jpg'
import chuckWork2 from '../assets/chuckWork2.png'
import chuckWork2TN from '../assets/chuckWork2TN.jpg'
import chuckWork3 from '../assets/chuckWork3.png'
import chuckWork3TN from '../assets/chuckWork3TN.jpg'
import chuckWork4 from '../assets/chuckWork4.jpg'
import chuckWork4TN from '../assets/chuckWork4TN.jpg'
import chuckBall from '../assets/chuckBall.jpg'
import chuckBlankets from '../assets/chuckBlankets.jpg'
import chuckGeorge from '../assets/chuckGeorge.jpg'
import chuckWinter from '../assets/chuckWinter.jpg'

import {
  EMAIL,
  EMAIL_URL,
  GITHUB,
  GITHUB_URL,
  JOSH_ALLEN,
  LINKEDIN,
  LINKEDIN_URL,
  SCHOOL,
  TRAIL,
  WORK,
} from './links'

const DOG = <Link to="/chuck">my dog</Link>

const CURRENT_YEAR = new Date().getFullYear()
const EXPERIENCE = CURRENT_YEAR - 2014
const CHUCK_AGE = CURRENT_YEAR - 2017

const data = {
  about: {
    title: 'About Jen',
    content: [
      {
        section: <p key={0}>Hi, I’m Jennifer Miller.</p>,
      },
      {
        section: (
          <p key={1}>
            {EXPERIENCE} years ago, I made the outrageous decision to turn my
            life upside down and attend the {SCHOOL}. It’s been a wild ride but
            I haven’t looked back! Changing career paths was one of the best
            decisions I’ve ever made. I now have the opportunity to learn
            something new on a daily basis!
          </p>
        ),
      },
      {
        section: (
          <p key={2}>
            Currently, I’m part of the engineering team at {WORK} where I work
            on all things UX. Most of the projects I'm involved with are part of
            our newer technology stack consisting of React.js, Typescript,
            XState, and GraphQL. But, I’ve been known (on more than one
            occasion) to dip my toes into our older applications running on
            Backbone.js/Marionette.js, Dust.js, and, yes, even jQuery.
          </p>
        ),
      },
      {
        section: (
          <p key={3}>
            These days when I’m not coding, I’m chasing my three little
            munchkins around the house. If the stars align and I get some time
            alone, I love to take {DOG} for a hike or cycle down the {TRAIL}.
          </p>
        ),
      },
      {
        section: (
          <p key={4}>
            I’m inspired by a hot cup of coffee, {JOSH_ALLEN}, and good music.
          </p>
        ),
      },
    ],
  },
  chuck: {
    title: 'Chuck',
    content: [
      {
        section: (
          <p key={0}>
            Chuck has been my near constant companion ever since he was brought
            home from the Humane Society {CHUCK_AGE} years ago.
          </p>
        ),
      },
      {
        section: (
          <p key={1}>
            Pre-Covid, Chuck's office duties included (but were not limited to)
            morning greeter, office morale booster, and treat taster. He worked
            hard and was most committed to his role. He is looking forward to a
            time when he can get back to the office.
          </p>
        ),
      },
      {
        section: (
          <p key={2}>
            When Chuck's not at work, he can be found lounging on a soft
            surface, playing ball, or taking a walk with his human.
          </p>
        ),
      },
    ],
    workImages: [
      {
        title: 'Chuck proudly displaying his name plate.',
        id: 'chuck0',
        original: chuckWork4,
        thumbnail: chuckWork4TN,
      },
      {
        title: 'Chuck hard at work.',
        id: 'chuck1',
        original: chuckWork3,
        thumbnail: chuckWork3TN,
      },
      {
        title: 'Chuck taking a snooze on the job.',
        id: 'chuck2',
        original: chuckWork1,
        thumbnail: chuckWork1TN,
      },
      {
        title: 'Chuck keeping me company at work.',
        id: 'chuck3',
        original: chuckWork2,
        thumbnail: chuckWork2TN,
      },
    ],
    playImages: [
      {
        alt: 'Chuck going for a winter hike.',
        source: chuckWinter,
      },
      {
        alt: 'Chuck resting among blankets.',
        source: chuckBlankets,
      },
      {
        alt: 'Chuck resting on his ball after playtime.',
        source: chuckBall,
      },
      {
        alt: 'Chuck napping by the fireplace with his cat friend.',
        source: chuckGeorge,
      },
    ],
  },
  contact: {
    title: 'Get in touch',
    content: [
      {
        section: (
          <p key={0}>
            Want to say “Hi!”? Have something you’d like to ask? Interested in
            hiring me? Get in touch!
          </p>
        ),
      },
      {
        section: (
          <p key={1}>
            User the form below. Or, alternatively, shoot me an email at {EMAIL}
            .
          </p>
        ),
      },
      {
        section: (
          <p key={2}>
            I can also be found on {GITHUB} and {LINKEDIN}.
          </p>
        ),
      },
    ],
  },
  home: {
    name: {
      first: 'Jennifer',
      last: 'Miller',
    },
    profileImage: {
      alt: 'Jennifer Miller headshot',
      source: profile,
    },
    hobbies: [
      {
        description: 'Front end developer',
      },
      {
        description: 'Mother of three',
      },
      {
        description: 'Coffee drinker',
      },
      {
        description: 'Continous learner',
      },
      {
        description: 'Listener of vinyl',
      },
      {
        description: 'Animal companion',
      },
      {
        description: 'Amateur woodworker',
      },
      {
        description: 'Bills mafia member',
      },
      {
        description: 'Outdoor enthusiast',
      },
      // {
      //     description: 'Gastronome'
      // }
    ],
  },
  work: {
    name: 'Jennifer Miller',
    jobTitle: 'Front End Developer',
    about:
      'Talented Front End Developer with 6+ years of experience building and maintaining enterprise-level single page applications. Proficient in HTML, CSS, and JavaScript; as well as modern libraries and frameworks. Looking for an opportunity to collaborate with a group of exceptional engineers on complex projects where I can continue to grow and improve my skillset.',
    jobs: [
      {
        company: 'Benefitfocus',
        location: 'Greenville, SC',
        jobTitle: 'Front End Developer, II, UX Core,',
        timePeriod: '2018 - Present',
        responsibilities: [
          {
            description:
              'Utilized React.js, GraphQL, and Stripe API to develop a seamless checkout experience for employee paid benefits',
          },
          {
            description:
              'Implemented a Salesforce chatbot to improve customer service',
          },
          {
            description:
              'Contributed to a CMS page builder that allows administrators to create custom content',
          },
          {
            description:
              'Worked alongside other developers to build out a reusable UI component library using React.js and styled-components; unit tested with Jest',
          },
          {
            description:
              'Developed an internal data health dashboard tool to assist in group configurations',
          },
          {
            description:
              'Migrated legacy applications to the current tech stack - React.js, XState, Typescript, and GraphQL',
          },
          {
            description:
              'Wrote technical documentation for internal users; with a focus on helping new hires and cross-trained developers',
          },
        ],
      },
      {
        company: 'Benefitfocus',
        location: 'Greenville, SC',
        jobTitle: 'Front End Developer, Global Services,',
        timePeriod: '2014 - 2018',
        responsibilities: [
          {
            description:
              'Collaborated with designers and product owners to ensure designs were efficient and technically sound',
          },
          {
            description:
              'Developed various client specific applications with Backbone.js and Marionette.js',
          },
          {
            description:
              'Contributed to a reusable UI component library built with Dust.js and JavaScript; unit tested with Mocha',
          },
          {
            description:
              'Using Less.js, skinned various customer facing platforms to allow for private labels',
          },
          {
            description:
              'Ensured cross-browser compatibility across all customer facing applications',
          },
          {
            description:
              'Developed applications to meet WCAG level AA requirements',
          },
        ],
      },
      {
        company: 'Dept. of Veterans Affairs',
        location: 'Canandaigua, NY',
        jobTitle: 'Certified Pharmacy Technician',
        timePeriod: '2012 - 2014',
        responsibilities: [
          {
            description:
              'Handled confidential information in accordance with HIPAA',
          },
          {
            description:
              'Completed training in both inpatient and outpatient pharmacy procedures',
          },
          {
            description:
              'Addressed veterans’ questions and concerns both in person and on the phone',
          },
          {
            description: 'Accurately and efficiently filled prescriptions',
          },
        ],
      },
      {
        company: 'Wegmans Food Markets',
        location: 'Geneseo, NY',
        jobTitle: 'Pharmacy Technician',
        timePeriod: '2007 - 2012',
        responsibilities: [
          {
            description:
              "Worked extensively with pharmacists, doctors' offices, and insurance companies to meet and exceed customers' needs and expectations.",
          },
          {
            description: 'Meticulously processed prescription data entry',
          },
          {
            description: 'Oversaw daily ordering and inventory maintenance',
          },
          {
            description: 'Wrote weekly schedule for approximately 25 employees',
          },
          {
            description: 'Promoted employee development',
          },
          {
            description: 'Organized and supported employee wellness screenings',
          },
        ],
      },
      {
        company: 'Hickory Hill Farm',
        location: 'Geneseo, NY',
        jobTitle: 'Groom',
        timePeriod: '2002 - 2008',
        responsibilities: [
          {
            description: 'Provided daily care for approximately 20 horses',
          },
          {
            description: 'Contributed to facility maintenance and improvements',
          },
          {
            description: 'Exercised and trained young/inexperienced horses',
          },
          {
            description: 'Attended to sick and injured horses',
          },
        ],
      },
      {
        company: 'Wegmans Food Markets',
        location: 'Perinton, NY',
        jobTitle: 'Cusomter Service Associate',
        timePeriod: '2000 - 2007',
        responsibilities: [
          {
            description: 'Completed training in six perishable departments',
          },
          {
            description:
              'Ensured that HACCP and company food safety standards were met',
          },
          {
            description:
              'Prepared bi-weekly orders for multiple departments and assisted with monthly inventory',
          },
          {
            description: 'Traveled to new markets to assist in store openings',
          },
        ],
      },
    ],
    // TODO: Icon links for web; written out link if pdf (if we make it that far)
    contactInformation: {
      email: EMAIL_URL,
      github: GITHUB_URL,
      linkedIn: LINKEDIN_URL,
      location: 'Greenville, SC',
      phone: '585.489.7590',
    },
    education: [
      {
        description:
          'The Iron Yard Academy was an intensive, 12-week front-end engineering program.',
        location: 'Greenville, SC',
        name: 'The Iron Yard',
        timePeriod: '2014',
      },
      {
        description: 'Bachelor’s Degree in Mathematics',
        location: 'Geneseo, NY',
        name: 'State University of New York College at Geneseo ',
        timePeriod: '2002 - 2016',
      },
    ],
    // TODO: Switch these to plain arrays to use array.join(', ')?
    technicalSkills: [
      {
        title: 'Languages',
        skills: [
          {
            name: 'HTML',
          },
          {
            name: 'CSS',
          },
          {
            name: 'JavaScript/ECMAScript6',
          },
        ],
      },
      {
        title: 'Frameworks & Libraries',
        skills: [
          {
            name: 'ReactJS',
          },
          {
            name: 'Redux',
          },
          {
            name: 'XState',
          },
          {
            name: 'GraphQL',
          },
          {
            name: 'Backbone.js/Marionette.js',
          },
          {
            name: 'Dust.js',
          },
          {
            name: 'jQuery',
          },
          {
            name: 'Styled-components',
          },
          {
            name: 'Jest',
          },
          {
            name: 'Mocha',
          },
        ],
      },
      {
        title: 'CSS Preprocessors',
        skills: [
          {
            name: 'Less',
          },
          {
            name: 'Sass',
          },
        ],
      },
      {
        title: 'Additional Skills',
        skills: [
          {
            name: 'Git',
          },
          {
            name: 'Jira',
          },
          {
            name: 'Babel',
          },
          {
            name: 'Npm',
          },
          {
            name: 'Webpack',
          },
          {
            name: 'component libraries',
          },
          {
            name: 'cross browser development',
          },
          {
            name: 'accessibility',
          },
          {
            name: 'responsive web development',
          },
        ],
      },
    ],
  },
  navigation: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/work-experience',
      label: 'Work',
    },
    {
      path: '/contact',
      label: 'Contact',
    },
  ],
  footer: {
    content: <span>&#169; {CURRENT_YEAR} Jennifer Miller</span>,
  },
  personalLinks: [
      {
        link: (
          <a key={0} href={`mailto:${EMAIL_URL}`}>
            <FontAwesomeIcon icon={faEnvelope} title="Send Jen an email" />
          </a>
        ),
      },
      {
        link: (
          <a key={1} href={`https://${GITHUB_URL}`}>
            <FontAwesomeIcon
              icon={faGithub}
              title="View Jen's Github profile"
            />
          </a>
        ),
      },
      {
        link: (
          <a key={2} href={`https://www.${LINKEDIN_URL}`}>
            <FontAwesomeIcon
              icon={faLinkedin}
              title="View Jen's LinkedIn profile"
            />
          </a>
        ),
      },
  ]
}

export default data