import React from 'react';
import { Link } from 'react-router-dom';
import './VoiceChannels.css';

interface VoiceChannelData {
  id: string;
  name: string;
  conversationFlow: string;
  owner: string;
  createdOn: string;
}

const voiceChannelsData: VoiceChannelData[] = [
  {
    id: 'v1',
    name: 'Customer Support Voice',
    conversationFlow: 'Standard Customer Service Flow',
    owner: 'Aurora365 User6',
    createdOn: '9/10/2025 1:30 PM'
  },
  {
    id: 'v2',
    name: 'Sales Voice Channel',
    conversationFlow: 'Sales Inquiry Flow',
    owner: 'Aurora365 User6',
    createdOn: '8/14/2025 4:44 PM'
  },
  {
    id: 'v3',
    name: 'Technical Support Voice',
    conversationFlow: 'Technical Support Flow',
    owner: 'Aurora365 User6',
    createdOn: '8/19/2025 6:28 PM'
  },
  {
    id: 'v4',
    name: 'Emergency Hotline',
    conversationFlow: 'Emergency Response Flow',
    owner: 'Aurora365 User6',
    createdOn: '8/1/2025 12:32 PM'
  },
  {
    id: 'v5',
    name: 'General Inquiries Voice',
    conversationFlow: 'Standard Customer Service Flow',
    owner: 'Aurora365 User6',
    createdOn: '8/5/2025 1:32 PM'
  },
  {
    id: 'v6',
    name: 'VIP Customer Line',
    conversationFlow: 'VIP Customer Flow',
    owner: 'Aurora365 User6',
    createdOn: '8/7/2025 5:00 PM'
  },
  {
    id: 'v7',
    name: 'Billing Support Voice',
    conversationFlow: 'Billing Inquiry Flow',
    owner: 'Aurora365 User6',
    createdOn: '1/22/2025 12:23 AM'
  },
  {
    id: 'v8',
    name: 'Product Inquiries Voice',
    conversationFlow: 'Sales Inquiry Flow',
    owner: 'Aurora365 User6',
    createdOn: '10/10/2025 1:59 AM'
  },
  {
    id: 'v9',
    name: 'After-Hours Support',
    conversationFlow: 'After-Hours Flow',
    owner: 'Aurora365 User6',
    createdOn: '10/10/2025 1:01 AM'
  },
  {
    id: 'v10',
    name: 'International Support Voice',
    conversationFlow: 'Multilingual Support Flow',
    owner: 'Aurora365 User6',
    createdOn: '11/19/2025 11:19 AM'
  }
];

const VoiceChannels: React.FC = () => {
  return (
    <main className="main-content">
      <div className="toolbar">
        <div className="toolbar-left">
          <button className="add-button-toolbar">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Add voice channel
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
            <input type="text" placeholder="Search channels" className="search-input-toolbar" />
          </div>
        </div>
      </div>

      <div className="content-header">
        <Link to="/" className="breadcrumb">Channels</Link>
        <h1 className="page-title">Voice channels</h1>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>
                <div className="th-content">
                  Channel Name
                  <svg className="sort-icon" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 3l3 4H3l3-4z" />
                  </svg>
                </div>
              </th>
              <th>Conversation flow</th>
              <th>Owner</th>
              <th>CreatedOn</th>
            </tr>
          </thead>
          <tbody>
            {voiceChannelsData.map((channel) => (
              <tr key={channel.id}>
                <td>
                  <Link to={`/voice-channel/${channel.id}`} className="table-link">
                    {channel.name}
                  </Link>
                </td>
                <td>{channel.conversationFlow}</td>
                <td>{channel.owner}</td>
                <td>{channel.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default VoiceChannels;
