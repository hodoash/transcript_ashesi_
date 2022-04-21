import React from 'react'
import Footer from '../Bottom/Footer'
import NotableExperiences from '../Mid/NotableExperiences'
import TopHeader from '../Top/TopHeader'

function Page2() {
    return (
        <div>
            <TopHeader/>
            <NotableExperiences header="SCHOLARSHIP"/>
            <NotableExperiences header="LEADERSHIP"/>
            <NotableExperiences header="CITIZENSHIP" line="false"/>
            <Footer pageNumber="2"/>
        </div>
    )
}

export default Page2
