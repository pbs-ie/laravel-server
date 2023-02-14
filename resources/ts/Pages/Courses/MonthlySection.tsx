import ButtonPill from "@/Components/ButtonPill";
import MonthlyOverview from "@/Components/Monthly/MonthlyOverview";
import { useState } from "react";
import { currentMonthNumber, currentSeriesNumber, monthNames, seriesNames } from "@/constants";
import Loader from "@/Components/Loader";
import Heading3 from "@/Components/Typography/Heading3";
import Heading4 from "@/Components/Typography/Heading4";
import { getUpperCaseAlphabetFromNumber } from "@/helper";

export default function MonthlySection() {
    const [selectedMonth, setSelectedMonth] = useState(currentMonthNumber);
    const [selectedSeries, setSelectedSeries] = useState(currentSeriesNumber);

    const [processing, setProcessing] = useState(false);

    const delayMonthlyOverview = function () {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
        }, 250);

    };

    return (
        <section className="w-full">
            <div className="grid grid-rows-2 gap-5 px-2 pt-10 bg-white rounded-lg md:px-8 h-92 md:grid-rows-none md:grid-cols-2 md:pb-10 lg:px-20 lg:mx-20 lg:my-2 drop-shadow-lg">
                <div className="flex flex-col">
                    <Heading4>This month's lessons</Heading4>
                    <h3 className="ml-10 underline">Select Month</h3>
                    <div role="list" className="grid grid-cols-3 grid-rows-4 gap-2 px-5 py-4 md:px-16 justify-items-stretch">
                        {
                            monthNames.map((month, index) => (
                                <ButtonPill key={month} onPress={delayMonthlyOverview} isActive={selectedMonth === index} setActive={setSelectedMonth} idx={index} addClass={`w-full py-8`} >{month}</ButtonPill>
                            ))
                        }
                    </div>
                    <h3 className="ml-10 underline">Select Series</h3>
                    <div role="list" className="grid grid-cols-3 gap-2 px-5 py-4 md:px-16">
                        {
                            seriesNames.map((seriesElement, index) => (
                                <ButtonPill key={seriesElement.code} onPress={delayMonthlyOverview} isActive={selectedSeries === index} setActive={setSelectedSeries} idx={index} addClass={`w-full py-1`} >{seriesElement.name}</ButtonPill>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col my-auto">
                    {
                        (selectedMonth === -1 || selectedSeries === -1) ?
                            <div className="p-20 my-auto text-3xl text-left text-gray-600"><p>Select a month and series to see the available download links here.</p></div>
                            :
                            !!processing ?
                                <div className="flex items-center justify-center p-20 my-auto text-3xl text-left text-gray-600 space-around">
                                    <Loader></Loader>
                                </div>
                                :
                                <MonthlyOverview selectedMonth={selectedMonth} selectedSeriesAlphabet={getUpperCaseAlphabetFromNumber(selectedSeries)} ></MonthlyOverview>
                    }
                </div>
            </div >
        </section>
    );
};