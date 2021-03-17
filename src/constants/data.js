import { Link } from 'react-router-dom'
import { faBriefcase, faEnvelope, faHome, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Emoji from '../components/Emoji/'
import profile from '../static/profile.png'

import chuckWork1 from '../static/chuckWork1.png'
import chuckWork3 from '../static/chuckWork3.png'
import chuckWork4 from '../static/chuckWork4.jpg'

import {
  EMAIL_LINK,
  EMAIL_URL,
  GITHUB_LINK,
  GITHUB_URL,
  JOB_TITLE,
  JOSH_ALLEN_LINK,
  LINKEDIN_LINK,
  LINKEDIN_URL,
  LOCATION,
  NAME,
  PHONE_NUMBER,
  PHONE_NUMBER_FORMATTED,
  RESUME_LAST_UPDATED,
  SCHOOL_LINK,
  TRAIL_LINK,
  WEBSITE_URL,
  WORK_LINK,
} from './constants'

const DOG = <Link to="/about/chuck">my dog</Link>

const CURRENT_YEAR = new Date().getFullYear()
const EXPERIENCE = CURRENT_YEAR - 2014
const CHUCK_AGE = CURRENT_YEAR - 2017

const data = {
  about: {
    title: `About ${NAME.nickname}`,
    content: [
      {
        section: (
          <p key={0}>
            Hi! <Emoji label="waving hand" symbol={'👋'} /> I’m {NAME.first} {NAME.last}.
          </p>
        ),
      },
      {
        section: (
          <p key={1}>
            {EXPERIENCE} years ago, I made the outrageous decision to turn my life upside down and
            attend the {SCHOOL_LINK}. It’s been a wild ride but I haven’t looked back! Changing
            career paths was one of the best decisions I’ve ever made.
          </p>
        ),
      },
      {
        section: (
          <p key={2}>
            Currently, I’m part of the engineering team at {WORK_LINK} where I work on all things
            UX. Most of the projects I’m involved with are part of their newer technology stack
            consisting of ReactJS, XState, and GraphQL. But I’ve been known, on more than one
            occasion, to dip my toes into the older applications running on
            Backbone.js/Marionette.js, Dust.js, and, yes, even jQuery. I work tirelessly with my
            team to ensure our applications are pixel perfect and easily accessible.
          </p>
        ),
      },
      {
        section: (
          <p key={3}>
            These days when I’m not coding, I’m chasing my three little munchkins around the house.
            If the stars align and I get some time alone, I love to take {DOG} for a hike or to
            cycle down the {TRAIL_LINK}.
          </p>
        ),
      },
      {
        section: (
          <p key={4}>I’m inspired by a hot cup of coffee, {JOSH_ALLEN_LINK}, and good music.</p>
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
            Chuck has been my near constant companion since the day he was brought home from the
            Humane Society {CHUCK_AGE} years ago.
          </p>
        ),
      },
      {
        section: (
          <p key={1}>
            Pre-Covid, Chuck’s office duties included (but were not limited to) morning greeter,
            office morale booster, and treat taster. He worked hard and was most committed to his
            role. He looks forward to a time when he can get back to the office.
          </p>
        ),
      },
      {
        section: (
          <p key={2}>
            When Chuck is not at work, he can be found lounging on a soft surface, playing ball, or
            taking a walk with his human.
          </p>
        ),
      },
    ],
    images: [
      {
        alt: 'Chuck proudly displaying his name plate.',
        source: chuckWork4,
      },
      {
        alt: 'Chuck hard at work.',
        source: chuckWork3,
      },
      {
        alt: 'Chuck taking a snooze on the job.',
        source: chuckWork1,
      },
    ],
  },
  contact: {
    title: 'Get in touch',
    content: [
      {
        section: (
          <p key={0}>
            Want to say “Hi!”? Have something you’d like to ask? Interested in hiring me? Let’s
            connect!
          </p>
        ),
      },
      {
        section: (
          <p key={1}>Use the form below. Alternatively, shoot me an email at {EMAIL_LINK}.</p>
        ),
      },
      {
        section: (
          <p key={2}>
            I can also be found on {GITHUB_LINK} and {LINKEDIN_LINK}.
          </p>
        ),
      },
    ],
  },
  home: {
    name: {
      first: NAME.first,
      last: NAME.last,
    },
    profileImage: {
      alt: `${NAME.first} ${NAME.last} headshot`,
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
        description: 'Continuous learner',
      },
      {
        description: 'Listener of vinyl',
      },
      {
        description: 'Animal companion',
      },
      {
        description: 'Bills mafia member',
      },
      {
        description: 'Amateur woodworker',
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
    name: {
      first: NAME.first,
      last: NAME.last,
    },
    jobTitle: JOB_TITLE,
    lastUpdated: RESUME_LAST_UPDATED,
    summary:
      'Talented Front End Developer with 6+ years of experience building and maintaining enterprise-level single page applications. Proficient in HTML, CSS, and JavaScript; as well as modern libraries and frameworks. Looking for an opportunity to collaborate with a group of exceptional engineers on complex projects where I can continue to grow and improve my skillset.',
    jobs: [
      {
        company: 'Benefitfocus',
        location: 'Greenville, SC',
        jobTitle: 'UX Engineer, II, UX Core',
        timePeriod: '2018 - Present',
        responsibilities: [
          {
            description:
              'Utilized ReactJS, GraphQL, and Stripe API to develop a seamless checkout experience for employee paid benefits',
          },
          {
            description: 'Implemented a Salesforce chatbot to improve customer service',
          },
          {
            description:
              'Contributed to a CMS page builder that allows administrators to create custom content',
          },
          {
            description:
              'Worked alongside other developers to build out a reusable UI component library using ReactJS and styled-components; unit tested with Jest',
          },
          {
            description:
              'Developed an internal data health dashboard tool to assist in group configurations',
          },
          {
            description:
              'Migrated legacy applications to the current tech stack - ReactJS, XState, Typescript, and GraphQL',
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
        jobTitle: 'UI Engineer, Global Services',
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
            description: 'Developed applications to meet WCAG level AA requirements',
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
            description: 'Handled confidential information in accordance with HIPAA',
          },
          {
            description: 'Completed training in both inpatient and outpatient pharmacy procedures',
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
      // Work experience no one probably cares about
      // {
      //   company: 'Hickory Hill Farm',
      //   location: 'Geneseo, NY',
      //   jobTitle: 'Groom',
      //   timePeriod: '2002 - 2008',
      //   responsibilities: [
      //     {
      //       description: 'Provided daily care for approximately 20 horses',
      //     },
      //     {
      //       description: 'Contributed to facility maintenance and improvements',
      //     },
      //     {
      //       description: 'Exercised and trained young/inexperienced horses',
      //     },
      //     {
      //       description: 'Attended to sick and injured horses',
      //     },
      //   ],
      // },
      // {
      //   company: 'Wegmans Food Markets',
      //   location: 'Perinton, NY',
      //   jobTitle: 'Cusomter Service Associate',
      //   timePeriod: '2000 - 2007',
      //   responsibilities: [
      //     {
      //       description: 'Completed training in six perishable departments',
      //     },
      //     {
      //       description:
      //         'Ensured that HACCP and company food safety standards were met',
      //     },
      //     {
      //       description:
      //         'Prepared bi-weekly orders for multiple departments and assisted with monthly inventory',
      //     },
      //     {
      //       description: 'Traveled to new markets to assist in store openings',
      //     },
      //   ],
      // },
    ],
    contactInformation: {
      email: EMAIL_URL,
      github: GITHUB_URL,
      linkedIn: LINKEDIN_URL,
      location: LOCATION,
      phone: {
        number: PHONE_NUMBER,
        formattedNumber: PHONE_NUMBER_FORMATTED,
      },
      website: WEBSITE_URL,
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
      icon: faHome,
      label: 'home',
      path: '/',
    },
    {
      icon: faSmileWink,
      label: 'about',
      path: '/about',
    },
    {
      icon: faBriefcase,
      label: 'work',
      path: '/work-experience',
    },
    {
      icon: faEnvelope,
      label: 'contact',
      path: '/contact',
    },
  ],
  footer: {
    copyright: `${CURRENT_YEAR} ${NAME.first} ${NAME.last}, All rights reserved`,
    contactLinks: [
      {
        url: `mailto:${EMAIL_URL}`,
        icon: faEnvelope,
      },
      {
        url: `https://${GITHUB_URL}`,
        icon: faGithub,
      },
      {
        url: `https://www.${LINKEDIN_URL}`,
        icon: faLinkedin,
      },
    ],
  },
}

export default data
