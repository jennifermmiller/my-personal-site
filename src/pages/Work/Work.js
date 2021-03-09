import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBusinessTime,
  faEnvelope,
  faGraduationCap,
  faLaptop,
  faMapMarker,
  faMobileAlt,
  faPhoneAlt,
  faTools,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {
  mediaQuery,
  mediaQueryWithPrint,
  MOBILE,
  MOBILE_SM,
  TABLET,
} from '../../constants/breakpoints'
import PageTitle from '../../components/PageTitle'

const HeadingContainer = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingBottom: '3rem',
})

const Name = styled.h1(({ theme }) => ({
  marginBottom: '0',
  textAlign: 'center',
  textTransform: 'uppercase',
  border: `3px solid ${theme.textHighlight}`,
  zIndex: '5',
  padding: '1rem 5rem',
  backgroundColor: theme.nameBg,
  ' > span:first-child': {
    fontWeight: '400',
  },
  ' > span:last-child': {
    color: theme.textHighlight,
  },
  [mediaQueryWithPrint(`(min-width: ${MOBILE})`)]: {
    marginBottom: '0',
  },
  '@media print': {
    backgroundColor: '#fff',
    fontSize: '28pt',
  },
}))

const JobTitle = styled.div(({ theme }) => ({
  width: '110%',
  padding: '3.5rem 0 0.85rem',
  marginTop: '-3rem',
  backgroundColor: theme.titleBg,
  display: 'flex',
  justifyContent: 'center',
  ' > span': {
    fontWeight: '200',
  },
  '@media print': {
    backgroundColor: '#eaecec',
    ' > span': {
      fontSize: '22pt',
    },
  },
}))

const ContentContainer = styled.div({
  display: 'flex',
  flexDirection: 'column-reverse',
  flexWrap: 'wrap',
  maxWidth: '700px',
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    alignItems: 'flex-start',
    maxWidth: 'none',
    flexDirection: 'row',
    flexWrap: 'noWrap',
  },
})

const ContactContainer = styled.div(({ theme }) => ({
  ' > p': {
    margin: '0.25rem',
  },
  ' .contact-item': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  ' .contact-item > span': {
    marginLeft: '1rem',
  },
  ' a': {
    whiteSpace: 'nowrap',
  },
  ' a: hover svg': {
    color: theme.linkHoverText,
  },
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    ' .contact-item': {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    ' .contact-item > span': {
      marginLeft: '0',
      marginRight: '1rem',
    },
  },
}))

const PrimaryContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    borderLeft: `2px solid ${theme.textHighlight}`,
    paddingLeft: '2rem',
  },
}))

const SecondaryContainer = styled.div({
  display: 'flex',
  flexDirection: 'column-reverse',
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    flexDirection: 'column',
    maxWidth: '33%',
    paddingRight: '2rem',
    textAlign: 'right',
  },
})

const SectionContainer = styled.div({
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    ' > .secondary-section-header': {
      justifyContent: 'flex-end',
      whiteSpace: 'nowrap',
    },
  },
})

const SectionHeader = styled.h2({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  textTransform: 'uppercase',
  ' > svg': {
    marginRight: '0.5rem',
  },
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    justifyContent: 'inherit',
    '&.mtn': {
      marginTop: '0',
    },
  },
})

const JobContainer = styled.div({
  paddingBottom: '1rem',
  ' > h3': {
    marginBottom: '0.25rem',
  },
  ' > ul': {
    marginBottom: '0',
    paddingLeft: '2rem',
  },
})

const EducationContainer = styled.div({
  paddingBottom: '1rem',
  ' > h3': {
    marginBottom: '0.25rem',
  },
})

const EducationDetailsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  ' > span': {
    lineHeight: '1.5rem',
  },
  ' > .divider': {
    display: 'none',
  },
  [mediaQuery(`(min-width: ${MOBILE_SM})`)]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    ' .divider': {
      display: 'block',
      marginLeft: '0.25rem',
      marginRight: '0.25rem',
    },
  },
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    justifyContent: 'flex-end',
  },
})

const SkillsContainer = styled.div({
  ' > p': {
    marginTop: '0.5rem',
  },
})

const DetailsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  ' > span': {
    lineHeight: '1.5rem',
  },
  ' > .divider': {
    display: 'none',
  },
  [mediaQueryWithPrint(`(min-width: ${MOBILE_SM})`)]: {
    flexDirection: 'row',
    ' .divider': {
      display: 'block',
      marginLeft: '0.25rem',
      marginRight: '0.25rem',
    },
  },
})

const displaySkillSet = (skills) => {
  const skillSet = skills.map((skill) => skill.name)
  const skillString = skillSet.join(', ')

  return <p>{skillString}</p>
}

const Work = (props) => {
  const {
    contactInformation,
    education,
    jobs,
    jobTitle,
    // lastUpdated, TODO: put this somewhere? If not, remove
    name,
    summary,
    technicalSkills,
  } = props

  return (
    <>
      <PageTitle tab="Work" />
      <HeadingContainer>
        <Name>
          <span>{name.first}</span> <span>{name.last}</span>
        </Name>
        <JobTitle>
          <span className="h2">{jobTitle}</span>
        </JobTitle>
      </HeadingContainer>
      <ContentContainer>
        <SecondaryContainer>
          <SectionContainer>
            <SectionHeader className="secondary-section-header h4 mtn">
              <FontAwesomeIcon aria-hidden="true" icon={faPhoneAlt} title="" />
              Contact
            </SectionHeader>
            <ContactContainer>
              <p className="contact-item">
                <span>{contactInformation.location}</span>
                <FontAwesomeIcon aria-hidden="true" icon={faMapMarker} title="" />
              </p>
              <p>
                <a href={`tel:${contactInformation.phone.number}`} className="contact-item">
                  <span>{contactInformation.phone.formattedNumber}</span>
                  <FontAwesomeIcon aria-hidden="true" icon={faMobileAlt} title="" />
                </a>
              </p>
              <p>
                <a href={`mailto:${contactInformation.email}`} className="contact-item">
                  <span>{contactInformation.email}</span>
                  <FontAwesomeIcon aria-hidden="true" icon={faEnvelope} title="" />
                </a>
              </p>
              <p>
                <a href={`https://${contactInformation.linkedIn}`} className="contact-item">
                  <span>{contactInformation.linkedIn}</span>
                  <FontAwesomeIcon aria-hidden="true" icon={faLinkedin} title="" />
                </a>
              </p>
              <p>
                <a href={`https://${contactInformation.website}`} className="contact-item">
                  <span>{contactInformation.website}</span>
                  <FontAwesomeIcon aria-hidden="true" icon={faLaptop} title="" />
                </a>
              </p>
            </ContactContainer>
          </SectionContainer>
          <SectionContainer>
            <SectionHeader className="secondary-section-header h4">
              <FontAwesomeIcon aria-hidden="true" icon={faGraduationCap} title="" />
              Education
            </SectionHeader>
            {education.map((school, index) => (
              <EducationContainer key={index}>
                <h3 className="h5">{school.name}</h3>
                <EducationDetailsContainer>
                  <span>{school.timePeriod}</span>
                  <span className="divider">/</span>
                  <span>{school.location}</span>
                </EducationDetailsContainer>
                <p>{school.description}</p>
              </EducationContainer>
            ))}
          </SectionContainer>
          <SectionContainer>
            <SectionHeader className="secondary-section-header h4">
              <FontAwesomeIcon aria-hidden="true" icon={faTools} title="" />
              Technical Skills
            </SectionHeader>
            {technicalSkills.map((section, index) => (
              <SkillsContainer key={index}>
                <h3 className="h5">{section.title}</h3>
                {displaySkillSet(section.skills)}
              </SkillsContainer>
            ))}
          </SectionContainer>
        </SecondaryContainer>
        <PrimaryContainer>
          <SectionContainer>
            <SectionHeader className="mtn h4">
              <FontAwesomeIcon aria-hidden="true" icon={faUser} title="" />
              Profile
            </SectionHeader>
            <p>{summary}</p>
          </SectionContainer>
          <SectionContainer>
            <SectionHeader className="h4">
              <FontAwesomeIcon aria-hidden="true" icon={faBusinessTime} title="" />
              Work Experience
            </SectionHeader>
            {jobs.map((job, index) => (
              <JobContainer key={index}>
                <h3 className="h5">{job.jobTitle}</h3>
                <DetailsContainer>
                  <span>{job.company}</span>
                  <span className="divider">/</span>
                  <span>{job.timePeriod}</span>
                  <span className="divider">/</span>
                  <span>{job.location}</span>
                </DetailsContainer>
                {/* TODO: Want this header?
                <h4>Key Qualifications & Responsibilities:</h4> */}
                <ul>
                  {job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp.description}</li>
                  ))}
                </ul>
              </JobContainer>
            ))}
          </SectionContainer>
        </PrimaryContainer>
      </ContentContainer>
    </>
  )
}

Work.propTypes = {
  contactInformation: shape({
    email: string.isRequired,
    github: string.isRequired,
    linkedIn: string.isRequired,
    location: string.isRequired,
    phone: shape({
      formattedNumber: string.isRequired,
      number: string.isRequired,
    }),
    website: string.isRequired,
  }),
  education: arrayOf(
    shape({
      description: string.isRequired,
      location: string.isRequired,
      name: string.isRequired,
      timePeriod: string.isRequired,
    })
  ),
  jobs: arrayOf(
    shape({
      company: string.isRequired,
      jobTitle: string.isRequired,
      location: string.isRequired,
      responsibilities: arrayOf(
        shape({
          description: string.isRequired,
        })
      ).isRequired,
      timePeriod: string.isRequired,
    })
  ),
  jobTitle: string.isRequired,
  lastUpdated: string,
  name: shape({
    first: string.isRequired,
    last: string.isRequired,
  }).isRequired,
  summary: string.isRequired,
  technicalSkills: arrayOf(
    shape({
      skills: arrayOf(
        shape({
          name: string.isRequired,
        })
      ),
      title: string.isRequired,
    })
  ),
}

export default Work
