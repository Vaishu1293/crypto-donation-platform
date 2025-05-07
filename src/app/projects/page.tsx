import ContributionAndEvents from "@/sections/Events";
import ProjectDetailSection from "./ProjectDetail";
import DonationStatsSection from "./DonationStats";
import MoreProjectsSection from "./MoreProjects";

export default function ProjectPage() {
    return (
        <>
            <ProjectDetailSection />
            <DonationStatsSection/>
            <MoreProjectsSection/>
            <ContributionAndEvents />
        </>
    );
}
