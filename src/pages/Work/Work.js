import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import PageHeader from "../../components/PageHeader";
import {
  mediaQuery,
  mediaQueryWithPrint,
  MOBILE,
  MOBILE_SM,
  TABLET,
} from "../../constants/breakpoints";
import PageTitle from "../../components/PageTitle";

const HeadingContainer = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingBottom: "3rem",
  " > h1": {
    fontSize: "3rem",
    marginBottom: "0",
    textAlign: "center",
  },
  " > span": {
    fontSize: "2rem",
  },
  [mediaQueryWithPrint(`(min-width: ${MOBILE})`)]: {
    " > h1": {
      fontSize: "6rem",
      marginBottom: "0",
    },
    " > span": {
      fontSize: "3rem",
    },
  },
  "@media print": {
    " > h1": {
      fontSize: "28pt",
    },
    " > span": {
      fontSize: "14pt",
    },
  },
});

const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column-reverse",
  flexWrap: "wrap",
  maxWidth: "700px",
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    alignItems: "flex-start",
    maxWidth: "none",
    flexDirection: "row",
    flexWrap: "noWrap",
  },
});

const ContactContainer = styled.div({
  " .contact-item": {
    alignItems: "center",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  " .contact-item > span": {
    marginLeft: "1rem",
  },
  " a": {
    whiteSpace: "nowrap",
  },
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    " .contact-item": {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    " .contact-item > span": {
      marginLeft: "0",
      marginRight: "1rem",
    },
  },
});

const PrimaryContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    borderLeft: "1px solid #555555",
    paddingLeft: "2rem",
  },
});

const SecondaryContainer = styled.div({
  display: "flex",
  flexDirection: "column-reverse",
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    flexDirection: "column",
    maxWidth: "33%",
    paddingRight: "2rem",
    textAlign: "right",
  },
});

const SectionContainer = styled.div({
  paddingBottom: "rem 0",
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    " > .secondary-section-header": {
      justifyContent: "flex-end",
      whiteSpace: "nowrap",
    },
  },
});

//TODO: Different color headers if ever decide on color palette
const SectionHeader = styled.h2({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  textTransform: "uppercase",
  " > svg": {
    marginRight: "0.5rem",
  },
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    justifyContent: "inherit",
    "&.mtn": {
      marginTop: "0",
    },
  },
});

const JobContainer = styled.div({
  paddingBottom: "1rem",
  " > h3": {
    marginBottom: "0.25rem",
  },
  " > ul": {
    marginBottom: "0",
    paddingLeft: "2rem",
  },
});

const EducationContainer = styled.div({
  paddingBottom: "1rem",
  " > h3": {
    marginBottom: "0.25rem",
  },
});

const EducationDetailsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  " > span": {
    lineHeight: "1.5rem",
  },
  " > .divider": {
    display: "none",
  },
  [mediaQuery(`(min-width: ${MOBILE_SM})`)]: {
    flexDirection: "row",
    justifyContent: "flex-start",
    " .divider": {
      display: "block",
      marginLeft: "0.25rem",
      marginRight: "0.25rem",
    },
  },
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    justifyContent: "flex-end",
  },
});

const DetailsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  " > span": {
    lineHeight: "1.5rem",
  },
  " > .divider": {
    display: "none",
  },
  [mediaQueryWithPrint(`(min-width: ${MOBILE_SM})`)]: {
    flexDirection: "row",
    " .divider": {
      display: "block",
      marginLeft: "0.25rem",
      marginRight: "0.25rem",
    },
  },
});

const displaySkillSet = (skills) => {
  const skillSet = skills.map((skill) => skill.name);
  const skillString = skillSet.join(", ");

  return <p>{skillString}</p>;
};

const Work = (props) => {
  const {
    contactInformation,
    education,
    jobs,
    jobTitle,
    // lastUpdated, //TODO: put this somewhere?
    name,
    summary,
    technicalSkills,
  } = props;

  return (
    <>
      <PageTitle tab="Work" />
      <HeadingContainer>
        <PageHeader title={name} />
        <span>{jobTitle}</span>
      </HeadingContainer>
      <ContentContainer>
        <SecondaryContainer>
          <SectionContainer>
            <SectionHeader className="secondary-section-header mtn">
              <FontAwesomeIcon aria-hidden="true" icon={faPhoneAlt} title="" />
              Contact
            </SectionHeader>
            <ContactContainer>
              <p className="contact-item">
                <span>{contactInformation.location}</span>
                <FontAwesomeIcon
                  aria-hidden="true"
                  icon={faMapMarker}
                  title=""
                />
              </p>
              <p>
                <a
                  href={`tel:${contactInformation.phone.number}`}
                  className="contact-item"
                >
                  <span>{contactInformation.phone.formattedNumber}</span>
                  <FontAwesomeIcon
                    aria-hidden="true"
                    icon={faMobileAlt}
                    title=""
                  />
                </a>
              </p>
              <p>
                <a href={contactInformation.email} className="contact-item">
                  <span>{contactInformation.email}</span>
                  <FontAwesomeIcon
                    aria-hidden="true"
                    icon={faEnvelope}
                    title=""
                  />
                </a>
              </p>
              <p>
                <a href={contactInformation.linkedIn} className="contact-item">
                  <span>{contactInformation.linkedIn}</span>
                  <FontAwesomeIcon
                    aria-hidden="true"
                    icon={faLinkedin}
                    title=""
                  />
                </a>
              </p>
              {/* TODO: Add website
                <p>
                    <a href={contactInformation.website} className="contact-item">
                        <span>{contactInformation.website}</span>
                        <FontAwesomeIcon aria-hidden="true" icon={faLaptop} title=""/>
                    </a>
                </p> */}
            </ContactContainer>
          </SectionContainer>
          <SectionContainer>
            <SectionHeader className="secondary-section-header">
              <FontAwesomeIcon
                aria-hidden="true"
                icon={faGraduationCap}
                title=""
              />
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
            <SectionHeader className="secondary-section-header">
              <FontAwesomeIcon aria-hidden="true" icon={faTools} title="" />
              Technical Skills
            </SectionHeader>
            {technicalSkills.map((section, index) => (
              <div key={index}>
                <h3>{section.title}</h3>
                {displaySkillSet(section.skills)}
              </div>
            ))}
          </SectionContainer>
        </SecondaryContainer>
        <PrimaryContainer>
          <SectionContainer>
            <SectionHeader className="mtn">
              <FontAwesomeIcon aria-hidden="true" icon={faUser} title="" />
              Profile
            </SectionHeader>
            <p>{summary}</p>
          </SectionContainer>
          <SectionContainer>
            <SectionHeader>
              <FontAwesomeIcon
                aria-hidden="true"
                icon={faBusinessTime}
                title=""
              />
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
  );
};

export default Work;
