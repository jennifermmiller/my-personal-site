import styled from 'styled-components';

import PageTitle from '../../components/PageTitle';
import { mediaQuery, TABLET, DESKTOP, MOBILE } from '../../constants/breakpoints';

const WorkContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
});

const HeadingContainer = styled.div({
    textAlign: 'center',
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        textAlign: 'left',
    },
});

const ContactContainer = styled.div({
    ' > div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    ' .contact-info span': {
        flexBasis: '100%'
    },
    ' .contact-links a': {
        fontSize: '1.5rem',
        padding: '0.5rem'
    },
    [mediaQuery(`(min-width: ${MOBILE})`)]: {
        ' .contact-info span': {
            flexBasis: 'auto'
        },
        ' .contact-info span:not(:last-child)::after': {
            content: "'\\00B7'",
            padding: '0 0.3125rem'
        },
    },
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        ' > div': {
            justifyContent: 'start',
        }
    },
});

// TODO: Switch this out so mobile first, one column up through laptop(?)
const PrimaryContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '3'
});

const SecondaryContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    marginLeft: '2rem',
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        flex: '1'
    },
});

const DateAndLocationContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between'
});

const SectionContainer = styled.div({

});

const JobContainer = styled.div({

});

//TODO:
// Updated @ ? 
// Print as pdf?
// Add icons to each section header?
const Work = props => {
    const {
        about,
        contactInformation,
        education,
        jobs,
        jobTitle,
        links,
        // TODO: Add location somewhere?
        name,
        technicalSkills
    } = props;
 
    return (
        <WorkContainer>
            <PrimaryContainer>
                <HeadingContainer>
                    <PageTitle title={name}/>
                    {/* TODO: Need this? over doing it? */}
                    <ContactContainer>
                        <div className="contact-info">
                            <span>{contactInformation.location}</span>
                            <span>{contactInformation.phone}</span>
                        </div>
                        <div className="contact-links">
                            {links.map(item => item.link)}
                        </div>
                    </ContactContainer>
                </HeadingContainer>
                <SectionContainer>
                    <h2>Profile</h2>    
                    <p>{about}</p>
                </SectionContainer>
                <SectionContainer>
                    <h2>Work Experience</h2>
                    {/* Todo: Do I want this in here?? */}
                    <span>Last updated: March 2021</span> 
                    {jobs.map((job, index) => (
                        <JobContainer key={index}>
                            <h3>{job.jobTitle} at {job.company}</h3>
                            <DateAndLocationContainer>
                                <span>{job.location}</span>
                                <span>{job.timePeriod}</span>
                            </DateAndLocationContainer>
                            <h4>Key Qualifications & Responsibilities</h4>
                            <ul>
                                {(job.responsibilities).map((resp, idx) => <li key={idx}>{resp.description}</li>)}
                            </ul>
                        </JobContainer>
                    ))}
                </SectionContainer>
                <SectionContainer>
                    <h2>Education</h2>
                    {education.map((school, index) => (
                        <div key={index}>
                            <h3>{school.name}</h3>
                            <DateAndLocationContainer>
                                <span>{school.location}</span>
                                <span>{school.timePeriod}</span>
                            </DateAndLocationContainer>
                            <p>{school.description}</p>
                        </div>
                    ))}
                </SectionContainer>
            </PrimaryContainer>
            <SecondaryContainer>
                <SectionContainer>
                    <h2>Technical Skills</h2>
                    {technicalSkills.map(section => (
                        <div>
                            <h3>{section.title}</h3>
                            {/* TODO: decide how I want to do this */}
                            {(section.skills).map((item, idx)=> <span key={idx}>{item.name}, </span>)}
                        </div>
                    ))}
                </SectionContainer>
                {/* TODO: where to put this? Seems like lower might work better for mobile? */}
                {/* <SectionContainer>
                    <h2>Contact Information</h2>
                    <p>{contactInformation.phone}</p>
                    {links.map(item => item.link)}
                </SectionContainer> */}
            </SecondaryContainer>
        </WorkContainer>
    )
}

export default Work;