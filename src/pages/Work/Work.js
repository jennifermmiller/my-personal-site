import styled from 'styled-components';
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
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import PageTitle from '../../components/PageTitle';
import { mediaQuery, TABLET, MOBILE_SM } from '../../constants/breakpoints';

const WorkContainer = styled.div({
});

//TODO: Larger font
const HeadingContainer = styled.div({
    paddingBottom: '3rem',
    textAlign: 'center',
    // TODO: need any media queries?
    // [mediaQuery(`(min-width: ${TABLET})`)]: {
    //     ' > h1': {
    //         fontSize: '6rem'
    //     }
    // },
});

const ContentContainer = styled.div({
    display: 'flex',
    flexDirection: 'column-reverse',
    flexWrap: 'wrap',
    maxWidth: '700px',
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        alignItems: 'flex-start',
        maxWidth: 'none',
        flexDirection: 'row',
        flexWrap: 'noWrap',

    },
});

const ContactContainer = styled.div({
    ' .contact-item': {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end'
    },
    ' .contact-item > span': {
        marginLeft: '1rem'
    },
    ' a': {
        textDecoration: 'underline',
        whiteSpace: 'nowrap'
    },
    ' a:hover': {
        textDecoration: 'none'
    },
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        ' .contact-item': {
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        ' .contact-item > span': {
            marginLeft: '0',
            marginRight: '1rem'
        }
    },
});

// TODO: Switch this out so mobile first, one column up through laptop(?)
const PrimaryContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        borderLeft: '1px solid', //TODO: variable
        paddingLeft: '2rem'
    },
});

const SecondaryContainer = styled.div({
    display: 'flex',
    flexDirection: 'column-reverse',
    flexBasis: '100%',
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        flexDirection: 'column',
        maxWidth: '33%',
        textAlign: 'right',
        paddingRight: '2rem'
    },
});

const SectionContainer = styled.div({
    paddingBottom: 'rem 0'
});

//TODO: Different color headers if ever decide on color palette
const SectionHeader = styled.h2({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    ' > svg': {
        marginRight: '0.5rem'
    },
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        justifyContent: 'inherit'
    },
})

const JobContainer = styled.div({
    paddingBottom: '1rem',
    ' > h3': {
        marginBottom: '0.25rem'
    },
    ' > ul': {
        paddingLeft: '2rem',
        marginBottom: '0'
    }
});

const EducationContainer = styled.div({
    paddingBottom: '1rem',
    ' > h3': {
        marginBottom: '0.25rem'
    }
});

const EducationDetailsContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    ' > span': {
        // fontWeight: '600',
        lineHeight: '1.5rem'
    },
    ' > .divider': {
        display: 'none'
    },
    [mediaQuery(`(min-width: ${MOBILE_SM})`)]: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        ' > span': {
            fontWeight: '500'
        },
        ' .divider': {
            display: 'block',
            marginLeft: '0.25rem',
            marginRight: '0.25rem',
        }
    }
});

const DetailsContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    ' > span': {
        // fontWeight: '600',
        lineHeight: '1.5rem'
    },
    ' > .divider': {
        display: 'none'
    },
    [mediaQuery(`(min-width: ${MOBILE_SM})`)]: {
        flexDirection: 'row',
        ' > span': {
            fontWeight: '500'
        },
        ' .divider': {
            display: 'block',
            marginLeft: '0.25rem',
            marginRight: '0.25rem',
        }
    },
});

const displaySkills = skills => {
    const skillSet = skills.map(skill => skill.name)
    const skillString = skillSet.join(', ')
    
    return (
        <p>{skillString}</p>
    )
};

//TODO:
// Print as pdf? If not, make sure to add print styles
const Work = props => {
    const {
        about,
        contactInformation,
        education,
        jobs,
        jobTitle,
        lastUpdated, //TODO: put this somewhere?
        name,
        technicalSkills
    } = props;
 
    return (
        <WorkContainer>
            <HeadingContainer>
                <PageTitle title={name}/>
                <span>{jobTitle}</span>
            </HeadingContainer>
            <ContentContainer>
                <SecondaryContainer>
                    <SectionContainer>
                        <SectionHeader className="secondary-section-header">
                            <FontAwesomeIcon icon={faPhoneAlt} title="Education icon" />
                            Contact
                        </SectionHeader>
                        <ContactContainer>
                            <p className="contact-item">
                                <span>{contactInformation.location}</span>
                                <FontAwesomeIcon icon={faMapMarker} title="Current location icon" />
                            </p>
                            <p>
                                <a href={`tel:${contactInformation.phone.number}`} className="contact-item">
                                    <span>{contactInformation.phone.formattedNumber}</span>
                                    <FontAwesomeIcon icon={faMobileAlt} title="Mobile phone icon" />
                                </a>
                            </p>
                            <p>
                                <a href={contactInformation.email} className="contact-item">
                                    <span>{contactInformation.email}</span>
                                    <FontAwesomeIcon icon={faEnvelope} title="Email icon" />    
                                </a>    
                            </p>
                            <p>
                                <a href={contactInformation.linkedIn} className="contact-item">
                                    <span>{contactInformation.linkedIn}</span>
                                    <FontAwesomeIcon icon={faLinkedin} title="LinkedIn icon" />
                                </a>
                            </p>
                            {/* TODO: Add website
                            <p>
                                <a href={contactInformation.website} className="contact-item">
                                    <span>{contactInformation.website}</span>
                                    <FontAwesomeIcon icon={faLaptop} title="Website icon" />
                                </a>
                            </p> */}
                        </ContactContainer>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionHeader>
                            <FontAwesomeIcon icon={faGraduationCap} title="Education icon" />
                            Education
                        </SectionHeader>
                        {education.map((school, index) => (
                            <EducationContainer key={index}>
                                <h3>{school.name}</h3>
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
                        <SectionHeader>
                            <FontAwesomeIcon icon={faTools} title="Skills icon" />
                            Technical Skills
                        </SectionHeader>
                        {technicalSkills.map(section => (
                            <div>
                                <h3>{section.title}</h3>
                                {displaySkills(section.skills)}
                            </div>
                        ))}
                    </SectionContainer>
                    
                </SecondaryContainer>
                <PrimaryContainer>
                    <SectionContainer>
                        <SectionHeader>
                            <FontAwesomeIcon icon={faUser} title="Education icon" />
                            Profile
                        </SectionHeader>    
                        <p>{about}</p>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionHeader>
                        <FontAwesomeIcon icon={faBusinessTime} title="Education icon" />
                            Work Experience
                        </SectionHeader>
                        {jobs.map((job, index) => (
                            <JobContainer key={index}>
                                <h3>{job.jobTitle}</h3>
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
                                    {(job.responsibilities).map((resp, idx) => <li key={idx}>{resp.description}</li>)}
                                </ul>
                            </JobContainer>
                        ))}
                    </SectionContainer>
                </PrimaryContainer>
            </ContentContainer>
        </WorkContainer>
    )
}

export default Work;