import LevelGroupPill from '@/Components/LevelGroupPill';
import { groupThemes } from '@/constants';

export default function LessonCard({ className, heading, image, description, type = "bibletime", setSelectedLevel }) {
    const currentLevel = groupThemes[type].filter(tag => tag.tagName.toLowerCase() === heading.toLowerCase())[0];
    return (
        <div className={`flex flex-col relative items-center w-auto h-full rounded-md bg-slate-100 mb-4 md:mx-2 py-6 drop-shadow-lg ${className}`}>
            <img className="w-52 h-auto" src={image} alt={`${heading} image`} />
            <p className="text-sm leading-tight p-4 pb-8 text-gray-500">{description}</p>
            <button onClick={() => setSelectedLevel(currentLevel)} className="w-full text-center bottom-0 absolute">
                <LevelGroupPill addClass={`font-bold text-base ${currentLevel.tagClass}`}>
                    <div className="flex flex-row">
                        <p className="grow">{currentLevel.tagName}</p>
                        <svg className="ml-auto w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg></div>

                </LevelGroupPill>

            </button>
        </div>
    );

}