import React from 'react';
import { createRoot } from 'react-dom/client';

import './reset.less';
import './index.less';

import { App } from '@src/main/App';

createRoot(document.getElementById('app')).render(<App />);
