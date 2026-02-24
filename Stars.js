/***************************************
 * Data Arrays
 ***************************************/

// --- Color Palette ---
const sustain = "#ffbab3"; // Pink (Community, Funding, Foundation)
const reach   = "#ff1808"; // Red (Portfolio, Outreach, Impact)
const connect = "#ffc800"; // Yellow (Calls, Meetings, Networking)
const co      = "#ffffff"; // White (Constellation Teams)

// --- Default Coordinates (Home Base - Los Angeles) ---
const home = { lat: 34.087208, lng: -118.328610 };

const stars = [
   // ==========================================
   // EVENTS 1-104
   // ==========================================
   {
       title: "#1 | FLL Girls at Boys and Girls Club Hollywood",
       description: "Reoccuring | Los Angeles, USA",
       takeaway: "Through founding the team, we have learned the importance of mentorship, teamwork, and how to break down complex concepts and the design process into digestible lessons. We are also proud to have seen how empowering young girls fosters personal growth and confidence.",
       color: sustain,
       coordinates: { lat: 34.0900, lng: -118.3287 }
   },
   {
       title: "#2 | Mar Vista Family Center",
       description: "Reoccuring | Los Angeles, USA",
       takeaway: "We have learned how rewarding it is to teach weekly as we are able to formulate strong connections with young kids. We are given the opportunity to educate children about topics we are passionate about like STEM and robotics. ",
       color: reach,
       coordinates: { lat: 34.017899, lng: -118.428029 }
   },
   {
       title: "#3 | Curious Grant Planning",
       description: "All Season | Los Angeles, USA",
       takeaway: "Careful research allows us to provide funding and support for organizations that are meaningful and align with our mission.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#4 | Third Street",
       description: "All Season | Los Angeles, USA",
       takeaway: "We have learned how to generate interest in FIRST from a young age by crafting engaging lessons for kindergarteners and first graders. Our afterschool program for early STEM literacy directly funnels students into the school’s FLL teams, who we hosted at our inaugural FLL meet!",
       color: reach,
       coordinates: home
   },
   {
       title: "#5 | Greenlight for Girls Grant",
       description: "All Season | Ixellles, Belgium",
       takeaway: "Being able to support seven girls’ tuition for STEM education is extremely rewarding!",
       color: sustain,
       coordinates: home 
   },
   {
       title: "#6 | Scratch Foundation",
       description: "All Season | Boston, USA",
       takeaway: "Coding plays a key part in youth STEM skills development. ",
       color: reach,
       coordinates: home
   },
   {
       title: "#7 | FLL Grant",
       description: "All Season | Los Angeles, USA",
       takeaway: "Supporting a local FLL team can accelerate their ability to join FIRST and succeed.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#8 | DIY Girls Grant",
       description: "All Season | San Fernado, USA",
       takeaway: "It is rewarding to support a local Los Angeles organization that supports empowering girls to learn valuable STEM skills.",
       color: reach,
       coordinates: home
   },
   {
       title: "#9 | T.W.C.A Portfolio Resource Contributation",
       description: "Overall Season | Hurricane, USA",
       takeaway: "We have seen how vital it is to provide tailored resources and guidance, helping others refine their work while encouraging creativity and originality.",
       color: reach,
       coordinates: { lat: 37.1753, lng: -113.2899 }
   },
   {
       title: "#10 | PF The Occam's Razor Clams",
       description: "1/5/2025 | Providence, USA",
       color: reach,
       coordinates: { lat: 41.8240, lng: -71.4128 }
   },
   {
       title: "#11 | Meeting with 636",
       description: "1/6/2025 | Providence, USA",
       color: reach,
       coordinates: { lat: 41.8240, lng: -71.4128 }
   },
   {
       title: "#12 | Meeting with 24881",
       description: "1/10/2025 | Astana, Kazakhstan",
       color: reach,
       coordinates: home
   },
   {
       title: "#13 | Portfolio Advice for Team 16063",
       description: "1/10/2025 | Joinville, Brazil",
       takeaway: "We were able to give Team Beta 16063 portfolio advice, connecting them with valuable resources and giving them specific advice.We plan on possibly providing them with formal portfolio feedback in the future. ",
       color: reach,
       coordinates: home
   },
   {
       title: "#14 | Meeting with Cassiopia",
       description: "1/11/2025 | London, England",
       color: reach,
       coordinates: home
   },
   {
       title: "#15 | CEE Robotics Unit Kickoff",
       description: "1/16/2025 | West Hollywood, USA",
       takeaway: "The event highlighted the power of hands-on learning and how sharing real-world experiences can inspire students to apply innovative thinking to their own projects.",
       color: reach,
       coordinates: { lat: 34.0890, lng: -118.3790 }
   },
   {
       title: "#16 | Spence PF",
       description: "1/21/2025 | NYC, USA",
       takeaway: "It’s fun to help out our friends and create lasting mentorship connections with people and teams we’ve interacted with previously.",
       color: reach,
       coordinates: { lat: 40.7850, lng: -73.9570 }
   },
   {
       title: "#17 | Call w/ Charlie Justiz (NASA)",
       description: "1/22/2025 | Palm Springs, USA",
       color: connect,
       coordinates: { lat: 33.8303, lng: -116.5453 }
   },
   {
       title: "#18 | 49 PF",
       description: "1/27/2025 | Carson, USA",
       takeaway: "Reviewing a team's portfolio can be an invaluable way to support fellow teams, as this team went on to win Inspire at their ILT! Order for the portfolio can impact the way information is displayed, so being mindful of it can be helpful.",
       color: reach,
       coordinates: home
   },
   {
       title: "#19 | RoboRibits PF",
       description: "1/27/2025 | Atlanta, USA",
       takeaway: "Seeing new portfolio formats from other states can be inspirational, and mentoring them to add more specifics into their portfolio can support their success.",
       color: reach,
       coordinates: home
   },
   {
       title: "#20 | RoboRibits Meeting",
       description: "1/28/2025 | Atlanta, USA",
       takeaway: "It is super fun to connect with a team from Georgia, especially with a younger, newer team with large goals. We were able to support them in getting to states!",
       color: reach,
       coordinates: home
   },
   {
       title: "#21 | 49 Meeting",
       description: "1/29/2025 | Carson, USA",
       takeaway: "It's super fun to meet with teams in our region and give them feedback.",
       color: reach,
       coordinates: home
   },
   {
       title: "#22 | Kuriosity and Dry Ice Wildfire Planning",
       description: "2/1/2025 | Palo Alto, USA",
       takeaway: "Supporting our community through a tragic event can be both meaningful and a great opportunity to connect with the larger California community to support them. We can make a large impact through carefully planning.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#23 | PlumBum PF",
       description: "2/1/2025 | Vilnius, Lithuania",
       takeaway: "It’s fun to help out our friends and create lasting mentorship connections with people and teams we’ve interacted with previously, and it is also cool to learn about the experience of another girls team from another country. ",
       color: reach,
       coordinates: home
   },
   {
       title: "#24 | Kings and Queens PF",
       description: "2/3/2025 | Monrovia, USA",
       takeaway: "Reviewing a team’s portfolio in our own region can be both meaningful and a great way to support other teams. We really enjoy sharing our knowledge, especially when it can support other teams and help them do better in their own competition.",
       color: reach,
       coordinates: home
   },
   {
       title: "#25 | Deadspace PF",
       description: "2/4/2025 | Monrovia, USA",
       takeaway: " It is fun to help other teams with their portfolio and learn about different ways teams find sponsors and mentors. This team went on to win Think at Wildcard with the help of our advice!",
       color: reach,
       coordinates: home
   },
   {
       title: "#26 | IFC PF",
       description: "2/4/2025 | Monrovia, USA",
       takeaway: "It’s interesting to see different team’s approaches to crafting a portfolio, and how they showcase their own unique approaches to creating portfolio feedback.",
       color: reach,
       coordinates: home
   },
   {
       title: "#27 | Meeting with Occam's Razor Clams",
       description: "2/4/2025 | Providence, USA",
       takeaway: "It’s great to be able to establish long term connections with teams and see them go forward as they advance through competition.",
       color: reach,
       coordinates: { lat: 41.8240, lng: -71.4128 }
   },
   {
       title: "#28 | Meeting with Team IFC",
       description: "2/6/2025 | Monrovia, USA",
       takeaway: "We can help show other teams ways to present their work professionally.",
       color: reach,
       coordinates: home
   },
   {
       title: "#29 | Ironwolves PF",
       description: "2/6/2025 | Oceanside, USA",
       takeaway: "A balance between mechanism and outreach focused pages contributes to an even portfolio that showcases your season well!",
       color: reach,
       coordinates: home
   },
   {
       title: "#30 | RoboRibits PF (states)",
       description: "2/6/2025 | Atlanta, USA",
       takeaway: "Continuing to connect and provide feedback with a rookie team can continue to propel them through a successful season, as this team we reviewed for their qualifiers and are now reviewing their portfolio for states!",
       color: reach,
       coordinates: home
   },
   {
       title: "#31 | RoboRibits Meeting (states)",
       description: "2/7/2025 | Atlanta, USA",
       takeaway: " Verbally explaining things can foster a fun connection with teams, and it is super exciting to see how our help can support a team to do better than they ever imagined!",
       color: reach,
       coordinates: home
   },
   {
       title: "#32 | Kuriosity and Dry Ice Wildfire Planning",
       description: "2/8/2025 | Palo Alto, USA",
       takeaway: " Detailed planning allows for success in outreach, especially with inter-team collaborations. Getting attention and utilizing community communication resources improves attendance for outreach events.",
       color: reach,
       coordinates: home
   },
   {
       title: "#33 | JavaBots PF",
       description: "2/9/2025 | Pasadena, USA",
       takeaway: " Supporting a team as they prepare for their next competition can support them, and also show how exhibiting your team personality in your portfolio can lead to success.",
       color: reach,
       coordinates: home
   },
   {
       title: "#34 | Team Leo PF",
       description: "2/9/2025 | Roseburg, USA",
       takeaway: "Text clarity is extremely important in exhibiting the process of your season, and checking over text for readability provides a chance to confirm judges understand what you are trying to convey.",
       color: reach,
       coordinates: home
   },
   {
       title: "#35 | Call with JagDeep Shergill",
       description: "2/11/2025 | Denver, USA",
       takeaway: "Scheduling and working with professionals before the event allows things to run smoothly and for us to fully accomplish our goals.",
       color: connect,
       coordinates: home
   },
   {
       title: "#36 | BlueBotBuilders Call",
       description: "2/13/2025 | Northgate, Australia",
       color: reach,
       coordinates: home
   },
   {
       title: "#37 | MDR Genesis Call",
       description: "2/14/2025 | Maple Ridge, Canada",
       color: reach,
       coordinates: home
   },
   {
       title: "#38 | SteamPunks Bravo PF",
       description: "2/15/2025 | Irvine, USA",
       takeaway: "Using concise sentence structure allows your content to shine even stronger, and consistent kerning between words ensures judge attention is directed exactly where you want it!",
       color: reach,
       coordinates: home
   },
   {
       title: "#39 | Team Hazmat Call",
       description: "2/18/2025 | Brookfield, USA",
       takeaway: "The coach can play a super important role if the robot is cycling samples, as when you reach high performance the high basket can quickly fill up. Hazmat advised us to have the coach divide the high basket into four “Regions” to direct the drivers to score into for a more optimized use of the high basket, and also in the endgame period when the basket is SUPER full if they should help the alliance partner, cycle low basket, or complete another task. ",
       color: reach,
       coordinates: home
   },
   {
       title: "#40 | Palibotics Game Elements Excahnge",
       description: "2/16/2025 | Palisades, USA",
       takeaway: "Supporting a fellow team in any way we can is both rewarding, builds community, and is truly what it means to be a student in FIRST/a gracious professional.",
       color: sustain,
       coordinates: { lat: 34.0475, lng: -118.5500 }
   },
   {
       title: "#41 | Mortorq FRC Polycarb CNC",
       description: "2/20/2025 | Beverly Hills, USA",
       takeaway: "Placeholder: Paste takeaway here.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#42 | Call with Gujarat Tech Titans",
       description: "2/21/2025 | Ahmedabad, India",
       takeaway: "We were able to give the tech titans a lot of advice that ranged from technical to non-technical. As we advised them, it forced us to reflect on what questions a rookie team might have, and in turn, to examine the resources we provide on our website to better assist our fellow teams!",
       color: reach,
       coordinates: { lat: 23.0225, lng: 72.5714 }
   },
   {
       title: "#43 | Girls' Team Summit pt. 2",
       description: "2/22/2025 | Denver, USA",
       takeaway: "If you can see her, you can be her”. We, along with the teams who attended, left the summit feeling quite inspired by Shergill and her interesting engineering work combined with her passion and love of STEM as a woman. ",
       color: connect,
       coordinates: home
   },
   {
       title: "#44 | Bake sale prep.",
       description: "2/23/2025 | Los Angeles, USA",
       takeaway: "A lot of butter and flour is needed to make 400 servings, but organization and structure can lead to success! Additionally, fun activities that help give back to the community are fulfilling and can also serve as great team bonding!",
       color: sustain,
       coordinates: home
   },
   {
       title: "#45 | Cookies for Curiosity Bake Sale",
       description: "2/24/2025 | Los Angeles, USA",
       takeaway: "Utilizing our lessons learned from previous bake sales and using them to shape our strategy allows us to have extremely successful fundraisers!",
       color: sustain,
       coordinates: home
   },
   {
       title: "#46 | Web Devolpment Call w/ Mortorq",
       description: "2/24/2025 | Beverly Hills, USA",
       takeaway: "Learning from an FRC team and connecting with web development professionals can help us improve our personal skills of running a full-stack application, and how size of the team influences capabilities of running things like this!",
       color: connect,
       coordinates: home
   },
   {
       title: "#47 | Curiosity Pre-Regionals Scrimmage",
       description: "2/28/2025 | Los Angeles, USA",
       takeaway: "Hosting a scrimmage can be a valuable way for our team to learn about other teams, form connections, and practice under a competition-like environment/figure out what might break before an actual competition! ",
       color: sustain,
       coordinates: home
   },
   {
       title: "#48 | Larchmont Chronicle Feature",
       description: "2/28/2025 | Hancock Park, USA",
       takeaway: " Getting featured in a newspaper allows us to reach audiences and expose them to FIRST and our team.",
       color: reach,
       coordinates: home
   },
   {
       title: "#49 | Intergalactic 8606 PF",
       description: "3/1/2025 | Rancho Santa Fe, USA",
       takeaway: " A color scheme that ensures readability is super important in creating a cohesive portfolio, and a rookie team can accomplish a lot with hard work!",
       color: reach,
       coordinates: home
   },
   {
       title: "#50 | Call with DIY Girls",
       description: "3/4/2025 | San Fernado, USA",
       takeaway: "We felt empowered by DIY girls, and excited to partner with them. We continued to learn about how we can support them, and shared the joys of FIRST. They were super impressed with our robot and FIRST.",
       color: reach,
       coordinates: home
   },
   {
       title: "#51 | Call with Walter Delph",
       description: "3/5/2025 | Los Angeles, USA",
       takeaway: "Utilize personal connections and your own assets to gain an edge, examine and utilize your resources carefully.",
       color: connect,
       coordinates: home
   },
   {
       title: "#52 | Call with Collins Key",
       description: "3/4/2025 | Los Angeles, USA",
       takeaway: "Use data-backed content studies to frame the type of content you create. Keep in mind your ideal audience and curate viral content for them.",
       color: connect,
       coordinates: home
   },
   {
       title: "#53 | CEE STEAM Fair",
       description: "4/10/2025 | West Hollywood, USA",
       takeaway: "We were able to share all about Curiosity and FTC with a wide audience of elementary school students and their families! Students were able to watch our robot in action as well as try driving practice bots themselves, and parents learned about the different ways their students could engage in FIRST.",
       color: sustain,
       coordinates: { lat: 34.0890, lng: -118.3790 }
   },
   {
       title: "#54 | Call with Deanna Pham",
       description: "4/25/2025 | Los Angeles, United States",
       takeaway: "We can maximize our impact by being strategic about how we cold reach out to mentors and hosting panels to connect other teams with industry mentors. ",
       color: connect,
       coordinates: home
   },
   {
       title: "#55 | Call with BearBella Robotics",
       description: "5/27/2025 | Scarborough, Ontario, Canada",
       takeaway: "It was so fun being able to connect with another girls team from another part of the world! They taught us  how we can maximize our social media viewership by paying detailed attention to the algorithm and what is trending as well as using thoughtful hashtags to promote our videos to new audiences. Additionally, being able to share advice on approaches to portfolio creation and judging was truly rewarding especially seeing how inspired they felt after hearing about our process and experiences.It was so fun being able to connect with another girls team from another part of the world! They taught us  how we can maximize our social media viewership by paying detailed attention to the algorithm and what is trending as well as using thoughtful hashtags to promote our videos to new audiences. Additionally, being able to share advice on approaches to portfolio creation and judging was truly rewarding especially seeing how inspired they felt after hearing about our process and experiences.",
       color: reach,
       coordinates: { lat: 43.7764, lng: -79.2332 }
   },
   {
       title: "#56 | Call with Minerva 24809",
       description: "6/6/2025 | Muang, Thailand",
       takeaway: "We learned about differential power transfers and were introduced to different types of 3D printer filaments to experiment with. It was rewarding to not only receive valuable advice on hardware but also share our own expertise on the judging portion of the competition.",
       color: reach,
       coordinates: { lat: 13.22, lng: 100.31 }
   },
   {
       title: "#57 | TAC Portfolio Feedback",
       description: "6/12/2025 | San Juan Capistrano, California, USA",
       takeaway: "Ensure cohesive and consistent page templates/colors/fonts to make your entire portfolio easy to follow and aesthetically pleasing! Making sure to use clear language and specifics can make a portfolio page shine.",
       color: reach,
       coordinates: { lat: 33.501694, lng: -117.662552 }
   },
   {
       title: "#58 | 17062 Techalongs Portfolio Feedback",
       description: "6/3/2025 | Scottsdale, Arizona, United States",
       takeaway: "Break up text and make sure to ensure that collaborative elements come through with your portfolio. Similarly, ensuring multiple people read over a page and that information is concise/not repeated by working as a team results in a strong portfolio! ",
       color: reach,
       coordinates: { lat: 33.501324, lng: -111.925278 }
   },
   {
       title: "#59 | Tennessine Titans Portfolio Feedback",
       description: "5/6/2025 | Maryville, Tennessee, United States",
       takeaway: "Make sure to showcase your distinct efforts and initiatives with specific references, well-defined sections, and clear text and images. Also, strategically organize your page-by-page content so that your portfolio is intuitive to read and understand. ",
       color: reach,
       coordinates: { lat: 35.758754, lng: -83.971332 }
   },
   {
       title: "#60 | Tennessine Titans Call",
       description: "5/6/2025 | Maryville, Tennessee, United States",
       takeaway: "Strategically organizing the information that goes on each portfolio page is super important, because it helps readers intuitively understand the content of your portfolio!",
       color: reach,
       coordinates: { lat: 35.758754, lng: -83.971332 }
   },
   {
       title: "#61 | Call with Robonerds 5089",
       description: "6/26/2025 | Los Angeles, CA, United States",
       takeaway: "We learned about the LAUSD FTC program and the specific needs of the students. Our next steps are to launch the Perseverance program with targeted workshops, hands-on support throughout the season, and expanded collaboration through the Constellation program.",
       color: reach,
       coordinates: home
   },
   {
       title: "#62 | Call with iAmAngel Foundation",
       description: "6/27/2025 | Los Angeles, CA, United States",
       takeaway: "We learned about the structure and formatting of the LAUSD FTC season and identified key areas where our team can provide meaningful support. It was valuable to discuss next steps for the Perseverance program and brainstorm ideas as we begin launching it.",
       color: connect,
       coordinates: home
   },
   {
       title: "#63 | 23344 Technical Turbulence Portfolio Feedback",
       description: "8/2/2025 | Plano, TX, United States",
       takeaway: "Charts and diagrams are a super useful way to communicate technically complex information, and when done well, allow you to minimize word count while still communicating effectively. ",
       color: reach,
       coordinates: { lat: 33.0217, lng: -96.698 }
   },
   {
       title: "#64 | Call with Sarah Nwakudu",
       description: "8/10/2025 | Berkeley, CA, United States",
       takeaway: "We learned about industry best practices for injection molding and plastic casting from a pioneering female engineer! Discussing our future directions for our plastic project and receiving expert guidance on measuring real-life parts was incredibly valuable. ",
       color: connect,
       coordinates: { lat: 37.716, lng: -122.2727 }
   },
   {
       title: "#65 | Call with Ruth Turgeman - Everglow",
       description: "8/12/2025 | Jerusalem, Israel",
       takeaway: "Working with those in our community to support their robot design and create access to parts empowers all of us by lifting up our competition. ",
       color: reach,
       coordinates: { lat: 31.7683, lng: 35.2137 }
   },
   {
       title: "#66 | Violets 101 New Students Orientation",
       description: "8/21/2025 | Los Angeles, CA, United States",
       takeaway: "It was incredible to be able to share our love for FIRST and robotics with an audience of new students at our school and get them interested in our robotics program!",
       color: sustain,
       coordinates: home
   },
   {
       title: "#67 | FilaBot Call",
       description: "8/29/2025 | Barre, Vermont, United States",
       takeaway: "We learned the standard procedure for dehydrating polypropylene chips to extrude with the Filabot! Our next steps will be to create our own DIY pellet dryer and test with the Filabot filament extruder. ",
       color: connect,
       coordinates: { lat: 44.191, lng: -72.502 }
   },
   {
       title: "#68 | Rich Silberfeld / Scrap Conversion",
       description: "9/3/2025 | Bohemia, New York, United States",
       takeaway: "We learned about the best practices for processing polypropylene and about different ways of dehydrating it as well as future steps for our plastic recycling project.",
       color: connect,
       coordinates: { lat: 40.76447, lng: -73.1007 }
   },
   {
       title: "#69 | Kickoff Portfolio Presentation #1",
       description: "9/6/2025 | Los Angeles, CA, United States",
       takeaway: "We learned how fun it is to share our knowledge about creating the portfolio with other teams and how we can effectively address their questions.",
       color: reach,
       coordinates: home
   },
   {
       title: "#70 | Kickoff Portfolio Presentation #2",
       description: "9/6/2025 | Los Angeles, CA, United States",
       takeaway: "We learned about the different ways teams in our region approach the portfolio process, and we gained some insight into the ways that smaller teams break down large tasks like the portfolio.",
       color: reach,
       coordinates: home
   },
   {
       title: "#71 | 27621 Heron Robotics Portfolio Feedback",
       description: "5/6/2025 | Palo Alto, California, United States",
       takeaway: "It is important to make sure to use a consistent color scheme and descriptions for outreach. Also, coming up with unique titles for each page will enhance the personality of your portfolio. ",
       color: reach,
       coordinates: { lat: 37.4419, lng: -122.143 }
   },
   {
       title: "#72 | iAmAngel x LAUSD Build Day",
       description: "9/27/2025 | Los Angeles, CA, United States",
       takeaway: "It was such a valuable experience to be able to share our technical knowledge in person and help teams in need! We learned about new video editing techniques and also some important things to keep in mind for our next lessons which will include java programming and presentational skills, two areas teams expressed an interest in learning more about..",
       color: sustain,
       coordinates: home
   },
   {
       title: "#73 | Build Day Robot Presentation",
       description: "9/27/2025 | Los Angeles, CA, United States",
       takeaway: "We learned first hand how valuable it is to directly give back and share our experience with students in our city. We also discovered that many teams could benefit from additional support in Java programming.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#74 | FLL Tournament Directors Meeting",
       description: "9/27/2025 | Riverside, CA, United States",
       takeaway: "We can learn a lot by collaborating with other local FLL leaders in our community, and can work with others who compliment our strengths and weaknesses. By reaching out to newer female FTC and FRC teams, we can forge valuable connections while also learning about best practices when running an FLL meet! We also learned the largest paper cup is made out of cement.",
       color: sustain,
       coordinates: { lat: 33.9806, lng: -117.3755 }
   },
   {
       title: "#75 | Global Giving Interview",
       description: "9/30/2025 | Washington, D.C., United States",
       takeaway: "It was incredible to be able to share our love for FIRST with a global audience. We truly enjoyed the rewarding process of being able to raise money for a cause we care about.",
       color: reach,
       coordinates: { lat: 38.9072, lng: -77.0369 }
   },
   {
       title: "#76 | FIRST Like a Girl Intro Meeting",
       description: "10/5/2025 | n/a",
       takeaway: "We learned strategies to promote the values of FIRST, while also learning how to effectively connect a variety of teams from around the world. We also learned about social media strategies and best practices.",
       color: reach,
       coordinates: home
   },
   {
       title: "#77 | Marlborough Admissions Open House",
       description: "10/18/2025 | Los Angeles, CA, United States",
       takeaway: "Spreading FTC to the greater community, including students who have already had an involvement in FLL, helped us understand the importance of creating a continuous pipeline in robotics. We learned how sharing our experiences can inspire younger girls to stay engaged in STEM, encourage growth from FLL to our school’s FTC program, and strengthen the long-term sustainability of our robotics community.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#78 | UCLA Exploring Your Universe STEM Fair",
       description: "11/2/2025 | Los Angeles, CA, United States",
       takeaway: "At the UCLA STEM Fair, we had the opportunity to introduce a new audience of students and parents to the world of robotics and FIRST programs. By demonstrating our FTC robots and introducing younger students to FLL, we were able to inspire them to explore STEM and join FIRST programs themselves. Additionally, interacting with university engineers and scientists as the only high schoolers presenting at the STEM fair allowed us to rekindle old connections and foster new bonds with university organizations.",
       color: reach,
       coordinates: { lat: 34.0689, lng: -118.4452 }
   },
   {
       title: "#79 | The Center For Early Education FLL QT",
       description: "11/2/2025 | Los Angeles, CA, United States",
       takeaway: "We volunteered at The Center For Early Education’s (CEE) First Lego League qualifying meet as referees and judges. We learned more about behind the scenes of running an FLL meet and it helped us prepare for our own FLL meet. ",
       color: sustain,
       coordinates: { lat: 34.0890, lng: -118.3790 }
   },
   {
       title: "#80 | Curiosity-Hosted FLL Qualifier",
       description: "11/8/2025 | Los Angeles, CA, United States",
       takeaway: "Expanding access for youth to compete in FLL provides opportunity for more students to engage with FIRST.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#81 | Meeting with Kara Rooney (Lakers)",
       description: "11/12/2025 | Los Angeles, CA, United States",
       takeaway: "We learned how to efficiently coordinate impactful outreach events, and how to use cultural and community events to maintain sustainability and gain participation/interest. ",
       color: connect,
       coordinates: home
   },
   {
       title: "#82 | LAUSD Office Hours #1: CAD and Code",
       description: "11/12/2025 | Los Angeles, CA, United States",
       takeaway: "Providing insight on CAD allows more teams to achieve technical excellence and proficiency within FTC.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#83 | Call With Aaed Musa",
       description: "11/14/2025 | West Lafayette, Indiana, United States",
       takeaway: "Learning from his wrist mounted CD launcher, we found out that flywheels are dependent on moment of inertia and mass, so varying hood height and RPM are some of the best ways to score from the far and near goals quickly. Limelight and Odometry are both valid methods to automate score distances, but pick the one which is the most simple and fastest.Keep working on hands-on projects, expanding your skillset, and engaging with robots!",
       color: connect,
       coordinates: { lat: 40.4259, lng: -86.9081 }
   },
   {
       title: "#84 | Lit Stem Presentation",
       description: "11/15/2025 | Bac Ninh, Vietnam",
       takeaway: "Learning from his wrist mounted CD launcher, we found out that flywheels are dependent on moment of inertia and mass, so varying hood height and RPM are some of the best ways to score from the far and near goals quickly. Limelight and Odometry are both valid methods to automate score distances, but pick the one which is the most simple and fastest.Keep working on hands-on projects, expanding your skillset, and engaging with robots!",
       color: reach,
       coordinates: { lat: 21.1861, lng: 106.0763 }
   },
   {
       title: "#85 | Bake Sale Prep #1",
       description: "11/16/2025 | Los Angeles, CA, United States",
       takeaway: "We learned how to maximize our bake sale profits by following current social media trends. ",
       color: sustain,
       coordinates: home
   },
   {
       title: "#86 | Bake Sale Prep #2",
       description: "11/16/2025 | Los Angeles, California, United States",
       takeaway: "Maximizing efficiency  and our team work can allow us to make 67 pounds of cookie dough!",
       color: sustain,
       coordinates: home
   },
   {
       title: "#87 | Cookies for Curiosity Bake Sale",
       description: "11/17/2025 | Los Angeles, California, United States",
       takeaway: "We learned how to organize a large scale event and make a profit to help sustain other FIRST teams!",
       color: sustain,
       coordinates: home
   },
   {
       title: "#88 | Honeybee Robotics Visit",
       description: "12/1/2025 | Los Angeles, California, United States",
       takeaway: "We learned about PDR and CDR, two key design cycles used in NASA’s design process. We learned about the qualifications and each benchmark needed, and how they utilize wire management coupled with robust documentation to make forward progress on different innovations.",
       color: connect,
       coordinates: { lat: 34.1871, lng: -118.1554 }
   },
   {
       title: "#89 | Marlborough Admissions Open House",
       description: "12/7/2025 | Los Angeles, California, United States",
       takeaway: "We were able to introduce 120 prospective students and their families to FIRST, sharing the mission and impact of robotics with girls throughout Los Angeles County. ",
       color: sustain,
       coordinates: home
   },
   {
       title: "#90 | L.A Port TraPac Terminal Visit",
       description: "12/9/2025 | Los Angeles, California, United States",
       takeaway: "We learned about how TraPac decides which mechanisms to automate and the reasoning behind it. We also learned about their logistical planning and how they coordinate the movement of their machines. ",
       color: connect,
       coordinates: { lat: 33.7712, lng: -118.2678 }
   },
   {
       title: "#91 | Julianne Hannon Robot Advising",
       description: "12/26/2025 | Cambridge, MA, United States",
       takeaway: "Julianne is one of our oldest alums and a senior at MIT! She was able to use her mechanical engineering expertise to advise us on how to maintain tension on the belt used for our shooter by adding a tensioner, along with switching the plywood panel under our shooter to polycarbonate for increased stability. We contacted her as she built a ball launcher for one of her MIT classes! ",
       color: connect,
       coordinates: { lat: 42.3736, lng: -71.1097 }
   },
   {
       title: "#92 | RoSophia Conference",
       description: "1/2/2026 | Galați, Romania",
       takeaway: "Use specific solutions like turrets for freedom of movement or pulleys for reliable power transmission, while always favoring simplicity to avoid performance-degrading complexity. We also learned to focus on versatile, modular chassis designs and using master sketches in CAD for better organization and labeling.",
       color: reach,
       coordinates: { lat: 45.4353, lng: 28.0080 }
   },
   {
       title: "#93 | UCLA Racing",
       description: "1/5/2026 | Los Angeles, CA, United States",
       takeaway: "We learned about what future careers in engineering might look like, and what the similarities and differences between SAE (Formula) racing, Baja racing, and supermileage are. The baja cars are focused on off-roading vehicles that have to surpass large obstacles on its course. The formula team has their competition at the Michigan International speedway where they race on a track similar to F1. The supermileage club focuses on building a car that is lightweight and uses hydrogen.  We learned about how teams manage documentation, collaborate in shared workspaces, and approach the design process. We were amazed at all the similarities that we have to their practices! ",
       color: connect,
       coordinates: { lat: 34.0689, lng: -118.4452 }
   },
   {
       title: "#94 | Call with Grant Team Adelitas STEAmex",
       description: "1/6/2026 | Chihuahua City, Chihuahua, Mexico",
       takeaway: "Finding specific team recipients for our grant can allow more girls to have access to competing in FIRST and allow them to compete at a higher level/introduce more students to FIRST.",
       color: sustain,
       coordinates: { lat: 28.6353, lng: -106.0889 }
   },
   {
       title: "#95 | Call with The Lobotimists 3271",
       description: "1/6/2026 | Hartsville, South Carolina, USA",
       takeaway: "Similar to us there team is entirely juniors and seniors, so prioritizing sustainability and making sure that the juniors are gaining the necessary skills is very important. New members taking responsibility and making an effort to gain those skills is also super important. ",
       color: reach,
       coordinates: { lat: 34.3732, lng: -80.0734 }
   },
   {
       title: "#96 | Ink x Metal",
       description: "1/10/2026 | San Francisco, United States",
       takeaway: "We learned about a variety of topics, including: fundraising, impact on our community, and how to navigate the rookie crisis (the upsurge in rookie members and how to bridge the knowledge gap). We also learned about the importance of presentation order between teams in a conference, and how placement can influence how much impact or how many people you can reach.",
       color: reach,
       coordinates: { lat: 37.7749, lng: -122.4194 }
   },
   {
       title: "#97 | 1/12 Bake Sale Prep #1",
       description: "1/10/2026 | Los Angeles, CA, United States",
       takeaway: "We learned how to efficiently create a system to bake large amounts of goods in an efficient amount of time.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#98 | 1/12 Bake Sale Prep #2",
       description: "1/11/2026 | Los Angeles, CA, United States",
       takeaway: "With all of our efforts we maximized the amount of cookie dough we could make!",
       color: sustain,
       coordinates: home
   },
   {
       title: "#99 | Cookies for Curiosity Bake Sale #2",
       description: "1/12/2026 | Los Angeles, CA, United States",
       takeaway: "We learned about supply and demand and how marketing strategies affect our success in selling our products. We made over $2,300!!!",
       color: sustain,
       coordinates: home
   },
   {
       title: "#100 | Call with Ziair DeLeon",
       description: "1/13/2026 | Hartford, CT, United States",
       takeaway: "We can manage inconsistency in our shooter velocity by iterating our pulley system. By changing the radius of one of our pulleys, we can have a larger drive gear, which enables us to have a consistent launch speed without changing our rpm. We also learned about proper documentation, which is important for engineers as well!",
       color: connect,
       coordinates: { lat: 41.7658, lng: -72.6734 }
   },
   {
       title: "#101 | Call with WHS Robotics",
       description: "1/13/2026 | Remote",
       takeaway: "Teams can utilize networks to distribute STEM materials.",
       color: sustain,
       coordinates: home
   },
   {
       title: "#102 | CEE Presentation",
       description: "01/07/2026 | Los Angeles, CA, United States",
       color: reach,
       coordinates: { lat: 34.0890, lng: -118.3790 }
   },
   {
       title: "#103 | Waffle Warriors",
       description: "1/13/2026 | Los Angeles, CA, United States",
       takeaway: "We can empower girls to participate in FIRST by sharing our resources and supporting other girls’ teams! ",
       color: sustain,
       coordinates: home
   },
   {
       title: "#104 | Call with Hype-Birds",
       description: "1/14/2026 | Remote",
       takeaway: "By translating our guides into different languages, we can make our resources more accessible to teams around the world, particularly teams in underrepresented regions in STEM!",
       color: reach,
       coordinates: home
   },

   // ==========================================
   // CONSTELLATION TEAMS (From Stars1.js)
   // ==========================================
   {
       title: "Constellation Team: 19013 G Force",
       description: "Mumbai, India",
       color: co,
       coordinates: { lat: 19.0760, lng: 72.8777 } 
   },
   {
       title: "Constellation Team: 12682 The Golden Ratio",
       description: "Cary, USA",
       color: co,
       coordinates: { lat: 42.2132, lng: -88.2477}
   },
   {
       title: "Constellation Team: 7120 Bionica",
       description: "Hewlett, USA",
       color: co,
       coordinates: {lat: 40.6432, lng: -73.6957}
   },
   {
       title: "Constellation Team: 12993 Robokings Aurum",
       description: "Sunshine Coast, Australia",
       color: co,
       coordinates: { lat:-26.6528, lng: 153.0896}
   },
   {
       title: "Constellation Team: 21457 Tennessine Titans",
       description: "Maryvile, USA",
       color: co,
       coordinates: {lat: 35.7565, lng: -83.9705}
   },
   {
       title: "Constellation Team: 8404 Quixsilver",
       description: "San Jose, USA",
       color: co,
       coordinates: {lat: 37.3387, lng: -121.8853}
   },
   {
       title: "Constellation Team: 20701 Team Lovelace",
       description: "New York, USA",
       color: co,
       coordinates: {lat: 40.7128, lng: - 74.0060}
   },
   {
       title: "Constellation Team: 13828 Java Jokers",
       description: "Milwaukee, USA",
       color: co,
       coordinates: { lat: 43.0410, lng: -87.9097 }
   },
   {
       title: "Constellation Team: 14340 Haywire",
       description: "Ipswich, Australia",
       color: co,
       coordinates: { lat: -27.616666, lng: 152.7608 }
   },
   {
       title: "Constellation Team: 23224 Cheesy Bytes",
       description: "San Jose, USA",
       color: co,
       coordinates: { lat: 37.3382, lng: -121.8863 }
   },
   {
       title: "Constellation Team: 24180 Blue Bananas",
       description: "Huntsville, USA",
       color: co,
       coordinates: { lat: 34.7304, lng: -86.5861 }
   },
   {
       title: "Constellation Team: 17703 Fullmetal Peregrines",
       description: "Middletown, USA",
       color: co,
       coordinates: { lat: 41.5623, lng: -72.6506 }
   },
   {
       title: "Constellation Team: 6133 The Nuts",
       description: "Cincinnati, USA",
       color: co,
       coordinates: { lat: 39.1031, lng: -84.5120 }
   },
   {
       title: "Constellation Team: 3188 Squiggle Splat Bang",
       description: "Powell, USA",
       color: co,
       coordinates: { lat: 44.7538, lng: -108.7574 }
   },
   {
       title: "Constellation Team: Fibonacci 14126",
       description: "Springfield, USA",
       color: co,
       coordinates: { lat: 44.0462, lng: -123.0220 }
   },
   {
       title: "Constellation Team: 23493 Techno Domination",
       description: "Solon, USA",
       color: co,
       coordinates: { lat: 41.3898, lng: -81.4412 }
   },
   {  
       title: "Constellation Team: 14295 Operation T.A.C.",
       description: "San Juan Capistrano, USA",
       color: co,
       coordinates: {lat: 33.501694, lng: -115.662552 }
   },
   {  
       title: "Constellation Team: 16091 T.W.C.A.",
       description: "Hurricane, USA",
       color: co,
       coordinates: {lat: 37.1753, lng: -113.2899 }
   },
   {  
       title: "Constellation Team: 24006 LeXT Watermelon Why",
       description: "Agoura Hills, USA",
       color: co,
       coordinates: {lat: 34.1533, lng: -118.7617}
   },
   {  
       title: "Constellation Team: 17062 Techalongs",
       description: "Scottsdale, USA",
       color: co,
       coordinates: {lat: 33.501324, lng: -111.925278}    
   },
   {
       title: "Constellation Team: 15151 Anatronic Kats",
       description: "Dimmitt, USA",
       color: co,
       coordinates: {lat: 34.5509, lng: -102.31186}    
   },
   {
       title: "Constellation Team: 4605 RoboHackerz",
       description: "Beaver Dam, USA",
       color: co,
       coordinates: {lat: 43.45583151, lng:  -88.834829994}    
   },
   {   
       title: "Constellation Team: 18025 BSRC Mad About Robots",
       description: "Pune, MH, India",
       color: co,
       coordinates: {lat: 18.5246, lng: 73.8786}    
   },
   {
       title: "Constellation Team: 9990 Robo Vikings",
       description: "Greensboro, USA",
       color: co,
       coordinates: {lat: 36.0726, lng:  -79.7915}    
   }   
];

const lines = [
   {
       start: { lat: 44.0462, lng: -123.022 },
       end: { lat: 41.3898, lng: -81.4412 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 39.1031, lng: -84.512 },
       end: { lat: 44.7538, lng: -108.7574 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 19.076, lng: 72.8777 },
       end: { lat: 42.2132, lng: -88.2477 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 34.7304, lng: -86.5861 },
       end: { lat: 41.5623, lng: -72.6506 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 40.7128, lng: -74.006 },
       end: { lat: -27.6167, lng: 152.7608 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: -26.6528, lng: 153.0896 },
       end: { lat: 35.7565, lng: -83.9705 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 43.041, lng: -87.9097 },
       end: { lat: 37.3382, lng: -121.8863 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 40.6432, lng: -73.6957 },
       end: { lat: 37.3387, lng: -121.8853 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 33.5017, lng: -115.6626 },
       end: { lat: 37.1753, lng: -113.2899 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 34.1533, lng: -118.7617 },
       end: { lat: 33.5013, lng: -111.9253 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 34.5509, lng: -102.3119 },
       end: { lat: 43.4558, lng: -88.8348 },
       options: { color: "white", weight: 3 }
   },
   {
       start: { lat: 18.5246, lng: 73.8786 },
       end: { lat: 36.0726, lng: -79.7915 },
       options: { color: "white", weight: 3 }
   }
      
];

function createStarIcon(color) {
    const svg = `
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
       <polygon points="12,2 15,10 24,10 17,15 20,23 12,18 4,23 7,15 0,10 9,10"
         fill="${color}" stroke="black" stroke-width="0.5"/>
     </svg>`;
    const encodedSVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    const el = document.createElement("div");
    el.className = "star-marker";
    el.style.backgroundImage = `url("${encodedSVG}")`;
    return el;
}

function openTakeaway(button) {
    const takeawayId = button.getAttribute("data-takeaway-id");
    document.getElementById(takeawayId).style.display = "block";
    button.style.display = "none";
}

function closeTakeaway(takeawayDiv) {
    takeawayDiv.style.display = "none";
    const takeawayId = takeawayDiv.id;
    const button = document.querySelector(`button[data-takeaway-id="${takeawayId}"]`);
    if (button) {
        button.style.display = "inline-block";
    }
}/***************************************
 * 1. Inject CSS for Better Popups & Markers
 ***************************************/
const style = document.createElement('style');
style.innerHTML = `
  /* Custom Scrollbar for the popup */
  .popup-hub-content::-webkit-scrollbar {
    width: 6px;
  }
  .popup-hub-content::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  .popup-hub-content::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 3px;
  }
  .popup-hub-content::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  .star-marker {
    background-size: cover;
    cursor: pointer;
  }
`;
document.head.appendChild(style);

/***************************************
 * 2. Helper Functions
 ***************************************/

// Create the Star Icon
function createStarIcon(color) {
    const svg = `
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
       <polygon points="12,2 15,10 24,10 17,15 20,23 12,18 4,23 7,15 0,10 9,10"
         fill="${color}" stroke="black" stroke-width="0.5"/>
     </svg>`;
    const encodedSVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    const el = document.createElement("div");
    el.className = "star-marker";
    el.style.backgroundImage = `url("${encodedSVG}")`;
    el.style.width = "24px";
    el.style.height = "24px";
    return el;
}

// Takeaway Buttons
function openTakeaway(button) {
    const takeawayId = button.getAttribute("data-takeaway-id");
    document.getElementById(takeawayId).style.display = "block";
    button.style.display = "none";
}

function closeTakeaway(takeawayDiv) {
    takeawayDiv.style.display = "none";
    const takeawayId = takeawayDiv.id;
    const button = document.querySelector(`button[data-takeaway-id="${takeawayId}"]`);
    if (button) {
        button.style.display = "inline-block";
    }
}

// HTML Generator for Popups
function generatePopupHTML(events, index) {
    const count = events.length;
    // If there are more than 3 events, use the scrollable "Hub" layout
    const isHub = count > 3;
    const containerStyle = isHub ? "max-height: 300px; overflow-y: auto; padding-right: 5px;" : "";
    
    let html = `<div style="min-width: 200px; max-width: 260px;">`;
    
    // Sticky Header for Hubs
    if (isHub) {
        html += `
        <div style="position: sticky; top: 0; background: white; z-index: 10; border-bottom: 2px solid #861f18; padding-bottom: 5px; margin-bottom: 10px;">
            <strong style="color: #861f18; font-size: 16px;">
                Home Base Cluster
            </strong>
            <div style="font-size: 12px; color: #555;">${count} Events at this location</div>
        </div>`;
    }

    html += `<div class="popup-hub-content" style="${containerStyle}">`;

    events.forEach((event, i) => {
        const uniqueId = `takeaway-${index}-${i}`;
        
        html += `
       <div style="border-bottom: 1px solid #eee; margin-bottom: 8px; padding-bottom: 8px;">
           <strong style="color: #861f18; font-size: 15px; display:block; line-height:1.2; margin-bottom:2px;">
               ${event.title}
           </strong>
           <span style="color: #ed6900; font-size: 13px; font-weight:bold;">
               ${event.description}
           </span>
           <br/>`;

        if (event.takeaway) {
            html += `
           <button 
               data-takeaway-id="${uniqueId}"
               style="margin-top:5px; background-color:#861f18; color:white; border:none; padding:3px 8px; cursor:pointer; border-radius:4px; font-size:12px;"
               onclick="openTakeaway(this)">
               View Takeaway
           </button>
           <div 
               id="${uniqueId}" 
               class="takeaway" 
               style="display:none; margin-top:5px; padding: 5px; background: #fff5f5; border-left: 3px solid #861f18; color: #333; font-size:13px; cursor:pointer;"
               onclick="closeTakeaway(this)">
               <em>${event.takeaway}</em> <br/>
               <span style="font-size:10px; color:#999;">(Click to close)</span>
           </div>`;
        }
        
        html += `</div>`;
    });

    html += `</div></div>`;
    return html;
}

/***************************************
 * 3. Adding Stars to the Map
 ***************************************/
const groupedStars = {};

stars.forEach((star) => {
    // Clone coordinates
    let lng = star.coordinates.lng;
    let lat = star.coordinates.lat;

    // Apply offset for Constellation teams (White stars)
    if (star.color === co) {
        lng = lng - 0.75;
    }

    if (lat == null || lng == null) {
        console.warn("Skipping star with invalid coordinates:", star);
        return;
    }

    const key = `${lat},${lng}`;
    if (!groupedStars[key]) {
        groupedStars[key] = [];
    }
    groupedStars[key].push(star);
});

Object.keys(groupedStars).forEach((key, index) => {
    const [lat, lng] = key.split(",").map(Number);
    const eventsAtLocation = groupedStars[key];
    
    // Create icon
    const markerEl = createStarIcon(eventsAtLocation[0].color);

    // If this is a huge cluster (Home), make marker slightly larger/on top
    if (eventsAtLocation.length > 5) {
        markerEl.style.transform = "scale(1.2)"; 
        markerEl.style.zIndex = "100";
    }

    const marker = new maplibregl.Marker({ element: markerEl })
        .setLngLat([lng, lat])
        .addTo(map);

    // Use the new generator
    const popupContent = generatePopupHTML(eventsAtLocation, index);

    const popup = new maplibregl.Popup({ offset: 25, maxWidth: "300px" })
        .setHTML(popupContent);

    marker.setPopup(popup);
});

/***************************************
 * 4. Add Lines to Map & Animation
 ***************************************/
lines.forEach((line, index) => {
    const id = `line-${index}`;

    map.on("load", () => {
        if (!map.getSource(id)) {
            map.addSource(id, {
                type: "geojson",
                data: {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates: [
                            [line.start.lng - 0.75, line.start.lat],
                            [line.end.lng - 0.75, line.end.lat]
                        ]
                    }
                }
            });
        }

        map.addLayer({
            id: id,
            type: "line",
            source: id,
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": line.options.color || "white",
                "line-width": line.options.weight || 1,
                "line-opacity": 0.7,
                "line-blur": 2
            }
        });

        // Start the sparkle animation
        animateLineSparkle(id);

        // Click behavior
        map.on("click", id, (e) => {
            new maplibregl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(line.popupContent || "")
                .addTo(map);
        });

        map.on("mouseenter", id, () => {
            map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", id, () => {
            map.getCanvas().style.cursor = "";
        });
    });

    // Function to pulse-glow the line
    function animateLineSparkle(layerId) {
        let t = 0;
        const animate = () => {
            const opacity = 0.6 + 0.4 * Math.sin(t);
            const blur = 1.5 + 1.0 * Math.sin(t);

            if (map.getLayer(layerId)) {
                map.setPaintProperty(layerId, "line-opacity", opacity);
                map.setPaintProperty(layerId, "line-blur", blur);
            }

            t += 0.05;
            requestAnimationFrame(animate);
        };
        animate();
    }
});
