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

interface AutomatedMessage {
  id: string;
  trigger: string;
  message: string;
}

interface OverflowRule {
  id: string;
  trigger: string;
  action: string;
}

interface TimeoutRule {
  id: string;
  triggerType: string;
  timeThreshold: string;
  actionType: string;
  messageRecipient?: string;
  messageText?: string;
  messageLanguage?: string;
  conversationState?: string;
}

const EngagementProfileEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('automatedMessages');
  const [consultExternalPhone, setConsultExternalPhone] = useState(false);
  const [consultExternalTeams, setConsultExternalTeams] = useState(false);
  const [transferExternalPhone, setTransferExternalPhone] = useState(false);
  const [useBridgedTransfer, setUseBridgedTransfer] = useState(false);
  const [transferExternalTeams, setTransferExternalTeams] = useState(false);
  const [automatedMessages, setAutomatedMessages] = useState<AutomatedMessage[]>([
    { id: '1', trigger: 'agent-assigned', message: 'You are now connected with {AgentName}. How can I help you today?' },
    { id: '2', trigger: 'average-wait-time', message: 'Your estimated wait time is {WaitTime} minutes. Thank you for your patience.' },
    { id: '3', trigger: 'conversation-transferred', message: 'I\'m transferring you to a specialist who can better assist with your request. Please hold.' },
    { id: '4', trigger: 'agent-ended-conversation', message: 'Thank you for contacting us. Your conversation has been ended. Have a great day!' },
    { id: '5', trigger: 'customer-ended-conversation', message: 'The customer has ended the conversation.' },
    { id: '6', trigger: 'position-in-queue', message: 'You are currently number {QueuePosition} in the queue. We appreciate your patience.' }
  ]);
  const [assignmentMethod, setAssignmentMethod] = useState('round-robin');
  const [afterCallWorkSetting, setAfterCallWorkSetting] = useState('custom');
  const [overflowBeforeRules, setOverflowBeforeRules] = useState<OverflowRule[]>([
    { id: '1', trigger: '', action: '' }
  ]);
  const [overflowAfterRules, setOverflowAfterRules] = useState<OverflowRule[]>([
    { id: '1', trigger: '', action: '' }
  ]);
  const [notifyQueuePosition, setNotifyQueuePosition] = useState(false);
  const [notifyWaitTime, setNotifyWaitTime] = useState(false);
  const [timeoutRules, setTimeoutRules] = useState<TimeoutRule[]>([
    { id: '1', triggerType: '', timeThreshold: '', actionType: '' }
  ]);

  const profileName = id ? profileNames[id] || 'Unknown Profile' : 'Unknown Profile';

  const addAutomatedMessage = () => {
    const newMessage: AutomatedMessage = {
      id: Date.now().toString(),
      trigger: '',
      message: ''
    };
    setAutomatedMessages([...automatedMessages, newMessage]);
  };

  const deleteAutomatedMessage = (messageId: string) => {
    setAutomatedMessages(automatedMessages.filter(msg => msg.id !== messageId));
  };

  const updateAutomatedMessage = (messageId: string, field: 'trigger' | 'message', value: string) => {
    setAutomatedMessages(automatedMessages.map(msg =>
      msg.id === messageId ? { ...msg, [field]: value } : msg
    ));
  };

  const addOverflowBeforeRule = () => {
    const newRule: OverflowRule = {
      id: Date.now().toString(),
      trigger: '',
      action: ''
    };
    setOverflowBeforeRules([...overflowBeforeRules, newRule]);
  };

  const deleteOverflowBeforeRule = (ruleId: string) => {
    setOverflowBeforeRules(overflowBeforeRules.filter(rule => rule.id !== ruleId));
  };

  const updateOverflowBeforeRule = (ruleId: string, field: 'trigger' | 'action', value: string) => {
    setOverflowBeforeRules(overflowBeforeRules.map(rule =>
      rule.id === ruleId ? { ...rule, [field]: value } : rule
    ));
  };

  const addOverflowAfterRule = () => {
    const newRule: OverflowRule = {
      id: Date.now().toString(),
      trigger: '',
      action: ''
    };
    setOverflowAfterRules([...overflowAfterRules, newRule]);
  };

  const deleteOverflowAfterRule = (ruleId: string) => {
    setOverflowAfterRules(overflowAfterRules.filter(rule => rule.id !== ruleId));
  };

  const updateOverflowAfterRule = (ruleId: string, field: 'trigger' | 'action', value: string) => {
    setOverflowAfterRules(overflowAfterRules.map(rule =>
      rule.id === ruleId ? { ...rule, [field]: value } : rule
    ));
  };

  const addTimeoutRule = () => {
    const newRule: TimeoutRule = {
      id: Date.now().toString(),
      triggerType: '',
      timeThreshold: '',
      actionType: ''
    };
    setTimeoutRules([...timeoutRules, newRule]);
  };

  const deleteTimeoutRule = (ruleId: string) => {
    setTimeoutRules(timeoutRules.filter(rule => rule.id !== ruleId));
  };

  const updateTimeoutRule = (ruleId: string, field: keyof TimeoutRule, value: string) => {
    setTimeoutRules(timeoutRules.map(rule =>
      rule.id === ruleId ? { ...rule, [field]: value } : rule
    ));
  };

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
                className={`edit-tab ${activeTab === 'customerWaitTime' ? 'active' : ''}`}
                onClick={() => setActiveTab('customerWaitTime')}
              >
                Customer wait time
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
              <button
                className={`edit-tab ${activeTab === 'overflowManagement' ? 'active' : ''}`}
                onClick={() => setActiveTab('overflowManagement')}
              >
                Overflow management
              </button>
              <button
                className={`edit-tab ${activeTab === 'timeoutRules' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeoutRules')}
              >
                Conversation timeout rules
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

                <div className="automated-messages-list">
                  {automatedMessages.map((message) => (
                    <div key={message.id} className="automated-message-row">
                      <div className="message-trigger-dropdown">
                        <select
                          className="form-select"
                          value={message.trigger}
                          onChange={(e) => updateAutomatedMessage(message.id, 'trigger', e.target.value)}
                        >
                          <option value="">Select trigger</option>
                          <option value="agent-assigned">Agent assigned</option>
                          <option value="average-wait-time">Average wait time</option>
                          <option value="conversation-transferred">Conversation transferred</option>
                          <option value="agent-ended-conversation">Agent ended conversation</option>
                          <option value="customer-ended-conversation">Customer ended conversation</option>
                          <option value="position-in-queue">Position in queue</option>
                          <option value="on-hold">On hold</option>
                          <option value="back-from-hold">Back from hold</option>
                          <option value="consultation-started">Consultation started</option>
                        </select>
                      </div>
                      <div className="message-text-input">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter message"
                          value={message.message}
                          onChange={(e) => updateAutomatedMessage(message.id, 'message', e.target.value)}
                        />
                      </div>
                      <button
                        className="delete-message-button"
                        onClick={() => deleteAutomatedMessage(message.id)}
                        title="Delete message"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                      </button>
                    </div>
                  ))}

                  <button className="add-greeting-button" onClick={addAutomatedMessage}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Add message trigger
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'customerWaitTime' && (
              <div className="form-section">
                <h2 className="section-label">Customer Wait Time</h2>
                <p className="form-help-text">
                  Configure what information customers receive while waiting in the queue. These notifications
                  help manage customer expectations and improve their experience during wait times.
                </p>

                <div className="form-group-section">
                  <div className="form-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={notifyQueuePosition}
                        onChange={(e) => setNotifyQueuePosition(e.target.checked)}
                      />
                      <span className="toggle-switch"></span>
                      <span className="toggle-text">Notify customer position in queue</span>
                    </label>
                    <p className="form-help-text">
                      Inform customers of their current position in the queue so they know how many customers
                      are ahead of them
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={notifyWaitTime}
                        onChange={(e) => setNotifyWaitTime(e.target.checked)}
                      />
                      <span className="toggle-switch"></span>
                      <span className="toggle-text">Notify average wait time</span>
                    </label>
                    <p className="form-help-text">
                      Provide customers with an estimated average wait time based on current queue conditions
                      and historical data
                    </p>
                  </div>
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
                    <select
                      className="form-select"
                      value={assignmentMethod}
                      onChange={(e) => setAssignmentMethod(e.target.value)}
                    >
                      <option value="round-robin">Round robin - Distribute evenly across all agents</option>
                      <option value="highest-capacity">Highest capacity - Assign to agent with most availability</option>
                      <option value="least-active">Least active - Assign to agent with least recent activity</option>
                      <option value="custom">Custom assignment rules</option>
                    </select>

                    {assignmentMethod === 'round-robin' && (
                      <p className="form-help-text">
                        Distributes work evenly among all eligible agents in rotation.
                      </p>
                    )}

                    {assignmentMethod === 'highest-capacity' && (
                      <p className="form-help-text">
                        Prioritizes agents with the most available capacity to handle additional work.
                      </p>
                    )}

                    {assignmentMethod === 'least-active' && (
                      <p className="form-help-text">
                        Assigns work to the agent who has been idle longest or handled the fewest recent interactions.
                      </p>
                    )}

                    {assignmentMethod === 'custom' && (
                      <p className="form-help-text">
                        Use custom business rules to determine assignment logic.
                      </p>
                    )}
                  </div>

                  {assignmentMethod === 'custom' && (
                    <>
                      <div className="custom-assignment-card">
                        <div className="custom-card-header">
                          <h3 className="custom-card-title">Prioritization rules</h3>
                          <button className="configure-link-button">Configure</button>
                        </div>
                        <p className="custom-card-description">
                          Define rules to prioritize which work items should be assigned first based on customer attributes, wait time, or business priorities.
                        </p>
                      </div>

                      <div className="custom-assignment-card">
                        <div className="custom-card-header">
                          <h3 className="custom-card-title">Assignment rulesets</h3>
                          <button className="configure-link-button">Configure</button>
                        </div>
                        <p className="custom-card-description">
                          Create custom rulesets to match work items with specific agents based on skills, attributes, or other criteria.
                        </p>
                      </div>
                    </>
                  )}

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="form-checkbox" defaultChecked />
                      <span>Assign returning conversation to same representative</span>
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
                    <select
                      className="form-select"
                      value={afterCallWorkSetting}
                      onChange={(e) => setAfterCallWorkSetting(e.target.value)}
                    >
                      <option value="always-block">Always block - ACW time always provided after calls</option>
                      <option value="never-block">Never block - No ACW time, immediate availability</option>
                      <option value="custom">Custom time - Specify ACW duration</option>
                    </select>

                    {afterCallWorkSetting === 'always-block' && (
                      <p className="form-help-text">
                        Agents always receive ACW time after every interaction to complete post-call tasks without interruption.
                      </p>
                    )}

                    {afterCallWorkSetting === 'never-block' && (
                      <p className="form-help-text">
                        Agents are immediately available for new work after ending an interaction. Best for high-volume environments where post-call work is minimal.
                      </p>
                    )}

                    {afterCallWorkSetting === 'custom' && (
                      <p className="form-help-text">
                        Define a specific duration for ACW based on your organization's needs.
                      </p>
                    )}
                  </div>

                  {afterCallWorkSetting === 'custom' && (
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
                  )}

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
                  Configure external consultation and transfer capabilities for agents to collaborate with
                  external resources and escalate conversations when needed.
                </p>

                <div className="form-group-section">
                  <h3 className="subsection-title">Consult</h3>

                  <div className="form-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={consultExternalPhone}
                        onChange={(e) => setConsultExternalPhone(e.target.checked)}
                      />
                      <span className="toggle-switch"></span>
                      <span className="toggle-text">External phone numbers</span>
                    </label>
                    <p className="form-help-text">
                      Allow agents to consult with external phone numbers while keeping the customer on hold
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={consultExternalTeams}
                        onChange={(e) => setConsultExternalTeams(e.target.checked)}
                      />
                      <span className="toggle-switch"></span>
                      <span className="toggle-text">External Microsoft Teams users</span>
                    </label>
                    <p className="form-help-text">
                      Allow agents to consult with external Microsoft Teams users for expert assistance
                    </p>
                  </div>
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Transfer</h3>

                  <div className="form-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={transferExternalPhone}
                        onChange={(e) => setTransferExternalPhone(e.target.checked)}
                      />
                      <span className="toggle-switch"></span>
                      <span className="toggle-text">External phone numbers</span>
                    </label>
                    <p className="form-help-text">
                      Allow agents to transfer conversations to external phone numbers
                    </p>

                    {transferExternalPhone && (
                      <div className="sub-checkbox-group">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={useBridgedTransfer}
                            onChange={(e) => setUseBridgedTransfer(e.target.checked)}
                          />
                          <span>Use bridged transfer</span>
                        </label>
                        <p className="form-help-text">
                          Keep agent on the line during transfer to provide context before disconnecting
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={transferExternalTeams}
                        onChange={(e) => setTransferExternalTeams(e.target.checked)}
                      />
                      <span className="toggle-switch"></span>
                      <span className="toggle-text">External Microsoft Teams users</span>
                    </label>
                    <p className="form-help-text">
                      Allow agents to transfer conversations to external Microsoft Teams users
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'postCallSurvey' && (
              <div className="form-section">
                <h2 className="section-label">Post-Call Survey</h2>
                <p className="form-help-text">
                  Configure automated post-call surveys to gather customer feedback after interactions. Surveys
                  are operated by Microsoft Copilot Studio and will be delivered to customers at the end of
                  each call to collect satisfaction data and insights.
                </p>

                <div className="form-group-section">
                  <div className="form-group">
                    <label className="form-label">Customer feedback survey bot</label>
                    <select className="form-select" defaultValue="csat-bot">
                      <option value="">No survey - Skip post-call survey</option>
                      <option value="csat-bot">Customer Satisfaction Survey Bot</option>
                      <option value="nps-bot">Net Promoter Score (NPS) Bot</option>
                      <option value="detailed-feedback-bot">Detailed Feedback Survey Bot</option>
                      <option value="quick-rating-bot">Quick Rating Bot (1-5 stars)</option>
                      <option value="custom-survey-bot">Custom Survey Bot</option>
                    </select>
                    <p className="form-help-text">
                      Select a Microsoft Copilot Studio bot that will interact with customers after the call ends
                      to collect feedback and satisfaction ratings.
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
                    <label className="form-label">Default session template</label>
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
                      Select the default session template for agent workspaces. This template determines the layout,
                      panels, and tools available to agents during customer interactions.
                    </p>
                  </div>

                  <div className="form-group">
                    <a href="#" className="external-link">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M14 2H8v2h3.59L6 9.59 7.41 11 13 5.41V9h2V2z" />
                        <path d="M12 12H4V4h4V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-2v4z" />
                      </svg>
                      Create and manage session templates
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'overflowManagement' && (
              <div className="form-section">
                <h2 className="section-label">Overflow Management</h2>
                <p className="form-help-text">
                  Configure how the system handles overflow situations when queues reach capacity or specific
                  conditions are met. Define triggers and corresponding actions for both pre-queue and in-queue
                  overflow scenarios to ensure customers receive appropriate service.
                </p>

                <div className="form-group-section">
                  <h3 className="subsection-title">Overflow before conversation is queued</h3>
                  <p className="form-help-text">
                    Define what happens when overflow conditions are detected before a conversation enters the queue.
                  </p>

                  <div className="overflow-rules-list">
                    {overflowBeforeRules.map((rule) => (
                      <div key={rule.id} className="overflow-rule-row">
                        <div className="overflow-trigger-action-row">
                          <div className="overflow-trigger-group">
                            <label className="form-label">Trigger</label>
                            <select
                              className="form-select"
                              value={rule.trigger}
                              onChange={(e) => updateOverflowBeforeRule(rule.id, 'trigger', e.target.value)}
                            >
                              <option value="">Select a trigger</option>
                              <option value="out-of-hours">Out of operating hours</option>
                              <option value="all-agents-offline">All agents offline</option>
                              <option value="queue-full">Queue capacity reached</option>
                              <option value="estimated-wait">Estimated wait time exceeds threshold</option>
                            </select>
                          </div>

                          <div className="overflow-action-group">
                            <label className="form-label">Action</label>
                            <select
                              className="form-select"
                              value={rule.action}
                              onChange={(e) => updateOverflowBeforeRule(rule.id, 'action', e.target.value)}
                            >
                              <option value="">Select an action</option>
                              <option value="reject-call">Reject call with message</option>
                              <option value="transfer-queue">Transfer to another queue</option>
                              <option value="voicemail">Send to voicemail</option>
                              <option value="callback">Offer callback option</option>
                              <option value="play-message">Play message and disconnect</option>
                            </select>
                          </div>
                        </div>
                        <button
                          className="delete-overflow-rule-button"
                          onClick={() => deleteOverflowBeforeRule(rule.id)}
                          title="Delete rule"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                          </svg>
                        </button>
                      </div>
                    ))}

                    <button className="add-overflow-rule-button" onClick={addOverflowBeforeRule}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Add trigger-action pair
                    </button>
                  </div>
                </div>

                <div className="form-group-section">
                  <h3 className="subsection-title">Overflow after conversation is in queue</h3>
                  <p className="form-help-text">
                    Define what happens when overflow conditions are detected while a conversation is waiting in the queue.
                  </p>

                  <div className="overflow-rules-list">
                    {overflowAfterRules.map((rule) => (
                      <div key={rule.id} className="overflow-rule-row">
                        <div className="overflow-trigger-action-row">
                          <div className="overflow-trigger-group">
                            <label className="form-label">Trigger</label>
                            <select
                              className="form-select"
                              value={rule.trigger}
                              onChange={(e) => updateOverflowAfterRule(rule.id, 'trigger', e.target.value)}
                            >
                              <option value="">Select a trigger</option>
                              <option value="wait-time-5">Wait time exceeds 5 minutes</option>
                              <option value="wait-time-10">Wait time exceeds 10 minutes</option>
                              <option value="wait-time-15">Wait time exceeds 15 minutes</option>
                              <option value="wait-time-custom">Wait time exceeds custom duration</option>
                              <option value="position-threshold">Queue position exceeds threshold</option>
                              <option value="no-agents-available">No agents become available</option>
                            </select>
                          </div>

                          <div className="overflow-action-group">
                            <label className="form-label">Action</label>
                            <select
                              className="form-select"
                              value={rule.action}
                              onChange={(e) => updateOverflowAfterRule(rule.id, 'action', e.target.value)}
                            >
                              <option value="">Select an action</option>
                              <option value="remain-queue">Remain in queue</option>
                              <option value="transfer-queue">Transfer to another queue</option>
                              <option value="escalate">Escalate to supervisor</option>
                              <option value="callback">Offer callback option</option>
                              <option value="voicemail">Send to voicemail</option>
                            </select>
                          </div>
                        </div>
                        <button
                          className="delete-overflow-rule-button"
                          onClick={() => deleteOverflowAfterRule(rule.id)}
                          title="Delete rule"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                          </svg>
                        </button>
                      </div>
                    ))}

                    <button className="add-overflow-rule-button" onClick={addOverflowAfterRule}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Add trigger-action pair
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timeoutRules' && (
              <div className="form-section">
                <h2 className="section-label">Conversation Timeout Rules</h2>
                <p className="form-help-text">
                  Define timeout rules to automatically take action when either the customer service representative
                  or the customer doesn't respond within a specified time period. These rules help maintain conversation
                  flow and prevent stalled interactions.
                </p>

                <div className="timeout-rules-list">
                  {timeoutRules.map((rule) => (
                    <div key={rule.id} className="timeout-rule-card">
                      <div className="timeout-rule-header">
                        <h3 className="timeout-rule-title">Timeout Rule</h3>
                        <button
                          className="delete-timeout-rule-button"
                          onClick={() => deleteTimeoutRule(rule.id)}
                          title="Delete rule"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                          </svg>
                        </button>
                      </div>

                      <div className="timeout-rule-content">
                        {/* Trigger Section */}
                        <div className="timeout-section">
                          <h4 className="timeout-section-label">Trigger</h4>
                          <div className="timeout-trigger-row">
                            <div className="timeout-field-group">
                              <label className="form-label">Trigger type</label>
                              <select
                                className="form-select"
                                value={rule.triggerType}
                                onChange={(e) => updateTimeoutRule(rule.id, 'triggerType', e.target.value)}
                              >
                                <option value="">Select trigger type</option>
                                <option value="csr-nonresponse">CSR non-response time</option>
                                <option value="customer-nonresponse">Customer non-response time</option>
                              </select>
                            </div>

                            <div className="timeout-field-group">
                              <label className="form-label">Time threshold (minutes)</label>
                              <input
                                type="number"
                                className="form-input"
                                placeholder="e.g., 10"
                                min="1"
                                value={rule.timeThreshold}
                                onChange={(e) => updateTimeoutRule(rule.id, 'timeThreshold', e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Action Section */}
                        <div className="timeout-section">
                          <h4 className="timeout-section-label">Action</h4>
                          <div className="timeout-field-group">
                            <label className="form-label">Action type</label>
                            <select
                              className="form-select"
                              value={rule.actionType}
                              onChange={(e) => updateTimeoutRule(rule.id, 'actionType', e.target.value)}
                            >
                              <option value="">Select action type</option>
                              <option value="send-message">Send a message</option>
                              <option value="change-state">Change conversation state</option>
                            </select>
                          </div>

                          {rule.actionType === 'send-message' && (
                            <div className="timeout-action-details">
                              <div className="timeout-field-group">
                                <label className="form-label">Recipient</label>
                                <select
                                  className="form-select"
                                  value={rule.messageRecipient || ''}
                                  onChange={(e) => updateTimeoutRule(rule.id, 'messageRecipient', e.target.value)}
                                >
                                  <option value="">Select recipient</option>
                                  <option value="csr">CSR</option>
                                  <option value="customer">Customer</option>
                                </select>
                              </div>

                              <div className="timeout-field-group">
                                <label className="form-label">Message text</label>
                                <textarea
                                  className="form-textarea"
                                  placeholder="Enter the message to send"
                                  rows={3}
                                  value={rule.messageText || ''}
                                  onChange={(e) => updateTimeoutRule(rule.id, 'messageText', e.target.value)}
                                />
                              </div>

                              <div className="timeout-field-group">
                                <label className="form-label">Language</label>
                                <select
                                  className="form-select"
                                  value={rule.messageLanguage || ''}
                                  onChange={(e) => updateTimeoutRule(rule.id, 'messageLanguage', e.target.value)}
                                >
                                  <option value="">Select language</option>
                                  <option value="en">English</option>
                                  <option value="es">Spanish</option>
                                  <option value="fr">French</option>
                                  <option value="de">German</option>
                                  <option value="it">Italian</option>
                                  <option value="pt">Portuguese</option>
                                  <option value="zh">Chinese</option>
                                  <option value="ja">Japanese</option>
                                </select>
                              </div>
                            </div>
                          )}

                          {rule.actionType === 'change-state' && (
                            <div className="timeout-action-details">
                              <div className="timeout-field-group">
                                <label className="form-label">Conversation state</label>
                                <select
                                  className="form-select"
                                  value={rule.conversationState || ''}
                                  onChange={(e) => updateTimeoutRule(rule.id, 'conversationState', e.target.value)}
                                >
                                  <option value="">Select state</option>
                                  <option value="close">Close conversation</option>
                                  <option value="wrap-up">Move to wrap-up</option>
                                  <option value="waiting">Set to waiting</option>
                                  <option value="escalate">Escalate conversation</option>
                                </select>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <button className="add-timeout-rule-button" onClick={addTimeoutRule}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Add timeout rule
                  </button>
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
