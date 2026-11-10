/**
 * Tiny i18n layer.
 *
 * The site has two locales: English at / and Spanish at /es/. Spanish pages
 * are full Astro pages under src/pages/es/ that reuse the same components
 * with translated strings pulled from this file. Data (job titles, posting
 * titles, metro names) comes from government sources and stays in English,
 * except the job titles listed in JOB_TITLES_ES.
 *
 * Add a string: put it in `en` and in `es` with the same key, then call
 * t('key', lang). The type of `es` enforces that no key is missing.
 */
export type Lang = 'en' | 'es';

const en = {
  // Header
  'nav.main': 'Main',
  'nav.states': 'States',
  'nav.compareAll': 'Compare all three',
  'nav.aboutS2S': 'About S2S',
  'nav.aboutUs': 'About Us',
  'nav.cap': 'CAP Program',
  'nav.labs2life': 'Labs2Life',
  'nav.more': 'More',
  'nav.quiz': 'Quiz',
  'nav.glossary': 'Glossary',
  'nav.sources': 'Sources',
  'nav.browseCareers': 'Browse careers',
  'nav.help': 'How to browse this site',
  'nav.lang': 'Idioma / Language',
  'skip': 'Skip to content',
  // Footer
  'footer.blurb':
    'Real numbers about science, technology, engineering and math careers in New Jersey, New York and Pennsylvania — built for students who are figuring out what to do next.',
  'footer.explore': 'Explore',
  'footer.states': 'States',
  'footer.learn': 'Learn',
  'footer.labs': 'Labs2Life — labs to careers',
  'footer.labs2': 'Labs2Life — from lab to career',
  'footer.about': 'About Students 2 Science',
  'footer.cap': 'Career Advancement Program (CAP)',
  'footer.cap2': 'Career Advancement Program',
  'footer.quiz': 'Guess the salary',
  'footer.careers': 'Browse careers',
  'footer.exploreCareers': 'Career Exploration',
  'footer.glossary': 'STEM words explained',
  'footer.sources': 'Where the data comes from',
  'footer.note':
    'Every number on this site comes from an official government source and is labeled with its date. Nothing here is advice about your future — it is a starting point for exploring.',
  'footer.lastRun': 'Last data run:',
  // Language note shown on Spanish pages
  'es.notice':
    'Job titles and live job postings come from official US government sources and are shown in English.',
  // Site guide popup
  'guide.title': 'How to Browse This Site',
  'guide.lede': "Here's everything on the site, in one place.",
  'guide.close': 'Close the guide',
  'guide.states.blurb': 'Job counts, pay and openings for each state.',
  'guide.labs.blurb': 'S2S labs and the careers behind each experiment.',
  'guide.labs.link': 'From lab to career',
  'guide.careers.title': 'Careers',
  'guide.careers.blurb': 'Every STEM job: what it pays, openings, what to study.',
  'guide.careers.browse': 'Browse all careers',
  'guide.careers.glossary': 'Glossary of terms',
  'guide.tools.title': 'Tools',
  'guide.tools.blurb': 'Play with the numbers and see where they come from.',
  'guide.tools.quiz': 'Quiz: guess the salary',
  'guide.tools.sources': 'Sources & data notes',
  'guide.tools.explore': 'Career Exploration: what are you into?',
  'guide.about.blurb': 'Who we are and how we help students reach STEM careers.',
  'guide.about.about': 'About Students 2 Science',
  'guide.about.cap': 'Career Advancement Program',
  // Home page
  'home.tag': 'Live data from official government sources',
  'home.h1': 'What does a STEM job actually look like where you live?',
  'home.lede':
    'Real numbers about science, technology, engineering and maths jobs in New Jersey, New York and Pennsylvania. How many are open. What they pay. And what you would study to get one.',
  'home.ctaNj': 'Start with New Jersey',
  'home.ctaCompare': 'Compare all three states',
  'home.ctaFinder': 'Career Exploration',
  'home.updated': 'Last updated',
  'home.stat1.label': 'people already work in STEM jobs in New Jersey',
  'home.stat1.note': 'From a survey of every employer in the state',
  'home.stat2.label': 'private-sector STEM job matches right now',
  'home.stat2.note':
    'Searched per job and per state, so one job can be counted more than once',
  'home.stat3.note': 'That is the most common STEM job in the state',
  'home.pick.eyebrow': 'Pick your state',
  'home.pick.h2': 'Where are the STEM jobs?',
  'home.pick.lede':
    'Every number here comes straight from a government agency, and each one is stamped with the date it was collected. Pick the state you live in.',
  'home.groups.eyebrow': 'Eight kinds of STEM work',
  'home.groups.h2': 'STEM is not one thing',
  'home.groups.lede':
    'A civil engineer and a cybersecurity analyst both count as STEM, and they do very different work. We group jobs the way the U.S. Department of Labor does, using the official occupation groups from its Bureau of Labor Statistics.',
  'home.how.eyebrow': 'How this site works',
  'home.how.h2': 'Where do the numbers come from?',
  'home.how.lede':
    'Nothing here is made up. Every figure comes from a US government agency, and we say which one and when.',
  'home.how1.h3': '📊 How many jobs, and what they pay',
  'home.how1.p':
    'Once a year the Bureau of Labor Statistics asks every employer in the country how many people they employ and what they pay. That survey is where the job counts and the salaries come from.',
  'home.how2.h3': '📣 What is open right now',
  'home.how2.p':
    'Job boards publish every opening as it appears. We ask each one about every STEM job we track, so the counts are exact rather than a guess from the job title.',
  'home.how3.h3': '🧭 What to study next',
  'home.how3.p':
    'The Bureau of Labor Statistics also records what education people usually need to get into each job. We put that on every career page, next to a plain-English description of the work.',
  'home.how.details': 'Want the details?',
  'home.how.sources': 'See every source and how we use it.',
  'home.how.glossary': 'Not sure what a word means? Try the glossary.',
  // StateCard
  'stateCard.loading': 'Data loading…',
  'stateCard.coming': 'Coming soon →',
  'stateCard.rightNow': 'right now',
  // StatePage
  'sp.tag': 'STEM jobs',
  'sp.h1': 'STEM Pathways to',
  'sp.asOf': 'Numbers as of',
  'sp.noData.h2': 'Data is on its way',
  'sp.noData.p':
    'We are still collecting {state} numbers. Check back soon - the live job board, salary charts and metro breakdowns will appear here.',
  'sp.noData.cta': 'See what we collect and why',
  'sp.stat1.label': 'people already work in STEM jobs here',
  'sp.stat1.note': 'From a survey of every employer in the state',
  'sp.stat2.label': 'private-sector STEM job matches right now',
  'sp.stat2.note': 'Searched per job, so one job can be counted more than once',
  'sp.stat3.label': 'government STEM jobs open today',
  'sp.stat3.note': 'Federal, state and local',
  'sp.stat4.label': 'a typical STEM salary',
  'sp.stat4.note': 'What the person in the middle earns',
  'sp.read.h2': 'How to read this page',
  'sp.read.p':
    'There are three different numbers on this page, and they are counting different things. Knowing which is which is most of the work.',
  'sp.read.1a': 'People who already work in STEM',
  'sp.read.1b':
    ' - a count of everyone on the payroll, from a survey of employers. It changes slowly, once a year.',
  'sp.read.2a': 'Job postings',
  'sp.read.2b':
    ' - openings advertised right now. A posting is one job. It might be filled next week.',
  'sp.read.3a': 'Government jobs',
  'sp.read.3b':
    ' - a smaller set of openings you can apply for directly, listed on official job boards.',
  'sp.fields.eyebrow': 'What kinds of STEM work?',
  'sp.fields.h2': 'Where people work',
  'sp.fields.lede':
    'This is every person in {state} working in a STEM job, split into the U.S. Department of Labor occupation groups we use.',
  'sp.fields.label': 'People in STEM jobs in {state}, by field',
  'sp.private.eyebrow': "Who's hiring right now",
  'sp.private.h2': 'Private-sector STEM jobs in {state}',
  'sp.private.lede':
    'Job postings from CareerOneStop, the federal site that collects openings from thousands of private employers. We ask it about every STEM job we track, so these counts are exact for each occupation.',
  'sp.private.byField': 'Postings by field',
  'sp.private.byFieldLabel': 'Private-sector STEM postings in {state} by field',
  'sp.private.note':
    '{count} job matches in the last 30 days, within 50 miles of the state. We search once per job, so one job can be counted more than once.',
  'sp.private.where': 'Where they are hiring',
  'sp.private.whereLabel': 'Private-sector STEM postings in {state} by city',
  'sp.private.who': 'Who is hiring the most',
  'sp.private.whoLabel': 'Top private-sector STEM employers in {state}',
  'sp.private.none': 'Private-sector posting counts are not available right now.',
  'sp.gov.eyebrow': 'Government jobs',
  'sp.gov.h2': 'Jobs you can apply for today',
  'sp.gov.lede':
    'Federal, state and local openings - the kind you can apply for right now on an official website.',
  'sp.gov.label': 'Open government STEM jobs in {state} by field',
  'sp.gov.caption': 'Where the open job counts come from',
  'sp.gov.source': 'Source',
  'sp.gov.count': 'Count',
  'sp.gov.examples': 'Some real examples',
  'sp.gov.none': 'No postings recorded yet.',
  'sp.common.eyebrow': 'The most common jobs',
  'sp.common.h2': 'What most STEM workers actually do',
  'sp.common.lede':
    'Click any job to see what it involves, what it pays and how many openings there are right now.',
  'sp.common.label': 'Biggest STEM jobs in {state}',
  'sp.pay.eyebrow': 'The money',
  'sp.pay.h2': 'Which jobs pay the most?',
  'sp.pay.lede': 'Average yearly pay for jobs with 200 or more workers in {state}.',
  'sp.pay.label': 'Highest paying STEM jobs in {state}',
  'sp.pay.note1':
    'Average pay is pulled up a little by the highest earners, so the',
  'sp.pay.note2': 'career pages',
  'sp.pay.note3': 'show the middle salary too.',
  'sp.metro.eyebrow': 'Where they work',
  'sp.metro.h2': 'Which cities have the most STEM jobs?',
  'sp.metro.lede':
    'A metro area is a city plus everything around it that shares the same job market. Some of them cross state lines.',
  'sp.metro.label': 'STEM employment by metro area in {state}',
  'sp.metro.also': 'also covers',
  'sp.growth.eyebrow': 'What is growing',
  'sp.growth.h2': 'Which STEM jobs are on the way up?',
  'sp.growth.lede':
    'How much each job is predicted to grow, nationwide, between 2025 and 2035.',
  'sp.growth.label': 'Fastest growing STEM jobs for {state}',
  'sp.growth.note':
    'A prediction, not a promise. The Bureau of Labor Statistics publishes these every year.',
  'sp.deeper.eyebrow': 'Go deeper',
  'sp.deeper.h2': 'Pick a field and see the jobs inside it',
  'sp.deeper.lede': 'Every job, what it involves, and what it pays in {state}.',
  'sp.deeper.workIn': 'people work in this field in',
  'sp.suffix.people': 'people',
  'sp.suffix.posting': 'posting',
  'sp.suffix.job': 'job',
  'sp.note.usajobs': 'Open federal jobs. You can apply for these today.',
  'sp.note.njcivil':
    'Open New Jersey state and local government exams. Applying puts you on a hiring list.',
  'sp.note.ny': 'Open New York State government jobs. You can apply for these today.',
  'sp.note.pa':
    'Open Pennsylvania state government jobs. You can apply for these today.',
  'sp.note.cos':
    'Private-sector jobs, counted by searching for each STEM occupation. The same job can be counted twice, so this number is kept separate.',
  // Compare page
  'cmp.tag': 'Side by side',
  'cmp.h1': 'New Jersey vs New York vs Pennsylvania',
  'cmp.lede':
    'The same questions, asked the same way, for all three states. Useful if you are deciding where to look for a first job.',
  'cmp.empty.h2': 'Nothing to compare yet',
  'cmp.empty.p': 'The first data run is still in progress.',
  'cmp.caption':
    'STEM job statistics compared across New Jersey, New York and Pennsylvania',
  'cmp.col': 'What we measured',
  'cmp.row1': 'People already working in STEM jobs',
  'cmp.row2': 'Private-sector job matches (30 days)',
  'cmp.row3': 'Government jobs open today',
  'cmp.row4': 'Typical STEM salary (middle pay)',
  'cmp.row5': 'Data collected on',
  'cmp.note':
    'The first two rows count different things, on purpose. The first is everyone on the payroll. The second is job openings advertised in the last month. You cannot compare them directly - and neither can the government.',
  'cmp.read.eyebrow': 'Worth knowing',
  'cmp.read.h2': 'How to read these numbers',
  'cmp.read.lede': 'Three things that trip people up when they read jobs data.',
  'cmp.card1.h3': 'An opening is not a career',
  'cmp.card1.p':
    'A posting is one job opening today. It might be filled next week. It shows you that employers are hiring, not that a job is waiting for you.',
  'cmp.card2.h3': 'Middle beats average',
  'cmp.card2.p':
    'A few very high salaries drag the average up. The middle salary is what the person in the middle earns - a much better guide to what you would actually get.',
  'cmp.card3.h3': 'STEM is not only university',
  'cmp.card3.p':
    'Plenty of STEM careers - technicians, machinists, IT support, surveying - start with a certificate, an apprenticeship or a two-year degree.',
  'cmp.glossary1': 'Words you might not know?',
  'cmp.glossary2': 'The glossary explains them.',
  // Sources page
  'src.tag': 'Full transparency',
  'src.h1': 'Where the numbers come from',
  'src.lede':
    'Nothing on this site is made up. Here is every source, what we pull from it, and how to check it yourself.',
  'src.lastRun': 'Last data run:',
  'src.caption': 'Data sources used on this site',
  'src.colSource': 'Source',
  'src.colUse': 'What we use it for',
  'src.colOften': 'How often',
  'src.colCost': 'Cost',
  'src.free': 'Free',
  'src.yearly': 'Yearly',
  'src.yearlyMay': 'Yearly (May survey)',
  'src.daily': 'Daily',
  'src.use.blsOes': 'How many people work in each occupation, and what they earn',
  'src.use.blsEmp':
    'Which careers are growing, how many openings there will be, and what students usually study',
  'src.use.usajobs': 'Open federal STEM jobs in each state',
  'src.use.cos':
    'Open private-sector STEM jobs, counted for every occupation we track',
  'src.use.nj': 'Open New Jersey state and local government jobs',
  'src.use.ny': 'Open New York state government jobs',
  'src.use.pa': 'Open Pennsylvania state government jobs',
  'src.note1.h3': 'How we decide what counts as STEM',
  'src.note1.p':
    'We start from the Bureau of Labor Statistics definition - computer and mathematical, architecture and engineering, and life and physical science occupations - and add the technical, health and skilled-trade occupations that students routinely think of as STEM careers. Every occupation code we count is listed in the pipeline, so you can see exactly how a job was classified.',
  'src.note2.h3': 'What we do with your data',
  'src.note2.p':
    'We do not collect any information about you, and there is no tracking or advertising on this site. The site is a set of static files, so there is no database behind it and no one to ask about your data.',
  // About page
  'about.tag': 'About Us',
  'about.h1': 'We empower students to succeed with STEM',
  'about.lede':
    'Students 2 Science (S2S) is a New Jersey nonprofit that brings real science, real labs and real scientists to students - many of them from communities that have never had that chance.',
  'about.mission.h2': 'Our mission',
  'about.mission.p':
    'To inspire and empower all students through hands-on learning experiences, encouraging them to pursue careers in science, technology, engineering and math - and in doing so, to strengthen the future workforce.',
  'about.vision.h2': 'Our vision',
  'about.vision.p':
    'Every student in New Jersey should have access to STEM learning opportunities and career pathways. That means:',
  'about.vision.1': 'Expanding our programs to reach 450,000 students every year.',
  'about.vision.2': 'Operating 3-5 Technology Centers in the areas that need them most.',
  'about.vision.3':
    "Building curriculum that matches what the state's future workforce will actually require.",
  'about.vision.4':
    'Giving students the room to explore and define their own STEM career and education pathways.',
  'about.impact.h2': 'Our impact',
  'about.impact.p':
    'Since 2009, hands-on STEM experiences, innovative programming, state-of-the-art Technology Centers and direct work with professional scientists have reached students, communities and the economy:',
  'about.impact1.h3': 'Individuals',
  'about.impact1.p':
    'More than 500,000 students in New Jersey need education support, especially in STEM. S2S opens that door: to date, our programs have served over 300,000 students with immersive, hands-on experiences using real laboratory instrumentation.',
  'about.impact2.h3': 'Communities',
  'about.impact2.p':
    'Many of our students come from communities that lack the experts, resources and facilities high-quality STEM education needs. S2S gives them critical skills and mentoring - the kind that can lift an entire community.',
  'about.impact3.h3': 'The economy',
  'about.impact3.p':
    'The Bureau of Labor Statistics projects STEM jobs will grow 10.4% between 2023 and 2033 - nearly three times faster than non-STEM jobs. S2S is preparing students to fill those well-paid roles.',
  'about.ach.h2': 'Achievement highlights',
  'about.ach.1': 'Engaged over 350,000 students in S2S programs.',
  'about.ach.2': 'Established two state-of-the-art Technology Centers.',
  'about.ach.3':
    "Created a formal partnership with Newark Public Schools, New Jersey's largest school district.",
  'about.ach.4':
    'Partnered with more than 200 schools and community organizations across New Jersey and beyond.',
  'about.ach.5': 'Involved over 1,000 corporate, higher education and community volunteers.',
  'about.site.h2': 'About this site',
  'about.site.p1': 'STEM Pathways is built by Students 2 Science. Every salary, job count',
  'about.site.p2': 'and growth figure comes from official government sources - see',
  'about.site.sources': 'where the data comes from',
  'about.site.p3': '. Want to see how a lab experiment connects to a real career? Start with',
  'about.site.p4': '. Curious about our work with high school students? Read about the',
  // CAP page
  'cap.tag': 'CAP Program',
  'cap.h1': 'Career Advancement Program (CAP)',
  'cap.lede':
    'Education, job training and career exploration for high school students - so you can find your direction before the real world starts asking for one.',
  'cap.what.h2': 'What CAP is',
  'cap.what.p1':
    'CAP supports students in grades 10-12 from our partner schools and districts with guided exploration of what comes after high school and hands-on STEM career development.',
  'cap.what.p2':
    'Through partnerships with schools, corporations and community stakeholders, CAP connects students with industry experts, real experiences and individualized coaching - while engaging professionals in developing the future workforce. The focus is career readiness, professional development and STEM identity-building: the skills, exposure and connections needed to pursue rewarding educational and career pathways in STEM.',
  'cap.sig.h2': 'Signature programs',
  'cap.sig1.h3': 'ISAAC Internship',
  'cap.sig1.p':
    'Project-based internships for high school (16+) and college students, working alongside S2S staff and industry professionals. Interns get career-readiness training, resume and interview coaching, and direct exposure to STEM professionals and hiring managers.',
  'cap.sig2.h3': 'STEM Pathways Mentoring (STEMPath)',
  'cap.sig2.p':
    'Students in grades 11-12 take part in one-on-one, 2:1 and group mentoring with relatable STEM professionals. These connections help you explore career pathways, expand your professional network, and get ready for what comes next.',
  'cap.more.h2': 'More inside CAP',
  'cap.more.1a': 'Career exploration',
  'cap.more.1b':
    ' - workplace tours, employee meet-and-greets, career panels and STEM professional engagement.',
  'cap.more.2a': 'Professional and soft skills',
  'cap.more.2b':
    ' - communication, teamwork, leadership, professionalism and workplace effectiveness.',
  'cap.more.3a': 'Industry-aligned learning',
  'cap.more.3b':
    ' - certifications, specialized training, workforce-readiness resources and career-development pathways.',
  'cap.corp.h2': 'Corporations',
  'cap.corp.p': 'If your company wants to be part of CAP,',
  'cap.corp.email': 'email CAP@students2science.org',
  'cap.note.1':
    'Testing out careers on paper is one thing - meeting the people who do them is another. Try',
  'cap.note.2': 'to see how lab experiments connect to real jobs, or',
  'cap.note.3': 'browse every career',
  'cap.note.4': 'on this site.',
  // Glossary page
  'glo.tag': 'Glossary',
  'glo.h1': 'The words we use, explained',
  'glo.lede':
    'Every data site has jargon. Here is ours, in plain English - the kind you could explain to a friend in one sentence.',
  'glo.small':
    'New to the site? Start with the three numbers on a state page: they look similar but they count completely different things.',
  'glo.missing': 'Something missing or confusing? Tell us and we will add it here.',
  'glo.tellus': 'Tell us where the data comes from',
  'glo.andadd': 'and we will add it here.',
  // Quiz page
  'quiz.tag': 'Quiz',
  'quiz.h1': 'Guess the salary',
  'quiz.lede':
    'Three STEM jobs. Only one of them pays the most. How many can you get? The numbers are real - the middle salary for each job, straight from the Bureau of Labor Statistics.',
  'quiz.small':
    'There are five questions. Click the job you think pays the most, and you will find out straight away.',
  'quiz.loading': 'The quiz is being loaded with new questions — check back soon.',
  'quiz.question': 'Question',
  'quiz.of': 'of',
  'quiz.score': 'Score',
  'quiz.ask': 'Which one pays the most?',
  'quiz.result': 'Your result',
  'quiz.again': 'Play again',
  'quiz.correct': 'Correct! The middle salary for {job} is {pay} a year.',
  'quiz.wrong':
    'Not quite. The middle salary for {job} is {pay} a year — {diff} more.',
  'quiz.perfect': 'Perfect score. You really know your STEM salaries.',
  'quiz.close': 'So close! One more round?',
  'quiz.nice': 'Nice try — now you know more than you did before.',
  'quiz.scored': 'You scored {score} out of {total}.',
  // Careers index
  'ci.tag': 'Career list',
  'ci.h1': 'Every STEM career we track',
  'ci.lede':
    '{count} careers, grouped by field. Pick one to see what the job involves, what it pays, and how many openings there are right now.',
  'ci.search': 'Search for a job',
  'ci.placeholder': 'nurse, engineer, teacher, ...',
  'ci.note': '{count} careers listed. Type to narrow the list down.',
  'ci.match': '{count} careers match "{term}".',
  'ci.matchOne': '{count} career matches "{term}".',
  'ci.loading': 'Careers are still being loaded - check back soon.',
  'ci.careers': 'careers',
  'ci.colCareer': 'Career',
  'ci.colWhat': 'What you would do',
  'ci.colPeople': 'People working',
  'ci.colMedian': 'Middle pay',
  'ci.colEntry': 'Starting pay',
  'ci.colGrowth': 'Growing',
  'ci.caption': '{category} careers with employment, pay and growth',
  'ci.footnote': 'Employment is the total for {states}. Pay is the average of the three states.',
  'ci.sources': 'See sources',
  'ci.glossary': 'Glossary',
  // Career detail page
  'cd.day': 'A typical day',
  'cd.study': 'What to study',
  'cd.education': 'Most people in this job have a {education}.',
  'cd.educationNone':
    'Most paths start with a certificate, apprenticeship or two-year degree.',
  'cd.numbers': 'The numbers',
  'cd.caption': '{title} in each state',
  'cd.colState': 'State',
  'cd.colPeople': 'People doing this job',
  'cd.colMedian': 'Middle pay',
  'cd.colEntry': 'Starting pay',
  'cd.colOpen': 'Jobs open now',
  'cd.colGrowth': 'Is it growing?',
  'cd.median1': 'is what the person in the middle earns - half earn more, half earn less.',
  'cd.medianExplain':
    'The median is the middle salary. It is more useful than the average, because a few very high salaries can drag an average up and make a job look better than it is for most people.',
  'cd.open1':
    'counts private-sector job postings for this exact job in the last 30 days, within 50 miles of the state.',
  'cd.openExplain':
    'These come from CareerOneStop, the federal site that collects job postings from thousands of private employers. A posting is one opening - it does not mean the job will last forever.',
  'cd.growth1':
    'is the Bureau of Labor Statistics prediction for how many more jobs there will be by 2035.',
  'cd.feels': 'What that salary feels like',
  'cd.feels.note':
    'Based on the middle pay in {state}, before taxes. Real pay depends on experience, overtime and where you live.',
  'cd.highest': 'Where the pay is highest',
  'cd.highest.label': 'Middle pay for {title} in each state',
  'cd.howmany': 'How many people already do this?',
  'cd.howmany.p':
    'In {state}, about {count} people work as {job}. Across all three states, the job is done by roughly {total} people.',
  'cd.questions': 'Good questions to ask',
  'cd.q1': 'Do I want to work with my hands, with data, or with people?',
  'cd.q2': 'Is there a local apprenticeship or certificate program?',
  'cd.q3': 'Which classes should I sign up for next year?',
  'cd.q4': 'Who is already working in this job near me - could I ask them?',
  'cd.dataAsOf': 'Data as of',
  'cd.bls': 'Employment and pay come from the Bureau of Labor Statistics.',
  'cd.sources': 'See all sources',
  'cd.glossary': 'New to these words? Read the glossary',
  'cd.titleSuffix': "what it's like, what it pays",
  'cd.description':
    '{title} in New Jersey, New York and Pennsylvania: what the job involves, what it pays, how many openings there are, and what to study.',
  // PayTranslation
  'pay.lead1': 'works out to about',
  'pay.lead2': 'an hour',
  'pay.lead3': 'or',
  'pay.lead4': 'a week before taxes.',
  'pay.year': 'a year',
  'pay.perHour': 'per hour',
  'pay.perDay': 'per day',
  'pay.perWeek': 'per week',
  'pay.perMonth': 'per month',
  'pay.thatIs': 'That is',
  'pay.c1': 'about the price of a nice dinner out',
  'pay.c2': 'about the price of a movie ticket and a snack',
  'pay.c3': 'about the price of a concert ticket',
  'pay.c4': 'about the price of a large pizza',
  'pay.c5': 'about the price of a fast-food meal',
  // Career Exploration (/explore)
  'ex.title': 'Career Exploration',
  'ex.description':
    'Rate everyday activities, find your interest profile, and see the STEM careers that fit it - with real pay, growth and openings for New Jersey, New York and Pennsylvania.',
  'ex.tag': 'Interest quiz',
  'ex.h1': 'Which STEM careers fit you?',
  'ex.lede':
    'Tell us how much you would enjoy different activities. We turn your answers into an interest profile, then show the STEM careers that match it.',
  'ex.step1.h': '1. Rate activities',
  'ex.step1.p': 'Say how much you would enjoy each one. There are no right or wrong answers.',
  'ex.step2.h': '2. See your profile',
  'ex.step2.p': 'Find out which of six interest types describe you best.',
  'ex.step3.h': '3. Explore careers',
  'ex.step3.p':
    'Get STEM careers that fit you, with real pay and job growth. Filter by school and field.',
  'ex.len.legend': 'How long do you want the quiz to be?',
  'ex.len.quick': 'Quick',
  'ex.len.quickNote': '{n} activities, about 3 minutes',
  'ex.len.full': 'Full',
  'ex.len.fullNote': '{n} activities, about 6 minutes, more accurate',
  'ex.start': 'Start the quiz',
  'ex.privacy':
    "Nothing you answer is stored or sent anywhere. Your results live in this page's link, so you can save or share them.",
  'ex.credit.before': "Based on the six interest types of the U.S. Department of Labor's ",
  'ex.credit.link': 'O*NET Interest Profiler',
  'ex.credit.after':
    ". The activities here are our own, and each career's interest code is our own estimate, so use the results as a starting point, not a verdict.",
  'ex.noscript': 'This quiz needs JavaScript. You can still browse every career.',
  'ex.q.label': 'Quiz question',
  'ex.q.count': 'Activity {n} of {total}',
  'ex.q.ask': 'How much would you enjoy this?',
  'ex.q.tip': 'Tip: press 1 to 5 on your keyboard to answer.',
  'ex.a.love': 'Love it',
  'ex.a.like': 'Like it',
  'ex.a.meh': 'Not sure',
  'ex.a.dislike': 'Dislike',
  'ex.a.no': 'No way',
  'ex.back': 'Back',
  'ex.restart': 'Start over',
  'ex.r.eyebrow': 'Your results',
  'ex.r.h2': 'Your interest profile',
  'ex.r.lede':
    'Your strongest interests are {top}. The careers below are ranked by how well they fit this mix.',
  'ex.r.code': 'Your interest code',
  'ex.r.flat':
    'You gave almost the same answer to everything, so we cannot tell your interests apart yet. Retake the quiz and use the whole scale, from Love it to No way.',
  'ex.f.state': 'Pay and jobs for',
  'ex.f.school': 'How much school?',
  'ex.f.field': 'Field',
  'ex.f.hint': 'Pick none to see everything.',
  'ex.f.sort': 'Sort by',
  'ex.f.sortFit': 'Best match',
  'ex.f.sortPay': 'Highest pay',
  'ex.f.sortGrowth': 'Fastest growing',
  'ex.f.clear': 'Clear filters',
  'ex.state.nj': 'New Jersey',
  'ex.state.ny': 'New York',
  'ex.state.pa': 'Pennsylvania',
  'ex.state.all': 'All 3 states',
  'ex.z1': 'High school + training',
  'ex.z2': '2-year degree',
  'ex.z3': '4-year degree',
  'ex.z4': "Master's or higher",
  'ex.count': 'Showing {shown} of {n} careers',
  'ex.none': 'No careers match these filters. Try clearing one.',
  'ex.more': 'Show more careers',
  'ex.fit.great': 'Great match',
  'ex.fit.good': 'Good match',
  'ex.fit.maybe': 'Worth a look',
  'ex.card.because': 'Matches your interest in',
  'ex.card.pay': 'Typical salary',
  'ex.card.perYear': '/year',
  'ex.card.perHour': 'about {n} an hour',
  'ex.card.growth': 'Job growth',
  'ex.card.people': 'People doing it',
  'ex.card.in': 'in {where}',
  'ex.card.path': 'Usual path: {school}.',
  'ex.card.also': 'Related careers: {list}',
  'ex.card.alsoMore': 'and {n} more',
  'ex.card.link': 'See the full career page',
  'ex.g.exploding': 'Exploding',
  'ex.g.fast': 'Growing fast',
  'ex.g.growing': 'Growing',
  'ex.g.steady': 'Steady',
  'ex.g.shrinking': 'Shrinking',
  'ex.copy': 'Copy my results link',
  'ex.copied': 'Link copied!',
  'ex.print': 'Print or save as PDF',
  'ex.retake': 'Retake the quiz',
  'ex.method.h': 'How the matching works',
  'ex.method.p':
    "Your answers give each of the six interest types a score from 0 to 100. Every career has a three-letter interest code, strongest first. The closer a career's code is to your strongest types, the higher it ranks. Pay, growth and job counts come from the same government data as the rest of the site.",
  // Labs2Life
  'l2l.h1': 'From a lab experiment to a real career',
  'l2l.lede':
    'Every experiment you do in an S2S lab is the daily work of somebody somewhere. Pick a lab, see the careers behind it, and click through to the real numbers - pay, openings, growth - for each job.',
  'l2l.browse': 'Browse all careers',
  'l2l.about': 'About Students 2 Science',
  'l2l.labs': '{count} labs',
  'l2l.kicker': 'Careers in this lab',
  'l2l.soon': 'Profile coming soon',
  'l2l.match.eyebrow': 'Not sure which fits you?',
  'l2l.match.h2': 'Get matched instead',
  'l2l.match.lede':
    'The Career Exploration quiz asks a few questions about what you like doing, then shows the jobs that match - with real salaries and job openings.',
  'l2l.level.elementary': 'Elementary Labs',
  'l2l.level.middle': 'Middle School Labs',
  'l2l.level.high': 'High School Labs',
  // 404
  '404.h1': "Hmm, that page isn't here",
  '404.lede':
    'It may have moved, or the link might be old. If you followed an old link, everything now lives at',
  '404.home': 'Back to the start',
  '404.compare': 'Compare states',
  // State blurbs
  'state.nj.blurb':
    'Home of the "Science Corridor" between Rutgers, Princeton and Bell Labs - one of the densest STEM hubs on the East Coast.',
  'state.ny.blurb':
    'From the tech campuses of the Finger Lakes to the biotech belt outside the city, New York is the biggest STEM market in the country.',
  'state.pa.blurb':
    'Philly is a biotech and robotics powerhouse, and the rest of the state adds nuclear energy, advanced manufacturing and aerospace.',
  // Explain aria
  'explain.aria': 'What does this mean?',
} as const;

export type I18nKey = keyof typeof en;

const es: Record<I18nKey, string> = {
  'nav.main': 'Principal',
  'nav.states': 'Estados',
  'nav.compareAll': 'Comparar los tres',
  'nav.aboutS2S': 'Sobre S2S',
  'nav.aboutUs': 'Quiénes somos',
  'nav.cap': 'Programa CAP',
  'nav.labs2life': 'Labs2Life',
  'nav.more': 'Más',
  'nav.quiz': 'Prueba',
  'nav.glossary': 'Glosario',
  'nav.sources': 'Fuentes',
  'nav.browseCareers': 'Explorar carreras',
  'nav.help': 'Cómo navegar este sitio',
  'nav.lang': 'Idioma / Language',
  skip: 'Ir al contenido',
  'footer.blurb':
    'Cifras reales sobre carreras de ciencia, tecnología, ingeniería y matemáticas en Nueva Jersey, Nueva York y Pensilvania — creado para estudiantes que están decidiendo qué hacer después.',
  'footer.explore': 'Explorar',
  'footer.states': 'Estados',
  'footer.learn': 'Aprender',
  'footer.labs': 'Labs2Life — del laboratorio a la carrera',
  'footer.labs2': 'Labs2Life — del laboratorio a la carrera',
  'footer.about': 'Sobre Students 2 Science',
  'footer.cap': 'Programa de Avance Profesional (CAP)',
  'footer.cap2': 'Programa de Avance Profesional',
  'footer.quiz': 'Adivina el salario',
  'footer.careers': 'Explorar carreras',
  'footer.exploreCareers': 'Exploración de carreras',
  'footer.glossary': 'Palabras STEM explicadas',
  'footer.sources': 'De dónde vienen los datos',
  'footer.note':
    'Cada cifra de este sitio proviene de una fuente gubernamental oficial y está marcada con su fecha. Nada aquí es un consejo sobre tu futuro — es un punto de partida para explorar.',
  'footer.lastRun': 'Última actualización de datos:',
  'es.notice':
    'Los títulos de los puestos y las ofertas de trabajo provienen de fuentes gubernamentales oficiales de EE. UU.; algunos títulos se muestran traducidos al español.',
  'guide.title': 'Cómo navegar este sitio',
  'guide.lede': 'Aquí está todo el sitio, en un solo lugar.',
  'guide.close': 'Cerrar la guía',
  'guide.states.blurb': 'Cantidad de empleos, salarios y vacantes de cada estado.',
  'guide.labs.blurb': 'Los laboratorios de S2S y las carreras detrás de cada experimento.',
  'guide.labs.link': 'Del laboratorio a la carrera',
  'guide.careers.title': 'Carreras',
  'guide.careers.blurb': 'Cada empleo STEM: cuánto paga, vacantes y qué estudiar.',
  'guide.careers.browse': 'Explorar todas las carreras',
  'guide.careers.glossary': 'Glosario de términos',
  'guide.tools.title': 'Herramientas',
  'guide.tools.blurb': 'Juega con los números y descubre de dónde vienen.',
  'guide.tools.quiz': 'Prueba: adivina el salario',
  'guide.tools.sources': 'Fuentes y notas sobre los datos',
  'guide.tools.explore': 'Exploración de carreras: ¿qué te interesa?',
  'guide.about.blurb': 'Quiénes somos y cómo ayudamos a los estudiantes a llegar a carreras STEM.',
  'guide.about.about': 'Sobre Students 2 Science',
  'guide.about.cap': 'Programa de Avance Profesional',
  'home.tag': 'Datos en vivo de fuentes gubernamentales oficiales',
  'home.h1': '¿Cómo es realmente un empleo STEM donde vives?',
  'home.lede':
    'Cifras reales sobre empleos de ciencia, tecnología, ingeniería y matemáticas en Nueva Jersey, Nueva York y Pensilvania. Cuántos hay disponibles. Cuánto pagan. Y qué tendrías que estudiar para conseguir uno.',
  'home.ctaNj': 'Empieza con Nueva Jersey',
  'home.ctaCompare': 'Compara los tres estados',
  'home.ctaFinder': 'Exploración de carreras',
  'home.updated': 'Última actualización',
  'home.stat1.label': 'personas ya trabajan en empleos STEM en Nueva Jersey',
  'home.stat1.note': 'De una encuesta a todos los empleadores del estado',
  'home.stat2.label': 'coincidencias de empleos STEM del sector privado ahora mismo',
  'home.stat2.note':
    'Buscados por puesto y por estado, así que un mismo empleo puede contarse más de una vez',
  'home.stat3.note': 'Es el empleo STEM más común del estado',
  'home.pick.eyebrow': 'Elige tu estado',
  'home.pick.h2': '¿Dónde están los empleos STEM?',
  'home.pick.lede':
    'Cada cifra aquí proviene directamente de una agencia gubernamental, y cada una está marcada con la fecha en que se recopiló. Elige el estado donde vives.',
  'home.groups.eyebrow': 'Los ocho tipos de trabajo STEM',
  'home.groups.h2': 'STEM no es una sola cosa',
  'home.groups.lede':
    'Un ingeniero civil y una analista de ciberseguridad cuentan como STEM, y hacen trabajos muy diferentes. Agrupamos los empleos como lo hace el Departamento del Trabajo de EE. UU., con los grupos oficiales de ocupaciones de su Oficina de Estadísticas Laborales.',
  'home.how.eyebrow': 'Cómo funciona este sitio',
  'home.how.h2': '¿De dónde vienen los números?',
  'home.how.lede':
    'Nada aquí está inventado. Cada cifra proviene de una agencia del gobierno de EE. UU., y decimos cuál y cuándo.',
  'home.how1.h3': '📊 Cuántos empleos hay y cuánto pagan',
  'home.how1.p':
    'Una vez al año, la Oficina de Estadísticas Laborales pregunta a cada empleador del país cuántas personas emplea y cuánto les paga. De esa encuesta salen los conteos de empleos y los salarios.',
  'home.how2.h3': '📣 Qué está disponible ahora mismo',
  'home.how2.p':
    'Las bolsas de trabajo publican cada vacante en cuanto aparece. Les preguntamos sobre cada empleo STEM que seguimos, así que los conteos son exactos y no una suposición a partir del título.',
  'home.how3.h3': '🧭 Qué estudiar después',
  'home.how3.p':
    'La Oficina de Estadísticas Laborales también registra qué educación suele necesitarse para entrar en cada empleo. Lo ponemos en cada página de carrera, junto a una descripción del trabajo en lenguaje sencillo.',
  'home.how.details': '¿Quieres los detalles?',
  'home.how.sources': 'Mira cada fuente y cómo la usamos.',
  'home.how.glossary': '¿No sabes qué significa una palabra? Prueba el glosario.',
  'stateCard.loading': 'Cargando datos…',
  'stateCard.coming': 'Próximamente →',
  'stateCard.rightNow': 'ahora mismo',
  'sp.tag': 'empleos STEM',
  'sp.h1': 'Rutas STEM hacia',
  'sp.asOf': 'Cifras al',
  'sp.noData.h2': 'Los datos están en camino',
  'sp.noData.p':
    'Todavía estamos recopilando las cifras de {state}. Vuelve pronto: la bolsa de trabajo en vivo, los gráficos salariales y los desgloses por zona metropolitana aparecerán aquí.',
  'sp.noData.cta': 'Mira qué recopilamos y por qué',
  'sp.stat1.label': 'personas ya trabajan en empleos STEM aquí',
  'sp.stat1.note': 'De una encuesta a todos los empleadores del estado',
  'sp.stat2.label': 'coincidencias de empleos STEM del sector privado ahora mismo',
  'sp.stat2.note': 'Buscados por puesto, así que un mismo empleo puede contarse más de una vez',
  'sp.stat3.label': 'empleos STEM del gobierno abiertos hoy',
  'sp.stat3.note': 'Federales, estatales y locales',
  'sp.stat4.label': 'un salario STEM típico',
  'sp.stat4.note': 'Lo que gana la persona del medio',
  'sp.read.h2': 'Cómo leer esta página',
  'sp.read.p':
    'Hay tres números diferentes en esta página y cuentan cosas distintas. Saber cuál es cuál es la mayor parte del trabajo.',
  'sp.read.1a': 'Personas que ya trabajan en STEM',
  'sp.read.1b':
    ': un conteo de todos los que están en nómina, según una encuesta a empleadores. Cambia lentamente, una vez al año.',
  'sp.read.2a': 'Ofertas de empleo',
  'sp.read.2b':
    ': vacantes anunciadas ahora mismo. Una oferta es un puesto. Podría cubrirse la próxima semana.',
  'sp.read.3a': 'Empleos del gobierno',
  'sp.read.3b':
    ': un conjunto más pequeño de vacantes a las que puedes postularte directamente, publicadas en bolsas de trabajo oficiales.',
  'sp.fields.eyebrow': '¿Qué tipos de trabajo STEM?',
  'sp.fields.h2': 'Dónde trabaja la gente',
  'sp.fields.lede':
    'Esta es toda la gente de {state} que trabaja en un empleo STEM, dividida en los grupos de ocupaciones del Departamento del Trabajo de EE. UU. que usamos.',
  'sp.fields.label': 'Personas en empleos STEM en {state}, por campo',
  'sp.private.eyebrow': 'Quién está contratando ahora',
  'sp.private.h2': 'Empleos STEM del sector privado en {state}',
  'sp.private.lede':
    'Ofertas de empleo de CareerOneStop, el sitio federal que reúne vacantes de miles de empleadores privados. Le preguntamos sobre cada empleo STEM que seguimos, así que estos conteos son exactos para cada ocupación.',
  'sp.private.byField': 'Ofertas por campo',
  'sp.private.byFieldLabel': 'Ofertas STEM del sector privado en {state} por campo',
  'sp.private.note':
    '{count} coincidencias de empleo en los últimos 30 días, dentro de 80 km del estado. Buscamos una vez por puesto, así que un mismo empleo puede contarse más de una vez.',
  'sp.private.where': 'Dónde están contratando',
  'sp.private.whereLabel': 'Ofertas STEM del sector privado en {state} por ciudad',
  'sp.private.who': 'Quién contrata más',
  'sp.private.whoLabel': 'Principales empleadores STEM del sector privado en {state}',
  'sp.private.none': 'Los conteos de ofertas del sector privado no están disponibles ahora.',
  'sp.gov.eyebrow': 'Empleos del gobierno',
  'sp.gov.h2': 'Empleos a los que puedes postularte hoy',
  'sp.gov.lede':
    'Vacantes federales, estatales y locales: del tipo al que puedes postularte ahora mismo en un sitio web oficial.',
  'sp.gov.label': 'Empleos STEM del gobierno abiertos en {state} por campo',
  'sp.gov.caption': 'De dónde vienen los conteos de empleos abiertos',
  'sp.gov.source': 'Fuente',
  'sp.gov.count': 'Cantidad',
  'sp.gov.examples': 'Algunos ejemplos reales',
  'sp.gov.none': 'Aún no hay ofertas registradas.',
  'sp.common.eyebrow': 'Los empleos más comunes',
  'sp.common.h2': 'Lo que la mayoría de los trabajadores STEM hace en realidad',
  'sp.common.lede':
    'Haz clic en cualquier empleo para ver qué implica, cuánto paga y cuántas vacantes hay ahora mismo.',
  'sp.common.label': 'Empleos STEM más grandes en {state}',
  'sp.pay.eyebrow': 'El dinero',
  'sp.pay.h2': '¿Qué empleos pagan más?',
  'sp.pay.lede': 'Salario anual promedio de empleos con 200 o más trabajadores en {state}.',
  'sp.pay.label': 'Empleos STEM mejor pagados en {state}',
  'sp.pay.note1': 'El salario promedio es elevado un poco por los que más ganan, así que las',
  'sp.pay.note2': 'páginas de carreras',
  'sp.pay.note3': 'también muestran el salario del medio.',
  'sp.metro.eyebrow': 'Dónde trabajan',
  'sp.metro.h2': '¿Qué ciudades tienen más empleos STEM?',
  'sp.metro.lede':
    'Una zona metropolitana es una ciudad más todo lo que la rodea y comparte el mismo mercado laboral. Algunas cruzan las fronteras estatales.',
  'sp.metro.label': 'Empleo STEM por zona metropolitana en {state}',
  'sp.metro.also': 'también cubre',
  'sp.growth.eyebrow': 'Lo que está creciendo',
  'sp.growth.h2': '¿Qué empleos STEM van en aumento?',
  'sp.growth.lede':
    'Cuánto se prevé que crezca cada empleo, a nivel nacional, entre 2025 y 2035.',
  'sp.growth.label': 'Empleos STEM de mayor crecimiento en {state}',
  'sp.growth.note':
    'Una predicción, no una promesa. La Oficina de Estadísticas Laborales las publica cada año.',
  'sp.deeper.eyebrow': 'Profundiza',
  'sp.deeper.h2': 'Elige un campo y mira los empleos que contiene',
  'sp.deeper.lede': 'Cada empleo, qué implica y cuánto paga en {state}.',
  'sp.deeper.workIn': 'personas trabajan en este campo en',
  'sp.suffix.people': 'personas',
  'sp.suffix.posting': 'oferta',
  'sp.suffix.job': 'empleo',
  'sp.note.usajobs': 'Empleos federales abiertos. Puedes postularte hoy.',
  'sp.note.njcivil':
    'Exámenes abiertos del gobierno estatal y local de Nueva Jersey. Postularte te pone en una lista de contratación.',
  'sp.note.ny':
    'Empleos abiertos del gobierno del estado de Nueva York. Puedes postularte hoy.',
  'sp.note.pa':
    'Empleos abiertos del gobierno del estado de Pensilvania. Puedes postularte hoy.',
  'sp.note.cos':
    'Empleos del sector privado, contados buscando cada ocupación STEM. El mismo empleo puede contarse dos veces, así que esta cifra se mantiene aparte.',
  'cmp.tag': 'Uno al lado del otro',
  'cmp.h1': 'Nueva Jersey vs Nueva York vs Pensilvania',
  'cmp.lede':
    'Las mismas preguntas, hechas de la misma manera, para los tres estados. Útil si estás decidiendo dónde buscar tu primer empleo.',
  'cmp.empty.h2': 'Aún no hay nada que comparar',
  'cmp.empty.p': 'La primera recopilación de datos aún está en curso.',
  'cmp.caption':
    'Estadísticas de empleos STEM comparadas entre Nueva Jersey, Nueva York y Pensilvania',
  'cmp.col': 'Lo que medimos',
  'cmp.row1': 'Personas que ya trabajan en empleos STEM',
  'cmp.row2': 'Coincidencias de empleos del sector privado (30 días)',
  'cmp.row3': 'Empleos del gobierno abiertos hoy',
  'cmp.row4': 'Salario STEM típico (pago del medio)',
  'cmp.row5': 'Datos recopilados el',
  'cmp.note':
    'Las dos primeras filas cuentan cosas diferentes, a propósito. La primera es todo el que está en nómina. La segunda son vacantes anunciadas en el último mes. No se pueden comparar directamente, y el gobierno tampoco lo hace.',
  'cmp.read.eyebrow': 'Conviene saber',
  'cmp.read.h2': 'Cómo leer estos números',
  'cmp.read.lede': 'Tres cosas que confunden a la gente al leer datos de empleo.',
  'cmp.card1.h3': 'Una vacante no es una carrera',
  'cmp.card1.p':
    'Una oferta es una vacante de hoy. Podría cubrirse la próxima semana. Te muestra que los empleadores están contratando, no que haya un puesto esperándote.',
  'cmp.card2.h3': 'El medio supera al promedio',
  'cmp.card2.p':
    'Unos pocos salarios muy altos elevan el promedio. El salario del medio es lo que gana la persona del medio: una guía mucho mejor de lo que realmente ganarías.',
  'cmp.card3.h3': 'STEM no es solo universidad',
  'cmp.card3.p':
    'Muchas carreras STEM —técnicos, maquinistas, soporte de TI, topografía— empiezan con un certificado, un aprendizaje o un título de dos años.',
  'cmp.glossary1': '¿Palabras que no conoces?',
  'cmp.glossary2': 'El glosario las explica.',
  'src.tag': 'Transparencia total',
  'src.h1': 'De dónde vienen los números',
  'src.lede':
    'Nada de este sitio está inventado. Aquí está cada fuente, qué tomamos de ella y cómo comprobarla tú mismo.',
  'src.lastRun': 'Última actualización de datos:',
  'src.caption': 'Fuentes de datos usadas en este sitio',
  'src.colSource': 'Fuente',
  'src.colUse': 'Para qué la usamos',
  'src.colOften': 'Con qué frecuencia',
  'src.colCost': 'Costo',
  'src.free': 'Gratis',
  'src.yearly': 'Anual',
  'src.yearlyMay': 'Anual (encuesta de mayo)',
  'src.daily': 'Diario',
  'src.use.blsOes': 'Cuántas personas trabajan en cada ocupación y cuánto ganan',
  'src.use.blsEmp':
    'Qué carreras están creciendo, cuántas vacantes habrá y qué suelen estudiar los estudiantes',
  'src.use.usajobs': 'Empleos STEM federales abiertos en cada estado',
  'src.use.cos':
    'Empleos STEM del sector privado abiertos, contados para cada ocupación que seguimos',
  'src.use.nj': 'Empleos abiertos del gobierno estatal y local de Nueva Jersey',
  'src.use.ny': 'Empleos abiertos del gobierno del estado de Nueva York',
  'src.use.pa': 'Empleos abiertos del gobierno del estado de Pensilvania',
  'src.note1.h3': 'Cómo decidimos qué cuenta como STEM',
  'src.note1.p':
    'Partimos de la definición de la Oficina de Estadísticas Laborales —ocupaciones de informática y matemáticas, arquitectura e ingeniería, y ciencias biológicas y físicas— y añadimos las ocupaciones técnicas, de salud y de oficios especializados que los estudiantes suelen considerar carreras STEM. Cada código de ocupación que contamos aparece en el proceso de datos, así que puedes ver exactamente cómo se clasificó cada empleo.',
  'src.note2.h3': 'Qué hacemos con tus datos',
  'src.note2.p':
    'No recopilamos ninguna información sobre ti y no hay rastreo ni publicidad en este sitio. El sitio es un conjunto de archivos estáticos, así que no hay base de datos detrás ni nadie a quien preguntar sobre tus datos.',
  'about.tag': 'Quiénes somos',
  'about.h1': 'Empoderamos a los estudiantes para triunfar con STEM',
  'about.lede':
    'Students 2 Science (S2S) es una organización sin fines de lucro de Nueva Jersey que acerca ciencia real, laboratorios reales y científicos reales a los estudiantes, muchos de ellos de comunidades que nunca han tenido esa oportunidad.',
  'about.mission.h2': 'Nuestra misión',
  'about.mission.p':
    'Inspirar y empoderar a todos los estudiantes mediante experiencias de aprendizaje práctico, animándolos a seguir carreras en ciencia, tecnología, ingeniería y matemáticas y, al hacerlo, fortalecer la fuerza laboral del futuro.',
  'about.vision.h2': 'Nuestra visión',
  'about.vision.p':
    'Todo estudiante de Nueva Jersey debería tener acceso a oportunidades de aprendizaje STEM y rutas profesionales. Eso significa:',
  'about.vision.1': 'Ampliar nuestros programas para llegar a 450,000 estudiantes cada año.',
  'about.vision.2':
    'Operar de 3 a 5 Centros de Tecnología en las zonas que más los necesitan.',
  'about.vision.3':
    'Crear planes de estudio que respondan a lo que la fuerza laboral futura del estado realmente va a necesitar.',
  'about.vision.4':
    'Dar a los estudiantes el espacio para explorar y definir sus propias rutas profesionales y educativas en STEM.',
  'about.impact.h2': 'Nuestro impacto',
  'about.impact.p':
    'Desde 2009, las experiencias STEM prácticas, la programación innovadora, los Centros de Tecnología de vanguardia y el trabajo directo con científicos profesionales han llegado a estudiantes, comunidades y la economía:',
  'about.impact1.h3': 'Individuos',
  'about.impact1.p':
    'Más de 500,000 estudiantes de Nueva Jersey necesitan apoyo educativo, especialmente en STEM. S2S abre esa puerta: hasta la fecha, nuestros programas han atendido a más de 300,000 estudiantes con experiencias prácticas e inmersivas usando instrumentación de laboratorio real.',
  'about.impact2.h3': 'Comunidades',
  'about.impact2.p':
    'Muchos de nuestros estudiantes vienen de comunidades que carecen de los expertos, recursos e instalaciones que una educación STEM de calidad necesita. S2S les da habilidades clave y mentoría, del tipo que puede levantar a toda una comunidad.',
  'about.impact3.h3': 'La economía',
  'about.impact3.p':
    'La Oficina de Estadísticas Laborales proyecta que los empleos STEM crecerán un 10.4 % entre 2023 y 2033, casi tres veces más rápido que los empleos no STEM. S2S está preparando a los estudiantes para ocupar esos puestos bien pagados.',
  'about.ach.h2': 'Logros destacados',
  'about.ach.1': 'Más de 350,000 estudiantes participaron en programas de S2S.',
  'about.ach.2': 'Se establecieron dos Centros de Tecnología de vanguardia.',
  'about.ach.3':
    'Se creó una alianza formal con las Escuelas Públicas de Newark, el distrito escolar más grande de Nueva Jersey.',
  'about.ach.4':
    'Colaboración con más de 200 escuelas y organizaciones comunitarias en Nueva Jersey y más allá.',
  'about.ach.5':
    'Participación de más de 1,000 voluntarios corporativos, de educación superior y de la comunidad.',
  'about.site.h2': 'Sobre este sitio',
  'about.site.p1':
    'STEM Pathways está construido por Students 2 Science. Cada salario, conteo de empleos',
  'about.site.p2': 'y cifra de crecimiento proviene de fuentes gubernamentales oficiales: mira',
  'about.site.sources': 'de dónde vienen los datos',
  'about.site.p3':
    '. ¿Quieres ver cómo un experimento de laboratorio se conecta con una carrera real? Empieza con',
  'about.site.p4':
    '. ¿Te interesa nuestro trabajo con estudiantes de preparatoria? Lee sobre el',
  'cap.tag': 'Programa CAP',
  'cap.h1': 'Programa de Avance Profesional (CAP)',
  'cap.lede':
    'Educación, formación laboral y exploración de carreras para estudiantes de preparatoria, para que encuentres tu rumbo antes de que el mundo real empiece a pedirlo.',
  'cap.what.h2': 'Qué es CAP',
  'cap.what.p1':
    'CAP apoya a estudiantes de los grados 10 a 12 de nuestras escuelas y distritos asociados con una exploración guiada de lo que viene después de la preparatoria y con desarrollo práctico de carreras STEM.',
  'cap.what.p2':
    'A través de alianzas con escuelas, empresas y actores de la comunidad, CAP conecta a los estudiantes con expertos de la industria, experiencias reales y acompañamiento individualizado, mientras involucra a profesionales en el desarrollo de la fuerza laboral del futuro. El enfoque es la preparación profesional, el desarrollo profesional y la construcción de identidad STEM: las habilidades, la exposición y las conexiones necesarias para seguir rutas educativas y profesionales gratificantes en STEM.',
  'cap.sig.h2': 'Programas insignia',
  'cap.sig1.h3': 'Pasantía ISAAC',
  'cap.sig1.p':
    'Pasantías basadas en proyectos para estudiantes de preparatoria (16+) y universitarios, trabajando junto al personal de S2S y profesionales de la industria. Los pasantes reciben formación de preparación profesional, asesoría de currículum y entrevistas, y contacto directo con profesionales STEM y gerentes de contratación.',
  'cap.sig2.h3': 'Mentoría STEM Pathways (STEMPath)',
  'cap.sig2.p':
    'Estudiantes de los grados 11 y 12 participan en mentorías individuales, de 2 a 1 y en grupo con profesionales STEM cercanos. Estas conexiones te ayudan a explorar rutas profesionales, ampliar tu red profesional y prepararte para lo que viene.',
  'cap.more.h2': 'Más dentro de CAP',
  'cap.more.1a': 'Exploración de carreras',
  'cap.more.1b':
    ': visitas a lugares de trabajo, encuentros con empleados, paneles de carreras y contacto con profesionales STEM.',
  'cap.more.2a': 'Habilidades profesionales y sociales',
  'cap.more.2b':
    ': comunicación, trabajo en equipo, liderazgo, profesionalismo y eficacia en el lugar de trabajo.',
  'cap.more.3a': 'Aprendizaje alineado con la industria',
  'cap.more.3b':
    ': certificaciones, formación especializada, recursos de preparación laboral y rutas de desarrollo profesional.',
  'cap.corp.h2': 'Empresas',
  'cap.corp.p': 'Si tu empresa quiere ser parte de CAP,',
  'cap.corp.email': 'escribe a CAP@students2science.org',
  'cap.note.1':
    'Probar carreras en el papel es una cosa; conocer a quienes las ejercen es otra. Prueba',
  'cap.note.2': 'para ver cómo los experimentos de laboratorio se conectan con empleos reales, o',
  'cap.note.3': 'explora todas las carreras',
  'cap.note.4': 'de este sitio.',
  'glo.tag': 'Glosario',
  'glo.h1': 'Las palabras que usamos, explicadas',
  'glo.lede':
    'Todo sitio de datos tiene su jerga. Aquí está la nuestra, en lenguaje sencillo: del tipo que podrías explicarle a un amigo en una frase.',
  'glo.small':
    '¿Nuevo en el sitio? Empieza con los tres números de la página de un estado: parecen similares pero cuentan cosas completamente distintas.',
  'glo.missing': '¿Falta algo o es confuso? Dínoslo y lo añadiremos aquí.',
  'glo.tellus': 'Dinos de dónde vienen los datos',
  'glo.andadd': 'y lo añadiremos aquí.',
  'quiz.tag': 'Prueba',
  'quiz.h1': 'Adivina el salario',
  'quiz.lede':
    'Tres empleos STEM. Solo uno paga más. ¿Cuántos acertarás? Los números son reales: el salario del medio de cada empleo, directo de la Oficina de Estadísticas Laborales.',
  'quiz.small':
    'Hay cinco preguntas. Haz clic en el empleo que creas que paga más y lo sabrás al instante.',
  'quiz.loading': 'La prueba se está cargando con nuevas preguntas: vuelve pronto.',
  'quiz.question': 'Pregunta',
  'quiz.of': 'de',
  'quiz.score': 'Puntos',
  'quiz.ask': '¿Cuál paga más?',
  'quiz.result': 'Tu resultado',
  'quiz.again': 'Jugar de nuevo',
  'quiz.correct': '¡Correcto! El salario del medio de {job} es {pay} al año.',
  'quiz.wrong':
    'Casi. El salario del medio de {job} es {pay} al año: {diff} más.',
  'quiz.perfect': 'Puntuación perfecta. Realmente conoces los salarios STEM.',
  'quiz.close': '¡Casi! ¿Otra ronda?',
  'quiz.nice': 'Buen intento: ahora sabes más que antes.',
  'quiz.scored': 'Sacaste {score} de {total}.',
  'ci.tag': 'Lista de carreras',
  'ci.h1': 'Todas las carreras STEM que seguimos',
  'ci.lede':
    '{count} carreras, agrupadas por campo. Elige una para ver qué implica el trabajo, cuánto paga y cuántas vacantes hay ahora mismo.',
  'ci.search': 'Busca un empleo',
  'ci.placeholder': 'enfermera, ingeniero, maestro, ...',
  'ci.note': '{count} carreras en la lista. Escribe para reducirla.',
  'ci.match': '{count} carreras coinciden con "{term}".',
  'ci.matchOne': '{count} carrera coincide con "{term}".',
  'ci.loading': 'Las carreras aún se están cargando: vuelve pronto.',
  'ci.careers': 'carreras',
  'ci.colCareer': 'Carrera',
  'ci.colWhat': 'Qué harías',
  'ci.colPeople': 'Personas trabajando',
  'ci.colMedian': 'Pago del medio',
  'ci.colEntry': 'Pago inicial',
  'ci.colGrowth': 'Creciendo',
  'ci.caption': 'Carreras de {category} con empleo, salario y crecimiento',
  'ci.footnote':
    'El empleo es el total de {states}. El salario es el promedio de los tres estados.',
  'ci.sources': 'Ver fuentes',
  'ci.glossary': 'Glosario',
  'cd.day': 'Un día típico',
  'cd.study': 'Qué estudiar',
  'cd.education': 'La mayoría de las personas en este empleo tiene: {education}.',
  'cd.educationNone':
    'La mayoría de las rutas empiezan con un certificado, un aprendizaje o un título de dos años.',
  'cd.numbers': 'Los números',
  'cd.caption': '{title} en cada estado',
  'cd.colState': 'Estado',
  'cd.colPeople': 'Personas en este empleo',
  'cd.colMedian': 'Pago del medio',
  'cd.colEntry': 'Pago inicial',
  'cd.colOpen': 'Empleos abiertos ahora',
  'cd.colGrowth': '¿Está creciendo?',
  'cd.median1':
    'es lo que gana la persona del medio: la mitad gana más, la mitad gana menos.',
  'cd.medianExplain':
    'La mediana es el salario del medio. Es más útil que el promedio, porque unos pocos salarios muy altos pueden elevar el promedio y hacer que un empleo parezca mejor de lo que es para la mayoría.',
  'cd.open1':
    'cuenta las ofertas de empleo del sector privado para este puesto exacto en los últimos 30 días, dentro de 80 km del estado.',
  'cd.openExplain':
    'Provienen de CareerOneStop, el sitio federal que reúne ofertas de miles de empleadores privados. Una oferta es una vacante: no significa que el empleo dure para siempre.',
  'cd.growth1':
    'es la predicción de la Oficina de Estadísticas Laborales sobre cuántos empleos más habrá para 2035.',
  'cd.feels': 'Cómo se siente ese salario',
  'cd.feels.note':
    'Basado en el pago del medio en {state}, antes de impuestos. El pago real depende de la experiencia, las horas extra y dónde vivas.',
  'cd.highest': 'Dónde el pago es más alto',
  'cd.highest.label': 'Pago del medio de {title} en cada estado',
  'cd.howmany': '¿Cuántas personas ya hacen esto?',
  'cd.howmany.p':
    'En {state}, unas {count} personas trabajan como {job}. En los tres estados, el trabajo lo hacen aproximadamente {total} personas.',
  'cd.questions': 'Buenas preguntas para hacer',
  'cd.q1': '¿Quiero trabajar con las manos, con datos o con personas?',
  'cd.q2': '¿Hay algún aprendizaje o programa de certificado cerca?',
  'cd.q3': '¿Qué clases debería tomar el próximo año?',
  'cd.q4': '¿Quién ya trabaja en esto cerca de mí? ¿Podría preguntarle?',
  'cd.dataAsOf': 'Datos al',
  'cd.bls': 'El empleo y los salarios provienen de la Oficina de Estadísticas Laborales.',
  'cd.sources': 'Ver todas las fuentes',
  'cd.glossary': '¿Nuevas estas palabras? Lee el glosario',
  'cd.titleSuffix': 'en qué consiste, cuánto paga',
  'cd.description':
    '{title} en Nueva Jersey, Nueva York y Pensilvania: en qué consiste el trabajo, cuánto paga, cuántas vacantes hay y qué estudiar.',
  'pay.lead1': 'equivale a unos',
  'pay.lead2': 'la hora',
  'pay.lead3': 'o',
  'pay.lead4': 'a la semana antes de impuestos.',
  'pay.year': 'al año',
  'pay.perHour': 'por hora',
  'pay.perDay': 'por día',
  'pay.perWeek': 'por semana',
  'pay.perMonth': 'por mes',
  'pay.thatIs': 'Eso es',
  'pay.c1': 'aproximadamente el precio de una buena cena fuera',
  'pay.c2': 'aproximadamente el precio de una entrada de cine y una botana',
  'pay.c3': 'aproximadamente el precio de un boleto de concierto',
  'pay.c4': 'aproximadamente el precio de una pizza grande',
  'pay.c5': 'aproximadamente el precio de una comida rápida',
  'ex.title': 'Exploración de carreras',
  'ex.description':
    'Califica actividades cotidianas, descubre tu perfil de intereses y mira las carreras STEM que van contigo, con salarios, crecimiento y vacantes reales de Nueva Jersey, Nueva York y Pensilvania.',
  'ex.tag': 'Prueba de intereses',
  'ex.h1': '¿Qué carreras STEM van contigo?',
  'ex.lede':
    'Dinos cuánto disfrutarías distintas actividades. Convertimos tus respuestas en un perfil de intereses y te mostramos las carreras STEM que le corresponden.',
  'ex.step1.h': '1. Califica actividades',
  'ex.step1.p': 'Di cuánto disfrutarías cada una. No hay respuestas correctas ni incorrectas.',
  'ex.step2.h': '2. Mira tu perfil',
  'ex.step2.p': 'Descubre cuáles de los seis tipos de interés te describen mejor.',
  'ex.step3.h': '3. Explora carreras',
  'ex.step3.p':
    'Recibe carreras STEM que van contigo, con salarios y crecimiento reales. Filtra por estudios y área.',
  'ex.len.legend': '¿Qué tan larga quieres que sea la prueba?',
  'ex.len.quick': 'Rápida',
  'ex.len.quickNote': '{n} actividades, unos 3 minutos',
  'ex.len.full': 'Completa',
  'ex.len.fullNote': '{n} actividades, unos 6 minutos, más precisa',
  'ex.start': 'Empezar la prueba',
  'ex.privacy':
    'Nada de lo que respondes se guarda ni se envía a ningún lado. Tus resultados viven en el enlace de esta página, así que puedes guardarlos o compartirlos.',
  'ex.credit.before': 'Basada en los seis tipos de interés del ',
  'ex.credit.link': 'Perfil de intereses O*NET',
  'ex.credit.after':
    ' del Departamento de Trabajo de EE. UU. Las actividades son nuestras y el código de interés de cada carrera es una estimación nuestra, así que usa los resultados como punto de partida, no como veredicto.',
  'ex.noscript': 'Esta prueba necesita JavaScript. Aun así puedes explorar todas las carreras.',
  'ex.q.label': 'Pregunta de la prueba',
  'ex.q.count': 'Actividad {n} de {total}',
  'ex.q.ask': '¿Cuánto disfrutarías esto?',
  'ex.q.tip': 'Consejo: presiona del 1 al 5 en tu teclado para responder.',
  'ex.a.love': 'Me encanta',
  'ex.a.like': 'Me gusta',
  'ex.a.meh': 'No sé',
  'ex.a.dislike': 'No me gusta',
  'ex.a.no': 'Para nada',
  'ex.back': 'Atrás',
  'ex.restart': 'Empezar de nuevo',
  'ex.r.eyebrow': 'Tus resultados',
  'ex.r.h2': 'Tu perfil de intereses',
  'ex.r.lede':
    'Tus intereses más fuertes son {top}. Las carreras de abajo están ordenadas según qué tan bien van con esta mezcla.',
  'ex.r.code': 'Tu código de interés',
  'ex.r.flat':
    'Diste casi la misma respuesta a todo, así que todavía no podemos distinguir tus intereses. Repite la prueba y usa toda la escala, de Me encanta a Para nada.',
  'ex.f.state': 'Salarios y empleos de',
  'ex.f.school': '¿Cuántos estudios?',
  'ex.f.field': 'Área',
  'ex.f.hint': 'No elijas ninguno para ver todo.',
  'ex.f.sort': 'Ordenar por',
  'ex.f.sortFit': 'Mejor coincidencia',
  'ex.f.sortPay': 'Mejor salario',
  'ex.f.sortGrowth': 'Mayor crecimiento',
  'ex.f.clear': 'Quitar filtros',
  'ex.state.nj': 'Nueva Jersey',
  'ex.state.ny': 'Nueva York',
  'ex.state.pa': 'Pensilvania',
  'ex.state.all': 'Los 3 estados',
  'ex.z1': 'Preparatoria + capacitación',
  'ex.z2': 'Título de 2 años',
  'ex.z3': 'Título de 4 años',
  'ex.z4': 'Maestría o más',
  'ex.count': 'Mostrando {shown} de {n} carreras',
  'ex.none': 'Ninguna carrera coincide con estos filtros. Prueba quitar uno.',
  'ex.more': 'Mostrar más carreras',
  'ex.fit.great': 'Muy buena coincidencia',
  'ex.fit.good': 'Buena coincidencia',
  'ex.fit.maybe': 'Vale la pena verla',
  'ex.card.because': 'Coincide con tu interés en',
  'ex.card.pay': 'Salario típico',
  'ex.card.perYear': '/año',
  'ex.card.perHour': 'unos {n} por hora',
  'ex.card.growth': 'Crecimiento',
  'ex.card.people': 'Personas en este empleo',
  'ex.card.in': 'en {where}',
  'ex.card.path': 'Camino habitual: {school}.',
  'ex.card.also': 'Carreras relacionadas: {list}',
  'ex.card.alsoMore': 'y {n} más',
  'ex.card.link': 'Ver la página completa de la carrera',
  'ex.g.exploding': 'En auge',
  'ex.g.fast': 'Crece rápido',
  'ex.g.growing': 'Crece',
  'ex.g.steady': 'Estable',
  'ex.g.shrinking': 'Disminuye',
  'ex.copy': 'Copiar el enlace de mis resultados',
  'ex.copied': '¡Enlace copiado!',
  'ex.print': 'Imprimir o guardar como PDF',
  'ex.retake': 'Repetir la prueba',
  'ex.method.h': 'Cómo funciona la coincidencia',
  'ex.method.p':
    'Tus respuestas dan a cada uno de los seis tipos de interés un puntaje de 0 a 100. Cada carrera tiene un código de interés de tres letras, de la más fuerte a la más débil. Mientras más se parezca el código de una carrera a tus tipos más fuertes, más arriba aparece. Los salarios, el crecimiento y el número de empleos vienen de los mismos datos del gobierno que el resto del sitio.',
  'l2l.h1': 'De un experimento de laboratorio a una carrera real',
  'l2l.lede':
    'Cada experimento que haces en un laboratorio de S2S es el trabajo diario de alguien en algún lugar. Elige un laboratorio, mira las carreras detrás de él y haz clic para ver las cifras reales —pago, vacantes, crecimiento— de cada empleo.',
  'l2l.browse': 'Explorar todas las carreras',
  'l2l.about': 'Sobre Students 2 Science',
  'l2l.labs': '{count} laboratorios',
  'l2l.kicker': 'Carreras en este laboratorio',
  'l2l.soon': 'Perfil próximamente',
  'l2l.match.eyebrow': '¿No sabes cuál te conviene?',
  'l2l.match.h2': 'Mejor deja que te asignemos',
  'l2l.match.lede':
    'La prueba de exploración de carreras te hace algunas preguntas sobre lo que te gusta hacer y luego muestra los empleos que coinciden, con salarios y vacantes reales.',
  'l2l.level.elementary': 'Laboratorios de primaria',
  'l2l.level.middle': 'Laboratorios de secundaria',
  'l2l.level.high': 'Laboratorios de preparatoria',
  '404.h1': 'Hmm, esa página no está aquí',
  '404.lede':
    'Puede que se haya movido o que el enlace sea viejo. Si seguiste un enlace antiguo, ahora todo está en',
  '404.home': 'Volver al inicio',
  '404.compare': 'Comparar estados',
  'state.nj.blurb':
    'Hogar del "Corredor de la Ciencia" entre Rutgers, Princeton y Bell Labs: uno de los centros STEM más densos de la Costa Este.',
  'state.ny.blurb':
    'Desde los campus tecnológicos de Finger Lakes hasta el cinturón biotecnológico a las afueras de la ciudad, Nueva York es el mercado STEM más grande del país.',
  'state.pa.blurb':
    'Filadelfia es una potencia de biotecnología y robótica, y el resto del estado aporta energía nuclear, manufactura avanzada y aeroespacial.',
  'explain.aria': '¿Qué significa esto?',
};

export type { I18nKey as Key };

/** Translate one key. Vars: t('sp.private.h2', lang, { state: 'Nueva Jersey' }). */
export function t(
  key: I18nKey,
  lang: Lang = 'en',
  vars?: Record<string, string | number>,
): string {
  let s: string = lang === 'es' ? es[key] : en[key];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
  }
  return s;
}

/**
 * Every string whose key starts with `prefix`, as a plain object. For pages
 * that hand their text to a browser script, which cannot call t() itself.
 */
export function tAll(prefix: string, lang: Lang = 'en'): Record<string, string> {
  const dict: Record<string, string> = lang === 'es' ? es : en;
  return Object.fromEntries(Object.entries(dict).filter(([key]) => key.startsWith(prefix)));
}

export const LANGS: Lang[] = ['en', 'es'];

/**
 * Spanish titles for the job titles shown on the state pages. The English
 * titles in the data pipeline stay as they are.
 */
export const JOB_TITLES_ES: Record<string, string> = {
  'General Engineer - Recent Graduate': 'Ingeniero General, Recién Graduado',
  'IT Specialist (Data Engineer)': 'Especialista en TI (Ingeniero de datos)',
  'Interdisciplinary General Engineer/Physical Scientist - Recent Graduate':
    'Ingeniero General Interdisciplinario / Científico físico - Recién Graduado',
  'Registered Nurse - Referral Coordination Team': 'Enfermero Registrado',
  'Registered Nurse': 'Enfermero Registrado',
  'Registered Nurses': 'Enfermero Registrado',
  'Clinical Nurse': 'Enfermera Clínica',
  'ENGINEERING TECHNICIAN (CIVIL)': 'Técnico de Ingeniería',
  'Engineering Technician': 'Técnico de Ingeniería',
  'Software Developer': 'Desarrollador de software',
  'Software Developers': 'Desarrollador de software',
  'Computer and Information Systems Managers':
    'Gerente de Sistemas Informáticos y de computación',
  'Computer User Support Specialist': 'Especialistas de soporte al usuario de computadoras',
  'Computer User Support Specialists': 'Especialistas de soporte al usuario de computadoras',
  'Licensed Practical and Licensed Vocational Nurses':
    'Enfermeros Prácticos y enfermeros vocacionales con licencia',
  'Computer Systems Analysts': 'Analista de sistemas computacionales',
  'Pharmacy Technicians': 'Técnicos de farmacia',
  'Computer Occupations, All Other': 'Ocupaciones Informáticas, todas las demás',
};

/** Use the Spanish job title when we have one; otherwise keep the data title. */
export function jobTitle(title: string, lang: Lang = 'en'): string {
  return lang === 'es' ? (JOB_TITLES_ES[title] ?? title) : title;
}

/** Spanish category labels (categories.json is shared with the data pipeline). */
export const CATEGORY_LABELS_ES: Record<string, string> = {
  '11-0000': 'Gerencia',
  '15-0000': 'Informática y Matemáticas',
  '17-0000': 'Arquitectura e Ingeniería',
  '19-0000': 'Ciencias de la Vida, Físicas y Sociales',
  '29-0000': 'Profesionales y Técnicos de la Salud',
  '43-0000': 'Apoyo Administrativo y de Oficina',
  '49-0000': 'Instalación, Mantenimiento y Reparación',
  '51-0000': 'Producción',
};

/** Spanish blurbs for the eight groups on the home page. */
export const CATEGORY_BLURBS_ES: Record<string, string> = {
  '11-0000': 'Dirigir los equipos y proyectos detrás del trabajo de computación, ingeniería y ciencia.',
  '15-0000': 'Crear software, redes y sistemas de seguridad, y encontrar patrones en los números.',
  '17-0000': 'Diseñar las máquinas, los sistemas, los edificios y los mapas que usamos.',
  '19-0000': 'Estudiar el mundo físico, los seres vivos y el medio ambiente.',
  '29-0000': 'Cuidar a las personas y la tecnología que las mantiene sanas.',
  '43-0000': 'Reunir y revisar los números de los que dependen los analistas.',
  '49-0000': 'Instalar y reparar el equipo que mantiene todo en marcha.',
  '51-0000': 'Fabricar piezas y operar las plantas y sistemas que nos dan energía.',
};
