import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VoiceChannelEdit.css';

// Map profile IDs to names
const profileNames: { [key: string]: string } = {
  'profile1': 'Standard Support Profile',
  'profile2': 'VIP Customer Profile',
  'profile3': 'Technical Support Profile',
  'profile4': 'Sales Team Profile',
  'profile5': 'After-Hours Profile',
  'profile6': 'Billing Support Profile'
};

const EngagementProfileEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('automatedMessages');
  const [consultEnabled, setConsultEnabled] = useState(true);
  const [transferEnabled, setTransferEnabled] = useState(true);

  const profileName = id ? profileNames[id] || 'Unknown Profile' : 'Unknown Profile';

  return (
    <div className="voice-channel-edit-page">
      <main className="main-content">
        <div className="page-header-bar">
          <div className="header-bar-left">
            <button className="back-button" onClick={() => navigate('/engagement-profiles')}>
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
            <a href="#" className="download-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 10l-4-4h2.5V2h3v4H12L8 10zm6 3v1H2v-1h12z" />
              </svg>
              Download configuration
            </a>
          </div>
        </div>

        <div className="page-header">
          <h1 className="edit-title">{profileName}</h1>
          <p className="edit-subtitle">Profile ID: {id}</p>
        </div>

        <div className="edit-content-layout">
          <aside className="edit-sidebar">
            <nav className="edit-tabs">
              <button
                className={`edit-tab ${activeTab === 'automatedMessages' ? 'active' : ''}`}
                onClick={() => setActiveTab('automatedMessages')}
              >
                Automated messages
              </button>
              <button
                className={`edit-tab ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                Notifications
              </button>
              <button
                className={`edit-tab ${activeTab === 'workDistribution' ? 'active' : ''}`}
                onClick={() => setActiveTab('workDistribution')}
              >
                Work distribution
              </button>
              <button
                className={`edit-tab ${activeTab === 'assignmentMethod' ? 'active' : ''}`}
                onClick={() => setActiveTab('assignmentMethod')}
              >
                Assignment method
              </button>
              <button
                className={`edit-tab ${activeTab === 'afterCallWork' ? 'active' : ''}`}
                onClick={() => setActiveTab('afterCallWork')}
              >
                After call work
              </button>
              <button
                className={`edit-tab ${activeTab === 'consultTransfer' ? 'active' : ''}`}
                onClick={() => setActiveTab('consultTransfer')}
              >
                Consult/Transfer
              </button>
              <button
                className={`edit-tab ${activeTab === 'postCallSurvey' ? 'active' : ''}`}
                onClick={() => setActiveTab('postCallSurvey')}
              >
                Post-call survey
              </button>
              <button
                className={`edit-tab ${activeTab === 'sessionTemplate' ? 'active' : ''}`}
                onClick={() => setActiveTab('sessionTemplate')}
              >
                Session template
              </button>
            </nav>
          </aside>

          <div className="edit-main-area">
            {activeTab === 'automatedMessages' && (
              <div className="form-section">
                <h2 className="section-label">Automated Messages</h2>
                <p className="form-help-text">
                  Configure automated messages that are sent to customers based on specific triggers during their
                  interaction. These messages keep customers informed about their conversation status and wait times.
                </p>

                <div className="greetings-list">
                  <div className="greeting-item">
                    <div className="greeting-header">
                      <span className="greeting-trigger">Agent assigned</span>
                      <button className="edit-greeting-button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 2.793L10.5 3 4 9.5V11h1.5l6.5-6.5-.707-.707z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="greeting-message">
                      "You are now connected with {'{'} AgentName {'}'}. How can I help you today?"
                    </div>
                  </div>

                  <div className="greeting-item">
                    <div className="greeting-header">
                      <span className="greeting-trigger">Average wait time</span>
                      <button className="edit-greeting-button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 2.793L10.5 3 4 9.5V11h1.5l6.5-6.5-.707-.707z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="greeting-message">
                      "Your estimated wait time is {'{'} WaitTime {'}'} minutes. Thank you for your patience."
                    </div>
                  </div>

                  <div className="greeting-item">
                    <div className="greeting-header">
                      <span className="greeting-trigger">Conversation transferred</span>
                      <button className="edit-greeting-button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 2.793L10.5 3 4 9.5V11h1.5l6.5-6.5-.707-.707z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="greeting-message">
                      "I'm transferring you to a specialist who can better assist with your request. Please hold."
                    </div>
                  </div>

                  <div className="greeting-item">
                    <div className="greeting-header">
                      <span className="greeting-trigger">Agent ended conversation</span>
                      <button className="edit-greeting-button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 2.793L10.5 3 4 9.5V11h1.5l6.5-6.5-.707-.707z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="greeting-message">
                      "Thank you for contacting us. Your conversation has been ended. Have a great day!"
                    </div>
                  </div>

                  <div className="greeting-item">
                    <div className="greeting-header">
                      <span className="greeting-trigger">Customer ended conversation</span>
                      <button className="edit-greeting-button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 2.793L10.5 3 4 9.5V11h1.5l6.5-6.5-.707-.707z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="greeting-message">
                      "The customer has ended the conversation."
                    </div>
                  </div>

                  <div className="greeting-item">
                    <div className="greeting-header">
                      <span className="greeting-trigger">Position in queue</span>
                      <button className="edit-greeting-button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 2.793L10.5 3 4 9.5V11h1.5l6.5-6.5-.707-.707z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="greeting-message">
                      "You are currently number {'{'} QueuePosition {'}'} in the queue. We appreciate your patience."
                    </div>
                  </div>

                  <button className="add-greeting-button">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Add message trigger
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="form-section">
                <h2 className="section-label">Notifications</h2>
                <p className="form-help-text">
                  Configure which notification templates are used for different scenarios. Notifications alert
                  agents about important events during customer interactions.
                </p>

                <div className="form-group-section">
                  <div className="form-group">
                    <label className="form-label">Incoming call</label>
                    <select className="form-select" defaultValue="default-incoming">
                      <option value="">Select notification template</option>
                      <option value="default-incoming">Default Incoming Call Notification</option>
                      <option value="priority-incoming">Priority Incoming Call Notification</option>
                      <option value="vip-incoming">VIP Incoming Call Notification</option>
                      <option value="custom-incoming">Custom Incoming Notification</option>
                    </select>
                    <p className="form-help-text">
                      Notification shown to agents when a new call arrives in their queue
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Transferred call</label>
                    <select className="form-select" defaultValue="default-transfer">
                      <option value="">Select notification template</option>
                      <option value="default-transfer">Default Transfer Notification</option>
                      <option value="urgent-transfer">Urgent Transfer Notification</option>
                      <option value="escalation-transfer">Escalation Transfer Notification</option>
                    </select>
                    <p className="form-help-text">
                      Notification shown when a call is transferred to an agent
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Consult request</label>
                    <select className="form-select" defaultValue="default-consult">
                      <option value="">Select notification template</option>
                      <option value="default-consult">Default Consult Notification</option>
                      <option value="expert-consult">Expert Consult Request</option>
                      <option value="manager-consult">Manager Consult Request</option>
                    </select>
                    <p className="form-help-text">
                      Notification shown when another agent requests a consultation
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Customer disconnect</label>
                    <select className="form-select" defaultValue="default-disconnect">
                      <option value="">Select notification template</option>
                      <option value="default-disconnect">Default Disconnect Notification</option>
                      <option value="abrupt-disconnect">Abrupt Disconnect Notification</option>
                    </select>
                    <p className="form-help-text">
                      Notification shown when a customer disconnects during an interaction
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Supervisor monitor</label>
                    <select className="form-select" defaultValue="default-monitor">
                      <option value="">Select notification template</option>
                      <option value="default-monitor">Default Monitor Notification</option>
                      <option value="silent-monitor">Silent Monitor Notification</option>
                      <option value="qa-monitor">Quality Assurance Monitor</option>
                    </select>
                    <p className="form-help-text">
                      Notification shown when a supervisor is monitoring the conversation
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'workDistribution' && (
              <div className="form-section">
                <h2 className="section-label">Work Distribution</h2>
                <p className="form-help-text">
                  Configure how work items are distributed to agents based on their presence, skills, and capacity.
                  These settings determine which agents are eligible to receive work and how it's assigned.
                </p>

                <div className="form-group-section">
                  <h3 className="subsection-title">Allowed presence</h3>
                  <p className="form-help-text">
                    Select which agent presence statuses are eligible to receive new work assignments
                  </p>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span>Available</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span>Busy</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Busy - DND</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Away</span>
                    </label>
                  </div>
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Skill matching</h3>
                  <div className="form-group">
                    <label className="form-label">Skill matching algorithm</label>
                    <select className="form-select" defaultValue="exact">
                      <option value="exact">Exact match - Only agents with exact skills</option>
                      <option value="nearest">Nearest match - Agents with closest skill set</option>
                      <option value="none">None - No skill matching required</option>
                    </select>
                    <p className="form-help-text">
                      Determines how agent skills are matched against work item requirements. Exact match ensures
                      only agents with all required skills receive work, while nearest match finds the closest
                      available match when exact matches aren't available.
                    </p>
                  </div>
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Capacity</h3>
                  <div className="form-group">
                    <label className="form-label">Capacity profile</label>
                    <select className="form-select" defaultValue="default-capacity">
                      <option value="default-capacity">Default Capacity Profile</option>
                      <option value="high-capacity">High Volume Capacity Profile</option>
                      <option value="low-capacity">Low Volume Capacity Profile</option>
                      <option value="omnichannel-capacity">Omnichannel Capacity Profile</option>
                      <option value="custom-capacity">Custom Capacity Profile</option>
                    </select>
                    <p className="form-help-text">
                      Defines how many concurrent interactions an agent can handle. Capacity profiles set limits
                      for different channel types (voice, chat, email) to prevent agent overload.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'assignmentMethod' && (
              <div className="form-section">
                <h2 className="section-label">Assignment Method</h2>
                <p className="form-help-text">
                  Choose how work items are assigned to available agents. The assignment method determines
                  which agent receives the next work item when multiple eligible agents are available.
                </p>

                <div className="form-group-section">
                  <div className="form-group">
                    <label className="form-label">Assignment method</label>
                    <select className="form-select" defaultValue="round-robin">
                      <option value="round-robin">Round robin - Distribute evenly across all agents</option>
                      <option value="highest-capacity">Highest capacity - Assign to agent with most availability</option>
                      <option value="least-active">Least active - Assign to agent with least recent activity</option>
                      <option value="custom">Custom assignment rules</option>
                    </select>
                    <p className="form-help-text">
                      <strong>Round robin:</strong> Distributes work evenly among all eligible agents in rotation.
                      <br />
                      <strong>Highest capacity:</strong> Prioritizes agents with the most available capacity to handle additional work.
                      <br />
                      <strong>Least active:</strong> Assigns work to the agent who has been idle longest or handled the fewest recent interactions.
                      <br />
                      <strong>Custom:</strong> Use custom business rules to determine assignment logic.
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span>Enable agent affinity</span>
                    </label>
                    <p className="form-help-text">
                      When enabled, attempts to assign returning customers to agents they've previously worked with
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'afterCallWork' && (
              <div className="form-section">
                <h2 className="section-label">After Call Work</h2>
                <p className="form-help-text">
                  Configure the after-call work (ACW) period that agents receive after completing a customer
                  interaction. During ACW, agents can complete notes, update records, and prepare for the next
                  interaction without receiving new work assignments.
                </p>

                <div className="form-group-section">
                  <div className="form-group">
                    <label className="form-label">After call work setting</label>
                    <select className="form-select" defaultValue="custom">
                      <option value="always-block">Always block - ACW time always provided after calls</option>
                      <option value="never-block">Never block - No ACW time, immediate availability</option>
                      <option value="custom">Custom time - Specify ACW duration</option>
                    </select>
                    <p className="form-help-text">
                      <strong>Always block:</strong> Agents always receive ACW time after every interaction to complete
                      post-call tasks without interruption.
                      <br />
                      <strong>Never block:</strong> Agents are immediately available for new work after ending an interaction.
                      Best for high-volume environments where post-call work is minimal.
                      <br />
                      <strong>Custom time:</strong> Define a specific duration for ACW based on your organization's needs.
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">ACW duration (seconds)</label>
                    <input
                      type="number"
                      className="form-input"
                      defaultValue="30"
                      min="0"
                      max="600"
                    />
                    <p className="form-help-text">
                      Specify how long agents should remain unavailable for new work after completing an interaction (0-600 seconds)
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Allow agents to extend ACW time</span>
                    </label>
                    <p className="form-help-text">
                      When enabled, agents can manually extend their ACW period if additional time is needed
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'consultTransfer' && (
              <div className="form-section">
                <h2 className="section-label">Consult/Transfer Settings</h2>
                <p className="form-help-text">
                  Configure whether agents can consult with other agents or transfer conversations to other
                  queues or agents. These settings control collaboration and escalation capabilities.
                </p>

                <div className="form-group-section">
                  <h3 className="subsection-title">Consultation settings</h3>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={consultEnabled}
                        onChange={(e) => setConsultEnabled(e.target.checked)}
                      />
                      <span>Enable consult</span>
                    </label>
                    <p className="form-help-text">
                      Allow agents to consult with other agents while keeping the customer on hold. During a
                      consult, agents can get expert advice or assistance without transferring the customer.
                    </p>
                  </div>

                  {consultEnabled && (
                    <>
                      <div className="form-group">
                        <label className="checkbox-label">
                          <input type="checkbox" className="form-checkbox" defaultChecked />
                          <span>Allow consult with any agent</span>
                        </label>
                        <p className="form-help-text">
                          Agents can consult with any available agent in the organization
                        </p>
                      </div>
                      <div className="form-group">
                        <label className="checkbox-label">
                          <input type="checkbox" className="form-checkbox" defaultChecked />
                          <span>Allow consult with specific queues</span>
                        </label>
                        <p className="form-help-text">
                          Agents can request consultation from agents in specific queues
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Transfer settings</h3>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={transferEnabled}
                        onChange={(e) => setTransferEnabled(e.target.checked)}
                      />
                      <span>Enable transfer</span>
                    </label>
                    <p className="form-help-text">
                      Allow agents to transfer conversations to other agents or queues. Transfers move the entire
                      customer interaction to another agent who takes over the conversation.
                    </p>
                  </div>

                  {transferEnabled && (
                    <>
                      <div className="form-group">
                        <label className="checkbox-label">
                          <input type="checkbox" className="form-checkbox" defaultChecked />
                          <span>Allow transfer to any agent</span>
                        </label>
                        <p className="form-help-text">
                          Agents can transfer conversations directly to any available agent
                        </p>
                      </div>
                      <div className="form-group">
                        <label className="checkbox-label">
                          <input type="checkbox" className="form-checkbox" defaultChecked />
                          <span>Allow transfer to queues</span>
                        </label>
                        <p className="form-help-text">
                          Agents can transfer conversations to other queues for specialized handling
                        </p>
                      </div>
                      <div className="form-group">
                        <label className="checkbox-label">
                          <input type="checkbox" className="form-checkbox" />
                          <span>Require supervisor approval for transfers</span>
                        </label>
                        <p className="form-help-text">
                          All transfer requests must be approved by a supervisor before completion
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'postCallSurvey' && (
              <div className="form-section">
                <h2 className="section-label">Post-Call Survey</h2>
                <p className="form-help-text">
                  Configure automated post-call surveys to gather customer feedback after interactions. Select
                  a Copilot Studio bot that will conduct the survey and collect customer satisfaction data.
                </p>

                <div className="form-group-section">
                  <div className="form-group">
                    <label className="form-label">Survey bot</label>
                    <select className="form-select" defaultValue="csat-bot">
                      <option value="">No survey - Skip post-call survey</option>
                      <option value="csat-bot">Customer Satisfaction Survey Bot</option>
                      <option value="nps-bot">Net Promoter Score (NPS) Bot</option>
                      <option value="detailed-feedback-bot">Detailed Feedback Survey Bot</option>
                      <option value="quick-rating-bot">Quick Rating Bot (1-5 stars)</option>
                      <option value="custom-survey-bot">Custom Survey Bot</option>
                    </select>
                    <p className="form-help-text">
                      Select the Copilot Studio bot that will interact with customers after the call ends.
                      The bot will ask predefined questions and collect responses for analysis.
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span>Enable survey for all calls</span>
                    </label>
                    <p className="form-help-text">
                      When enabled, the survey is offered to all customers after call completion
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Allow customers to skip survey</span>
                    </label>
                    <p className="form-help-text">
                      Customers can opt out of the survey if they don't wish to provide feedback
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Survey trigger condition</label>
                    <select className="form-select" defaultValue="all-calls">
                      <option value="all-calls">All calls - Survey after every call</option>
                      <option value="resolved-only">Resolved calls only</option>
                      <option value="duration-threshold">Calls exceeding duration threshold</option>
                      <option value="random-sample">Random sample of calls</option>
                    </select>
                    <p className="form-help-text">
                      Define when the survey should be triggered based on call characteristics
                    </p>
                  </div>

                  <div className="form-group">
                    <a href="#" className="external-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M14 2H8v2h3.59L6 9.59 7.41 11 13 5.41V9h2V2z" />
                        <path d="M12 12H4V4h4V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-2v4z" />
                      </svg>
                      Create or modify survey bots in Copilot Studio
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sessionTemplate' && (
              <div className="form-section">
                <h2 className="section-label">Session Template</h2>
                <p className="form-help-text">
                  Select a session template that defines the agent workspace layout and available tools during
                  customer interactions. Session templates control which panels, tabs, and features are visible
                  to agents when handling conversations.
                </p>

                <div className="form-group-section">
                  <div className="form-group">
                    <label className="form-label">Session template</label>
                    <select className="form-select" defaultValue="default-voice">
                      <option value="default-voice">Default Voice Session Template</option>
                      <option value="omnichannel-session">Omnichannel Session Template</option>
                      <option value="customer-service-session">Customer Service Session Template</option>
                      <option value="sales-session">Sales Session Template</option>
                      <option value="technical-support-session">Technical Support Session Template</option>
                      <option value="minimal-session">Minimal Session Template</option>
                      <option value="custom-session">Custom Session Template</option>
                    </select>
                    <p className="form-help-text">
                      The session template determines the agent's workspace layout, including which customer
                      information panels, knowledge base articles, and productivity tools are available during
                      the interaction.
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Default tab</label>
                    <select className="form-select" defaultValue="customer-summary">
                      <option value="customer-summary">Customer Summary</option>
                      <option value="case-details">Case Details</option>
                      <option value="knowledge-base">Knowledge Base</option>
                      <option value="timeline">Timeline</option>
                      <option value="related-cases">Related Cases</option>
                    </select>
                    <p className="form-help-text">
                      The default tab that opens when an agent accepts a new conversation
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span>Show customer information panel</span>
                    </label>
                    <p className="form-help-text">
                      Display customer details, contact information, and interaction history
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span>Show knowledge base panel</span>
                    </label>
                    <p className="form-help-text">
                      Provide quick access to knowledge articles and support documentation
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span>Show script guidance panel</span>
                    </label>
                    <p className="form-help-text">
                      Display agent scripts and conversation guidance for consistent service delivery
                    </p>
                  </div>

                  <div className="form-group">
                    <a href="#" className="external-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M14 2H8v2h3.59L6 9.59 7.41 11 13 5.41V9h2V2z" />
                        <path d="M12 12H4V4h4V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-2v4z" />
                      </svg>
                      Customize session templates in App Profile Manager
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EngagementProfileEdit;
