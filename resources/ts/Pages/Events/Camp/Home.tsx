import CardContainer from "@/Components/Cards/EventCardContainer";
import GalleryBasic from "@/Components/Gallery/GalleryBasic";
import Heading2 from "@/Components/Typography/Heading2";
import Paragraph from "@/Components/Typography/Paragraph";
import ParagraphContainer from "@/Components/Typography/ParagraphContainer";

import EventWrapper from "@/Layouts/EventWrapper";
import ExtendScreenWrapper from "@/Layouts/ExtendScreenWrapper";
import CampWrapper from "@/Layouts/CampWrapper";

import route from "ziggy-js";

import CampTeaching from "@images/camp/camp-teaching-min.jpg";
import CampFriends from "@images/camp/camp-friends-min.jpg";
import CampBeach from "@images/camp/camp-beach-min.jpg";
import CampFire from "@images/camp/camp-fire-min.jpg";
import CampSinging from "@images/camp/camp-singing-min.jpg";
import CampGames from "@images/camp/camp-games-min.jpg";
import CampCraft from "@images/camp/camp-craft-min.jpg";
import CampAdventure from "@images/camp/camp-adventure-min.jpg";
import CampBanner from "@images/camp/camp_header.png";

import ButtonLink from "@/Elements/Buttons/ButtonLink";
import Calendar from "@/Elements/Icons/Calendar";
import Location from "@/Elements/Icons/Location";
import School from "@/Elements/Icons/SchoolIcon";
import SparkesIcon from "@/Elements/Icons/SparklesIcon";

import { CampSettingProps } from "@/Pages/Settings/Camp";


export default function Home({ campSettings }: { campSettings: CampSettingProps }) {
    const images: Gallery[] = [
        {
            title: "Bible Teaching",
            imageLink: CampTeaching
        },
        {
            title: "New Friends",
            imageLink: CampFriends
        },
        {
            title: "Beach Day",
            imageLink: CampBeach
        },
        {
            title: "Camp Fire",
            imageLink: CampFire
        },
        {
            title: "Singing",
            imageLink: CampSinging
        },
        {
            title: "Team Games",
            imageLink: CampGames
        },
        {
            title: "Craft",
            imageLink: CampCraft
        },
        {
            title: "Adventure",
            imageLink: CampAdventure
        }
    ]

    const campCards: CardBlock[] = [
        {
            Icon: SparkesIcon,
            title: "What",
            description: "Summer Camp",
            buttonText: "",
            buttonLink: ""
        }, {
            Icon: Calendar,
            title: "When",
            description: campSettings?.dates,
            buttonText: "",
            buttonLink: ""
        },
        {
            Icon: Location,
            title: "Where",
            description: "Ovoca Manor, Avoca, Co Wicklow",
            buttonText: "",
            buttonLink: ""
        }
    ]
    const reunionCards: CardBlock[] = [
        {
            Icon: School,
            title: "What",
            description: "Camp Reunion",
            buttonText: "",
            buttonLink: ""
        },
        {
            Icon: Calendar,
            title: "When",
            description: campSettings?.reunionDates,
            buttonText: "",
            buttonLink: ""
        },
        {
            Icon: Location,
            title: "Where",
            description: "Castledaly Manor, Moate, Athlone, Co. Westmeath",
            buttonText: "",
            buttonLink: ""
        }
    ]
    return (
        <CampWrapper title="">
            <img src={CampBanner} alt="" className="w-full aspect-auto md:-mt-40" />
            <EventWrapper className="-mt-20 md:-mt-40" title="Summer Camp">
                <ExtendScreenWrapper>
                    <GalleryBasic images={images}></GalleryBasic>
                </ExtendScreenWrapper>
                {campSettings?.isActive &&
                    <CardContainer cards={campCards}>
                        <ButtonLink href={route('events.camp.signup')}>Register</ButtonLink>
                    </CardContainer>
                }
                {campSettings?.reunionIsActive &&
                    <CardContainer cards={reunionCards}>
                        <ButtonLink href={route('events.camp.reunion')}>Register</ButtonLink>
                    </CardContainer>
                }
                <Heading2>Camp</Heading2>
                <ParagraphContainer>
                    <Paragraph>Camp is held each summer in mid-July and generally fills up extremely quickly after the forms go out in mid-May. Camp is held at Ovoca Manor just outside the village of Avoca and near Arklow in Co. Wicklow. Ovoca Manor is an outdoor adventure centre owned by Scripture Union. It offers accommodation and a whole range of activities. Our week at camp will typically involve some time in activities at the centre and several trips off site for other activities.</Paragraph>
                    <Paragraph>During the week campers can, among other things, participate in team sports, water sports, craft, activities, shop and visit the beach. Besides activity there is the opportunity to make new friends, explore new places and eat good food. Each day at camp we meet twice to learn from the Bible and have a speaker who seeks to make the messages relevant to young people, this is what we feel is the most important aspect of camp.</Paragraph>
                    <Paragraph>Camp is open to PBS students who are actively completing and returning lessons, and are over the age of 10 on the 1st January of the year in which camp takes place.</Paragraph>
                </ParagraphContainer>

                <Heading2>History</Heading2>
                <ParagraphContainer>
                    <Paragraph>Summer camp is something that is very special to many of the young people who have had the opportunity for a week of “summer adventure”. PBS camp began in 1963 in Co. Cork and has visited a few locations down through the years. Most recently the Camp has been held at Ovoca Manor in Co. Wicklow. Some of the young people who have attended camp in recent years have parents who also attended PBS camps. Much has changed from some of those early camps. We have proper toilets, showers and dining halls. When we are travelling it's one person to a seat, instead of “how many can you get in”, but the central purpose of camp remains the same. That purpose is the teaching of the Bible to young people.</Paragraph>
                </ParagraphContainer>
            </EventWrapper>
        </CampWrapper>
    )
}