import classes from "./societies.module.css";
import SocietyCard from "../components/societyCard";
import { useLottie } from "lottie-react";
import teamAnim from "../assets/societies.json";

import tech from "../assets/societies/tech.webp";
import cult from "../assets/societies/cult.webp";
import ecell from "../assets/societies/ecell.webp";
import fats from "../assets/societies/fats.webp";
import krida from "../assets/societies/krida.webp";
import naps from "../assets/societies/naps.webp";
import paracosm from "../assets/societies/paracosm.webp";
import photogeeks from "../assets/societies/photogeeks.webp";
import tars from "../assets/societies/tars.webp";
import vedantasamiti from "../assets/societies/vedantasamiti.webp";

export default function SocietiesPage() {
    const options = {
        animationData: teamAnim,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <>
            <div className={classes.creditsWrap}>
                <div className={classes.heartWrap}>{View}</div>
            </div>
            <div className={classes.sectionWrap}>
                <h1>SOCIETIES</h1>
                <p className={classes.quote}>Surround yourself with people who believe in your dreams, encourage your ideas, support your ambitions, and bring the best in you.</p>
                <div className={classes.cardsWrap}>
                    <SocietyCard
                        name="Tech Society"
                        link="https://instagram.com/techsociiitbh"
                        img={tech}
                        about="Under Tech society there are several sub societies like Psoc, Gdsc, Gfg chapter. The society regularly conducts sessions on both introductory and advanced skills. It has organised and in future will organise several competitions and hackathons to boost up dsa and dev skills of students. Students can avail the opportunity to network with seniors who have cracked product based companies like Microsoft, Uber, etc. It conducts exciting events in techno-management fests like D3."
                    />
                    <SocietyCard
                        name="TARS"
                        link="https://instagram.com/tarsiiitbh"
                        img={tars}
                        about="The automation and robotics society deals with the Technical and Automation parts. Core electronics and Robotics is dealt by TARS. It also consists of WebDev team and AI-ML team along with Research team who are supposed to update the team with new technologies and ideas, although workings (hardware & software) and ideas are dealt by Tech team independently. Exciting events like virtual bootcamps, drone events will ignite your robotics interest."
                    />
                    <SocietyCard
                        name="NAPS"
                        link="https://instagram.com/naps_iiit"
                        img={naps}
                        about="News and Publication Society is the literary club of IIIT Bhubaneswar. It is a platform to rise  up with amazing writeups be it poetry, short stories or any type of content writing. They believe that writing is for everyone. For better or for verse! Ingenium is the annual literary fest organised by NAPs along with various events like Shayari Nights, Open-mic shows, etc. You can find beautiful write-ups of further past events in their official monthly magazine 'The Insight'."
                    />
                    <SocietyCard
                        name="FATS"
                        link="https://instagram.com/parda.productions"
                        img={fats}
                        about="The film and theatre society of IIIT Bhubaneswar needs no introduction. We all have that actor hiding inside us waiting for an opportunity to come out. Well FATS is your opportunity peers! FATS literally sets the stage for you to showcase your acting skills in front of the audience. Still want to know more? Well, why don't you watch them on YouTube. If not, then what are you waiting for?"
                    />
                    <SocietyCard
                        name="Vedanta Samiti"
                        link="https://instagram.com/vedanta_samiti"
                        img={vedantasamiti}
                        about="This recently formed society is mainly focused on celebrations. It has 4 major domains. Vedanta: the main organiser of festivals and fun events. Spicmacay: the national level society for the promotion of indian classical music and culture amongst youth. Yfs: Brings together like minded youth oriented organisations focused on sustainability as a way of life. IIIT Megahertz: The official broadcasting channel and face of IIIT Bh."
                    />
                    <SocietyCard
                        name="Cult society"
                        link="https://instagram.com/cult_iiitbh"
                        img={cult}
                        about="If you have that sensational voice or those charismatic steps Cult is all you need. A platform for all those who like to strike the right chords through music or move their bodies in a rhythmic way. CULT brings out the best in you and provide you with the platform to showcase your talent and entertainment to redeem you from the boredom of assignments and exams. Events like Sapphire, Glimpse, Bayaan or Beats of Bonanza can give you the perfect picture of what CULT is all about."
                    />
                    <SocietyCard
                        name="Photogeeks"
                        link="https://instagram.com/photogeeks.iiit"
                        img={photogeeks}
                        about="The official photography society of IIIT Bhubaneswar. Anyone interested in photography and capturing moments can gain lot of experience form the society members and contributes to it. It handles the precious duty of capturing beautiful memories of each event and creates memories worth a lifetime. It has conducted events like Tasveer, PhotoWalk and workshops."
                    />
                    <SocietyCard
                        name="PARACOSM"
                        link="https://instagram.com/paracosm.iiitbh"
                        img={paracosm}
                        about="Paracosm provides an environment for artistic minds to explore their creativity. May it be any event, the craftworks, decorations, and photo booths are beautifully managed by them. If you have creative ideas, artistic hands or a crafty mind, and the eagerness to create wonders, this is the right place for you. Events like Inktober, Art Relays, Exhibitions, Rangrez, etc are some of the beautiful contributions of this society."
                    />
                    <SocietyCard
                        name="E-CELL"
                        link="https://instagram.com/iiitbh_ecell"
                        img={ecell}
                        about="Entrepreneurship Cell is one of the most active cells for all the young minds who like to innovate and think dynamically. The main aim is to promote the entrepreneurship spirit. It conducts event which not only widens your spectrum but also develop you as an individual like the E-week, Funding Den, and frequent webinars by experienced mentors. D3-the Techno-management week was conducted in collaboration with Tech-Society recently."
                    />
                    <SocietyCard
                        name="Sports Society"
                        link="https://instagram.com/iiitbh_sports"
                        img={krida}
                        about="The official sports society of IIIT-Bh helps you maintain physical health and considers it to be man's greatest wealth. It provides great opportunity to interact with large number of people. It organises sports events like cricket, football, basketball intra championship and gives opportunity to represent the college in tournaments held in various IITs and NITs."
                    />
                </div>
            </div>
        </>
    );
}