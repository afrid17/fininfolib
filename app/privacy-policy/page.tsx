import BottomFooter from "@/components/bottomFooter"

const PrivacyPolicy:()=>void = ()=>{

    return(
        <>
            <div className="text-gray-700">
                <div className=" flex items-center w-full h-fit bg-gradient-to-b from-o1 to-o2">
                    <label className="text-white font-bold text-2xl pl-8 py-5">Privacy Policy</label>

                </div>
                <div className="m-2 bg-bg2 p-4 ">
                    <h2 className="font-bold text-xl text-primaryGreen ">Privacy Policy</h2>
                    <p className="text-sm pt-2 ">
                    Fin Infolib is deeply committed to all the browsers visiting our website.
                     The sole purpose of this website is to help you get the best solution to your 
                     business problems with maximum ease. In general we do not ask for any personal information 
                     from any visitors; you can visit our site with complete anonymity. However, we do ask 
                    for some generic data in certain sections of our site. 	privacy Policy

                    </p>
                    <div className="flex flex-col sapce-y-6 mt-8">
                        <h3 className="font-bold text-md text-gray-700">Information we collect automatically through our website</h3>
                        <p className="text-sm pt-2 ">
                        We only gather some minor data while you surf our site. Firstly,
                         we collect your IP address through our Internet access logs. When you 
                         access Fininfolib, your Internet address is automatically collected
                          and recorded in our Internet access logs. We use this IP address to enable us
                           to diagnose problems with our web server, to administer our website, and to refine our 
                           site based on the pages visited and features and contents found interesting by visitors. 
                           Your IP address is also
                         used to help identify you and to gather broad demographic information. 

                        </p>
                        <p className="text-sm pt-2 ">
                        We also use cookies to gather some data about visitors.
                         A "cookie" is a small piece of data about your visit to our site for example,
                          how you entered our site, how you navigated through the site, and what information was
                           of interest to you. The website sends this information to your browser, which may then be
                            stored on your system. Currently, we are using cookies only in a select few pages. But we do 
                            have the plan to use it more extensively in the near future so that we can provide you with better
                             results from our site. However, you have complete freedom to set your browser to notify you when 
                             you receive a cookie, giving you the chance to decide whether or not to accept it. In the case 
                             you do not wish to receive any cookies, you can change your browser settings in the Preferences
                         or Options menu to completely block the usage of cookies.
                        </p>
                    </div>
                    <div className="flex flex-col sapce-y-6 mt-8">
                        <h3 className="font-bold text-md text-gray-700">Information we ask fot</h3>
                        <p className="text-sm pt-2 ">
                        Simple browsing through Fininfolib does not 
                        require you to submit any personal data. The only point at which we ask for
                         personal data is for voluntary registration, Online Quote or subscription for 
                         white papers, article archives, or our newsletter. The personal data collected will 
                         not be sold or provided to any outside entities and will be used solely by Fin Infolib
                          for a one-on-one contact with registrants. Any information that we have collected or 
                          stored about you may be transferred to a future purchaser of our company and/or its assets.
                           The data collected is stored in a secure server located at our data centre with our ISP,
                            which will take periodic backups of it but will not give
                         or sell them to anyone outside of Fin Infolib.

                        </p>
                        <p className="text-sm pt-2 ">
                        None of this information is reviewed at an individual level. If you do not want your 
                        transaction details used in this manner,
                         you can either disable your cookies or opt out at the download or request page.
                        
                        </p>
                        <p className="text-sm pt-2 ">
                        We also collect information when you voluntarily submit it to us.
                         Throughout our site, we provide the opportunity to register for an event or conference,
                          order a white paper, or participate in an online survey. When we collect this type of
                           information, we will notify you as to why we are asking for information and how this
                            information will be used. 
                        It is completely up to you whether or not you want to provide it.

                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="mt-4">
                <BottomFooter/>
            </div>
        </>
    )

}
export default PrivacyPolicy