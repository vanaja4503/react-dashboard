import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [compactMode, setCompactMode] = useState(false);

  return (
    <section>
      <h1>Settings</h1>
      <p>Manage your dashboard preferences.</p>

      <div className="settings-card">
        <label className="setting-row">
          <span>Email notifications</span>

          <input
            type="checkbox"
            checked={notifications}
            onChange={(event) =>
              setNotifications(event.target.checked)
            }
          />
        </label>

        <label className="setting-row">
          <span>Compact mode</span>

          <input
            type="checkbox"
            checked={compactMode}
            onChange={(event) =>
              setCompactMode(event.target.checked)
            }
          />
        </label>

        <p>
          Notifications: {notifications ? "Enabled" : "Disabled"}
        </p>

        <p>
          Layout: {compactMode ? "Compact" : "Standard"}
        </p>
      </div>
    </section>
  );
}

export default Settings;