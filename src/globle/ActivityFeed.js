import React from "react";
import './ActivityFeed.css'

function ActivityFeed() {
    const activities = [
        { id:1, user:'Kushantha Charuka', action: 'created', task: 'Contract #00124 need John Beige\'s signature', date: 'Sep 16, 2022 at 11:30 AM' },
        { id:2, user:'', action: 'created', task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque', date: 'Sep 16, 2022 at 11:45 AM' },
        { id:3, user:'', action: 'created', task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque', date: 'Sep 16, 2022 at 11:45 AM' },
    ];

    return (
        <div className="activity-feed">
            <h3>Avtivity Feed</h3>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        <strong>{activity.user}</strong> {activity.action} <span>{activity.task}</span>
                        <br/>
                        <small>{activity.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ActivityFeed;