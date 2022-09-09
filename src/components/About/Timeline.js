import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
//import 'react-vertical-timeline-component/style.min.css';
import './vertical_timeline.css'
import './vertical_timeline_element.css'
import IBMicon from './IBMIcon'
import MicronIcon from './MicronIcon'
import MSIcon from './MsIcon'
import FJUIcon from './FJUIcon'

function Timeline() {
    return (
        <VerticalTimeline lineColor="#F5B42B">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // 字顏色
                contentArrowStyle={{ borderRight: '7px solid  #F5B42B' }}
                iconStyle={{ background: '#F5B42B', color: '#F5B42B' }}
                icon={<MicronIcon />}
            >
                <h3 className="vertical-timeline-element-title-left">Micron</h3>
                <h4 className="vertical-timeline-element-subtitle-left">Software Engineer Intern</h4>
                <h5 className="vertical-timeline-element-subsub-left">July 2022</h5>
                <p>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            Participated in projects with Global Quality IT team and collaborate with developers across
                            different countries.
                        </li>
                        <li>
                            Developed Restful API and Unit test for Global Change Process Platform using .Net (C#) and
                            OOP, frontend using Angular, Typescript and RxJS library.
                        </li>
                        <li>Refactored legacy code from the Global Quality Web and enhanced maintainability by 60%.</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#219653', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #219653' }}
                icon={<IBMicon />}
            >
                <h3 className="vertical-timeline-element-title-right">IBM</h3>
                <h4 className="vertical-timeline-element-subtitle-right">System Analyst</h4>
                <h5 className="vertical-timeline-element-subsub-right">September 2020</h5>
                <p>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            Participated in three banking projects in agile environment to deliver high-quality
                            software.
                        </li>
                        <li>Responsible for 40+ requirements and all of them successfully go-live on time.</li>
                        <li>
                            Attended 5+ requirement meetings with clients to clarify their requirements and implemented
                            design thinking to solve their problems.
                        </li>
                        <li>Collaborate with programmers and UI/UX team to resolve issues.</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#F5B42B', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #F5B42B' }}
                icon={<MSIcon />}
            >
                <h3 className="vertical-timeline-element-title-left">Microsoft</h3>
                <h4 className="vertical-timeline-element-subtitle-left">Software Engineeer Intern</h4>
                <h5 className="vertical-timeline-element-subsub-left">July 2019</h5>
                <p>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            Participated in Shin Kong Hospital – HIS & NIS Migration project (Microsoft’s largest
                            project in Asia Pacific Region in 2017) in an agile environment and collaborated with 100+
                            team members.
                        </li>
                        <li>
                            Developed the system with backend .Net using C# and frontend using Typescript, Knockout.js
                            and Vue.js, Microsoft SQL Server (Relational database) as database.
                        </li>
                        <li>
                            Improved printing quality by using the SSRS and reached the quantity to over 10,000+ sheets
                            per day.
                        </li>
                        <li>Collaborate with programmers and UI/UX team to resolve issues.</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#219653', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #219653' }}
                icon={<FJUIcon />}
            >
                <h3 className="vertical-timeline-element-title-right">Teaching Assistant</h3>
                <h4 className="vertical-timeline-element-subtitle-right">Fu Jen Catholic University</h4>
                <h5 className="vertical-timeline-element-subsub-right">July 2019</h5>
                <p style={{ textAlign: 'left' }}>
                    Guided 60+ students in solving their problems in the “System Analysis and Design” course.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: '#F5B42B', color: '#fff' }}
                // icon={<StarIcon />}
            />
        </VerticalTimeline>
    )
}

export default Timeline
