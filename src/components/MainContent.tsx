import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';

interface ChannelItemProps {
  title: string;
  description: string;
  hasLearnMore?: boolean;
  manageLink?: string;
}

const ChannelItem: React.FC<ChannelItemProps> = ({ title, description, hasLearnMore, manageLink }) => {
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

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <div className="content-header">
        <h1 className="page-title">Channels</h1>
        <p className="page-description">
          Adding channels to your support offering is a powerful way to provide personalized service to customers
          on the channels of their choice.
        </p>
      </div>

      <CollapsibleSection title="Manage channels">
        <ChannelItem
          title="Manage channels"
          description="Change the support channels that customer service representatives can use to engage with customers."
          hasLearnMore
        />
        <ChannelItem
          title="Consult and transfer"
          description="Consult and transfer work across your organization."
          hasLearnMore
        />
      </CollapsibleSection>

      <CollapsibleSection title="Channels">
        <ChannelItem
          title="Record"
          description="Determine how work items get automatically distributed to representatives."
          hasLearnMore
        />
        <ChannelItem
          title="Chat"
          description="Help your customers with chat channels."
          hasLearnMore
          manageLink="/chat-channels"
        />
        <ChannelItem
          title="Web Engagement"
          description="Choose how your customers engage with your chat channels on your site."
        />
        <ChannelItem
          title="Messaging"
          description="Help your customers with SMS and social media digital messaging channels."
          hasLearnMore
        />
        <ChannelItem
          title="Voice"
          description="Help your customers with voice channels."
          hasLearnMore
          manageLink="/voice-channels"
        />
        <ChannelItem
          title="Voice update"
          description="Update your voice resources to the latest version."
          hasLearnMore
        />
      </CollapsibleSection>

      <CollapsibleSection title="Accounts" defaultExpanded={false}>
        <div>{/* Accounts content would go here */}</div>
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

export default MainContent;
