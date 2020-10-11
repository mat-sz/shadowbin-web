import React from 'react';
import { Link } from 'react-router-dom';
import { GoPencil, GoHistory, GoInfo } from 'react-icons/go';
import { title } from '../config';

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/new">
              <GoPencil />
            </Link>
          </li>
          <li>
            <Link to="/history">
              <GoHistory />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <GoInfo />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logo">{title}</div>
    </div>
  );
};
