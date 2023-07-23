import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
function Experience() {
    return (
        <div className = "experienice">
             <VerticalTimeline lineColor = "#3e497a">
                <VerticalTimelineElement className = "vertical-timeline-element--education" 
                date = "Aug 2017 - Jun 2021"
                iconStyle = {{background: "#3e497a", color: "#fff"}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className = "vertical-timeline-element-title">
                        North Haven High School, North Haven, CT
                        </h3>
                        <p>High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className = "vertical-timeline-element--education" 
                date = "Jun 2020 - Aug 2023"
                iconStyle = {{background: "#e9d35b", color: "#fff"}}
                icon = {<WorkIcon/>}
                >
                    <h3 className = "vertical-timeline-element-title">
                        Dibella's Subs, Wallingford CT
                        </h3>
                        <p>Worked as a crew member serving over 100 customers daily.</p>
                        <p>Prepared food, made delivieries, and took orders in a fast paced team oriented environment.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className = "vertical-timeline-element--education" 
                date = "Aug 2021 - May 2025 (expected graduation)"
                iconStyle = {{background: "#3e497a", color: "#fff"}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className = "vertical-timeline-element-title">
                        Villanova University
                        </h3>
                        <p>College of Liberal Arts and Sciences</p>
                        <p>B.S in Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className = "vertical-timeline-element--education" 
                date = "Jun 2022 - Aug 2022"
                iconStyle = {{background: "#e9d35b", color: "#fff"}}
                icon = {<WorkIcon/>}
                >
                    <h3 className = "vertical-timeline-element-title">
                        Blackwater Wealth Management
                        </h3>
                        <p>North Haven, CT</p>
                        <p>Performed data entry related tasks for 75+ clients.</p>
                        <p>Managed both individual and shared family accounts for clients and oversaw over 100 total accounts and profiles for my supervisor.</p>
                        <p>Used ClientWorks and WealthBox as the primary softwares.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className = "vertical-timeline-element--education" 
                date = "Aug 2022 - Present"
                iconStyle = {{background: "#e9d35b", color: "#fff"}}
                icon = {<WorkIcon/>}
                >
                    <h3 className = "vertical-timeline-element-title">
                        Fitness Center Attendant
                        </h3>
                        <p>Villanova, PA</p>
                        <p>Oversaw and maintined a safe exercising environment at several gyms across campus during the academic semester.</p>
                </VerticalTimelineElement>
                
             </VerticalTimeline>
             </div>
    )
}

export default Experience