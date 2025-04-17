import '../css/style.css'

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Achievements from "../components/team/achievements";
import Expertise from "../components/team/expertise";
import TeamJoin from "../components/team/join";
import TeamMembers from "../components/team/members";
import TeamHero from "../components/team/t-hero";

export default function Team() {
    return (
        <main>
            <Navbar />
            <TeamHero />
            <TeamMembers />
            <Expertise />
            <Achievements />
            <TeamJoin />
            <Newsletter />
            <Footer />
        </main>
    )
}