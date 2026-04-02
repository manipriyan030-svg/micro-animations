import { AnimationDef } from './types';
import HamburgerToggle, { generateHamburgerCode } from './hamburger-toggle';
import BellAlert, { generateBellCode } from './bell-alert';
import SpinnerDots, { generateSpinnerDotsCode } from './spinner-dots';
import SpinnerRing, { generateSpinnerRingCode } from './spinner-ring';
import Checkmark, { generateCheckmarkCode } from './checkmark';
import CloseX, { generateCloseXCode } from './close-x';
import ArrowRight, { generateArrowRightCode } from './arrow-right';
import ArrowDown, { generateArrowDownCode } from './arrow-down';
import HeartLike, { generateHeartCode } from './heart-like';
import SearchIcon, { generateSearchCode } from './search-icon';
import PlayPause, { generatePlayPauseCode } from './play-pause';
import DownloadIcon, { generateDownloadIconCode } from './download-icon';
import CopyClipboard, { generateCopyCode } from './copy-clipboard';
import TrashDelete, { generateTrashCode } from './trash-delete';
import SettingsGear, { generateGearCode } from './settings-gear';
import EyeVisibility, { generateEyeCode } from './eye-visibility';
import NotificationBadge, { generateNotifCode } from './notification-badge';
import LoadingBar, { generateLoadingBarCode } from './loading-bar';

export const animations: AnimationDef[] = [
  { id: 'hamburger-toggle', name: 'Hamburger Menu', category: 'navigation', trigger: 'click', component: HamburgerToggle, generateCode: generateHamburgerCode },
  { id: 'bell-alert', name: 'Bell Alert', category: 'feedback', trigger: 'auto-loop', component: BellAlert, generateCode: generateBellCode },
  { id: 'spinner-dots', name: 'Spinner Dots', category: 'loading', trigger: 'auto-loop', component: SpinnerDots, generateCode: generateSpinnerDotsCode },
  { id: 'spinner-ring', name: 'Spinner Ring', category: 'loading', trigger: 'auto-loop', component: SpinnerRing, generateCode: generateSpinnerRingCode },
  { id: 'checkmark', name: 'Checkmark', category: 'feedback', trigger: 'auto-play', component: Checkmark, generateCode: generateCheckmarkCode },
  { id: 'close-x', name: 'Close X', category: 'navigation', trigger: 'hover', component: CloseX, generateCode: generateCloseXCode },
  { id: 'arrow-right', name: 'Arrow Right', category: 'navigation', trigger: 'hover', component: ArrowRight, generateCode: generateArrowRightCode },
  { id: 'arrow-down', name: 'Arrow Down', category: 'toggle', trigger: 'click', component: ArrowDown, generateCode: generateArrowDownCode },
  { id: 'heart-like', name: 'Heart Like', category: 'action', trigger: 'click', component: HeartLike, generateCode: generateHeartCode },
  { id: 'search-icon', name: 'Search', category: 'navigation', trigger: 'click', component: SearchIcon, generateCode: generateSearchCode },
  { id: 'play-pause', name: 'Play / Pause', category: 'toggle', trigger: 'click', component: PlayPause, generateCode: generatePlayPauseCode },
  { id: 'download-icon', name: 'Download', category: 'action', trigger: 'hover', component: DownloadIcon, generateCode: generateDownloadIconCode },
  { id: 'copy-clipboard', name: 'Copy', category: 'action', trigger: 'click', component: CopyClipboard, generateCode: generateCopyCode },
  { id: 'trash-delete', name: 'Trash Delete', category: 'action', trigger: 'hover', component: TrashDelete, generateCode: generateTrashCode },
  { id: 'settings-gear', name: 'Settings Gear', category: 'action', trigger: 'hover', component: SettingsGear, generateCode: generateGearCode },
  { id: 'eye-visibility', name: 'Eye Toggle', category: 'toggle', trigger: 'click', component: EyeVisibility, generateCode: generateEyeCode },
  { id: 'notification-badge', name: 'Notification', category: 'feedback', trigger: 'auto-loop', component: NotificationBadge, generateCode: generateNotifCode },
  { id: 'loading-bar', name: 'Loading Bar', category: 'loading', trigger: 'auto-loop', component: LoadingBar, generateCode: generateLoadingBarCode },
];
