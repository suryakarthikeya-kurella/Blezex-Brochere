import {
  Briefcase, Hammer, Users, TrendingUp, Award, FolderGit2, Building2, LineChart,
  Bot, Code2, BarChart3, Megaphone, MonitorPlay, UserCheck, Rocket,
  type LucideIcon,
} from 'lucide-react'

export const CONTACT = {
  company: 'BlezeX Technologies',
  website: 'www.blezex.com',
  email: 'connect.blezex@gmail.com',
  phone: '+91 9059634555',
}
/** WhatsApp number that receives enrollment forms (country code + number, digits only). */
export const WHATSAPP_NUMBER = '919059634555'

export const heroPills = ['Industry Training', 'Internship', 'Certification', 'Mentorship']
export const partners = ['Wipro', 'Sarwak AI', 'APT', 'TENSOR', 'IntelliJ Technologies']

export const why: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Industry-Oriented Learning', text: 'Skills chosen for what employers hire for today.', icon: Briefcase },
  { title: 'Practical Project Experience', text: 'Build real work instead of only reading theory.', icon: Hammer },
  { title: 'Professional Mentorship', text: 'Regular guidance from people working in the field.', icon: Users },
  { title: 'Career Development', text: 'Resume, LinkedIn and interview preparation built in.', icon: TrendingUp },
  { title: 'Internship & Certification', text: 'Finish with experience and credentials you can show.', icon: Award },
  { title: 'Portfolio Building', text: 'Leave with projects that prove your skills.', icon: FolderGit2 },
  { title: 'Industry Exposure', text: 'Work on briefs that mirror real company requirements.', icon: Building2 },
  { title: 'Business Skills', text: 'Practical business thinking beside the technical skills.', icon: LineChart },
]

export const features: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'LMS Portal Access', text: 'Every enrolled student gets access to the BlezeX learning portal for course materials, assignments, session resources and progress tracking.', icon: MonitorPlay },
  { title: 'Industry Mentor Allocation', text: 'Each student is allocated an industry mentor for guidance, doubt clearing, project feedback and performance reviews.', icon: UserCheck },
  { title: 'Industry-Level Projects', text: 'Work on projects set like real client briefs, built to professional standards and reviewed by your mentor.', icon: Rocket },
]

export const includes = [
  'Training Sessions', 'Workshops', 'Assignments', 'Case Studies',
  'Live Projects', 'Mentorship Sessions', 'Performance Reviews', 'Career Development Activities',
]

export interface Week { t: string; topics: string[]; out: string }
export interface Course {
  id: string; name: string; icon: LucideIcon
  topics: string[]; activities: string[]; outcome: string; weeks: Week[]
}

export const courses: Course[] = [
  {
    id: 'ai', name: 'Artificial Intelligence & Automation', icon: Bot,
    topics: ['Introduction to Artificial Intelligence', 'Generative AI Fundamentals', 'ChatGPT & AI Productivity Tools', 'Prompt Engineering', 'AI Content Creation', 'Workflow Automation', 'AI for Business Applications'],
    activities: ['AI-Based Content Generation', 'Prompt Design Exercises', 'Automation Workflow Creation'],
    outcome: 'Use AI tools effectively for productivity and business tasks.',
    weeks: [
      { t: 'AI Foundations', topics: ['What AI, machine learning and generative AI mean', 'Everyday and business uses of AI', 'Responsible and ethical AI use', 'Setting up your AI tool kit'], out: 'Personal AI tools map' },
      { t: 'Generative AI Fundamentals', topics: ['How large language models work', 'Text, image and audio AI models', 'Strengths, limits and hallucinations', 'Choosing the right tool for a task'], out: 'Comparison of three AI tools on one task' },
      { t: 'ChatGPT & AI Productivity Tools', topics: ['Research, summarising and drafting with ChatGPT', 'AI for email, documents and spreadsheets', 'Meeting notes and task planning with AI', 'Building a daily AI workflow'], out: 'Your personal productivity setup' },
      { t: 'Prompt Engineering: Basics', topics: ['Anatomy of a good prompt', 'Roles, context, tone and format', 'Using examples to guide output', 'Fixing weak prompts'], out: 'Library of 10 tested prompts' },
      { t: 'Prompt Engineering: Advanced', topics: ['Step-by-step and chained prompts', 'Reviewing and scoring AI output', 'Prompts for analysis, planning and learning', 'Reusable prompt templates'], out: 'Prompt design exercise set' },
      { t: 'AI Content Creation', topics: ['Writing posts, blogs and scripts with AI', 'AI-generated images and presentations', 'Keeping a consistent brand voice', 'Editing and fact-checking AI content'], out: 'AI-based content pack' },
      { t: 'Workflow Automation', topics: ['Triggers, actions and conditions', 'No-code tools such as Zapier or Make', 'Connecting forms, email and spreadsheets', 'Testing and fixing a workflow'], out: 'Working automation workflow' },
      { t: 'AI for Business & Capstone', topics: ['AI in sales, support, HR and operations', 'Choosing and costing an AI use case', 'Capstone build and presentation', 'Mentor review and certification assessment'], out: 'Capstone project' },
    ],
  },
  {
    id: 'web', name: 'Website Development Fundamentals', icon: Code2,
    topics: ['Website Architecture', 'HTML Fundamentals', 'CSS Fundamentals', 'Responsive Design', 'Introduction to JavaScript', 'Website Deployment', 'Domain & Hosting Basics'],
    activities: ['Build Personal Portfolio Website', 'Deploy Website Live'],
    outcome: 'Create and deploy professional websites.',
    weeks: [
      { t: 'Website Architecture', topics: ['How the web works: browsers, servers and URLs', 'Sitemaps and page structure', 'Wireframing a portfolio site', 'Setting up VS Code and your project folder'], out: 'Sitemap and wireframe' },
      { t: 'HTML Fundamentals', topics: ['Document structure and semantic tags', 'Text, links, images and lists', 'Tables and forms', 'Accessibility basics'], out: 'Portfolio page in HTML' },
      { t: 'CSS Fundamentals', topics: ['Selectors, colours and typography', 'Box model, spacing and borders', 'Flexbox layouts', 'Styling buttons, cards and navigation'], out: 'Styled portfolio homepage' },
      { t: 'Responsive Design', topics: ['Mobile-first thinking', 'CSS Grid and media queries', 'Responsive images and navigation', 'Testing on phones and tablets'], out: 'Fully responsive portfolio' },
      { t: 'Introduction to JavaScript', topics: ['Variables, data types and functions', 'Conditions and loops', 'Selecting and changing page elements (DOM)', 'Handling clicks and events'], out: 'Interactive page elements' },
      { t: 'Building Your Portfolio Website', topics: ['Writing portfolio content', 'Projects, about and contact sections', 'Form validation and menus with JavaScript', 'Performance and polish'], out: 'Complete portfolio website' },
      { t: 'Domain & Hosting Basics', topics: ['Domains, DNS and SSL explained', 'Git and GitHub basics', 'Hosting options and how to choose', 'Publishing a site online'], out: 'Website deployed live' },
      { t: 'Launch & Capstone', topics: ['Pre-launch checklist and bug fixing', 'Basic SEO and sharing your site', 'Capstone presentation', 'Mentor review and certification assessment'], out: 'Live website and capstone' },
    ],
  },
  {
    id: 'data', name: 'Data Analytics & Business Intelligence', icon: BarChart3,
    topics: ['Excel Fundamentals', 'Advanced Excel', 'Data Cleaning', 'Data Visualization', 'Power BI Fundamentals', 'Dashboard Design', 'Business Reporting'],
    activities: ['Sales Dashboard', 'KPI Dashboard', 'Business Reports'],
    outcome: 'Transform data into actionable business insights.',
    weeks: [
      { t: 'Excel Fundamentals', topics: ['Workbooks, formatting and formulas', 'Sorting, filtering and tables', 'Cell references and basic functions', 'Charts in Excel'], out: 'Formatted sales data sheet' },
      { t: 'Advanced Excel', topics: ['XLOOKUP, VLOOKUP and INDEX-MATCH', 'Pivot tables and pivot charts', 'Logical and text functions', 'Data validation and shortcuts'], out: 'Pivot-based summary report' },
      { t: 'Data Cleaning', topics: ['Finding duplicates, blanks and errors', 'Standardising text, dates and numbers', 'Power Query basics', 'Documenting cleaning steps'], out: 'Cleaned business dataset' },
      { t: 'Data Visualization', topics: ['Choosing the right chart', 'Colour, layout and clarity', 'Telling a story with data', 'Common charting mistakes'], out: 'Chart set with insights' },
      { t: 'Power BI Fundamentals', topics: ['Power BI interface and data import', 'Data modelling and relationships', 'Basic DAX measures', 'Visuals, slicers and filters'], out: 'First Power BI report' },
      { t: 'Dashboard Design', topics: ['Dashboard layout and hierarchy', 'KPIs and key metrics', 'Interactivity and drill-through', 'Design review and feedback'], out: 'Sales Dashboard' },
      { t: 'Business Reporting', topics: ['What managers and clients need from reports', 'Building a KPI dashboard', 'Publishing and sharing reports', 'Writing insights and recommendations'], out: 'KPI Dashboard and business report' },
      { t: 'Capstone & Business Insights', topics: ['End-to-end project from raw data', 'Presenting insights to stakeholders', 'Business report documentation', 'Mentor review and certification assessment'], out: 'Capstone dashboard and report' },
    ],
  },
  {
    id: 'marketing', name: 'Digital Marketing & Personal Branding', icon: Megaphone,
    topics: ['Social Media Marketing', 'Content Strategy', 'Lead Generation', 'Brand Positioning', 'Marketing Funnels', 'SEO Basics', 'Online Reputation Management'],
    activities: ['Content Calendar Creation', 'Marketing Campaign Planning'],
    outcome: 'Understand modern digital marketing strategies.',
    weeks: [
      { t: 'Digital Marketing Foundations', topics: ['How digital marketing works', 'Channels: social, search, email and content', 'Setting goals and measuring results', 'Auditing a real brand'], out: 'Brand audit' },
      { t: 'Brand Positioning & Personal Branding', topics: ['Brand positioning and target audience', 'Voice, message and visual identity', 'Building your personal brand', 'Optimising your LinkedIn profile'], out: 'Brand positioning statement' },
      { t: 'Social Media Marketing', topics: ['Platform strategies: Instagram, LinkedIn and YouTube', 'Post formats and posting rhythm', 'Engagement and community', 'Reading social media analytics'], out: 'Social media plan' },
      { t: 'Content Strategy', topics: ['Content pillars and audience needs', 'Writing hooks, captions and long-form content', 'Repurposing content', 'Planning with a calendar'], out: 'Content Calendar' },
      { t: 'Lead Generation', topics: ['What makes a lead', 'Landing pages and lead magnets', 'Forms, email capture and follow-up', 'Tracking lead quality'], out: 'Lead generation plan' },
      { t: 'Marketing Funnels', topics: ['Awareness, consideration and conversion', 'Mapping a customer journey', 'Email and retargeting basics', 'Measuring funnel performance'], out: 'Marketing funnel map' },
      { t: 'SEO Basics & Online Reputation', topics: ['Keywords and search intent', 'On-page SEO basics', 'Reviews and online reputation management', 'Handling feedback and negative comments'], out: 'SEO and reputation checklist' },
      { t: 'Campaign Planning & Capstone', topics: ['Campaign objectives, budget and timeline', 'Putting together a full campaign plan', 'Capstone presentation', 'Mentor review and certification assessment'], out: 'Marketing Campaign Plan' },
    ],
  },
]

export const projectSteps = [
  { t: 'Requirement Gathering', d: 'Understand the client brief and what success looks like.' },
  { t: 'Research', d: 'Study the market, users and competitors.' },
  { t: 'Planning', d: 'Break the work into tasks, owners and deadlines.' },
  { t: 'Execution', d: 'Build the solution with mentor feedback along the way.' },
  { t: 'Presentation', d: 'Present your work the way you would to a client.' },
  { t: 'Documentation', d: 'Record decisions and results for your portfolio.' },
]

export const internshipBenefits = [
  'Industry Training', 'Project Experience', 'Mentorship', 'Networking',
  'Career Guidance', 'Portfolio Development', 'Performance Reviews', 'Certification',
]

export const certificates = [
  'BlezeX Career Accelerator Certificate', 'Internship Completion Certificate',
  'Project Completion Certificate', 'Letter of Recommendation', 'Excellence Awards',
]

export const outcomes = [
  'Professional Resume', 'LinkedIn Profile', 'Portfolio Website', 'Industry Projects', 'AI Skills',
  'Communication Skills', 'Business Exposure', 'Internship Experience', 'Certifications', 'Career Readiness',
]

export const faqs = [
  { q: 'Can I join more than one course?', a: 'Yes. Each course is enrolled separately, so you can join one course or several. Every course has its own 8-week curriculum, mentor review and certification.' },
  { q: 'Who can join the program?', a: 'Students and recent graduates from any stream who want practical skills and industry exposure. No prior experience is required.' },
  { q: 'How long is each course?', a: 'Every course runs for 8 weeks, with a capstone project and assessment in the final week.' },
  { q: 'Is it online or in person?', a: 'The courses are delivered online or in a hybrid format.' },
  { q: 'Do I need coding experience?', a: 'No. The Website Development course starts from how the web works and builds up to HTML, CSS and JavaScript basics. The other courses are beginner friendly too.' },
  { q: 'What is the LMS portal?', a: 'It is the BlezeX learning portal where enrolled students access course materials, assignments, session resources and track their progress.' },
  { q: 'How does mentor allocation work?', a: 'After you enroll, you are allocated an industry mentor who guides your learning, reviews your project work and gives performance feedback.' },
  { q: 'What will I receive when I finish?', a: 'You can earn the BlezeX Career Accelerator Certificate, an Internship Completion Certificate and a Project Completion Certificate. Letters of Recommendation and Excellence Awards are given based on performance.' },
  { q: 'How much does a course cost?', a: 'Pricing is per course. See the Pricing section of this brochure for the current early bird offer.' },
  { q: 'How do I enroll?', a: 'Select Enroll Now, fill in the short form and send it to us on WhatsApp. Our team will reply with the next steps.' },
]
