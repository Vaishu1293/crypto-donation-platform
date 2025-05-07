import ContributionAndEvents from "@/sections/Events";
import ProjectDetailSection from "./ProjectDetail";
import DonationStatsSection from "./DonationStats";
import MoreProjectsSection from "./MoreProjects";

export default function AboutPage() {
    return (
        <>
            <ProjectDetailSection />
            <DonationStatsSection/>
            <MoreProjectsSection/>
            <ContributionAndEvents />
        </>
    );
}
