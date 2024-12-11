'use client';

import { Person } from '@/types';

interface LeaderboardProps {
  people: Person[];
}

export default function Leaderboards({ people }: LeaderboardProps) {
  const naughtyList = [...people]
    .filter(p => p.hasOptedIn && p.score < 0)
    .sort((a, b) => a.score - b.score);

  const niceList = [...people]
    .filter(p => p.hasOptedIn && p.score >= 0)
    .sort((a, b) => b.score - a.score);

  return (
    <div className="leaderboards">
      <div className="leaderboard">
        <h2>🎅 Nice List</h2>
        <div className="leaderboard-list">
          {niceList.map((person, index) => (
            <div key={person.id} className="leaderboard-item">
              <span className="rank">#{index + 1}</span>
              <span className="name">{person.name}</span>
              <span className="score">£{(person.score * 0.5).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="leaderboard">
        <h2>😈 Naughty List</h2>
        <div className="leaderboard-list">
          {naughtyList.map((person, index) => (
            <div key={person.id} className="leaderboard-item">
              <span className="rank">#{index + 1}</span>
              <span className="name">{person.name}</span>
              <span className="score">-£{(Math.abs(person.score) * 0.5).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 