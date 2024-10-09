const Announcement = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcement</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-cusSkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">jkl hl iop ji</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-01-01</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
                </div>
                <div className="bg-cusPurpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">jkl hl iop ji</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-01-01</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some form,</p>
                </div>
                <div className="bg-cusYellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">jkl hl iop ji</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-01-01</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some form,</p>
                </div>
            </div>
        </div>
    )
}

export default Announcement;