import React, { Component } from 'react';
import './SearchScholarship.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer';
class SearchScholarship extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='searchScholarship'>
                <Nav />
                <div className='contentHolder schollHolder'>
                    <div className='scholl'>
                        <div className='schollTitle'>
                            <p>search scholarships</p>
                        </div>
                        <div className='instructScholl'>
                            <p>Search</p>
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                            <p>Find</p>
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                            <p>Apply</p>
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                            <p>Repeat</p>
                        </div>
                        <div className="schollLinksHolder">
                            <div className="individualLink">
                                <a href="https://www.scholarships.com/" target="_blank"><i className="fa fa-graduation-cap" aria-hidden="true"></i><p className="iconText">Scholarships.com</p></a>
                            </div>
                            <div className="individualLink">
                                <a href="https://myscholly.com/" target="_blank"><i class="fa fa-mobile" aria-hidden="true"></i><p className="iconText">Scholly.com</p></a>
                            </div>
                            <div className="individualLink">
                                <a href="https://fafsa.ed.gov/" target="_blank"><i class="fa fa-usd" aria-hidden="true"></i><p className="iconText">FAFSA.com</p></a>
                            </div>
                            <div className="individualLink">
                                <a href="https://www.fastweb.com/" target="_blank"><i class="fa fa-exclamation" aria-hidden="true"></i><p className="iconText">Fastweb.com</p></a>
                            </div>
                            <div className="individualLink">
                                <a href="https://www.niche.com/colleges/scholarships/" target="_blank"><i class="fa fa-trophy" aria-hidden="true"></i><p className="iconText">Niche.com</p></a>
                            </div>
                            <div className="individualLink">
                                <a href="http://www.collegescholarships.org/financial-aid/" target="_blank"><i class="fa fa-university" aria-hidden="true"></i><p className="iconText">Collegescholarships.org</p></a>
                            </div>
                            <div className="individualLink">
                                <a href="https://www.educationconnection.com/landingpages/financial-aid-2016?trackid=9ACCDD77-6F27-4903-B125-26C22A2CD3BE&c=Grants&cat=college+grant&est=college%20grants&key=go_college_grant&v=google&a=finaid&mt=search&ad=194124187364&utm_source=google&utm_medium=ppc&degId=&device=c&aid=ec_google_finaid_ads_desktop&gclid=Cj0KCQiA0vnQBRDmARIsAEL0M1kRpMA3qV-kxqRfgU-u9yO2rrk2eYq9hxSdIFjKvOcZKnBauG9gIOUaAsybEALw_wcB" target="_blank"><i class="fa fa-link" aria-hidden="true"></i><p className="iconText">Educationconnection.com</p></a>
                            </div>
                            <div className="individualLink">
                                <a href="https://bigfuture.collegeboard.org/scholarship-search?gclid=Cj0KCQiA0vnQBRDmARIsAEL0M1mfIibdhOSOgTgS0vY86XK1q6Gr_Xqelwb43-QQVtqrjPTHAhhOoRIaAmHsEALw_wcB&s_kwcid=AL!4330!3!226270123136!b!!g!!college%20scholarship%20search&ef_id=WgNojwAAAG9zenl0:20171129233235:s" target="_blank"><i class="fa fa-pencil-square-o" aria-hidden="true"></i><p className="iconText">Collegeboard.com</p></a>
                            </div>
                            <div className="individualLink">
                                <a href="https://www.studentscholarships.org/#sthash.qumIWu0s.dpbs" target="_blank"><i class="fa fa-puzzle-piece" aria-hidden="true"></i><p className="iconText">Studentscholarships.com</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default SearchScholarship;