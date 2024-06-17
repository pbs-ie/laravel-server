import Paragraph from "@/Components/Typography/Paragraph";
import ParagraphContainer from "@/Components/Typography/ParagraphContainer";
import StepWrapper from "@/Layouts/StepWrapper";
import route from "ziggy-js";
import ButtonAnchor from "@/Elements/Buttons/ButtonAnchor";
import Download from "@/Elements/Icons/Download";
import PdfViewerComponent from "@/Components/PdfViewerComponent";

export default function Schedule({ stepSettings }: { stepSettings: StepSettingsProps }) {
    return (
        <StepWrapper title="Schedule" heading="Schedule">
            <ParagraphContainer className="mt-5">
                <Paragraph>Find the schedule for the current STEP ({stepSettings.dates}) below.</Paragraph>

            </ParagraphContainer>
            <ButtonAnchor Icon={Download} href={route('assets.download', stepSettings.scheduleFileLink)}>Download Schedule</ButtonAnchor>
            {stepSettings.scheduleFileLink &&
                <div className="flex items-stretch justify-center py-2 my-10 text-white bg-gray-500">
                    <PdfViewerComponent file={route('assets.show', stepSettings.scheduleFileLink)} />
                </div>
            }
        </StepWrapper>
    )
}