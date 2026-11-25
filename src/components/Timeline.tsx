import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="background">
      <div className="items-container">
        <h1>Education & Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2026 - Aug 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern IT Business Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">PT. Porto Indonesia Sejahtera</h4>
            <p>
              SDLC, BRD, Flowchart, UI/UX, Gathering Requirements, Stakeholder Management, SIT, UAT, PIR, Katalon Studio, Playwright, Odoo 19 (ERP), PostgreSQL
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Academic Ambassador (AA)</h3>
            <h4 className="vertical-timeline-element-subtitle">Binus Square Hall Of Residence</h4>
            <p>
              Calculus, Algorithm Programming, Discrete Mathematics, Data Structures
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Science and Mathematics</h3>
            <h4 className="vertical-timeline-element-subtitle">BINUS University, Jakarta, Indonesia</h4>
            <p>
              Data Structures and Algorithms, Machine Learning, Artificial Intelligence, Database Systems, Probability and Statistics, Software Engineering, Computer Vision
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;