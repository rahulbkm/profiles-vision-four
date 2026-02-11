import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VoiceChannelEdit.css';

const VoiceChannelEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('channelDetails');
  const [activeSubTab, setActiveSubTab] = useState('general');
  const [channelDetailsExpanded, setChannelDetailsExpanded] = useState(true);

  // Form state
  const [phoneNumber] = useState('+1 (555) 123-4567');
  const [region] = useState('US East');
  const [isTollFree] = useState(true);
  const [canMakeCalls] = useState(true);
  const [canReceiveCalls] = useState(true);
  const [primaryLanguage, setPrimaryLanguage] = useState('English');
  const [additionalLanguages, setAdditionalLanguages] = useState<string[]>([]);
  const [operatingHoursEnabled, setOperatingHoursEnabled] = useState(false);
  const [operatingHours, setOperatingHours] = useState('24/7');
  const [recordingMode, setRecordingMode] = useState('none');
  const [autoStart, setAutoStart] = useState(false);
  const [allowCSRPauseResume, setAllowCSRPauseResume] = useState(false);
  const [allowAutoHoldPauseResume, setAllowAutoHoldPauseResume] = useState(false);
  const [showTranscriptByDefault, setShowTranscriptByDefault] = useState(false);
  const [selectedConversationFlow, setSelectedConversationFlow] = useState('');
  const [selectedAIAgent, setSelectedAIAgent] = useState('');
  const [showVisualizer, setShowVisualizer] = useState(true);

  // Track configuration completion
  const isChannelDetailsComplete = phoneNumber && region;
  const isAIAgentComplete = selectedAIAgent !== '';
  const isWorkClassificationComplete = selectedConversationFlow !== '';
  const isRouteToQueueComplete = selectedConversationFlow !== '';

  return (
    <div className="voice-channel-edit-page">
      <main className="main-content">
        <div className="page-header-bar">
          <div className="header-bar-left">
            <button className="back-button" onClick={() => navigate('/voice-channels')}>
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
          <h1 className="edit-title">Voice Channel Setup</h1>
          <p className="edit-subtitle">Channel ID: {id}</p>
        </div>

        <div className="edit-content-layout">
          <aside className="edit-sidebar">
            <nav className="edit-tabs">
              {/* Channel Details - Collapsible */}
              <div className="menu-group">
                <button
                  className="menu-group-header"
                  onClick={() => setChannelDetailsExpanded(!channelDetailsExpanded)}
                >
                  <svg
                    className={`chevron ${channelDetailsExpanded ? 'expanded' : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M9 4L6 7 3 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Channel details</span>
                </button>
                {channelDetailsExpanded && (
                  <div className="menu-group-items">
                    <button
                      className={`edit-tab nested ${activeSubTab === 'general' ? 'active' : ''}`}
                      onClick={() => {
                        setActiveTab('channelDetails');
                        setActiveSubTab('general');
                      }}
                    >
                      General
                    </button>
                    <button
                      className={`edit-tab nested ${activeSubTab === 'language' ? 'active' : ''}`}
                      onClick={() => {
                        setActiveTab('channelDetails');
                        setActiveSubTab('language');
                      }}
                    >
                      Language
                    </button>
                    <button
                      className={`edit-tab nested ${activeSubTab === 'behavior' ? 'active' : ''}`}
                      onClick={() => {
                        setActiveTab('channelDetails');
                        setActiveSubTab('behavior');
                      }}
                    >
                      Behavior
                    </button>
                  </div>
                )}
              </div>

              {/* Conversation Flow */}
              <button
                className={`edit-tab ${activeTab === 'conversationFlow' ? 'active' : ''}`}
                onClick={() => setActiveTab('conversationFlow')}
              >
                Conversation flow
              </button>
            </nav>
          </aside>

          <div className="edit-main-area">
            {activeTab === 'channelDetails' && activeSubTab === 'general' && (
              <div className="form-section">
                <h2 className="section-label">General</h2>

                <div className="form-group-section">
                  <h3 className="subsection-title">Phone number configuration</h3>

                  <div className="phone-number-display-card">
                    <div className="phone-number-details">
                      <div className="phone-detail-row">
                        <span className="detail-label">Phone number:</span>
                        <span className="detail-value">{phoneNumber}</span>
                      </div>
                      <div className="phone-detail-row">
                        <span className="detail-label">Region:</span>
                        <span className="detail-value">{region}</span>
                      </div>
                      <div className="phone-detail-row">
                        <span className="detail-label">Toll-free:</span>
                        <span className="detail-value">{isTollFree ? 'Yes' : 'No'}</span>
                      </div>
                      <div className="phone-detail-row">
                        <span className="detail-label">Call capabilities:</span>
                        <span className="detail-value">
                          {canMakeCalls && canReceiveCalls && 'Can make and receive calls'}
                          {canMakeCalls && !canReceiveCalls && 'Can make calls only'}
                          {!canMakeCalls && canReceiveCalls && 'Can receive calls only'}
                          {!canMakeCalls && !canReceiveCalls && 'No call capabilities'}
                        </span>
                      </div>
                    </div>
                    <button className="change-number-button">
                      Change number
                    </button>
                  </div>
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Representative call quality survey</h3>
                  <p className="form-help-text">
                    Ask CSR to provide call quality feedback at the end of a call <a href="#" className="inline-link">here</a>
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'channelDetails' && activeSubTab === 'language' && (
              <div className="form-section">
                <h2 className="section-label">Language</h2>

                <div className="form-group-section">
                  <h3 className="subsection-title">Language settings</h3>

                  <div className="form-group">
                    <label className="form-label">
                      Primary language <span className="required">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={primaryLanguage}
                      onChange={(e) => setPrimaryLanguage(e.target.value)}
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Italian">Italian</option>
                      <option value="Portuguese">Portuguese</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Japanese">Japanese</option>
                    </select>
                    <p className="form-help-text">Select the primary language for this voice channel</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Additional languages</label>
                    <div className="additional-languages-container">
                      {additionalLanguages.map((lang, index) => (
                        <div key={index} className="language-chip">
                          <span>{lang}</span>
                          <button
                            className="remove-chip-button"
                            onClick={() => {
                              setAdditionalLanguages(additionalLanguages.filter((_, i) => i !== index));
                            }}
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                              <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      className="add-language-button"
                      onClick={() => {
                        const newLang = prompt('Enter language name:');
                        if (newLang && !additionalLanguages.includes(newLang)) {
                          setAdditionalLanguages([...additionalLanguages, newLang]);
                        }
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Add language
                    </button>
                    <p className="form-help-text">Add additional languages supported by this channel</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'channelDetails' && activeSubTab === 'behavior' && (
              <div className="form-section">
                <h2 className="section-label">Behavior</h2>

                <div className="form-group-section">
                  <h3 className="subsection-title">Channel operating hours</h3>

                  <div className="form-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={operatingHoursEnabled}
                        onChange={(e) => setOperatingHoursEnabled(e.target.checked)}
                      />
                      <span className="toggle-switch"></span>
                      <span className="toggle-text">Enable operating hours</span>
                    </label>
                    <p className="form-help-text">Restrict when this voice channel is available</p>
                  </div>

                  {operatingHoursEnabled && (
                    <div className="form-group">
                      <label className="form-label">Operating hours</label>
                      <select
                        className="form-select"
                        value={operatingHours}
                        onChange={(e) => setOperatingHours(e.target.value)}
                      >
                        <option value="24/7">24/7 - Always available</option>
                        <option value="business-hours">Business hours (9 AM - 5 PM)</option>
                        <option value="extended-hours">Extended hours (7 AM - 9 PM)</option>
                        <option value="custom">Custom schedule</option>
                      </select>
                      <p className="form-help-text">Set when this voice channel is available</p>
                    </div>
                  )}
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Recording and transcription</h3>

                  <div className="form-group">
                    <label className="form-label">Recording mode</label>
                    <select
                      className="form-select"
                      value={recordingMode}
                      onChange={(e) => setRecordingMode(e.target.value)}
                    >
                      <option value="none">None</option>
                      <option value="transcription">Transcription</option>
                      <option value="transcription-and-recording">Transcription and recording</option>
                    </select>
                    <p className="form-help-text">Select the recording mode for calls</p>
                  </div>

                  {recordingMode !== 'none' && (
                    <>
                      <div className="form-group">
                        <label className="toggle-label">
                          <input
                            type="checkbox"
                            className="toggle-checkbox"
                            checked={autoStart}
                            onChange={(e) => setAutoStart(e.target.checked)}
                          />
                          <span className="toggle-switch"></span>
                          <span className="toggle-text">Automatically start</span>
                        </label>
                        <p className="form-help-text">Start recording/transcription automatically when call begins</p>
                      </div>

                      <div className="form-group">
                        <label className="toggle-label">
                          <input
                            type="checkbox"
                            className="toggle-checkbox"
                            checked={allowCSRPauseResume}
                            onChange={(e) => setAllowCSRPauseResume(e.target.checked)}
                          />
                          <span className="toggle-switch"></span>
                          <span className="toggle-text">Allow CSR to pause and resume</span>
                        </label>
                        <p className="form-help-text">Enable customer service representatives to manually control recording</p>
                      </div>

                      <div className="form-group">
                        <label className="toggle-label">
                          <input
                            type="checkbox"
                            className="toggle-checkbox"
                            checked={allowAutoHoldPauseResume}
                            onChange={(e) => setAllowAutoHoldPauseResume(e.target.checked)}
                          />
                          <span className="toggle-switch"></span>
                          <span className="toggle-text">Allow automatic pause and resume during hold</span>
                        </label>
                        <p className="form-help-text">Automatically pause recording when call is on hold</p>
                      </div>

                      <div className="form-group">
                        <label className="toggle-label">
                          <input
                            type="checkbox"
                            className="toggle-checkbox"
                            checked={showTranscriptByDefault}
                            onChange={(e) => setShowTranscriptByDefault(e.target.checked)}
                          />
                          <span className="toggle-switch"></span>
                          <span className="toggle-text">Show transcript by default</span>
                        </label>
                        <p className="form-help-text">Display transcript panel automatically during calls</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'conversationFlow' && (
              <div className="form-section">
                <h2 className="section-label">Conversation Flow</h2>

                {/* Main Conversation Flow Card */}
                <div className="conversation-flow-main-card">
                  <h3 className="card-title">Conversation flow configuration</h3>

                  {/* Conversation Flow Selector */}
                  <div className="form-group">
                    <label className="form-label">Conversation flow</label>
                    <select
                      className="form-select"
                      value={selectedConversationFlow}
                      onChange={(e) => {
                        setSelectedConversationFlow(e.target.value);
                        // Automatically select default AI agent when conversation flow is selected
                        if (e.target.value) {
                          setSelectedAIAgent('agent1');
                        }
                      }}
                    >
                      <option value="">Select a conversation flow</option>
                      <option value="flow1">Standard Customer Service Flow</option>
                      <option value="flow2">Sales Inquiry Flow</option>
                      <option value="flow3">Technical Support Flow</option>
                      <option value="flow4">VIP Customer Flow</option>
                      <option value="flow5">After-Hours Flow</option>
                    </select>
                    <p className="form-help-text">
                      Conversation flows define how incoming calls are handled, including AI agent interaction,
                      call routing rules, queue assignments, and customer greetings. Select a flow to configure
                      how calls through this voice channel will be processed.
                    </p>
                  </div>

                  {/* Show remaining sections only if a conversation flow is selected */}
                  {selectedConversationFlow && (
                    <div className="conversation-flow-content">
                      {/* AI Agent Section */}
                      <div className="conversation-flow-subsection">
                  <h3 className="card-title">AI agent</h3>
                  <div className="form-group">
                    <label className="form-label">Select AI agent</label>
                    <select
                      className="form-select"
                      value={selectedAIAgent}
                      onChange={(e) => setSelectedAIAgent(e.target.value)}
                    >
                      <option value="">Select an agent</option>
                      <option value="agent1">Customer Support Agent</option>
                      <option value="agent2">Sales Assistant</option>
                      <option value="agent3">Technical Support Agent</option>
                      <option value="agent4">Billing Agent</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <a href="#" className="external-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M14 2H8v2h3.59L6 9.59 7.41 11 13 5.41V9h2V2z" />
                        <path d="M12 12H4V4h4V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-2v4z" />
                      </svg>
                      Add or modify AI agents in Copilot Studio
                    </a>
                  </div>
                      </div>

                      {/* Work Classification Rules Section */}
                      <div className="conversation-flow-subsection">
                  <h3 className="card-title">Work classification rules</h3>
                  <div className="rulesets-list">
                    <a href="#" className="ruleset-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2h10v2H3V2zm0 4h10v2H3V6zm0 4h7v2H3v-2z" />
                      </svg>
                      General Customer Inquiries Ruleset
                    </a>
                    <a href="#" className="ruleset-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2h10v2H3V2zm0 4h10v2H3V6zm0 4h7v2H3v-2z" />
                      </svg>
                      Technical Support Ruleset
                    </a>
                    <a href="#" className="ruleset-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2h10v2H3V2zm0 4h10v2H3V6zm0 4h7v2H3v-2z" />
                      </svg>
                      Sales and Billing Ruleset
                    </a>
                    <a href="#" className="ruleset-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2h10v2H3V2zm0 4h10v2H3V6zm0 4h7v2H3v-2z" />
                      </svg>
                      VIP Customer Ruleset
                    </a>
                    <a href="#" className="ruleset-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2h10v2H3V2zm0 4h10v2H3V6zm0 4h7v2H3v-2z" />
                      </svg>
                      Emergency Escalation Ruleset
                    </a>
                  </div>
                  <p className="form-help-text">Configure rules to classify and route incoming calls</p>
                      </div>

                      {/* Route-to-Queue Ruleset Section */}
                      <div className="conversation-flow-subsection">
                  <h3 className="card-title">Route-to-queue ruleset</h3>
                  <div className="form-group">
                    <a href="#" className="ruleset-link primary-ruleset">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M12 2l-8 6v8l8-6V2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                      Default Queue Routing Ruleset
                    </a>
                    <p className="form-help-text">Define how calls are routed to different queues</p>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Rule-hit policy</label>
                    <select className="form-select" defaultValue="hit-all">
                      <option value="hit-all">Hit All - Execute all matching rules</option>
                      <option value="hit-first">Hit First - Execute only the first matching rule</option>
                    </select>
                    <p className="form-help-text">Determines how multiple matching rules are handled</p>
                  </div>
                      </div>

                      {/* Greetings Messages Section */}
                      <div className="conversation-flow-subsection">
                  <h3 className="card-title">Greetings messages</h3>
                  <div className="greetings-list">
                    <div className="greeting-item">
                      <div className="greeting-header">
                        <span className="greeting-trigger">Welcome message</span>
                        <button className="edit-greeting-button">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 2.793L10.5 3 4 9.5V11h1.5l6.5-6.5-.707-.707z" />
                          </svg>
                          Edit
                        </button>
                      </div>
                      <div className="greeting-message">
                        "Thank you for calling our customer support. Your call is important to us. Please hold while we connect you to the next available representative."
                      </div>
                    </div>

                    <div className="greeting-item">
                      <div className="greeting-header">
                        <span className="greeting-trigger">Holiday message</span>
                        <button className="edit-greeting-button">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 2.793L10.5 3 4 9.5V11h1.5l6.5-6.5-.707-.707z" />
                          </svg>
                          Edit
                        </button>
                      </div>
                      <div className="greeting-message">
                        "Our offices are currently closed for the holiday. We will be back on [date]. For urgent matters, please visit our website or send us an email."
                      </div>
                    </div>

                    <button className="add-greeting-button">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Add greeting message
                    </button>
                  </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
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
                  {/* Always show: Start of Conversation */}
                  <div className="flow-node start-node">
                    <div className="node-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" fill="#107c10" />
                        <path d="M10 8l6 4-6 4z" fill="white" />
                      </svg>
                    </div>
                    <div className="node-content">
                      <div className="node-title">Start</div>
                      <div className="node-subtitle">Incoming call</div>
                    </div>
                  </div>
                  <div className="flow-connector"></div>

                  {/* Step 1: Channel Details */}
                  {isChannelDetailsComplete && (
                    <>
                      <div className="flow-node completed">
                        <div className="node-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" fill="#107c10" />
                            <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="node-content">
                          <div className="node-title">Channel Details</div>
                          <div className="node-subtitle">Phone: {phoneNumber}</div>
                          <div className="node-subtitle">Region: {region}</div>
                        </div>
                      </div>
                      <div className="flow-connector"></div>
                    </>
                  )}

                  {/* Step 2: AI Agent */}
                  {isAIAgentComplete && (
                    <>
                      <div className="flow-node completed">
                        <div className="node-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" fill="#107c10" />
                            <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="node-content">
                          <div className="node-title">AI Agent</div>
                          <div className="node-subtitle">
                            {selectedAIAgent === 'agent1' && 'Customer Support Agent'}
                            {selectedAIAgent === 'agent2' && 'Sales Assistant'}
                            {selectedAIAgent === 'agent3' && 'Technical Support Agent'}
                            {selectedAIAgent === 'agent4' && 'Billing Agent'}
                          </div>
                        </div>
                      </div>
                      <div className="flow-connector"></div>
                    </>
                  )}

                  {/* Step 3: Work Classification Rules */}
                  {isWorkClassificationComplete && (
                    <>
                      <div className="flow-node completed">
                        <div className="node-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" fill="#107c10" />
                            <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="node-content">
                          <div className="node-title">Work Classification</div>
                          <div className="node-subtitle">Rules configured</div>
                          <div className="node-details">
                            <span className="detail-badge">5 Rulesets</span>
                          </div>
                        </div>
                      </div>
                      <div className="flow-connector"></div>
                    </>
                  )}

                  {/* Step 4: Route to Queue */}
                  {isRouteToQueueComplete && (
                    <>
                      <div className="flow-node completed">
                        <div className="node-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10" fill="#107c10" />
                            <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="node-content">
                          <div className="node-title">Route to Queue</div>
                          <div className="node-subtitle">Default Queue Routing</div>
                          <div className="node-details">
                            <span className="detail-badge">Hit All Policy</span>
                          </div>
                        </div>
                      </div>

                      {/* Queue Split */}
                      <div className="queue-split">
                        <div className="split-connector"></div>
                        <div className="split-branches">
                          <div className="branch-line"></div>
                          <div className="branch-line"></div>
                          <div className="branch-line"></div>
                        </div>
                      </div>

                      {/* Multiple Queue Nodes */}
                      <div className="queue-nodes-container">
                        <div className="flow-node queue-node">
                          <div className="node-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                              <rect x="3" y="4" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                              <rect x="3" y="8" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                              <rect x="3" y="12" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                            </svg>
                          </div>
                          <div className="node-content">
                            <div className="node-title">Support Queue</div>
                            <div className="node-subtitle">General support</div>
                          </div>
                        </div>

                        <div className="flow-node queue-node">
                          <div className="node-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                              <rect x="3" y="4" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                              <rect x="3" y="8" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                              <rect x="3" y="12" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                            </svg>
                          </div>
                          <div className="node-content">
                            <div className="node-title">Sales Queue</div>
                            <div className="node-subtitle">Sales inquiries</div>
                          </div>
                        </div>

                        <div className="flow-node queue-node">
                          <div className="node-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                              <rect x="3" y="4" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                              <rect x="3" y="8" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                              <rect x="3" y="12" width="14" height="2" rx="1" stroke="#0078d4" strokeWidth="1.5" fill="none" />
                            </svg>
                          </div>
                          <div className="node-content">
                            <div className="node-title">Technical Queue</div>
                            <div className="node-subtitle">Technical issues</div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default VoiceChannelEdit;
