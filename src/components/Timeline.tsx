import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1F2937', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #1F2937' }}
            date="Mar 2024 – Dec 2024"
            iconStyle={{ background: '#6B21A8', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Society for Data Science</h4>
            <p className="vertical-timeline-element-subtitle">Mumbai, India</p>
            <p>
              Developed fingerprint analysis technology using Topological Data Analysis. 
              Built complete image processing pipeline including segmentation and minutiae extraction. 
              Co-authored peer-reviewed paper published in ACM Digital Library.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2023 – Jan 2024"
            iconStyle={{ background: '#6B21A8', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IBM Skillsbuild</h4>
            <p className="vertical-timeline-element-subtitle">Remote</p>
            <p>
              Built mental health prediction model achieving 95% accuracy using prevalence scoring algorithms. 
              Collaborated with healthcare professionals to ensure clinical relevance and statistical accuracy.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;