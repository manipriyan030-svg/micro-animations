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
import RefreshIcon, { generateRefreshCode } from './refresh-icon';
import PlusMinus, { generatePlusMinusCode } from './plus-minus';
import MenuDots, { generateMenuDotsCode } from './menu-dots';
import LockUnlock, { generateLockCode } from './lock-unlock';
import VolumeMute, { generateVolumeCode } from './volume-mute';
import WifiSignal, { generateWifiCode } from './wifi-signal';
import UploadIcon, { generateUploadCode } from './upload-icon';
import StarFavorite, { generateStarCode } from './star-favorite';
import BookmarkSave, { generateBookmarkCode } from './bookmark-save';
import SendIcon, { generateSendCode } from './send-icon';
import FilterIcon, { generateFilterCode } from './filter-icon';
import EditPencil, { generateEditCode } from './edit-pencil';

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
  { id: 'refresh-icon', name: 'Refresh', category: 'action', trigger: 'hover', component: RefreshIcon, generateCode: generateRefreshCode },
  { id: 'plus-minus', name: 'Plus / Minus', category: 'toggle', trigger: 'click', component: PlusMinus, generateCode: generatePlusMinusCode },
  { id: 'menu-dots', name: 'Menu Dots', category: 'navigation', trigger: 'click', component: MenuDots, generateCode: generateMenuDotsCode },
  { id: 'lock-unlock', name: 'Lock / Unlock', category: 'toggle', trigger: 'click', component: LockUnlock, generateCode: generateLockCode },
  { id: 'volume-mute', name: 'Volume / Mute', category: 'toggle', trigger: 'click', component: VolumeMute, generateCode: generateVolumeCode },
  { id: 'wifi-signal', name: 'WiFi Signal', category: 'feedback', trigger: 'auto-loop', component: WifiSignal, generateCode: generateWifiCode },
  { id: 'upload-icon', name: 'Upload', category: 'action', trigger: 'hover', component: UploadIcon, generateCode: generateUploadCode },
  { id: 'star-favorite', name: 'Star Favorite', category: 'action', trigger: 'click', component: StarFavorite, generateCode: generateStarCode },
  { id: 'bookmark-save', name: 'Bookmark Save', category: 'action', trigger: 'click', component: BookmarkSave, generateCode: generateBookmarkCode },
  { id: 'send-icon', name: 'Send', category: 'action', trigger: 'hover', component: SendIcon, generateCode: generateSendCode },
  { id: 'filter-icon', name: 'Filter', category: 'navigation', trigger: 'click', component: FilterIcon, generateCode: generateFilterCode },
  { id: 'edit-pencil', name: 'Edit Pencil', category: 'action', trigger: 'hover', component: EditPencil, generateCode: generateEditCode },
];
