// Personal Info
export const NAME = {
  first: 'Jennifer',
  last: 'Miller'
}
export const PHONE_NUMBER = '585-489-7590'
export const PHONE_NUMBER_FORMATTED = '(585) 489-7590'
export const LOCATION = 'Greenville, SC'
export const JOB_TITLE = 'Front End Developer'
export const RESUME_LAST_UPDATED = 'March 2021'

// URLs 
export const EMAIL_URL = 'jen.miller.uxe@gmail.com'
export const GITHUB_URL = 'github.com/jennifermmiller'
export const JOSH_ALLEN_URL = 'https://youtu.be/xEVIvJtXquQ'
export const LINKEDIN_URL = 'linkedin.com/in/jen-miller-uxe/'
export const SCHOOL_URL = 'https://www.linkedin.com/school/the-iron-yard/'
export const TRAIL_URL =
  'https://www.greenvillesc.gov/316/Swamp-Rabbit-Trail-Interactive-Map'
export const WORK_URL = 'https://www.benefitfocus.com/'

// Links
export const EMAIL_LINK = <a href={`mailto:${EMAIL_URL}`}>jmiller6128@gmail.com</a>
export const GITHUB_LINK = <a href={`https://${GITHUB_URL}`}>Github</a>
export const LINKEDIN_LINK = <a href={`https://www.${LINKEDIN_URL}`}>LinkedIn</a>
export const SCHOOL_LINK = (
  <a href={SCHOOL_URL} target="_blank" rel="noopener noreferrer">
    Iron Yard Academy
  </a>
)
export const WORK_LINK = (
  <a href={WORK_URL} target="_blank" rel="noopener noreferrer">
    Benefitfocus
  </a>
)

export const JOSH_ALLEN_LINK = (
  <a href={JOSH_ALLEN_URL} target="_blank" rel="noopener noreferrer">
    Josh Allen
  </a>
)
export const TRAIL_LINK = (
  <a href={TRAIL_URL} target="_blank" rel="noopener noreferrer">
    Swamp Rabbit Trail
  </a>
)
