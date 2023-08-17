import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import DialogCard from "@/Components/Cards/DialogCard";
import ListingTable from "@/Components/Tables/ListingTable";
import ContentWrapper from "@/Layouts/ContentWrapper";
import WrapperLayout from "@/Layouts/WrapperLayout";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Edit({ lessonOrders }: { lessonOrders: LessonOrder[] }) {
    const { auth } = usePage<PassedProps>().props;
    const [toggleModal, setToggleModal] = useState(false);
    const [idToDelete, setIdToDelete] = useState<null | number>(null);

    const showModal = (id: number) => {
        setIdToDelete(id);
        setToggleModal(true);
    }

    const handleOnClose = () => {
        setIdToDelete(null);
        setToggleModal(false);
    }

    const handleSubmit = () => {
        if (idToDelete) {
            Inertia.delete(route('orders.destroy', idToDelete));
        } else {
            console.error('Could not find that entry. Please contact administrator');
        }
        setToggleModal(false);
    }

    const tableData = {
        'headings':
            <>
                <th className="w-1/12 p-4 min-w-[50px]">#</th>
                <th className="w-3/12 p-4 min-w-[100px]">School Name</th>
                <th className="w-1/12 p-4 min-w-[50px]">Level 0</th>
                <th className="w-1/12 p-4 min-w-[50px]">Level 1</th>
                <th className="w-1/12 p-4 min-w-[50px]">Level 2</th>
                <th className="w-1/12 p-4 min-w-[50px]">Level 3</th>
                <th className="w-1/12 p-4 min-w-[50px]">Level 4</th>
                <th className="w-1/12 p-4 min-w-[50px]">TLP </th>
                <th className="w-1/12 p-4 min-w-[50px]"></th>
            </>,
        'content':
            lessonOrders.map((order, index) =>
                <>
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{order.schoolName}</td>
                    <td className="p-4">{order.level0Order}</td>
                    <td className="p-4">{order.level1Order}</td>
                    <td className="p-4">{order.level2Order}</td>
                    <td className="p-4">{order.level3Order}</td>
                    <td className="p-4">{order.level4Order}</td>
                    <td className="p-4">{order.tlpOrder}</td>
                    <td className="flex gap-2 p-4">
                        <Link className="text-blue-500 underline hover:no-underline" href={"/orders/" + order.id + "/edit"}>Edit</Link>
                        <Link className="text-blue-500 underline hover:no-underline" href={"/orders/" + order.id}>View</Link>
                        <button className="text-blue-500 underline hover:no-underline" onClick={() => showModal(order.id)}>Delete</button>
                    </td >
                </>)
    }

    return (
        <WrapperLayout>
            {toggleModal &&
                <div className="fixed top-0 flex items-center justify-center w-screen h-screen overflow-auto bg-black bg-opacity-50 overscroll-none backdrop-blur">
                    <DialogCard onClose={handleOnClose} onSubmit={handleSubmit}></DialogCard>
                </div>
            }
            <ContentWrapper title="Monthly Lesson Order">
                <div className="flex flex-col items-start gap-4 px-2 py-5 border md:px-10">
                    <div className="flex justify-between w-full mb-2">
                        <h2 className="p-0 text-xl font-bold text-black">View Schools</h2>
                        <PrimaryButton className="w-52"><Link href={"/orders/create"}>Add school</Link></PrimaryButton>

                    </div>
                    <div className="w-full overflow-x-auto">
                        <ListingTable tableData={tableData} />
                    </div>
                </div>
            </ContentWrapper>
        </WrapperLayout>
    )
}