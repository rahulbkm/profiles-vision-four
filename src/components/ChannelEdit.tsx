import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ChannelEdit.css';

const ChannelEdit: React.FC = () => {
  const { id: _id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');
  const [windowSize, setWindowSize] = useState('default');
  const [channelConfigExpanded, setChannelConfigExpanded] = useState(true);
  const [selectedChannelProfile, setSelectedChannelProfile] = useState('');
  const [showProfileCreation, setShowProfileCreation] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const [selectedRoutingProfile, setSelectedRoutingProfile] = useState('');
  const [showRoutingProfileCreation, setShowRoutingProfileCreation] = useState(false);
  const [newRoutingProfileName, setNewRoutingProfileName] = useState('');
  const [showVisualizer, setShowVisualizer] = useState(true);

  return (
    <div className="channel-edit-page">
      <main className="main-content">
        <div className="page-header-bar">
          <div className="header-bar-left">
            <button className="back-button" onClick={() => navigate('/chat-channels')}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="save-button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1zm-2 0v4H5V2h6zm1 11H4V3h1v4h6V3h1v10z" />
              </svg>
              Save and close
            </button>
          </div>
          <div className="header-bar-right">
            <button className="visualizer-toggle-button" onClick={() => setShowVisualizer(!showVisualizer)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="5" height="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="9" y="2" width="5" height="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="2" y="9" width="5" height="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="9" y="9" width="5" height="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              {showVisualizer ? 'Hide' : 'Show'} Visualizer
            </button>
            <a href="#" className="download-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 10l-4-4h2.5V2h3v4H12L8 10zm6 3v1H2v-1h12z" />
              </svg>
              Download configuration
            </a>
          </div>
        </div>

        <div className="page-header">
          <h1 className="edit-title">Editing Live Chat Widget</h1>
          <p className="edit-subtitle">Title: Let's Chat!</p>
        </div>

        <div className="edit-content-layout">
          <aside className="edit-sidebar">
            <nav className="edit-tabs">
              {/* Channel Configuration - Collapsible */}
              <div className="menu-group">
                <button
                  className="menu-group-header"
                  onClick={() => setChannelConfigExpanded(!channelConfigExpanded)}
                >
                  <svg
                    className={`chevron ${channelConfigExpanded ? 'expanded' : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M9 4L6 7 3 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Channel configuration</span>
                </button>
                {channelConfigExpanded && (
                  <div className="menu-group-items">
                    <button
                      className={`edit-tab nested ${activeTab === 'general' ? 'active' : ''}`}
                      onClick={() => setActiveTab('general')}
                    >
                      General Configuration
                    </button>
                    <button
                      className={`edit-tab nested ${activeTab === 'color' ? 'active' : ''}`}
                      onClick={() => setActiveTab('color')}
                    >
                      Color Settings
                    </button>
                    <button
                      className={`edit-tab nested ${activeTab === 'header' ? 'active' : ''}`}
                      onClick={() => setActiveTab('header')}
                    >
                      Header
                    </button>
                    <button
                      className={`edit-tab nested ${activeTab === 'widget' ? 'active' : ''}`}
                      onClick={() => setActiveTab('widget')}
                    >
                      Chat widget
                    </button>
                  </div>
                )}
              </div>

              {/* Channel Profile */}
              <button
                className={`edit-tab ${activeTab === 'channelProfile' ? 'active' : ''}`}
                onClick={() => setActiveTab('channelProfile')}
              >
                Channel profile
              </button>

              {/* Routing Profile */}
              <button
                className={`edit-tab ${activeTab === 'routingProfile' ? 'active' : ''}`}
                onClick={() => setActiveTab('routingProfile')}
              >
                Routing profile
              </button>
            </nav>
          </aside>

          <div className="edit-main-area">
            {activeTab === 'general' && (
              <div className="form-section">
                <h2 className="section-label">General Configuration</h2>

                <div className="form-group-section">
                  <h3 className="subsection-title">Channel details</h3>

                  <div className="form-group">
                    <label className="form-label">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      defaultValue="Contact center chat channel"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Language <span className="required">*</span>
                    </label>
                    <select className="form-select">
                      <option>English - United States</option>
                      <option>Spanish - Spain</option>
                      <option>French - France</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Type <span className="required">*</span>
                    </label>
                    <select className="form-select" disabled>
                      <option>Messaging</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Channel <span className="required">*</span>
                    </label>
                    <select className="form-select" disabled>
                      <option>Chat</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Workstream</label>
                    <a href="#" className="form-link">Contact center live chat workstream</a>
                  </div>
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Window Size and Position</h3>

                  <div className="form-group">
                    <label className="form-label">
                      Window Size <span className="required">*</span>
                    </label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="windowSize"
                          value="default"
                          checked={windowSize === 'default'}
                          onChange={(e) => setWindowSize(e.target.value)}
                        />
                        <span>Default</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="windowSize"
                          value="compact"
                          checked={windowSize === 'compact'}
                          onChange={(e) => setWindowSize(e.target.value)}
                        />
                        <span>Compact</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="windowSize"
                          value="custom"
                          checked={windowSize === 'custom'}
                          onChange={(e) => setWindowSize(e.target.value)}
                        />
                        <span>Custom</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Width</label>
                      <input type="text" className="form-input" defaultValue="360" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Height</label>
                      <input type="text" className="form-input" defaultValue="560" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Position <span className="required">*</span>
                    </label>
                    <select className="form-select">
                      <option>Bottom right</option>
                      <option>Bottom left</option>
                      <option>Top right</option>
                      <option>Top left</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Distance From Corners</h3>

                  <div className="form-group">
                    <label className="form-label">
                      Window Position <span className="required">*</span>
                    </label>
                    <div className="slider-group">
                      <span className="slider-label">Amount (px)</span>
                      <input type="range" className="slider" min="0" max="100" defaultValue="20" />
                      <span className="slider-value">20</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'color' && (
              <div className="form-section">
                <h2 className="section-label">Color Settings</h2>
                <p className="placeholder-text">Configuration options for color settings will appear here.</p>
              </div>
            )}

            {activeTab === 'header' && (
              <div className="form-section">
                <h2 className="section-label">Header</h2>
                <p className="placeholder-text">Configuration options for header will appear here.</p>
              </div>
            )}

            {activeTab === 'widget' && (
              <div className="form-section">
                <h2 className="section-label">Chat widget</h2>
                <p className="placeholder-text">Configuration options for chat widget will appear here.</p>
              </div>
            )}

            {activeTab === 'channelProfile' && (
              <div className="form-section">
                <h2 className="section-label">Channel profile</h2>

                {/* Help Text */}
                <div className="help-text-box">
                  <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="7" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                    <path d="M8 11.5v-4M8 5.5v-.5" stroke="#0078d4" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div className="help-text-content">
                    <p><strong>About Channel Profiles</strong></p>
                    <p>
                      Channel profiles define the experience for customer service representatives and customers during chat
                      interactions. Customize visual appearance, behavior settings, language preferences, and feature availability.
                    </p>
                    <p>
                      Apply profiles at different levels of granularity. Assign a default profile to the entire channel, or
                      override settings at the queue level. This enables tailored experiences for different customer segments
                      while maintaining consistency across your organization's support channels.
                    </p>
                  </div>
                </div>

                {/* Profile Selection */}
                <div className="form-group-section">
                  <div className="form-group">
                    <label className="form-label">
                      Select Channel Profile <span className="required">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={selectedChannelProfile}
                      onChange={(e) => {
                        if (e.target.value === 'create-new') {
                          setShowProfileCreation(true);
                          setSelectedChannelProfile('');
                        } else {
                          setSelectedChannelProfile(e.target.value);
                          setShowProfileCreation(false);
                        }
                      }}
                    >
                      <option value="">-- Select a profile --</option>
                      <option value="default-profile">Default Chat Profile</option>
                      <option value="premium-support">Premium Support Profile</option>
                      <option value="basic-support">Basic Support Profile</option>
                      <option value="technical-support">Technical Support Profile</option>
                      <option value="create-new">+ Create New Channel Profile</option>
                    </select>
                  </div>

                  {/* New Profile Creation */}
                  {showProfileCreation && (
                    <div className="profile-creation-box">
                      <h3 className="subsection-title">Create New Channel Profile</h3>
                      <div className="form-group">
                        <label className="form-label">
                          Profile Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter profile name"
                          value={newProfileName}
                          onChange={(e) => setNewProfileName(e.target.value)}
                        />
                      </div>
                      <div className="button-group">
                        <button
                          className="primary-button"
                          onClick={() => {
                            if (newProfileName.trim()) {
                              setSelectedChannelProfile('new-profile');
                              setShowProfileCreation(false);
                              setNewProfileName('');
                            }
                          }}
                        >
                          Create Profile
                        </button>
                        <button
                          className="secondary-button"
                          onClick={() => {
                            setShowProfileCreation(false);
                            setNewProfileName('');
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Configuration Summary */}
                {selectedChannelProfile && !showProfileCreation && (
                  <div className="configuration-summary">
                    <h3 className="subsection-title">Profile Configuration Summary</h3>

                    <div className="summary-grid">
                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>General Settings</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Profile Name:</strong> {selectedChannelProfile === 'default-profile' ? 'Default Chat Profile' : 'Selected Profile'}</li>
                          <li><strong>Language:</strong> English - United States</li>
                          <li><strong>Timezone:</strong> (GMT-08:00) Pacific Time</li>
                          <li><strong>Status:</strong> <span className="status-badge active">Active</span></li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <circle cx="8" cy="8" r="6" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>Visual Appearance</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Theme:</strong> Light Mode</li>
                          <li><strong>Primary Color:</strong> <span className="color-preview" style={{backgroundColor: '#0078d4'}}></span> #0078d4</li>
                          <li><strong>Widget Position:</strong> Bottom Right</li>
                          <li><strong>Widget Size:</strong> Default (360x560)</li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>Features Enabled</h4>
                        </div>
                        <ul className="summary-list">
                          <li>✓ File Attachments</li>
                          <li>✓ Emojis</li>
                          <li>✓ Screen Sharing</li>
                          <li>✓ Co-browse</li>
                          <li>✓ Voice & Video Calling</li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <circle cx="8" cy="5" r="2.5" fill="#0078d4" />
                            <path d="M3 13c0-2.5 2-4 5-4s5 1.5 5 4" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>CSR Experience</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Max Chats:</strong> 5 concurrent</li>
                          <li><strong>Auto Accept:</strong> Disabled</li>
                          <li><strong>Sentiment Analysis:</strong> Enabled</li>
                          <li><strong>Canned Responses:</strong> Available</li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>Customer Experience</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Wait Time Display:</strong> Enabled</li>
                          <li><strong>Queue Position:</strong> Visible</li>
                          <li><strong>Pre-chat Survey:</strong> Enabled</li>
                          <li><strong>Post-chat Survey:</strong> Enabled</li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M3 3h10v10H3V3z" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>Automation & AI</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Chatbot Integration:</strong> Enabled</li>
                          <li><strong>Smart Suggestions:</strong> Enabled</li>
                          <li><strong>Auto Translation:</strong> Disabled</li>
                          <li><strong>Knowledge Base:</strong> Integrated</li>
                        </ul>
                      </div>
                    </div>

                    <div className="summary-actions">
                      <button className="secondary-button">Edit Profile Configuration</button>
                      <button className="secondary-button">Duplicate Profile</button>
                      <button className="secondary-button">Export Settings</button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'routingProfile' && (
              <div className="form-section">
                <h2 className="section-label">Routing profile</h2>

                {/* Help Text */}
                <div className="help-text-box">
                  <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="7" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                    <path d="M8 11.5v-4M8 5.5v-.5" stroke="#0078d4" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div className="help-text-content">
                    <p><strong>About Routing Profiles</strong></p>
                    <p>
                      Routing profiles determine how incoming conversations are distributed to customer service representatives.
                      Configure routing rules, prioritization logic, capacity management, and skill-based assignment to optimize
                      workload distribution.
                    </p>
                    <p>
                      Define routing strategies at the channel level or customize for specific queues. Use intelligent routing
                      to match customers with the most qualified representatives based on skills, availability, and performance
                      metrics.
                    </p>
                  </div>
                </div>

                {/* Profile Selection */}
                <div className="form-group-section">
                  <div className="form-group">
                    <label className="form-label">
                      Select Routing Profile <span className="required">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={selectedRoutingProfile}
                      onChange={(e) => {
                        if (e.target.value === 'create-new') {
                          setShowRoutingProfileCreation(true);
                          setSelectedRoutingProfile('');
                        } else {
                          setSelectedRoutingProfile(e.target.value);
                          setShowRoutingProfileCreation(false);
                        }
                      }}
                    >
                      <option value="">-- Select a profile --</option>
                      <option value="standard-routing">Standard Routing Profile</option>
                      <option value="priority-routing">Priority Routing Profile</option>
                      <option value="skill-based">Skill-Based Routing Profile</option>
                      <option value="round-robin">Round Robin Routing Profile</option>
                      <option value="create-new">+ Create New Routing Profile</option>
                    </select>
                  </div>

                  {/* New Profile Creation */}
                  {showRoutingProfileCreation && (
                    <div className="profile-creation-box">
                      <h3 className="subsection-title">Create New Routing Profile</h3>
                      <div className="form-group">
                        <label className="form-label">
                          Profile Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter profile name"
                          value={newRoutingProfileName}
                          onChange={(e) => setNewRoutingProfileName(e.target.value)}
                        />
                      </div>
                      <div className="button-group">
                        <button
                          className="primary-button"
                          onClick={() => {
                            if (newRoutingProfileName.trim()) {
                              setShowRoutingProfileCreation(false);
                              setSelectedRoutingProfile('standard-routing');
                              setNewRoutingProfileName('');
                              alert(`Profile "${newRoutingProfileName}" created successfully!`);
                            } else {
                              alert('Please enter a profile name.');
                            }
                          }}
                        >
                          Create Profile
                        </button>
                        <button
                          className="secondary-button"
                          onClick={() => {
                            setShowRoutingProfileCreation(false);
                            setSelectedRoutingProfile('');
                            setNewRoutingProfileName('');
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Configuration Summary */}
                {selectedRoutingProfile && !showRoutingProfileCreation && (
                  <div className="configuration-summary">
                    <h3 className="subsection-title">Profile Configuration Summary</h3>

                    <div className="summary-grid">
                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>General Settings</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Profile Name:</strong> {selectedRoutingProfile === 'standard-routing' ? 'Standard Routing Profile' : 'Selected Profile'}</li>
                          <li><strong>Routing Method:</strong> Skills-based with overflow</li>
                          <li><strong>Default Priority:</strong> Normal</li>
                          <li><strong>Status:</strong> <span className="status-badge active">Active</span></li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 2l-7 4v5l7 4 7-4V6z" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>Distribution Rules</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Assignment:</strong> Skills-based matching</li>
                          <li><strong>Fallback:</strong> Round-robin distribution</li>
                          <li><strong>Max Wait Time:</strong> 120 seconds</li>
                          <li><strong>Overflow Handling:</strong> Enabled</li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <circle cx="8" cy="5" r="2.5" fill="#0078d4" />
                            <path d="M3 13c0-2.5 2-4 5-4s5 1.5 5 4" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>Capacity Management</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Max Conversations:</strong> 5 per agent</li>
                          <li><strong>Reserve Capacity:</strong> 20%</li>
                          <li><strong>Load Balancing:</strong> Enabled</li>
                          <li><strong>Auto-scaling:</strong> Dynamic</li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 8l4 4 8-8" stroke="#0078d4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <h4>Skills & Matching</h4>
                        </div>
                        <ul className="summary-list">
                          <li>✓ Language Skills</li>
                          <li>✓ Product Knowledge</li>
                          <li>✓ Technical Expertise</li>
                          <li>✓ Customer Tier Matching</li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 2v6l4 2" stroke="#0078d4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8" cy="8" r="6" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                          </svg>
                          <h4>Priority & SLA</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Priority Levels:</strong> 4 tiers</li>
                          <li><strong>VIP Handling:</strong> Immediate routing</li>
                          <li><strong>SLA Target:</strong> 90% in 60 seconds</li>
                          <li><strong>Escalation:</strong> Automatic after 180s</li>
                        </ul>
                      </div>

                      <div className="summary-card">
                        <div className="summary-card-header">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <rect x="2" y="4" width="12" height="2" fill="#0078d4" />
                            <rect x="2" y="7" width="9" height="2" fill="#0078d4" />
                            <rect x="2" y="10" width="6" height="2" fill="#0078d4" />
                          </svg>
                          <h4>Working Hours</h4>
                        </div>
                        <ul className="summary-list">
                          <li><strong>Business Hours:</strong> 24/7</li>
                          <li><strong>Timezone:</strong> (GMT-08:00) Pacific</li>
                          <li><strong>Holiday Rules:</strong> Custom schedule</li>
                          <li><strong>Off-hours:</strong> Voicemail routing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="summary-actions">
                      <button className="secondary-button">Edit Profile Configuration</button>
                      <button className="secondary-button">Duplicate Profile</button>
                      <button className="secondary-button">Export Settings</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Visualizer Panel */}
        {showVisualizer && (
          <div className="visualizer-panel">
            <div className="visualizer-header">
              <h3 className="visualizer-title">Configuration Flow</h3>
              <button className="visualizer-close" onClick={() => setShowVisualizer(false)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="visualizer-content">
              {/* Flow Diagram */}
              <div className="flow-diagram">
                {/* Start Node */}
                <div className="flow-node start-node">
                  <div className="node-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="8" fill="#107c10" />
                      <path d="M10 8l6 4-6 4z" fill="white" />
                    </svg>
                  </div>
                  <div className="node-content">
                    <div className="node-title">Start</div>
                    <div className="node-subtitle">Chat Initiated</div>
                  </div>
                </div>

                <div className="flow-connector"></div>

                {/* Channel Configuration Node */}
                <div className={`flow-node config-node ${activeTab === 'general' || activeTab === 'color' || activeTab === 'header' || activeTab === 'widget' ? 'active' : 'configured'}`}>
                  <div className="node-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="#0078d4" strokeWidth="2" fill="none" />
                      <path d="M8 8h8M8 12h8M8 16h4" stroke="#0078d4" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="node-content">
                    <div className="node-title">Channel Configuration</div>
                    <div className="node-subtitle">
                      {windowSize === 'default' ? 'Default Layout' : windowSize === 'compact' ? 'Compact Layout' : 'Custom Layout'}
                    </div>
                    <div className="node-details">
                      <span className="detail-badge">General Settings</span>
                      <span className="detail-badge">Visual Appearance</span>
                    </div>
                  </div>
                </div>

                <div className="flow-connector"></div>

                {/* Channel Profile Node */}
                <div className={`flow-node profile-node ${activeTab === 'channelProfile' ? 'active' : selectedChannelProfile ? 'configured' : 'pending'}`}>
                  <div className="node-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="8" r="4" stroke="#0078d4" strokeWidth="2" fill="none" />
                      <path d="M5 20c0-4 3-7 7-7s7 3 7 7" stroke="#0078d4" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="node-content">
                    <div className="node-title">Channel Profile</div>
                    <div className="node-subtitle">
                      {selectedChannelProfile ? (selectedChannelProfile === 'default-profile' ? 'Default Chat Profile' :
                       selectedChannelProfile === 'premium-support' ? 'Premium Support' :
                       selectedChannelProfile === 'basic-support' ? 'Basic Support' :
                       selectedChannelProfile === 'technical-support' ? 'Technical Support' : 'Selected') : 'Not configured'}
                    </div>
                    {selectedChannelProfile && (
                      <div className="node-details">
                        <span className="detail-badge">CSR Experience</span>
                        <span className="detail-badge">Customer Features</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flow-connector"></div>

                {/* Routing Profile Node */}
                <div className={`flow-node routing-node ${activeTab === 'routingProfile' ? 'active' : selectedRoutingProfile ? 'configured' : 'pending'}`}>
                  <div className="node-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l-8 6v8l8 6 8-6V8z" stroke="#0078d4" strokeWidth="2" fill="none" />
                      <circle cx="12" cy="12" r="3" fill="#0078d4" />
                    </svg>
                  </div>
                  <div className="node-content">
                    <div className="node-title">Routing Profile</div>
                    <div className="node-subtitle">
                      {selectedRoutingProfile ? (selectedRoutingProfile === 'standard-routing' ? 'Standard Routing' :
                       selectedRoutingProfile === 'priority-routing' ? 'Priority Routing' :
                       selectedRoutingProfile === 'skill-based' ? 'Skill-Based Routing' :
                       selectedRoutingProfile === 'round-robin' ? 'Round Robin' : 'Selected') : 'Not configured'}
                    </div>
                    {selectedRoutingProfile && (
                      <div className="node-details">
                        <span className="detail-badge">Skills Matching</span>
                        <span className="detail-badge">Load Balancing</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flow-connector"></div>

                {/* Agent Assignment Node */}
                <div className="flow-node agent-node configured">
                  <div className="node-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="8" r="3" fill="#0078d4" />
                      <path d="M6 20c0-3 2.5-5 6-5s6 2 6 5" stroke="#0078d4" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <circle cx="18" cy="6" r="2" fill="#107c10" />
                    </svg>
                  </div>
                  <div className="node-content">
                    <div className="node-title">Agent Assignment</div>
                    <div className="node-subtitle">Route to Available Agent</div>
                  </div>
                </div>

                <div className="flow-connector"></div>

                {/* End Node */}
                <div className="flow-node end-node">
                  <div className="node-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="8" fill="#d13438" />
                      <rect x="8" y="11" width="8" height="2" fill="white" />
                    </svg>
                  </div>
                  <div className="node-content">
                    <div className="node-title">End</div>
                    <div className="node-subtitle">Chat Completed</div>
                  </div>
                </div>
              </div>

              {/* Configuration Status */}
              <div className="config-status">
                <h4 className="status-title">Configuration Status</h4>
                <div className="status-items">
                  <div className="status-item">
                    <div className={`status-indicator ${true ? 'complete' : 'incomplete'}`}></div>
                    <span>Channel Configuration</span>
                  </div>
                  <div className="status-item">
                    <div className={`status-indicator ${selectedChannelProfile ? 'complete' : 'incomplete'}`}></div>
                    <span>Channel Profile</span>
                  </div>
                  <div className="status-item">
                    <div className={`status-indicator ${selectedRoutingProfile ? 'complete' : 'incomplete'}`}></div>
                    <span>Routing Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chat Widget */}
        <div className="chat-widget">
          <div className="chat-widget-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <div className="chat-widget-label">Let's chat</div>
          <div className="chat-widget-status">We're online</div>
        </div>
      </main>
    </div>
  );
};

export default ChannelEdit;
