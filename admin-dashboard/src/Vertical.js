import React from 'react';
import Divider from '@mui/material/Divider';

export function Vertical() {
    const col = { color: "white" };
    return (            //vertical menu bar for medium and large screen
        <div className="vertical">

            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="/" style={col}>Dashboard</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}>⊃ Admin</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}>⊃ Franchise</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="/" style={col}>⊃ Driver</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}>⊃ Vechicle</a><Divider />
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" style={col}>⊃ Admin</a><Divider />
                </li>
             
            </ul>
        </div>
    );   
}
