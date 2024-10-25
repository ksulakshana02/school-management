import Image from "next/image";
import BigCalendar from "@/components/BigCalendar";
import Announcement from "@/components/Announcement";
import Link from "next/link";
import Performance from "@/components/Performance";

const SingleStudentPage = () => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/*LEFT*/}
            <div className="w-full xl:w-2/3">
                {/*TOP*/}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/*USER CARD INFO*/}
                    <div className="bg-cusSky py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image
                                src="https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                width={144}
                                height={144}
                                className="w-36 h-36 rounded-full object-cover"/>
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">kamla perera</h1>
                            <p className="text-sm tetx-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14}/>
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14}/>
                                    <span>January 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14}/>
                                    <span>user@email.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14}/>
                                    <span>+1 2345 6789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*SMALL CARD*/}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/*CARD*/}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleAttendance.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div>
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]" >
                            <Image
                                src="/singleBranch.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div>
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Branches</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleLesson.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div>
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleClass.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div>
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400">Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*BOTTOM*/}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1>Student&apos;s Schedule</h1>
                    <BigCalendar/>
                </div>
            </div>
            {/*RIGHT*/}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                        <Link href="/public" className="p-3 rounded-md bg-cusSkyLight">Student&apos;s Classes</Link>
                        <Link href={`/list/teachers?classId=${2}`} className="p-3 rounded-md bg-cusPurpleLight">Student&apos;s Teachers</Link>
                        <Link href={`/list/lessons?classId=${2}`} className="p-3 rounded-md bg-cusYellowLight">Student&apos;s Lessons</Link>
                        <Link href={`/list/exams?classId=${2}`} className="p-3 rounded-md bg-pink-50">Student&apos;s Exams</Link>
                        <Link href={`/list/assignments?classId=${2}`} className="p-3 rounded-md bg-cusSkyLight">Student&apos;s Assignments</Link>
                        <Link href={`/list/results?studentId=${"student2"}`} className="p-3 rounded-md bg-cusYellowLight">Student&apos;s Results</Link>
                    </div>
                </div>
                <Performance/>
                <Announcement/>
            </div>
        </div>
    );
};

export default SingleStudentPage;