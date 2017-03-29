// fetch
import 'isomorphic-fetch';

// Fix rxjs @see https://github.com/facebook/react-native/issues/11969#issuecomment-288061572
import JSTimers from 'react-native/Libraries/Core/Timers/JSTimers';
global.cancelAnimationFrame = JSTimers.cancelAnimationFrame;
global.requestAnimationFrame = JSTimers.requestAnimationFrame;
