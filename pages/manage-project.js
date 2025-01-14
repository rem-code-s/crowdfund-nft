import Navbar from '@/components/shared/navbar'
import PromptLoginModal from '@/components/shared/prompt-login-modal'
import { useBackend } from '@/context/backend'
import { useEffect, useState } from 'react'
import SidebarMenu from '@/components/shared/sidebar-menu'
import MyProject from '@/components/manage-project/my-project'
import NftRewardsTracking from '@/components/manage-project/nft-rewards-tracking'
import Messaging from '@/components/manage-project/messaging'
import { useRouter } from 'next/router'

const menuItems = [
    {
        label: "My Project",
        id: "my-project"
    },
    {
        label: "NFTs & reward tracking",
        id: "nft-rewards-tracking"
    },
    {
        label: 'Messaging',
        id: 'messaging'
    }
];

export default function ManageProject() {
    const backend = useBackend().backendWithAuth
    const [showLoginModal, setLoginModal] = useState(false);
    const [displaySection, setDisplaySection] = useState("my-project")

    const { query, replace } = useRouter()
    const { projectId } = query

    useEffect(() => {
        if (backend) return setLoginModal(false)
        setLoginModal(true)
    }, [backend])

    useEffect(() => {
        if (!backend || projectId) return

        backend
            .getMyProjects()
            .then((projects) => {
                if (projects.length === 0) {
                    replace(`/create-a-project`, `/create-a-project.html`)
                } else {
                    replace(`/manage-project?projectId=${projects[0].id}`, `/manage-project.html?projectId=${projects[0].id}`)
                }
            })
            .catch(console.log)
    }, [backend, projectId])

    if (showLoginModal === true) {
        return <PromptLoginModal />
    }

    if (!projectId) return <></>

    return (
        <div className='w-full'>
            <Navbar />
            <div className="w-full bg-slate-100">
                <div className="w-full max-w-5xl mx-auto px-4 flex flex-col md:flex-row py-4 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-3/12 flex flex-col space-y-4">
                        <SidebarMenu
                            menuItems={menuItems}
                            selected={displaySection}
                            onSelect={setDisplaySection}
                        />
                    </div>

                    <div className="w-full md:w-9/12 flex flex-col space-y-8">
                            {displaySection === "my-project" && (
                                <MyProject />
                            )}

                            {displaySection === "nft-rewards-tracking" && (
                                <NftRewardsTracking />
                            )}

                            {displaySection === 'messaging' && (
                                <Messaging />
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}
