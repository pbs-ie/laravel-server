import WrapperLayout from '@/Layouts/WrapperLayout';
import CourseCard from '@/Components/CourseCard';
import Heading1 from '@/Components/Typography/Heading1';
import { Head } from '@inertiajs/inertia-react';

import MonthlySection from './MonthlySection';
import LessonDownloadSection from './LessonDownloadSection';

import { courseContent } from '@/constants';
import { responseLinks, setAllBesLinks } from '@/helper';
import Paragraph from '@/Components/Typography/Paragraph';
import RequestLessonBanner from '@/Components/RequestLessonBanner';
import ParagraphContainer from '@/Components/Typography/ParagraphContainer';

export default function Index({ bibleTimeDownloads, goingDeeperDownloads, gleanersDownloads }: { bibleTimeDownloads: responseLinks, goingDeeperDownloads: responseLinks, gleanersDownloads: responseLinks }) {
    try {
        setAllBesLinks(bibleTimeDownloads, goingDeeperDownloads, gleanersDownloads);
    } catch (e) {
        console.warn("Global links variable tried to reset");
    }

    return (
        <WrapperLayout>
            <Head title="Courses" />

            <section className="py-12 mx-auto text-center shadow-sm sm:rounded-lg max-w-7xl sm:px-6 lg:px-8">
                <Heading1>Courses</Heading1>
                <ParagraphContainer>
                    <Paragraph className="p-4 mt-0 mb-2 text-base font-regular">Postal Bible School offers a wide range of FREE courses for people of all ages. The majority of our lessons are used by young peple. We currently have five grades (Level0, Level 1, Level 2, Level 3 and Level 4) available to young people. These grades cover basic Bible stories and major Bible characters. Each grade has a structured 3 year syllabus, and for each month there is a series of 4 lessons.</Paragraph>
                </ParagraphContainer>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:flex-row">
                    {
                        courseContent.map((course, index) => (
                            <CourseCard key={index} heading={course.heading} type={course.type} description={course.description} image={course.image} scrollTo={course.scrollTo}></CourseCard>
                        ))
                    }
                </div>
            </section>

            <div className="py-12 mx-auto max-w-screen sm:px-10 bg-sky-100">
                <MonthlySection></MonthlySection>
            </div>
            <RequestLessonBanner />
            {
                courseContent.map((course) => (
                    <LessonDownloadSection key={course.type} heading={course.heading} description={course.longDescription ?? course.description} type={course.type}></LessonDownloadSection>
                ))
            }
        </WrapperLayout>
    );
}
