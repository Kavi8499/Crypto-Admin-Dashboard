import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export function Sliders() {
    return (
        <div className="slider">
            <div>
               
                <div>
                    <h5>income(66%) <span className="align">$167,884.21</span></h5>
                    <ProgressBar variant="danger" now={20} />
                </div>
                <div>
                    <h5>income(50%)<span className="align">$56,411,33</span></h5>
                    <ProgressBar variant="warning" now={40} />
                </div>
                <div>
                    <h5>income(11%)<span className="align">$81,981,22</span></h5>
                    <ProgressBar className="customer" now={60} />
                </div>
                <div>
                    <h5>income(23%)<span className="align">$12,432,51</span></h5>
                    <ProgressBar variant="info" now={80} />
                </div>
            </div>
        </div>

    );
}
