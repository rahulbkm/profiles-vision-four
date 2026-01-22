import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ChatChannels from './components/ChatChannels';
import VoiceChannels from './components/VoiceChannels';
import ChannelEdit from './components/ChannelEdit';
import VoiceChannelEdit from './components/VoiceChannelEdit';
import ChannelExperiences from './components/ChannelExperiences';
import ConversationFlows from './components/ConversationFlows';
import ConversationFlowEdit from './components/ConversationFlowEdit';
import EngagementProfiles from './components/EngagementProfiles';
import EngagementProfileEdit from './components/EngagementProfileEdit';
import Queues from './components/Queues';
import QueueEdit from './components/QueueEdit';
import './App.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isEditPage = location.pathname.startsWith('/channel/') ||
                     location.pathname.startsWith('/voice-channel/') ||
                     location.pathname.startsWith('/conversation-flow/') ||
                     location.pathname.startsWith('/engagement-profile/');

  if (isEditPage) {
    return (
      <div className="app">
        <Header />
        {children}
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/chat-channels" element={<ChatChannels />} />
          <Route path="/voice-channels" element={<VoiceChannels />} />
          <Route path="/channel-experiences" element={<ChannelExperiences />} />
          <Route path="/conversation-flows" element={<ConversationFlows />} />
          <Route path="/engagement-profiles" element={<EngagementProfiles />} />
          <Route path="/queues" element={<Queues />} />
          <Route path="/queue/:id" element={<QueueEdit />} />
          <Route path="/channel/:id" element={<ChannelEdit />} />
          <Route path="/voice-channel/:id" element={<VoiceChannelEdit />} />
          <Route path="/conversation-flow/:id" element={<ConversationFlowEdit />} />
          <Route path="/engagement-profile/:id" element={<EngagementProfileEdit />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
