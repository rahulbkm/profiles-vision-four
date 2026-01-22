import React from 'react';
import { Link } from 'react-router-dom';
import './VoiceChannels.css';

interface ConversationFlowData {
  id: string;
  name: string;
  description: string;
  owner: string;
  createdOn: string;
  status: string;
}

const conversationFlowsData: ConversationFlowData[] = [
  {
    id: 'flow1',
    name: 'Standard Customer Service Flow',
    description: 'General customer support workflow with AI agent assistance and queue routing',
    owner: 'Aurora365 User6',
    createdOn: '8/15/2025 9:30 AM',
    status: 'Active'
  },
  {
    id: 'flow2',
    name: 'Sales Inquiry Flow',
    description: 'Sales-focused conversation flow with lead qualification and CRM integration',
    owner: 'Aurora365 User6',
    createdOn: '8/20/2025 2:15 PM',
    status: 'Active'
  },
  {
    id: 'flow3',
    name: 'Technical Support Flow',
    description: 'Technical troubleshooting workflow with skill-based routing and escalation',
    owner: 'Aurora365 User6',
    createdOn: '9/1/2025 11:00 AM',
    status: 'Active'
  },
  {
    id: 'flow4',
    name: 'VIP Customer Flow',
    description: 'Priority handling for VIP customers with dedicated agent routing',
    owner: 'Aurora365 User6',
    createdOn: '9/5/2025 3:45 PM',
    status: 'Active'
  },
  {
    id: 'flow5',
    name: 'After-Hours Flow',
    description: 'After-hours support workflow with voicemail and callback options',
    owner: 'Aurora365 User6',
    createdOn: '9/10/2025 10:20 AM',
    status: 'Active'
  },
  {
    id: 'flow6',
    name: 'Emergency Response Flow',
    description: 'High-priority emergency workflow with immediate escalation',
    owner: 'Aurora365 User6',
    createdOn: '8/25/2025 1:00 PM',
    status: 'Active'
  },
  {
    id: 'flow7',
    name: 'Billing Inquiry Flow',
    description: 'Billing and payment support with secure payment processing',
    owner: 'Aurora365 User6',
    createdOn: '9/12/2025 4:30 PM',
    status: 'Active'
  },
  {
    id: 'flow8',
    name: 'Multilingual Support Flow',
    description: 'Multi-language support workflow with language detection and routing',
    owner: 'Aurora365 User6',
    createdOn: '8/28/2025 8:15 AM',
    status: 'Active'
  }
];

const ConversationFlows: React.FC = () => {
  return (
    <main className="main-content">
      <div className="toolbar">
        <div className="toolbar-left">
          <button className="add-button-toolbar">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Add conversation flow
          </button>
          <button className="refresh-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.65 2.35A7.95 7.95 0 0 0 8 0C3.58 0 0 3.58 0 8s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L9 7h7V0l-2.35 2.35z" />
            </svg>
            Refresh
          </button>
        </div>
        <div className="toolbar-right">
          <div className="search-box-toolbar">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.5 6.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-1.27 4.27a6 6 0 1 1 1.06-1.06l3.5 3.5-1.06 1.06-3.5-3.5z" />
            </svg>
            <input type="text" placeholder="Search conversation flows" className="search-input-toolbar" />
          </div>
        </div>
      </div>

      <div className="content-header">
        <Link to="/channel-experiences" className="breadcrumb">Channel experiences</Link>
        <h1 className="page-title">Conversation flows</h1>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>
                <div className="th-content">
                  Flow Name
                  <svg className="sort-icon" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 3l3 4H3l3-4z" />
                  </svg>
                </div>
              </th>
              <th>Description</th>
              <th>Status</th>
              <th>Owner</th>
              <th>CreatedOn</th>
            </tr>
          </thead>
          <tbody>
            {conversationFlowsData.map((flow) => (
              <tr key={flow.id}>
                <td>
                  <Link to={`/conversation-flow/${flow.id}`} className="table-link">
                    {flow.name}
                  </Link>
                </td>
                <td>{flow.description}</td>
                <td>
                  <span className="status-badge status-active">{flow.status}</span>
                </td>
                <td>{flow.owner}</td>
                <td>{flow.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ConversationFlows;
