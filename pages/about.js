import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function About() {
    return (
        <div className='w-full flex flex-col'>
            <Navbar />

            <section className="w-full py-10">
                <div className="w-full max-w-5xl px-4 mx-auto">
                    <p className="py-4 w-full text-center text-3xl font-semibold">
                        What Makes CrowdFund NFT Different?
                    </p>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="rounded-xl py-8 px-5 shadow-lg hover:scale-105 duration-300">
                            <p className="w-full text-center text-xl font-medium">
                                Proof of Ownership
                            </p>
                            <p className="text-sm text-gray-600 mt-4">
                                NFTs provide secure ownership status to backers - so that their equity stake or reward in a project is stored on the IC Blockchain.
                            </p>
                        </div>

                        <div className="rounded-xl py-8 px-5 shadow-lg hover:scale-105 duration-300">
                            <p className="w-full text-center text-xl font-medium">
                                Cheaper and Global Investing
                            </p>
                            <p className="text-sm text-gray-600 mt-4">
                                Using the IC Blockchain allows us to open up your crowdfunding round to a global audience, for cheaper transaction fees than are charged on traditional platforms.
                                
                            </p>
                        </div>

                        <div className="rounded-xl py-8 px-5 shadow-lg hover:scale-105 duration-300">
                            <p className="w-full text-center text-xl font-medium">
                                Raise faster
                            </p>
                            <p className="text-sm text-gray-600 mt-4">
                                With Blockchain, transaction are instant - raise fast for your project!
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full py-10 bg-white">
                <div className="w-full max-w-5xl mx-auto flex flex-col px-4">
                    <div className="font-semibold text-3xl w-full text-center py-3">
                        Easily raise funds for your new venture
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-6/12 text-gray-600">
                            The process for investing in a new venture is cheap, quick and effortless.

                            <ul className="list-disc list-inside">
                                <li>Launch your project in less than an hour</li>
                                <li>If your project is fully funded, get access to funds through your Blockchain Wallet.</li>
                                <li>If your project is not fully funded, investors will be reimbursed immediately, they will simply pay the flat IC transaction fee, of 0.001 ICP.</li>
                            </ul>
                        </div>

                        <div className="w-full md:w-6/12">
                            <img src="/assets/how-it-works.png" className="object-contain w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-10">
                <div className="w-full max-w-5xl mx-auto flex flex-col px-4">
                    <div className="font-semibold text-3xl w-full text-center py-3">
                        CrowdFund NFT is built on the Internet Computer
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-6/12 text-gray-600 flex flex-col space-y-4">
                            <p>
                                With the IC, the platform is hosted entirely on the blockchain.
                                From NFTs, to backend and frontend. It is fully decentralised.
                            </p>

                            <p>
                                The IC has a reverse gas model, meaning you don't pay
                                gas fees on our platform for transactions, simply a
                                0.001 ICP flat fee.
                            </p>

                            <p>
                                The IC can connect to your PlugWallet, and
                                you can log in to our platform easily with Internet
                                Identity.
                            </p>

                            <p>
                                You can resell your NFTs on secondary marketplaces!
                            </p>
                        </div>

                        <div className="w-full md:w-6/12">
                            <img src="/assets/features_thumb.png" className="object-contain w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-10 bg-blue-600 text-white">
                <div className="w-full max-w-5xl mx-auto flex flex-col">
                    <div className="font-semibold text-3xl w-full text-center py-3">
                        How CrowdFund NFT works?
                    </div>
                    <p className="w-full text-center text-sm">
                        Crowdfunding on the Blockchain, using the Internet Computer.
                    </p>
                    <div className="w-full py-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="w-full flex flex-col items-center">
                            <img src="/assets/work_thumb_1.png" className="w-20 h-20" />
                            <p className="text-2xl font-semibold mt-2">
                                Log in with Internet Identity
                            </p>
                            <p className="text-center">
                                Both investors and creators can access the platform with internet identity, and connect with PlugWallet.
                            </p>
                        </div>

                        <div className="w-full flex flex-col items-center">
                            <img src="/assets/work_thumb_2.png" className="w-20 h-20" />
                            <p className="text-2xl font-semibold mt-2">
                                Launch or invest in projects
                            </p>
                            <p className="text-center">
                                Describe your new venture and how it is going to help the world! Browse projects to invest in.
                            </p>
                        </div>

                        <div className="w-full flex flex-col items-center">
                            <img src="/assets/work_thumb_3.png" className="w-20 h-20" />
                            <p className="text-2xl font-semibold mt-2">
                                Carry projects to their goal!
                            </p>
                            <p className="text-center">
                                Using NFTs as proof of ownership for investment, support projects through their journey!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}