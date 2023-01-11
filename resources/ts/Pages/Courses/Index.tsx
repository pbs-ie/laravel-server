import WrapperLayout from '@/Layouts/WrapperLayout';
import CourseCard from '@/Components/CourseCard';
import Heading1 from '@/Components/Typography/Heading1';
import { Head } from '@inertiajs/inertia-react';

import MonthlySection from './MonthlySection';
import LessonDownloadSection from './LessonDownloadSection';

import { courseContent } from '@/constants';
import { setBesLinksOnce } from '@/helper';

export default function Index({ besDownloads }: any) {
    try {
        setBesLinksOnce(besDownloads);
    } catch (e) {
        console.warn("Global links variable tried to reset");
    }
    return (
        <WrapperLayout>
            <Head title="Courses" />

            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                <section className="text-center shadow-sm sm:rounded-lg">
                    <Heading1>Courses</Heading1>
                    <p className="font-regular text-base mb-2 mt-0 p-4">Postal Bible School offers a wide range of FREE courses for people of all ages</p>
                    <div className="flex flex-col md:flex-row">
                        {
                            courseContent.map((course, index) => (
                                <CourseCard key={index} heading={course.heading} type={course.type} description={course.description} image={course.image} scrollTo={course.scrollTo}></CourseCard>
                            ))
                        }
                    </div>
                </section>
            </div>

            <div className="max-w-screen mx-auto py-12 sm:px-10 bg-sky-100">
                <MonthlySection></MonthlySection>
            </div>
            <LessonDownloadSection></LessonDownloadSection>
        </WrapperLayout>
    );
}
