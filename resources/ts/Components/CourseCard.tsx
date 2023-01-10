import { Link as ScrollLink } from "react-scroll";

import Heading2 from '@/Components/Typography/Heading2';
import TagGroupPill from '@/Components/TagGroupPill';

import { groupThemes } from '@/constants';

export default function CourseCard({ heading, image, description, type = "bibletime", scrollTo = "lesson-download" }: CourseContent) {
    const levelGroup = groupThemes[type];

    return (
        <div className="flex flex-col items-center min-w-min h-full rounded-md bg-slate-100 mb-4 md:mx-2 p-6 drop-shadow-lg">
            <Heading2>{heading}</Heading2>
            <img className="w-52 h-auto" src={image} alt={`${heading} image`} />
            <p className="text-sm leading-tight p-4 text-gray-500">{description}</p>
            <div className="h-auto flex flex-auto flex-wrap">
                {
                    levelGroup.map((element, index) => (
                        <TagGroupPill key={index} addClass={element.tagClass}>{element.tagName}</TagGroupPill>
                    ))
                }
            </div>
            <button className="w-full">
                <ScrollLink to={scrollTo} smooth={true} className="pt-4 flex justify-center">
                    <svg className="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </ScrollLink>
            </button>

        </div>
    );

}