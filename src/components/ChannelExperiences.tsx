import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';

interface ExperienceItemProps {
  title: string;
  description: string;
  hasLearnMore?: boolean;
  manageLink?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, description, hasLearnMore, manageLink }) => {
  return (
    <div className="channel-item">
      <div className="channel-info">
        <h3 className="channel-title">{title}</h3>
        <p className="channel-description">{description}</p>
        {hasLearnMore && <a href="#" className="learn-more">Learn more</a>}
      </div>
      {manageLink ? (
        <Link to={manageLink} className="manage-button">
          Manage
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      ) : (
        <a href="#" className="manage-button">
          Manage
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
    </div>
  );
};

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="collapsible-section">
      <button
        className="section-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <svg
          className={`chevron ${isExpanded ? 'expanded' : ''}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M12 6l-4 4-4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="section-title">{title}</span>
      </button>
      {isExpanded && (
        <div className="section-content">
          {children}
        </div>
      )}
    </div>
  );
};

const ChannelExperiences: React.FC = () => {
  return (
    <main className="main-content">
      <div className="content-header">
        <h1 className="page-title">Channel experiences</h1>
        <p className="page-description">
          Define and manage how customers interact with your support channels through customized conversation flows and engagement profiles.
        </p>
      </div>

      <CollapsibleSection title="Channel experiences">
        <ExperienceItem
          title="Conversation flow"
          description="Design and manage the flow of conversations across your channels. Define automated responses, routing logic, and customer journey paths to create seamless and consistent support experiences."
          hasLearnMore
          manageLink="/conversation-flows"
        />
        <ExperienceItem
          title="Engagement profile"
          description="Configure how customers engage with your support channels. Set up personalized greetings, response behaviors, escalation rules, and interaction patterns to optimize customer satisfaction and agent efficiency."
          hasLearnMore
          manageLink="/engagement-profiles"
        />
      </CollapsibleSection>

      <button className="add-button" aria-label="Add new">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="10" cy="10" r="9" fill="#0078d4" />
          <path d="M10 6v8M6 10h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </main>
  );
};

export default ChannelExperiences;
