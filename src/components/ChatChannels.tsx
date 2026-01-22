import React from 'react';
import { Link } from 'react-router-dom';
import './ChatChannels.css';

interface ChannelData {
  id: string;
  name: string;
  channelProfile: string;
  routingProfile: string;
  owner: string;
  createdOn: string;
}

const channelsData: ChannelData[] = [
  {
    id: '1',
    name: 'Contact center chat channel',
    channelProfile: 'Default Chat Profile',
    routingProfile: 'Standard Routing',
    owner: 'Aurora365 User6',
    createdOn: '9/10/2025 1:30 PM'
  },
  {
    id: '2',
    name: 'swatichat2',
    channelProfile: 'Custom Profile',
    routingProfile: 'Priority Routing',
    owner: 'Aurora365 User6',
    createdOn: '8/14/2025 4:44 PM'
  },
  {
    id: '3',
    name: 'QEA Chat Channel',
    channelProfile: 'QEA Profile',
    routingProfile: 'Test Routing',
    owner: 'Aurora365 User6',
    createdOn: '8/19/2025 6:28 PM'
  },
  {
    id: '4',
    name: 'swatiIntentTest',
    channelProfile: 'Intent Profile',
    routingProfile: 'Smart Routing',
    owner: 'Aurora365 User6',
    createdOn: '8/1/2025 12:32 PM'
  },
  {
    id: '5',
    name: 'TestChat',
    channelProfile: 'Test Profile',
    routingProfile: 'Standard Routing',
    owner: 'Aurora365 User6',
    createdOn: '8/5/2025 1:32 PM'
  },
  {
    id: '6',
    name: 'chat101',
    channelProfile: 'Basic Profile',
    routingProfile: 'Round Robin',
    owner: 'Aurora365 User6',
    createdOn: '8/7/2025 5:00 PM'
  },
  {
    id: '7',
    name: 'Chat Channel',
    channelProfile: 'Default Chat Profile',
    routingProfile: 'Standard Routing',
    owner: 'Aurora365 User6',
    createdOn: '1/22/2025 12:23 AM'
  },
  {
    id: '8',
    name: 'Copilot-Deflection',
    channelProfile: 'Copilot Profile',
    routingProfile: 'AI Routing',
    owner: 'Aurora365 User6',
    createdOn: '10/10/2025 1:59 AM'
  },
  {
    id: '9',
    name: 'CIA-M-Deflection',
    channelProfile: 'CIA Profile',
    routingProfile: 'Advanced Routing',
    owner: 'Aurora365 User6',
    createdOn: '10/10/2025 1:01 AM'
  },
  {
    id: '10',
    name: 'CIA-M-PN-LetsChat',
    channelProfile: 'PN Profile',
    routingProfile: 'Priority Routing',
    owner: 'Aurora365 User6',
    createdOn: '11/19/2025 11:19 AM'
  },
  {
    id: '11',
    name: 'ClemChat',
    channelProfile: 'Clem Profile',
    routingProfile: 'Standard Routing',
    owner: 'Aurora365 User6',
    createdOn: '11/27/2025 3:20 AM'
  }
];

const ChatChannels: React.FC = () => {
  return (
    <main className="main-content">
      <div className="toolbar">
        <div className="toolbar-left">
          <button className="add-button-toolbar">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Add chat channel
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
        <h1 className="page-title">Chat channels</h1>
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
              <th>Channel profile</th>
              <th>Routing profile</th>
              <th>Owner</th>
              <th>CreatedOn</th>
            </tr>
          </thead>
          <tbody>
            {channelsData.map((channel) => (
              <tr key={channel.id}>
                <td>
                  <Link to={`/channel/${channel.id}`} className="table-link">
                    {channel.name}
                  </Link>
                </td>
                <td>{channel.channelProfile}</td>
                <td>{channel.routingProfile}</td>
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

export default ChatChannels;
