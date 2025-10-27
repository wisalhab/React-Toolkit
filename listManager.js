import React, { useState } from 'react';

const DynamicBotManager = () => {
  const [bots, setBots] = useState([
    { id: '1', botname: 'Email Bot', status: 'Active' },
    { id: '2', botname: 'Data Bot', status: 'Inactive' }
  ]);

  const [newbot, setNewbot] = useState({ id: '', botname: '', status: '' });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewbot({
      ...newbot,
      [name]: value
    });
  };

  // Add new bot
  const addBotToList = () => {
    if (!newbot.id || !newbot.botname || !newbot.status) {
      alert('Please fill in all fields before adding a bot.');
      return;
    }

    setBots([...bots, newbot]);
    setNewbot({ id: '', botname: '', status: '' }); // reset inputs
  };

  // Delete bot
  const deleteBot = (id) => {
    setBots(bots.filter(bot => bot.id !== id));
  };

  return (
    <div className='dynamic-bot-manager'>
      <h1>Dynamic Bot Manager</h1>

      /* Input fields for new bot */
      <input
        type="text"
        name="id"
        placeholder="Bot ID"
        value={newbot.id}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="botname"
        placeholder="Bot Name"
        value={newbot.botname}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Bot Status"
        value={newbot.status}
        onChange={handleInputChange}
      />

      /* Button to add new bot */
      <button onClick={addBotToList}>Add Bot</button>

      /* Display list of bots */
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <strong>{bot.botname}</strong> (ID: {bot.id}, Status: {bot.status})
            <button onClick={() => deleteBot(bot.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicBotManager;
