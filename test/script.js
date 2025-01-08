// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const languageDropdown = document.querySelector('.dropdown');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Handle language dropdown
languageDropdown.addEventListener('click', () => {
    languageDropdown.classList.toggle('active');
});

// Close menu when clicking outside or on menu links
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    if (!e.target.closest('.dropdown')) {
        languageDropdown.classList.remove('active');
    }
});

// Close menu when clicking on menu links
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const translations = {
    en: {
        businesses: "Businesses",
        jobSeekers: "Job Seekers",
        aboutFINT: "About FINT",
        dropCV: "Drop CV",
        language: "🌐 Languages",
        careerMove: "Ready for your next career move?",
        keywords: "Keywords, Job title",
        category: "Category",
        workingType: "Working type",
        location: "Location",
        submitCV: "Submit CV",
        contactTouch: "📧 Get In Touch",
        industryTrends: "Industry Trends",
        trendHeading: "Leverage your own knowledge with FilledIn Global trends:",
        trendQuote: '"what is happening in the energy sector and what are the new complex challenges?"',
        hrTrends: "HR Trends",
        hrTrendContent1: "According to Gartner, in 2024, Leader and Manager development is a major focus for HR Leaders. To increase managers effectiveness, the organisations need to lighten the responsibilities of managers by reviewing role expectations and removing process hurdles.",
        hrTrendContent2: "Heading into 2025, HR Leaders must redefine their strategies and priorities in key areas including developing managers, create a strategic workforce planning and optimise HR technology and data analytics. Moving beyond traditional leadership seminars to foster peer connections and embed learning opportunities into daily work allows managers to build stronger leadership skills and prepare for future demands. Emerging solutions, such as generative AI, have the potential to transform HR operations by streamlining processes, improving decision making and enhancing the employee experience.",
        featuredJobs: "Featured Jobs",
        engineer: "Engineer",
        hse: "HSE",
        compliance: "Compliance",
        electricalEngineer: "Electrical Engineer",
        featuredEmployees: "Featured Employees",
        testimony1: "Testimony 1",
        testimony2: "Testimony 2",
        
        trendsOfTheMonth: "Trends of the month - The Middle East:",
        trendContent1: "The Middle East region contributes globally to 37% of oil production and 35% of natural gas production, with oil production dominated by Saudi Arabia (35%), Iran (14%), and Iraq (13%) and gas production dominated by Iran (28%), Qatar (22%), and Saudi Arabia (14%).",
        trendContent2: "The energy sector is a central driver of Saudi Arabia's economy, contributing around 42% of its GDP. Oil accounts for 90% of the country's exports and nearly 75% of government revenue.",
        trendContent3: "Many countries in the region are building or planning solar and wind projects. Energy investment in the Middle East is expected to reach approximately $175 billion in 2024, with clean energy accounting for around 15% of the total investment. Saudi Arabia is working to diversify its economy and reduce its reliance on oil revenues. It has built several solar and wind power plants and is working on building the world's largest hydrogen production plant. The Saudi Kingdom placed itself at the forefront of the emerging renewable superpowers. The renewable energy market is estimated to increase from 8.33GW in 2024 to 23.74 GW by 2029.",
        trendContent4: "The UAE aims to triple its renewable energy base by 2030. Energy investment in the Middle East is expected to reach approximately $175 billion in 2024, with clean energy accounting for around 15% of the total investment.",
        trendContent5: "As the world's third largest producer of liquefied natural gas, Qatar's targets include increasing the share of renewable energy in its power mix to 18% by 2030 and adding 4 GW of solar power by 2030.",
        
        // New translations for added sections
        forBusinesses: "For businesses",
        sectorsWeRecruit: "Sectors in which we recruit",
        sectorsList: "ENERGY | NON-RENEWABLE",
        ourCommitment: "Our commitment to you",
        commitmentText: "FINT is committed to proactively source candidates regionally and internationally to support and strengthen our clients' strategy.",
        recruitmentServices: "Recruitment services",
        servicesText: "In industries as demanding as energy and construction, hiring the right talent is critical to the success of your business. FilledIn Talent Solution is a specialized recruitment agency that offers bespoke services tailored to meet the unique needs of companies in these sectors.",
        forJobSeekers: "For Job Seekers",
        interviewSuccess: "How to succeed at interviews?",
        interviewTips1: "The key to success in a job interview can be defined through different aspects. The basics include knowing the recruiting company's profile and culture, its turnover, and its strategy for the short and long term. It also involves an in-depth reflection on the job description and one's own motivation for the role.",
        interviewTips2: "The STAR technique is a proven method for effectively answering competency-based interview questions. It comprises four steps: Situation, Task, Action, and Results.",
        contactInfo: "Contact Rajaa El Korchi, Consultant Managing Director, Located in London",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        youtube: "YouTube",
        legalInfo: "Terms & Support"
    },
    fr: {
        businesses: "Entreprises",
        jobSeekers: "Chercheurs d'emploi",
        aboutFINT: "À propos de FINT",
        dropCV: "Déposer CV",
        language: "🌐 Langues",

        careerMove: "Prêt pour votre prochain mouvement de carrière?",
        keywords: "Mots-clés, Titre du poste",
        category: "Catégorie",
        workingType: "Type de travail",
        location: "Emplacement",
        submitCV: "Soumettre le CV",
        contactTouch: "📧 Entrer en contact",
        industryTrends: "Tendances de l'industrie",
        trendHeading: "Exploitez vos propres connaissances avec les tendances mondiales de FilledIn :",
        trendQuote: '"Que se passe-t-il dans le secteur de l\'énergie et quels sont les nouveaux défis complexes ?"',
        hrTrends: "Tendances RH",
        hrTrendContent1: "Selon Gartner, en 2024, le développement des leaders et des managers est un point focal majeur pour les responsables RH. Pour accroître l'efficacité des managers, les organisations doivent alléger leurs responsabilités en examinant les attentes de rôle et en supprimant les obstacles de processus.",
        hrTrendContent2: "En route vers 2025, les responsables RH doivent redéfinir leurs stratégies et priorités dans des domaines clés, notamment le développement des managers, la création d'une planification stratégique de la main-d'œuvre et l'optimisation de la technologie et de l'analytique RH. Aller au-delà des séminaires de leadership traditionnels pour favoriser les connexions entre pairs et intégrer des opportunités d'apprentissage dans le travail quotidien permet aux managers de développer des compétences de leadership plus solides et de se préparer aux futures exigences. Les solutions émergentes, telles que l'IA générative, ont le potentiel de transformer les opérations RH en rationalisant les processus, en améliorant la prise de décision et en améliorant l'expérience des employés.",
        featuredJobs: "Emplois en vedette",
        engineer: "Ingénieur",
        hse: "HSE",
        compliance: "Conformité",
        electricalEngineer: "Ingénieur Électrique",
        featuredEmployees: "Employés en vedette",
        testimony1: "Témoignage 1",
        testimony2: "Témoignage 2",
        trendsOfTheMonth: "Tendances du mois - Moyen-Orient :",
        trendContent1: "La région du Moyen-Orient contribue globalement à 37 % de la production de pétrole et 35 % de la production de gaz naturel, avec une production de pétrole dominée par l'Arabie Saoudite (35 %), l'Iran (14 %) et l'Irak (13 %) et une production de gaz dominée par l'Iran (28 %), le Qatar (22 %) et l'Arabie Saoudite (14 %).",
        trendContent2: "Le secteur de l'énergie est un moteur central de l'économie saoudienne, contribuant à environ 42 % de son PIB. Le pétrole représente 90 % des exportations du pays et près de 75 % des revenus du gouvernement.",
        trendContent3: "De nombreux pays de la région construisent ou prévoient des projets solaires et éoliens. L'investissement énergétique au Moyen-Orient devrait atteindre environ 175 milliards de dollars en 2024, les énergies propres représentant environ 15 % de l'investissement total. L'Arabie Saoudite s'efforce de diversifier son économie et de réduire sa dépendance aux revenus pétroliers. Elle a construit plusieurs centrales solaires et éoliennes et travaille à la construction de la plus grande usine de production d'hydrogène au monde. Le Royaume d'Arabie Saoudite s'est placé à l'avant-garde des superpuissances renouvelables émergentes. Le marché de l'énergie renouvelable devrait passer de 8,33 GW en 2024 à 23,74 GW d'ici 2029.",
        trendContent4: "Les Émirats Arabes Unis visent à tripler leur base d'énergie renouvelable d'ici 2030. L'investissement énergétique au Moyen-Orient devrait atteindre environ 175 milliards de dollars en 2024, les énergies propres représentant environ 15 % de l'investissement total.",
        trendContent5: "En tant que troisième producteur mondial de gaz naturel liquéfié, les objectifs du Qatar incluent l'augmentation de la part des énergies renouvelables dans son mix énergétique à 18 % d'ici 2030 et l'ajout de 4 GW d'énergie solaire d'ici 2030.",
        
        // New translations for added sections
        forBusinesses: "Pour les entreprises",
        sectorsWeRecruit: "Secteurs dans lesquels nous recrutons",
        sectorsList: "ÉNERGIE | NON-RENOUVELABLE",
        ourCommitment: "Notre engagement envers vous",
        commitmentText: "FINT s'engage à rechercher activement des candidats régionalement et internationalement pour soutenir et renforcer la stratégie de nos clients.",
        recruitmentServices: "Services de recrutement",
        servicesText: "Dans des secteurs aussi exigeants que l'énergie et la construction, recruter les bons talents est essentiel au succès de votre entreprise. FilledIn Talent Solution est une agence de recrutement spécialisée qui propose des services sur mesure adaptés aux besoins uniques des entreprises de ces secteurs.",
        forJobSeekers: "Pour les chercheurs d'emploi",
        interviewSuccess: "Comment réussir ses entretiens ?",
        interviewTips1: "La clé du succès lors d'un entretien d'embauche peut être définie à travers différents aspects. Les bases incluent la connaissance du profil et de la culture de l'entreprise recruteuse, son chiffre d'affaires et sa stratégie à court et long terme. Cela implique également une réflexion approfondie sur la description du poste et sur sa propre motivation pour le rôle.",
        interviewTips2: "La technique STAR est une méthode éprouvée pour répondre efficacement aux questions d'entretien basées sur les compétences. Elle comprend quatre étapes : Situation, Tâche, Action et Résultats.",
        contactInfo: "Contactez Rajaa El Korchi, Directrice Générale Consultante, basée à Londres",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        youtube: "YouTube",
        legalInfo: "Conditions & Support"
    },
    ar: {
        businesses: "للشركات",
        jobSeekers: "للباحثين عن عمل",
        aboutFINT: "حول FINT",
        dropCV: "أرفق سيرتك الذاتية",
        language: "🌐 اللغة ",

        careerMove: "هل أنت مستعد للانتقال إلى وظيفتك التالية؟",
        keywords: "الكلمات الرئيسية، عنوان الوظيفة",
        category: "الفئة",
        workingType: "نوع العمل",
        location: "الموقع",
        submitCV: "إرسال السيرة الذاتية",
        contactTouch: "📧 التواصل",
        industryTrends: "اتجاهات الصناعة",
        trendHeading: "استفد من معرفتك الخاصة مع اتجاهات FilledIn العالمية:",
        trendQuote: '"ماذا يحدث في قطاع الطاقة وما هي التحديات المعقدة الجديدة؟"',
        hrTrends: "اتجاهات الموارد البشرية",
        hrTrendContent1: "وفقًا لـ Gartner، في عام 2024، يعد تطوير القادة والمديرين محور رئيسي لقادة الموارد البشرية. لزيادة فعالية المديرين، تحتاج المنظمات إلى تخفيف مسؤوليات المديرين من خلال مراجعة توقعات الدور وإزالة العقبات الإجرائية.",
        hrTrendContent2: "مع اقتراب عام 2025، يجب على قادة الموارد البشرية إعادة تعريف استراتيجياتهم وأولوياتهم في المجالات الرئيسية، بما في ذلك تطوير المديرين، وإنشاء تخطيط استراتيجي للقوى العاملة، وتحسين تكنولوجيا وتحليالات الموارد البشرية. التحرك ما وراء الندوات القيادية التقليدية لتعزيز الروابط بين الأقران ودمج فرص التعلم في العمل اليومي يسمح للمديرين ببناء مهارات قيادية أقوى والتحضير للمتطلبات المستقبلية. الحلول الناشئة، مثل الذكاء الاصطناعي التوليدي، لديها القدرة على تحويل عمليات الموارد البشرية من خلال تبسيط العمليات وتحسين اتخاذ القرارات وتعزيز تجربة الموظفين.",
        featuredJobs: "وظائف مميزة",
        engineer: "مهندس",
        hse: "HSE",
        compliance: "امتثال",
        electricalEngineer: "مهندس كهربائي",
        featuredEmployees: "موظفون مميزون",
        testimony1: "شهادة 1",
        testimony2: "شهادة 2",
        trendsOfTheMonth: "اتجاهات الشهر - الشرق الأوسط:",
        trendContent1: "تساهم منطقة الشرق الأوسط عالميًا بنسبة 37% من إنتاج النفط و35% من إنتاج الغاز الطبيعي، حيث يهيمن إنتاج النفط على المملكة العربية السعودية (35%)، إيران (14%)، والعراق (13%)، ويهيمن إنتاج الغاز على إيران (28%)، قطر (22%)، والسعودية (14%).",
        trendContent2: "يعد قطاع الطاقة محركًا مركزيًا لاقتصاد المملكة العربية السعودية، حيث يساهم بحوالي 42% من الناتج المحلي الإجمالي. يمثل النفط 90% من صادرات البلاد وحوالي 75% من إيرادات الحكومة.",
        trendContent3: "تقوم العديد من الدول في المنطقة ببناء أو التخطيط لمشاريع الطاقة الشمسية والرياح. من المتوقع أن يصل الاستثمار في الطاقة في الشرق الأوسط إلى حوالي 175 مليار دولار في عام 2024، مع احتساب الطاقة النظيفة حوالي 15% من إجمالي الاستثمار. تعمل المملكة العربية السعودية على تنويع اقتصادها وتقليل اعتمادها على إيرادات النفط. لقد بنت عدة محطات للطاقة الشمسية والرياح، وتعمل على بناء أكبر مصنع لإنتاج الهيدروجين في العالم. وضعت المملكة نفسها في طليعة القوى المتجددة الناشئة. من المتوقع أن يرتفع سوق الطاقة المتجددة من 8.33 جيجاوات في 2024 إلى 23.74 جيجاوات بحلول 2029.",
        trendContent4: "تهدف الإمارات العربية المتحدة إلى مضاعفة قاعدة الطاقة المتجددة ثلاث مرات بحلول عام 2030. من المتوقع أن يصل الاستثمار في الطاقة في الشرق الأوسط إلى حوالي 175 مليار دولار في عام 2024، مع احتساب الطاقة النظيفة حوالي 15% من إجمالي الاستثمار.",
        trendContent5: "باعتبارها ثالث أكبر منتج للغاز الطبيعي المسال في العالم، تشمل أهداف قطر زيادة حصة الطاقة المتجددة في مزيج الطاقة الخاص بها إلى 18% بحلول عام 2030 وإضافة 4 جيجاوات من الطاقة الشمسية بحلول عام 2030.",
        
        // New translations for added sections
        forBusinesses: "للشركات",
        sectorsWeRecruit: "القطاعات التي نعمل فيها",
        sectorsList: "الطاقة | غير المتجددة",
        ourCommitment: "التزامنا تجاهك",
        commitmentText: "تلتزم FINT بالبحث النشط عن المرشحين محليًا ودوليًا لدعم وتعزيز استراتيجية عملائنا.",
        recruitmentServices: "خدمات التوظيف",
        servicesText: "في الصناعات التي تتطلب الكثير مثل الطاقة والبناء، يعد توظيف المواهب المناسبة أمرًا بالغ الأهمية لنجاح عملك. FilledIn Talent Solution هي وكالة توظيف متخصصة تقدم خدمات مخصصة مصممة لتلبية الاحتياجات الفريدة للشركات في هذه القطاعات.",
        forJobSeekers: "للباحثين عن عمل",
        interviewSuccess: "كيف تنجح في المقابلات؟",
            interviewTips1: "يمكن تعريف مفتاح النجاح في مقابلة العمل من خلال جوانب مختلفة. تشمل الأساسيات معرفة ملف الشركة وثقافتها، حجم أعمالها، واستراتيجيتها على المدى القصير والطويل.",
            interviewTips2: "تتضمن تقنية STAR أربع خطوات: الموقف، المهمة، العمل، والنتائج.",
            contactInfo: "اتصل بـ Rajaa El Korchi، المدير الإداري الاستشاري، الموجود في لندن",
            linkedin: "LinkedIn",
            instagram: "Instagram",
            youtube: "YouTube",
            legalInfo: "الشروط والدعم"
        }
    };
